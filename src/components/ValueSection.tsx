import Link from "next/link";
import { ReactNode } from "react";
import Reveal from "@/components/Reveal";

// Line icons share one stroke so the four read as a set next to each other.
function Icon({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-14 w-14 shrink-0 text-bronze sm:h-16 sm:w-16"
      aria-hidden
    >
      {children}
    </svg>
  );
}

const ATTRIBUTES = [
  {
    title: "Origen animal",
    text: "Volvemos a lo esencial con alimentos de origen animal y un origen que podés reconocer.",
    icon: (
      // Steer head
      <Icon>
        <path d="M8 14c2 8 8 11 14 11M56 14c-2 8-8 11-14 11" />
        <path d="M22 25h20l2 13-5 14a4 4 0 0 1-3.7 2.5h-6.6A4 4 0 0 1 25 52l-5-14 2-13Z" />
        <path d="M20 29l-8 3M44 29l8 3" />
        <circle cx="27" cy="36" r="1.2" fill="currentColor" />
        <circle cx="37" cy="36" r="1.2" fill="currentColor" />
        <path d="M28 48h8" />
      </Icon>
    ),
  },
  {
    title: "Artesanal",
    text: "Cuidamos la elaboración de nuestros productos, desde la preparación hasta el envasado.",
    icon: (
      // Knife over a cutting board
      <Icon>
        <rect x="8" y="36" width="44" height="18" rx="4" />
        <circle cx="46" cy="45" r="2" />
        <path d="M14 30 44 10c4-2 8 1 6 5L26 34" />
        <path d="M14 30l-4 3 4 3 12-2" />
      </Icon>
    ),
  },
  {
    title: "Ingredientes reales",
    text: "Elegimos ingredientes que conocés y recetas claras, para que sepas lo que estás comiendo.",
    icon: (
      // Rosemary sprig and salt
      <Icon>
        <path d="M22 56V10" />
        <path d="M22 18c-5-1-8-4-9-8M22 18c5-1 8-4 9-8M22 30c-6-1-10-5-11-10M22 30c6-1 10-5 11-10M22 42c-6-1-11-5-12-11M22 42c6-1 11-5 12-11" />
        <path d="M40 56h16l-2-14H42l-2 14Z" />
        <path d="M44 42v-4a4 4 0 0 1 8 0v4" />
      </Icon>
    ),
  },
  {
    title: "Pensado para hoy",
    text: "Charqui y chips fáciles de llevar, para el trabajo, los viajes y los días en movimiento.",
    icon: (
      // Pouch on a winding path
      <Icon>
        <path d="M22 8h20l2 4v30a4 4 0 0 1-4 4H24a4 4 0 0 1-4-4V12l2-4Z" />
        <path d="M20 16h24M26 26h12M26 32h12" />
        <path d="M6 58c8-6 16-2 24-4s14-6 28-2" strokeDasharray="3 5" />
      </Icon>
    ),
  },
];

export default function ValueSection() {
  return (
    <section className="bg-carbon text-cream-light">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <Reveal className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-bronze">
              Por qué Kaliver
            </p>
            <h2 className="mt-3 font-condensed text-5xl font-extrabold uppercase leading-[0.95] sm:text-6xl">
              Comida real para la vida real
            </h2>
          </div>
          <p className="text-lg text-cream-light/80">
            En Kaliver hacemos alimentos de origen animal con ingredientes
            reales y elaboración artesanal. Charqui y chips en formatos
            prácticos, pensados para acompañarte hoy.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
          {ATTRIBUTES.map((attr, i) => (
            <Reveal key={attr.title} delay={i * 80} className="h-full">
              <div className="flex h-full items-start gap-5 rounded-2xl border border-cream-light/10 bg-carbon-light p-6">
                {attr.icon}
                <div>
                  <h3 className="font-condensed text-2xl font-bold uppercase leading-tight text-cream-light">
                    {attr.title}
                  </h3>
                  <p className="mt-1 text-cream-light/70">{attr.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 grid gap-6 border-t border-cream-light/10 pt-12 lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-12">
          <h3 className="font-condensed text-4xl font-extrabold uppercase leading-[0.95] sm:text-5xl">
            Mucho más que
            <br />
            <span className="font-display text-bronze">proteína</span>
          </h3>
          <p className="max-w-xl text-cream-light/80">
            La carne aporta más que proteína: también contiene vitamina B12,
            hierro y zinc. En Kaliver valoramos esa riqueza de los alimentos de
            origen animal y la acercamos a tu día a día en formatos prácticos.
          </p>
          <Link
            href="/nosotros"
            className="justify-self-start rounded-full border border-cream-light/30 px-7 py-3 font-condensed text-lg font-semibold uppercase tracking-wide transition hover:border-cream-light hover:bg-cream-light hover:text-carbon"
          >
            Conocé Kaliver
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
