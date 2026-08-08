import { Metadata } from "next";
import Image from "next/image";
import { bundles, products } from "@/lib/products";
import { formatPrice } from "@/lib/format";
import ProductCard from "@/components/ProductCard";
import AddBundleButton from "@/components/AddBundleButton";

export const metadata: Metadata = {
  title: "Tienda | Kaliver",
  description: "Charqui de vacuno Kaliver: Sal, Romero y Chimichurri.",
};

export default function ShopPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-maroon">
          Tienda
        </p>
        <h1 className="mt-2 font-display text-4xl font-black uppercase tracking-tight text-ink sm:text-5xl">
          Todo el catálogo
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-ink/60">
          Charqui de vacuno 100% carne. Sin azúcares agregados. 30g de
          proteína por porción.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>

      <div id="pack-degustacion" className="mt-16 scroll-mt-24 rounded-3xl bg-carbon p-8 text-cream-light sm:p-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div className="relative aspect-video overflow-hidden rounded-2xl bg-white/5 lg:aspect-square">
            <Image
              src={bundles[0].image}
              alt={bundles[0].name}
              fill
              className="object-contain p-6"
            />
          </div>
          <div>
            <span className="rounded-full bg-bronze px-3 py-1 text-xs font-bold uppercase tracking-wide text-ink">
              Ahorrá probando los 3
            </span>
            <h2 className="mt-4 font-display text-3xl font-black uppercase tracking-tight sm:text-4xl">
              {bundles[0].name}
            </h2>
            <p className="mt-3 text-cream-light/80">{bundles[0].description}</p>
            <div className="mt-6 flex items-center gap-3">
              <span className="font-display text-2xl font-bold">
                {formatPrice(bundles[0].price)}
              </span>
              {bundles[0].compareAtPrice && (
                <span className="text-cream-light/50 line-through">
                  {formatPrice(bundles[0].compareAtPrice)}
                </span>
              )}
            </div>
            <AddBundleButton />
          </div>
        </div>
      </div>
    </div>
  );
}
