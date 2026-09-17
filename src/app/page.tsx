import Image from "next/image";
import Link from "next/link";
import PacksSection from "@/components/PacksSection";
import ValueSection from "@/components/ValueSection";
import ReelsSection from "@/components/ReelsSection";
import ReviewsSection from "@/components/ReviewsSection";

const MARQUEE_ITEMS = [
  "100% CARNE",
  "SIN AZÚCARES AGREGADOS",
  "30G DE PROTEÍNA",
  "HECHO EN URUGUAY",
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-cream-light">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 top-1/2 h-[42rem] w-[42rem] -translate-y-1/2 rounded-full bg-cream/70 blur-3xl"
        />
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-6 px-4 pb-10 pt-6 sm:px-6 lg:min-h-[calc(100svh-4rem)] lg:grid-cols-[1.25fr_1fr] lg:gap-10 lg:px-8 lg:py-12">
          <div className="relative mx-auto h-[36svh] w-full max-w-md lg:order-last lg:h-[72svh] lg:max-w-none">
            <Image
              src="/images/pouch-sal-cutout.png"
              alt="Pouch de Charqui Kaliver vacuno con sal, 30 g de proteína"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-contain drop-shadow-[0_30px_40px_rgba(23,18,15,0.35)]"
            />
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-ink sm:text-sm">
              Charqui de carne vacuna
            </p>
            <h1 className="mt-3 font-condensed text-[clamp(2.25rem,10vw,4.5rem)] font-bold uppercase leading-[0.9] text-maroon lg:text-[clamp(3.5rem,5.6vw,5.25rem)]">
              Proteína auténtica
              <br />
              para la vida real
            </h1>
            <p className="mt-4 text-lg text-ink sm:text-xl">
              Tu snack de carne, listo para llevar.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Link
                href="/tienda"
                className="group inline-flex items-center gap-3 rounded-full bg-maroon px-8 py-3.5 font-condensed text-xl font-semibold text-cream-light transition hover:bg-maroon-dark"
              >
                Comprar charqui
                <span aria-hidden className="transition group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href="/nosotros"
                className="border-b border-ink pb-0.5 font-condensed text-xl font-semibold text-ink transition hover:border-maroon hover:text-maroon"
              >
                Conocé Kaliver
              </Link>
            </div>
            <p className="mt-10 text-xs font-semibold uppercase tracking-[0.3em] text-ink/70 lg:mt-16">
              Origen animal · Listo para llevar
            </p>
          </div>
        </div>
      </section>

      {/* Marquee — pauses on hover/focus, static with reduced motion */}
      <div className="marquee overflow-hidden bg-maroon py-3">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span
              key={i}
              aria-hidden={i >= MARQUEE_ITEMS.length}
              className="font-condensed text-lg font-semibold uppercase tracking-widest text-cream-light"
            >
              {item} <span className="text-bronze">&nbsp;•&nbsp;</span>
            </span>
          ))}
        </div>
      </div>

      <PacksSection />
      <ValueSection />
      <ReelsSection />
      <ReviewsSection />
    </div>
  );
}
