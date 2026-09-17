"use client";

// Adapted from React Bits "ScrollVelocity" (reactbits.dev, MIT + Commons Clause).
// A marquee that drifts on its own and speeds up (or reverses) with the page
// scroll. Pauses on hover/focus and renders static with reduced motion.

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "motion/react";
import { ReactNode, useLayoutEffect, useRef, useState } from "react";

function wrap(min: number, max: number, v: number) {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
}

export default function ScrollVelocity({
  children,
  velocity = 40,
  copies = 4,
  className = "",
}: {
  children: ReactNode;
  // Pixels per second when the page isn't scrolling.
  velocity?: number;
  copies?: number;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const smoothVelocity = useSpring(useVelocity(scrollY), { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 4], { clamp: false });

  const copyRef = useRef<HTMLDivElement>(null);
  const [copyWidth, setCopyWidth] = useState(0);
  const paused = useRef(false);
  const direction = useRef(1);

  useLayoutEffect(() => {
    const update = () => setCopyWidth(copyRef.current?.offsetWidth ?? 0);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const x = useTransform(baseX, (v) => (copyWidth ? `${wrap(-copyWidth, 0, v)}px` : "0px"));

  useAnimationFrame((_, delta) => {
    if (reduceMotion || paused.current) return;
    const factor = velocityFactor.get();
    if (factor < 0) direction.current = -1;
    else if (factor > 0) direction.current = 1;
    let moveBy = -direction.current * velocity * (delta / 1000);
    moveBy += moveBy * Math.abs(factor);
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div
      className={`overflow-hidden ${className}`}
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
      onFocus={() => (paused.current = true)}
      onBlur={() => (paused.current = false)}
    >
      <motion.div className="flex w-max whitespace-nowrap" style={{ x }}>
        {Array.from({ length: copies }, (_, i) => (
          <div key={i} ref={i === 0 ? copyRef : undefined} aria-hidden={i > 0} className="flex shrink-0">
            {children}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
