import { useEffect, useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';

/**
 * Custom hook for parallax scroll effects
 * Uses Framer Motion's useScroll and useTransform
 * 
 * @param {number} offset - Parallax intensity (default: 50)
 * @param {boolean} reverse - Reverse parallax direction (default: false)
 * @returns {Object} - { ref, y } - Attach ref to element, use y for transform
 */
export const useParallax = (offset = 50, reverse = false) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const multiplier = reverse ? -1 : 1;
  const y = useTransform(scrollYProgress, [0, 1], [0, offset * multiplier]);

  return { ref, y };
};

/**
 * Custom hook for scroll-triggered animations
 * Returns opacity and scale based on scroll position
 * 
 * @returns {Object} - { ref, opacity, scale }
 */
export const useScrollReveal = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  return { ref, opacity, scale };
};

/**
 * Custom hook for horizontal scroll offset
 * Useful for background elements that shift on scroll
 * 
 * @param {number} distance - Horizontal offset distance
 * @returns {Object} - { ref, x }
 */
export const useHorizontalScroll = (distance = 100) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, distance]);

  return { ref, x };
};

export default useParallax;
