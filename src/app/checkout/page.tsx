"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/format";

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
  });

  const update = (field: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => setForm((f) => ({ ...f, [field]: e.target.value }));

  if (items.length === 0) {
    return (
      <div className="mx-auto flex max-w-xl flex-col items-center gap-4 px-4 py-24 text-center">
        <h1 className="font-display text-3xl font-black uppercase tracking-tight text-ink">
          Tu carrito está vacío
        </h1>
        <Link
          href="/tienda"
          className="mt-2 rounded-full bg-maroon px-8 py-3 text-sm font-bold uppercase tracking-wide text-cream-light hover:bg-maroon-dark"
        >
          Ir a la tienda
        </Link>
      </div>
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: items.map((i) => ({
            name: i.name,
            flavor: i.flavor,
            price: i.price,
            quantity: i.quantity,
          })),
          customer: form,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "No se pudo procesar el pedido.");
      }

      const data = await res.json();

      if (data.mode === "live" && data.init_point) {
        window.location.href = data.init_point;
        return;
      }

      // Demo mode
      clearCart();
      router.push(`/checkout/exito?orderId=${data.orderId}&demo=1`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Ocurrió un error.");
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="mb-10 font-display text-4xl font-black uppercase tracking-tight text-ink">
        Checkout
      </h1>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
        <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-6">
          <div className="rounded-2xl border border-black/10 bg-white p-6">
            <h2 className="font-display text-lg font-bold text-ink">
              Datos de contacto y envío
            </h2>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="Nombre completo" value={form.name} onChange={update("name")} required className="sm:col-span-2" />
              <Field label="Email" type="email" value={form.email} onChange={update("email")} required />
              <Field label="Teléfono" type="tel" value={form.phone} onChange={update("phone")} required />
              <Field label="Dirección" value={form.address} onChange={update("address")} required className="sm:col-span-2" />
              <Field label="Ciudad" value={form.city} onChange={update("city")} required />
            </div>
          </div>

          {error && (
            <p className="rounded-xl bg-red/10 px-4 py-3 text-sm text-red">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-maroon py-3 text-sm font-bold uppercase tracking-wide text-cream-light transition hover:bg-maroon-dark disabled:opacity-60"
          >
            {loading ? "Procesando..." : "Pagar con Mercado Pago"}
          </button>
          <p className="text-center text-xs text-ink/50">
            Serás redirigido a Mercado Pago para completar el pago de forma segura.
          </p>
        </form>

        <div className="h-fit rounded-2xl border border-black/10 bg-white p-6">
          <h2 className="font-display text-lg font-bold text-ink">Tu pedido</h2>
          <ul className="mt-4 divide-y divide-black/10">
            {items.map((item) => (
              <li key={item.slug} className="flex items-center justify-between py-3 text-sm">
                <span className="text-ink/70">
                  {item.quantity}× {item.flavor}
                </span>
                <span className="font-semibold text-ink">
                  {formatPrice(item.price * item.quantity)}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-center justify-between border-t border-black/10 pt-4">
            <span className="font-display font-bold text-ink">Total</span>
            <span className="font-display text-xl font-bold text-ink">
              {formatPrice(subtotal)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <label className={`block text-sm ${className ?? ""}`}>
      <span className="mb-1 block font-medium text-ink/70">{label}</span>
      <input
        {...props}
        className="w-full rounded-lg border border-black/15 px-3 py-2 outline-none focus:border-maroon"
      />
    </label>
  );
}
