import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SCROLL_CONFIG } from "../constants";

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimation = (selector, config = {}) => {
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

    elements.forEach((element) => {
      gsap.fromTo(element, fromVars, {
        scrollTrigger: {
          trigger: element,
          start,
          toggleActions,
        },
        ...toVars,
        duration,
        ease: "power3.out",
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [selector, start, toggleActions, duration, stagger, fromVars, toVars]);
};
