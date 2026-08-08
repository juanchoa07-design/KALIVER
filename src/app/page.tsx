import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

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
      <section className="relative overflow-hidden bg-ink text-cream-light">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="/images/product-sal-hero.png"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/40" />
        <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 py-24 text-center sm:px-6 lg:py-32">
          <span className="rounded-full border border-bronze/40 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-bronze">
            Sin azúcares · 100% carne
          </span>
          <h1 className="mt-6 max-w-3xl font-display text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-7xl">
            Proteína real,
            <br />
            sin excusas.
          </h1>
          <p className="mt-6 max-w-xl text-base text-cream-light/80 sm:text-lg">
            Charqui de vacuno artesanal con 30g de proteína por porción. Carne
            magra, marinada y deshidratada lentamente. Sin azúcares, sin
            relleno, sin vueltas.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/tienda"
              className="rounded-full bg-maroon px-8 py-3 text-sm font-bold uppercase tracking-wide text-cream-light transition hover:bg-red"
            >
              Comprar ahora
            </Link>
            <Link
              href="/nosotros"
              className="rounded-full border border-cream-light/30 px-8 py-3 text-sm font-bold uppercase tracking-wide text-cream-light transition hover:border-cream-light"
            >
              Nuestra historia
            </Link>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden border-y border-black/10 bg-maroon py-3">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span
              key={i}
              className="font-display text-sm font-bold uppercase tracking-widest text-cream-light"
            >
              {item} <span className="text-bronze">&nbsp;•&nbsp;</span>
            </span>
          ))}
        </div>
      </div>

      {/* Products */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-maroon">
              Nuestros sabores
            </p>
            <h2 className="mt-2 font-display text-3xl font-black uppercase tracking-tight text-ink sm:text-4xl">
              Elegí tu Kaliver
            </h2>
          </div>
          <Link
            href="/tienda"
            className="text-sm font-semibold uppercase tracking-wide text-maroon underline-offset-4 hover:underline"
          >
            Ver toda la tienda →
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="bg-carbon text-cream-light">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            <Image
              src="/images/product-back-label.jpg"
              alt="Charqui Kaliver"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-bronze">
              ¿Qué es el charqui?
            </p>
            <h2 className="mt-2 font-display text-3xl font-black uppercase tracking-tight sm:text-4xl">
              Mucho más que proteína
            </h2>
            <p className="mt-5 text-cream-light/80">
              El charqui es carne deshidratada, lo que permite conservarla por
              largos períodos sin necesidad de refrigeración. Además de
              proteína, la carne aporta vitamina B12, hierro, zinc, potasio y
              magnesio: nutrientes clave para el metabolismo energético y el
              funcionamiento muscular y nervioso.
            </p>
            <ol className="mt-6 space-y-4">
              {[
                "Seleccionamos cortes magros de vacuno.",
                "Marinamos la carne para realzar el sabor y mejorar la conservación.",
                "Deshidratamos lentamente para mejorar la textura y conservar su sabor.",
              ].map((step, i) => (
                <li key={i} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-bronze font-display font-bold text-ink">
                    {i + 1}
                  </span>
                  <p className="pt-1 text-sm text-cream-light/80">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Nutrition */}
      <section id="nutricion" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-maroon">
              Información nutricional
            </p>
            <h2 className="mt-2 font-display text-3xl font-black uppercase tracking-tight text-ink sm:text-4xl">
              Lo que le das a tu cuerpo
            </h2>
            <p className="mt-4 text-ink/70">
              Cada porción de 50g equivale a 150g de carne fresca. Sin rellenos,
              sin azúcares agregados: la etiqueta dice exactamente lo que
              comés.
            </p>
            <div className="mt-8 overflow-hidden rounded-2xl border border-black/10">
              {[
                ["Valor energético", "181 kcal"],
                ["Carbohidratos", "2.2 g"],
                ["Proteínas", "32 g"],
                ["Grasas totales", "4.6 g"],
                ["Grasas saturadas", "1.7 g"],
                ["Fibra alimentaria", "0 g"],
                ["Sodio", "1200 mg"],
              ].map(([label, value], i) => (
                <div
                  key={label}
                  className={`flex items-center justify-between px-5 py-3 text-sm ${
                    i % 2 === 0 ? "bg-white" : "bg-cream"
                  }`}
                >
                  <span className="text-ink/70">{label}</span>
                  <span className="font-semibold text-ink">{value}</span>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-ink/50">
              Porción de 50g (1 envase). Ingredientes: carne vacuna, miel, sal,
              vinagre de manzana, jugo de limón y especias.
            </p>
          </div>
          <div className="relative aspect-square overflow-hidden rounded-3xl bg-cream">
            <Image
              src="/images/product-romero.jpg"
              alt="Charqui Kaliver con romero"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-maroon">
        <Image
          src="/images/texture-3.jpg"
          alt=""
          fill
          className="object-cover opacity-15 mix-blend-luminosity"
        />
        <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-black uppercase tracking-tight text-cream-light sm:text-4xl">
            Tu próximo snack te espera
          </h2>
          <p className="max-w-xl text-cream-light/80">
            Pedilo hoy y recibilo en la puerta de tu casa. Envíos a todo
            Uruguay.
          </p>
          <Link
            href="/tienda"
            className="rounded-full bg-cream-light px-8 py-3 text-sm font-bold uppercase tracking-wide text-maroon transition hover:bg-white"
          >
            Ir a la tienda
          </Link>
        </div>
      </section>
    </div>
  );
}
