"use client";

// Adapted from React Bits "Magnet" (reactbits.dev, MIT + Commons Clause).
// The child drifts toward the cursor when it gets close. Only listens on
// devices with a fine pointer, and stays still with reduced motion.

import { ReactNode, useEffect, useRef, useState } from "react";

export default function Magnet({
  children,
  padding = 60,
  strength = 4,
  className = "",
}: {
  children: ReactNode;
  padding?: number;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!canHover || reduced) return;

    const onMove = (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const { left, top, width, height } = el.getBoundingClientRect();
      const cx = left + width / 2;
      const cy = top + height / 2;
      const near =
        Math.abs(cx - e.clientX) < width / 2 + padding &&
        Math.abs(cy - e.clientY) < height / 2 + padding;
      setActive(near);
      setOffset(near ? { x: (e.clientX - cx) / strength, y: (e.clientY - cy) / strength } : { x: 0, y: 0 });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [padding, strength]);

  return (
    <div ref={ref} className={`relative inline-block ${className}`}>
      <div
        style={{
          transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
          transition: active ? "transform 0.3s ease-out" : "transform 0.5s ease-in-out",
          willChange: "transform",
        }}
      >
        {children}
      </div>
    </div>
  );
}
