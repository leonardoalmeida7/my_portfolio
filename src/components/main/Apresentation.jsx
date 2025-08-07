import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';


const Apresentation = () => {
    const textRef = useRef(null);
  const cursorRef = useRef(null);
  const texts = [
    "Meu nome é Leonardo",
    "",
    "Desenvolvedor"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const cursorBlink = gsap.to(cursorRef.current, {
      opacity: 0,
      duration: 0.6,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    const typeText = (text) => {
      textRef.current.innerHTML = '';
      const chars = text.split('');
      chars.forEach((char) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.opacity = 0;
        textRef.current.appendChild(span);
      });

      return gsap.to(textRef.current.children, {
        opacity: 1,
        duration: 0.05,
        stagger: 0.05,
        ease: "power1.inOut",
      });
    };

    const deleteText = () => {
      const spans = Array.from(textRef.current.children);
      return gsap.to(spans.reverse(), {
        opacity: 0,
        duration: 0.03,
        stagger: 0.03,
        onComplete: () => {
          textRef.current.innerHTML = '';
        }
      });
    };

    const animate = async () => {
      const text = texts[index];
      await typeText(text);
      await new Promise(resolve => setTimeout(resolve, 2000)); // espera após digitar

      if (index < texts.length - 1) {
        await deleteText();
        setIndex((prev) => prev + 1);
      } else {
        cursorBlink.kill(); // para o cursor no fim
        gsap.set(cursorRef.current, { opacity: 1 }); // deixa o cursor visível no final
      }
    };

    animate();
  }, [index]);
  return (
    <div className='apresentation'>
      <div className='lights-bg'>
        <div className='light-1'></div>
      </div>
        <h1 className='text-effect' ref={textRef}></h1>
        <span className='job'>Full Stack</span>
        <p className='text'>
          Criando experiências digitais incríveis com código limpo e design elegante. Especializado em tecnologias modernas.
        </p>
        <div className="buttons">
          <button type="button" className='btn-projects'>Ver Projetos</button>
          <button type="button" className='btn-contact'>Entrar em Contato</button>
        </div>
        <div className="mouse-scroll">
          <div className="mouse">
            <div className="scroll"></div>
          </div>
        </div>
    </div>
  )
}

export default Apresentation