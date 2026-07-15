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
    triggerSelector,
    once = true,
  } = config;

  useEffect(() => {
    const elements = gsap.utils.toArray(selector);

    if (elements.length === 0) return;

    triggersRef.current.forEach((trigger) => trigger.kill());
    triggersRef.current = [];

    const triggerElement = triggerSelector
      ? elements[0].closest(triggerSelector)
      : elements[0];

    const animation = gsap.fromTo(
      elements,
      fromVars,
      {
        ...toVars,
        duration,
        stagger,
        ease: "power3.out",
        clearProps: "transform, opacity",
        scrollTrigger: {
          trigger: triggerElement,
          start,
          toggleActions,
          once,
        },
      }
    );

    if (animation.scrollTrigger) {
      triggersRef.current.push(animation.scrollTrigger);
    }

    return () => {
      triggersRef.current.forEach((trigger) => trigger.kill());
      triggersRef.current = [];
    };
  }, [selector, start, toggleActions, duration, stagger, fromVars, toVars, triggerSelector, once]);
};
