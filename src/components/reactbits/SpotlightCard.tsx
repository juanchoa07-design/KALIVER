"use client";

// Adapted from React Bits "SpotlightCard" (reactbits.dev, MIT + Commons Clause).
// A soft radial light follows the cursor across the card.

import { ReactNode, useRef, useState } from "react";

export default function SpotlightCard({
  children,
  className = "",
  color = "rgba(147, 112, 63, 0.28)",
}: {
  children: ReactNode;
  className?: string;
  color?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  return (
    <div
      ref={ref}
      onMouseMove={(e) => {
        const rect = ref.current?.getBoundingClientRect();
        if (rect) setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className={`relative overflow-hidden ${className}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 transition-opacity duration-500"
        style={{
          opacity: visible ? 1 : 0,
          background: `radial-gradient(circle at ${pos.x}px ${pos.y}px, ${color}, transparent 70%)`,
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}
