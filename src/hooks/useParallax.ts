import { useEffect, useState, useRef } from 'react';

/**
 * Custom hook for subtle, GPU-accelerated scroll parallax.
 * Uses compositor-only translate3d and respects prefers-reduced-motion.
 *
 * @param speed - Multiplier for scroll distance relative to viewport center.
 *                Positive values move with scroll, negative values move against scroll.
 *                Recommended range: -0.15 to 0.25 for subtle cinematic depth.
 */
export function useParallax(speed: number = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    // Check user preference for reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    let ticking = false;

    const calculateOffset = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Only calculate if within or immediately adjacent to viewport
      if (rect.bottom >= -200 && rect.top <= windowHeight + 200) {
        const elementCenter = rect.top + rect.height / 2;
        const screenCenter = windowHeight / 2;
        const delta = elementCenter - screenCenter;

        // Apply clamped subtle displacement
        const calculated = Math.round(delta * speed);
        setOffsetY(calculated);
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(calculateOffset);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    calculateOffset();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [speed]);

  return {
    ref,
    style: {
      transform: `translate3d(0, ${offsetY}px, 0)`,
      willChange: 'transform',
      transition: 'transform 0.08s ease-out'
    }
  };
}

/**
 * Hook for continuous global scroll offset (for background screentone/speedlines parallax)
 */
export function useGlobalScrollParallax(speed: number = 0.05) {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setOffsetY(Math.round(window.scrollY * speed));
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return offsetY;
}
