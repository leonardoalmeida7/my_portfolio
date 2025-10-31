import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TYPEWRITER_CONFIG } from "../constants";

export const useTypewriter = (texts = TYPEWRITER_CONFIG.texts, onComplete) => {
  const textRef = useRef(null);
  const cursorRef = useRef(null);
  const indexRef = useRef(0);
  const isAnimatingRef = useRef(false);

  useEffect(() => {
    if (!textRef.current || !cursorRef.current || isAnimatingRef.current)
      return;

    isAnimatingRef.current = true;

    // O cursor agora usa animação CSS, apenas garantimos que ele esteja visível
    gsap.set(cursorRef.current, {
      opacity: 1,
      display: "inline-block",
    });

    const typeText = (text) => {
      if (!textRef.current || !isAnimatingRef.current) return Promise.resolve();

      return new Promise((resolve) => {
        textRef.current.innerHTML = "";
        const chars = text.split("");
        let currentIndex = 0;

        const typeNextChar = () => {
          if (!isAnimatingRef.current) {
            resolve();
            return;
          }

          if (currentIndex < chars.length && textRef.current) {
            const span = document.createElement("span");
            span.textContent = chars[currentIndex];
            span.style.opacity = 1;
            textRef.current.appendChild(span);
            currentIndex++;
            setTimeout(typeNextChar, 50); // 50ms entre cada caractere
          } else {
            resolve();
          }
        };

        typeNextChar();
      });
    };

    const deleteText = () => {
      if (!textRef.current || !isAnimatingRef.current) return Promise.resolve();

      return new Promise((resolve) => {
        const chars = Array.from(textRef.current.children);
        let currentIndex = chars.length - 1;

        const deleteNextChar = () => {
          if (!isAnimatingRef.current || !textRef.current) {
            resolve();
            return;
          }

          if (
            currentIndex >= 0 &&
            chars[currentIndex] &&
            chars[currentIndex].parentNode
          ) {
            textRef.current.removeChild(chars[currentIndex]);
            currentIndex--;
            setTimeout(deleteNextChar, 30); // 30ms entre cada remoção
          } else {
            resolve();
          }
        };

        deleteNextChar();
      });
    };

    const animate = async () => {
      const currentIndex = indexRef.current;
      const text = texts[currentIndex];

      await typeText(text);
      await new Promise((resolve) =>
        setTimeout(resolve, TYPEWRITER_CONFIG.pauseDuration)
      );

      if (currentIndex < texts.length - 1) {
        await deleteText();
        indexRef.current = currentIndex + 1;
        setTimeout(animate, 100);
      } else {
        // Mantém o cursor visível no final (a animação CSS continua)
        gsap.set(cursorRef.current, {
          opacity: 1,
          display: "inline-block",
        });
        if (onComplete) onComplete();
      }
    };

    animate();

    return () => {
      indexRef.current = 0;
      isAnimatingRef.current = false;
    };
  }, [texts, onComplete]);

  return { textRef, cursorRef };
};
