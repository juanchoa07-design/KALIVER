"use client";

import { useCart } from "@/lib/cart-context";
import { bundles } from "@/lib/products";

export default function AddBundleButton() {
  const { addItem } = useCart();
  const bundle = bundles[0];

  return (
    <button
      onClick={() =>
        addItem({
          slug: bundle.slug,
          name: bundle.name,
          flavor: "3 sabores: Sal, Romero y Chimichurri",
          price: bundle.price,
          image: bundle.image,
        })
      }
      className="mt-6 rounded-full bg-gold px-8 py-3 text-sm font-bold uppercase tracking-wide text-ink transition hover:bg-white"
    >
      Agregar pack al carrito
    </button>
  );
}
