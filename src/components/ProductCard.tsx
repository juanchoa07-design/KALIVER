"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/products";
import { formatPrice } from "@/lib/format";
import { useCart } from "@/lib/cart-context";

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-black/10 bg-white transition hover:shadow-xl hover:shadow-black/5">
      <Link href={`/producto/${product.slug}`} className="relative block aspect-square overflow-hidden bg-cream">
        <Image
          src={product.image}
          alt={product.flavor}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 100vw"
        />
        <div className="absolute left-3 top-3 rounded-full bg-navy px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-cream-light">
          30g proteína
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-maroon">
          {product.name}
        </p>
        <Link href={`/producto/${product.slug}`}>
          <h3 className="mt-1 font-display text-xl font-bold text-ink hover:text-maroon">
            {product.flavor}
          </h3>
        </Link>
        <p className="mt-2 flex-1 text-sm text-ink/60">{product.tagline}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="font-display text-lg font-bold text-ink">
            {formatPrice(product.price)}
          </span>
          <button
            onClick={() =>
              addItem({
                slug: product.slug,
                name: product.name,
                flavor: product.flavor,
                price: product.price,
                image: product.image,
              })
            }
            className="rounded-full bg-maroon px-4 py-2 text-xs font-semibold uppercase tracking-wide text-cream-light transition hover:bg-maroon-dark"
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
}
