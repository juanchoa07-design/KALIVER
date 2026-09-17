"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type Reel = {
  poster: string;
  // Accessible name only — never rendered as a visible title.
  label: string;
  // Vertical 9:16 mp4 in /public/videos. Reels without a src show the cover
  // but can't be played yet.
  src?: string;
  captions?: string;
};

// Placeholder covers until the real process footage is available.
const REELS: Reel[] = [
  { poster: "/images/product-sal.jpg", label: "Selección y preparación de ingredientes" },
  { poster: "/images/product-romero.jpg", label: "Elaboración del charqui" },
  { poster: "/images/product-chimichurri.jpg", label: "Elaboración de chips" },
  { poster: "/images/product-back-label.jpg", label: "Envasado" },
];

function ReelPlayer({ reel, onClose }: { reel: Reel; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={reel.label}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
      onClick={onClose}
    >
      <div
        className="relative aspect-[9/16] h-full max-h-[85svh] max-w-full overflow-hidden rounded-2xl bg-black"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Autoplays muted; the native controls handle pause and unmute. */}
        <video
          src={reel.src}
          poster={reel.poster}
          className="h-full w-full object-cover"
          autoPlay
          muted
          playsInline
          controls
        >
          {reel.captions && (
            <track kind="captions" src={reel.captions} srcLang="es" label="Español" default />
          )}
        </video>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Cerrar video"
          className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default function ReelsSection() {
  const [active, setActive] = useState<Reel | null>(null);
  const close = useCallback(() => setActive(null), []);

  return (
    <section aria-label="Videos de elaboración" className="bg-cream-light py-14 sm:py-16">
      <div className="no-scrollbar mx-auto flex max-w-7xl snap-x snap-mandatory gap-4 overflow-x-auto px-4 sm:px-6 lg:grid lg:grid-cols-4 lg:overflow-visible lg:px-8">
        {REELS.map((reel) => {
          const playable = Boolean(reel.src);
          return (
            <button
              key={reel.label}
              type="button"
              disabled={!playable}
              onClick={() => setActive(reel)}
              aria-label={playable ? `Reproducir: ${reel.label}` : `${reel.label} (próximamente)`}
              className="group relative aspect-[9/16] w-[70vw] max-w-72 shrink-0 snap-center overflow-hidden rounded-2xl bg-carbon sm:w-[40vw] lg:w-auto lg:max-w-none disabled:cursor-default"
            >
              <Image
                src={reel.poster}
                alt=""
                fill
                sizes="(min-width: 1024px) 25vw, 70vw"
                className="object-cover transition duration-500 group-enabled:group-hover:scale-105"
              />
              {playable && (
                <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-cream-light/90 text-maroon shadow-lg transition group-hover:scale-110">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              )}
            </button>
          );
        })}
      </div>

      {active && <ReelPlayer reel={active} onClose={close} />}
    </section>
  );
}
