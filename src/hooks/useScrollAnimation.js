import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SCROLL_CONFIG } from "../constants";

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimation = (selector, config = {}) => {
  const triggersRef = useRef([]);

  const {
    start = SCROLL_CONFIG.triggerStart,
    toggleActions = SCROLL_CONFIG.toggleActions,
    duration = SCROLL_CONFIG.animationDuration,
    stagger = SCROLL_CONFIG.staggerDelay,
    fromVars = { opacity: 0, y: 50 },
    toVars = { opacity: 1, y: 0 },
  } = config;

  useEffect(() => {
    const elements = gsap.utils.toArray(selector);

    if (elements.length === 0) return;

    // Limpar triggers anteriores
    triggersRef.current.forEach((trigger) => trigger.kill());
    triggersRef.current = [];

    elements.forEach((element) => {
      const animation = gsap.fromTo(element, fromVars, {
        scrollTrigger: {
          trigger: element,
          start,
          toggleActions,
          once: true, // Executar apenas uma vez
        },
        ...toVars,
        duration,
        ease: "power3.out",
      });

      if (animation.scrollTrigger) {
        triggersRef.current.push(animation.scrollTrigger);
      }
    });

    return () => {
      triggersRef.current.forEach((trigger) => trigger.kill());
      triggersRef.current = [];
    };
  }, [selector]);
};
