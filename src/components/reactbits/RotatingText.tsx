"use client";

// Adapted from React Bits "RotatingText" (reactbits.dev, MIT + Commons Clause).
// Trimmed to what the hero uses: auto-rotating words, split into letters that
// spring in from below with a stagger.

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

function splitGraphemes(text: string) {
  if (typeof Intl !== "undefined" && Intl.Segmenter) {
    const segmenter = new Intl.Segmenter("es", { granularity: "grapheme" });
    return Array.from(segmenter.segment(text), (s) => s.segment);
  }
  return Array.from(text);
}

export default function RotatingText({
  texts,
  interval = 2600,
  stagger = 0.025,
  className = "",
}: {
  texts: string[];
  interval?: number;
  stagger?: number;
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % texts.length), interval);
    return () => clearInterval(id);
  }, [texts.length, interval, reduceMotion]);

  const letters = splitGraphemes(texts[index]);

  return (
    <motion.span layout className={`relative inline-flex overflow-hidden pb-[0.08em] ${className}`}>
      <span className="sr-only">{texts[index]}</span>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span key={index} className="inline-flex" aria-hidden>
          {letters.map((char, i) => (
            <motion.span
              key={i}
              className="inline-block"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-120%", opacity: 0 }}
              transition={{ type: "spring", damping: 26, stiffness: 320, delay: i * stagger }}
            >
              {char}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </motion.span>
  );
}
