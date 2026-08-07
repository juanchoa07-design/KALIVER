"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Product } from "@/lib/products";
import { formatPrice } from "@/lib/format";
import { useCart } from "@/lib/cart-context";

export default function ProductDetail({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [activeImage, setActiveImage] = useState(product.gallery[0]);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
      <div>
        <div className="relative aspect-square overflow-hidden rounded-3xl bg-cream">
          <Image src={activeImage} alt={product.flavor} fill className="object-cover" priority />
        </div>
        {product.gallery.length > 1 && (
          <div className="mt-4 flex gap-3">
            {product.gallery.map((img) => (
              <button
                key={img}
                onClick={() => setActiveImage(img)}
                className={`relative h-20 w-20 overflow-hidden rounded-xl border-2 ${
                  activeImage === img ? "border-maroon" : "border-transparent"
                }`}
              >
                <Image src={img} alt="" fill className="object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>

      <div>
        <Link href="/tienda" className="text-sm font-medium text-ink/50 hover:text-maroon">
          ← Volver a la tienda
        </Link>
        <p className="mt-4 text-xs font-bold uppercase tracking-widest text-maroon">
          {product.name}
        </p>
        <h1 className="mt-1 font-display text-4xl font-black uppercase tracking-tight text-ink">
          {product.flavor}
        </h1>
        <p className="mt-3 text-lg text-ink/70">{product.tagline}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {product.badges.map((badge) => (
            <span
              key={badge}
              className="rounded-full bg-navy px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cream-light"
            >
              {badge}
            </span>
          ))}
        </div>

        <p className="mt-6 text-ink/70">{product.description}</p>

        <div className="mt-8 flex items-baseline gap-3">
          <span className="font-display text-3xl font-bold text-ink">
            {formatPrice(product.price)}
          </span>
          <span className="text-sm text-ink/50">
            envase de {product.weightGrams}g · equivale a {product.fresh_equivalent_g}g de carne fresca
          </span>
        </div>

        <div className="mt-6 flex items-center gap-4">
          <div className="flex items-center rounded-full border border-black/15">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="flex h-11 w-11 items-center justify-center text-lg text-ink/70 hover:text-maroon"
            >
              −
            </button>
            <span className="w-8 text-center font-semibold">{quantity}</span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="flex h-11 w-11 items-center justify-center text-lg text-ink/70 hover:text-maroon"
            >
              +
            </button>
          </div>
          <button
            onClick={() => {
              addItem(
                {
                  slug: product.slug,
                  name: product.name,
                  flavor: product.flavor,
                  price: product.price,
                  image: product.image,
                },
                quantity
              );
              setAdded(true);
              setTimeout(() => setAdded(false), 1800);
            }}
            className="flex-1 rounded-full bg-maroon py-3 text-sm font-bold uppercase tracking-wide text-cream-light transition hover:bg-maroon-dark"
          >
            {added ? "¡Agregado!" : "Agregar al carrito"}
          </button>
        </div>

        <div className="mt-12 rounded-2xl border border-black/10">
          <h3 className="border-b border-black/10 px-5 py-3 font-display text-sm font-bold uppercase tracking-wide text-ink">
            Información nutricional — {product.nutrition.servingSize}
          </h3>
          <div className="divide-y divide-black/5">
            {[
              ["Valor energético", `${product.nutrition.calories} kcal`],
              ["Carbohidratos", product.nutrition.carbs],
              ["Proteínas", product.nutrition.protein],
              ["Grasas totales", product.nutrition.totalFat],
              ["Grasas saturadas", product.nutrition.satFat],
              ["Grasas trans", product.nutrition.transFat],
              ["Fibra alimentaria", product.nutrition.fiber],
              ["Sodio", product.nutrition.sodium],
            ].map(([label, value]) => (
              <div key={label} className="flex items-center justify-between px-5 py-2.5 text-sm">
                <span className="text-ink/60">{label}</span>
                <span className="font-semibold text-ink">{value}</span>
              </div>
            ))}
          </div>
          <p className="border-t border-black/10 px-5 py-3 text-xs text-ink/50">
            <strong>Ingredientes:</strong> {product.ingredients}
          </p>
        </div>
      </div>
    </div>
  );
}
