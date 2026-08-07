"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/format";

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, subtotal } =
    useCart();

  return (
    <>
      <div
        className={`fixed inset-0 z-50 bg-black/50 transition-opacity ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeCart}
      />
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-cream-light shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between border-b border-black/10 px-6 py-4">
          <h2 className="font-display text-lg font-bold text-ink">Tu carrito</h2>
          <button
            onClick={closeCart}
            className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-black/5"
            aria-label="Cerrar carrito"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-3 text-center text-ink/60">
              <p>Tu carrito está vacío.</p>
              <Link
                href="/tienda"
                onClick={closeCart}
                className="rounded-full bg-maroon px-5 py-2 text-sm font-semibold text-cream-light hover:bg-maroon-dark"
              >
                Ir a la tienda
              </Link>
            </div>
          ) : (
            <ul className="flex flex-col gap-4">
              {items.map((item) => (
                <li key={item.slug} className="flex gap-3">
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-white">
                    <Image src={item.image} alt={item.flavor} fill className="object-cover" />
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <p className="text-sm font-semibold text-ink">{item.name}</p>
                      <p className="text-xs text-ink/60">{item.flavor}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 rounded-full border border-black/15">
                        <button
                          onClick={() => updateQuantity(item.slug, item.quantity - 1)}
                          className="flex h-7 w-7 items-center justify-center text-ink/70 hover:text-maroon"
                        >
                          −
                        </button>
                        <span className="w-4 text-center text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.slug, item.quantity + 1)}
                          className="flex h-7 w-7 items-center justify-center text-ink/70 hover:text-maroon"
                        >
                          +
                        </button>
                      </div>
                      <span className="text-sm font-semibold text-ink">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.slug)}
                    className="self-start text-ink/40 hover:text-red"
                    aria-label={`Quitar ${item.flavor}`}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 6 6 18M6 6l12 12" />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-black/10 px-6 py-5">
            <div className="mb-4 flex items-center justify-between text-sm">
              <span className="text-ink/60">Subtotal</span>
              <span className="font-display text-lg font-bold text-ink">
                {formatPrice(subtotal)}
              </span>
            </div>
            <Link
              href="/checkout"
              onClick={closeCart}
              className="block w-full rounded-full bg-maroon py-3 text-center text-sm font-semibold uppercase tracking-wide text-cream-light transition hover:bg-maroon-dark"
            >
              Finalizar compra
            </Link>
            <p className="mt-2 text-center text-xs text-ink/50">
              Envío calculado en el checkout
            </p>
          </div>
        )}
      </aside>
    </>
  );
}
