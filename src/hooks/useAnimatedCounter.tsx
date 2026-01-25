import { useState, useEffect } from "react";
import { useInView } from "framer-motion";

interface UseAnimatedCounterProps {
  target: number;
  duration?: number;
  ref: React.RefObject<Element>;
}

export function useAnimatedCounter({ target, duration = 2000, ref }: UseAnimatedCounterProps): number {
  const [count, setCount] = useState(0);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function: easeOutExpo
      const easeOutExpo = 1 - Math.pow(2, -10 * progress);
      const currentValue = Math.floor(target * easeOutExpo);
      
      setCount(currentValue);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isInView, target, duration]);

  return count;
}
