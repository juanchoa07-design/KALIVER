"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/format";

export default function CartPage() {
  const { items, updateQuantity, removeItem, subtotal } = useCart();

  if (items.length === 0) {
    return (
      <div className="mx-auto flex max-w-xl flex-col items-center gap-4 px-4 py-24 text-center">
        <h1 className="font-display text-3xl font-black uppercase tracking-tight text-ink">
          Tu carrito está vacío
        </h1>
        <p className="text-ink/60">Todavía no agregaste ningún charqui.</p>
        <Link
          href="/tienda"
          className="mt-2 rounded-full bg-maroon px-8 py-3 text-sm font-bold uppercase tracking-wide text-cream-light hover:bg-maroon-dark"
        >
          Ir a la tienda
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="mb-10 font-display text-4xl font-black uppercase tracking-tight text-ink">
        Tu carrito
      </h1>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ul className="divide-y divide-black/10 rounded-2xl border border-black/10 bg-white">
            {items.map((item) => (
              <li key={item.slug} className="flex gap-4 p-5">
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-cream">
                  <Image src={item.image} alt={item.flavor} fill className="object-cover" />
                </div>
                <div className="flex flex-1 flex-col justify-between">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-display font-bold text-ink">{item.name}</p>
                      <p className="text-sm text-ink/60">{item.flavor}</p>
                    </div>
                    <button
                      onClick={() => removeItem(item.slug)}
                      className="text-sm text-ink/40 hover:text-red"
                    >
                      Quitar
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 rounded-full border border-black/15">
                      <button
                        onClick={() => updateQuantity(item.slug, item.quantity - 1)}
                        className="flex h-8 w-8 items-center justify-center text-ink/70 hover:text-maroon"
                      >
                        −
                      </button>
                      <span className="w-5 text-center text-sm">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.slug, item.quantity + 1)}
                        className="flex h-8 w-8 items-center justify-center text-ink/70 hover:text-maroon"
                      >
                        +
                      </button>
                    </div>
                    <span className="font-display font-bold text-ink">
                      {formatPrice(item.price * item.quantity)}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <Link href="/tienda" className="mt-4 inline-block text-sm font-medium text-maroon hover:underline">
            ← Seguir comprando
          </Link>
        </div>

        <div className="h-fit rounded-2xl border border-black/10 bg-white p-6">
          <h2 className="font-display text-lg font-bold text-ink">Resumen</h2>
          <div className="mt-4 flex items-center justify-between text-sm">
            <span className="text-ink/60">Subtotal</span>
            <span className="font-semibold text-ink">{formatPrice(subtotal)}</span>
          </div>
          <div className="mt-2 flex items-center justify-between text-sm">
            <span className="text-ink/60">Envío</span>
            <span className="text-ink/60">Se calcula en el checkout</span>
          </div>
          <div className="mt-4 flex items-center justify-between border-t border-black/10 pt-4">
            <span className="font-display font-bold text-ink">Total</span>
            <span className="font-display text-xl font-bold text-ink">
              {formatPrice(subtotal)}
            </span>
          </div>
          <Link
            href="/checkout"
            className="mt-6 block w-full rounded-full bg-maroon py-3 text-center text-sm font-bold uppercase tracking-wide text-cream-light hover:bg-maroon-dark"
          >
            Finalizar compra
          </Link>
        </div>
      </div>
    </div>
  );
}
