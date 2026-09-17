"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/format";
import { isPackReady, Pack, packs } from "@/lib/products";

const PENDING = "A definir";

function PackCard({ pack }: { pack: Pack }) {
  const { addItem } = useCart();
  const ready = isPackReady(pack);

  const details = [
    ["Unidades", pack.units ?? PENDING],
    ["Charqui", pack.charquiUnits ?? PENDING],
    ["Chips", pack.chipsUnits ?? PENDING],
    ["Sabores", pack.flavors?.join(", ") ?? PENDING],
  ] as const;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-ink/10 bg-cream-light">
      <div className="relative aspect-[4/3] overflow-hidden bg-carbon">
        <Image
          src={pack.image}
          alt={`${pack.name} de Kaliver`}
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-condensed text-3xl font-extrabold uppercase leading-none text-maroon">
          {pack.name}
        </h3>
        <p className="mt-2 text-sm text-ink/70">{pack.description}</p>

        <dl className="mt-4 divide-y divide-ink/10 border-y border-ink/10 text-sm">
          {details.map(([label, value]) => (
            <div key={label} className="flex justify-between gap-4 py-2">
              <dt className="text-ink/60">{label}</dt>
              <dd className="text-right font-medium text-ink">{value}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-4 font-condensed text-2xl font-bold text-ink">
          {pack.price !== null ? formatPrice(pack.price) : "Precio a definir"}
        </p>

        <div className="mt-auto flex flex-col gap-2 pt-5">
          <button
            type="button"
            disabled={!ready}
            onClick={() => {
              if (!isPackReady(pack)) return;
              addItem({
                slug: `pack-${pack.slug}-estandar`,
                name: pack.name,
                flavor: `Mix estándar: ${pack.charquiUnits} charqui + ${pack.chipsUnits} chips`,
                price: pack.price,
                image: pack.image,
              });
            }}
            className="rounded-full bg-maroon px-5 py-3 font-condensed text-lg font-semibold uppercase tracking-wide text-cream-light transition hover:bg-maroon-dark disabled:cursor-not-allowed disabled:opacity-40"
          >
            Agregar al carrito
          </button>
          <Link
            href={`/tienda?pack=${pack.slug}`}
            className="rounded-full border border-ink/20 px-5 py-3 text-center font-condensed text-lg font-semibold uppercase tracking-wide text-ink transition hover:border-maroon hover:text-maroon"
          >
            Elegir sabores
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function PacksSection() {
  return (
    <section id="packs" className="bg-cream py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <h2 className="font-condensed text-5xl font-extrabold uppercase leading-[0.95] text-maroon sm:text-6xl">
            Elegí tu pack Kaliver
          </h2>
          <p className="mt-3 text-lg text-ink/80">
            Charqui y chips para probar, para tu semana o para tener siempre a
            mano.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {packs.map((pack, i) => (
            <Reveal key={pack.slug} delay={i * 80} className="h-full">
              <PackCard pack={pack} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
