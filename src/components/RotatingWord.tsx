"use client";

import { useEffect, useState } from "react";

const WORDS = ["real", "ancestral", "funcional", "auténtica"];

export default function RotatingWord() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % WORDS.length);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="inline-grid text-bronze">
      <span
        key={index}
        className="col-start-1 row-start-1 animate-word-cycle"
      >
        {WORDS[index]}
      </span>
      {/* Reserves width for the longest word so the layout doesn't jump */}
      <span aria-hidden className="invisible col-start-1 row-start-1">
        {WORDS.reduce((a, b) => (a.length > b.length ? a : b))}
      </span>
    </span>
  );
}
