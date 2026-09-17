import Image from "next/image";
import Link from "next/link";
import RotatingWord from "@/components/RotatingWord";
import PacksSection from "@/components/PacksSection";
import ValueSection from "@/components/ValueSection";
import ReelsSection from "@/components/ReelsSection";
import ReviewsSection from "@/components/ReviewsSection";

const HERO_IMAGE = "/images/hero-pouch-studio.jpg";

const MARQUEE_ITEMS = [
  "100% CARNE",
  "SIN AZÚCARES AGREGADOS",
  "30G DE PROTEÍNA",
  "HECHO EN URUGUAY",
];

export default function Home() {
  return (
    <div>
      {/* Hero — full-bleed scene photo, copy over the dark left side.
          To use a lifestyle photo, swap HERO_IMAGE; keep the product on the
          right half so the gradient never covers the label. */}
      <section className="relative isolate overflow-hidden bg-carbon text-cream-light">
        <div className="relative h-[46svh] w-full lg:absolute lg:inset-y-0 lg:left-auto lg:right-0 lg:h-auto lg:w-[62%]">
          <Image
            src={HERO_IMAGE}
            alt="Pouch de Charqui Kaliver vacuno con sal, 30 g de proteína"
            fill
            priority
            sizes="(min-width: 1024px) 62vw, 100vw"
            className="object-cover object-center"
          />
          {/* Blend the photo into the solid background behind the copy */}
          <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/10 to-transparent lg:bg-gradient-to-r lg:from-carbon lg:via-carbon/20" />
          <div className="absolute inset-0 hidden bg-gradient-to-t from-carbon/60 via-transparent to-transparent lg:block" />
        </div>

        <div className="relative mx-auto flex max-w-7xl flex-col justify-center px-4 pb-12 sm:px-6 lg:min-h-[calc(100svh-4rem)] lg:px-8 lg:py-16">
          <div className="-mt-10 lg:mt-0 lg:max-w-[54%]">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cream-light/85 sm:text-sm">
              Charqui de carne vacuna
            </p>
            <h1 className="mt-3 font-condensed text-[clamp(2.4rem,10.5vw,4.75rem)] font-bold uppercase leading-[0.88] text-cream-light lg:text-[clamp(3.5rem,5.2vw,5.25rem)]">
              Proteína <RotatingWord className="text-cream" />
              <br />
              para la vida real
            </h1>
            <p className="mt-4 text-lg text-cream-light/90 sm:text-2xl">
              Tu snack de carne, listo para llevar.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Link
                href="/tienda"
                className="group inline-flex items-center gap-3 rounded-full bg-cream-light px-8 py-3.5 font-condensed text-xl font-bold text-maroon transition hover:bg-white"
              >
                Comprar charqui
                <span aria-hidden className="transition group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href="/nosotros"
                className="border-b border-cream-light/80 pb-0.5 font-condensed text-xl font-semibold text-cream-light transition hover:border-bronze hover:text-bronze"
              >
                Conocé Kaliver
              </Link>
            </div>
          </div>
          <p className="mt-10 text-[11px] font-semibold uppercase tracking-[0.25em] text-cream-light/70 sm:text-xs sm:tracking-[0.35em] lg:absolute lg:bottom-10 lg:mt-0">
            Origen animal · Listo para llevar
          </p>
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
