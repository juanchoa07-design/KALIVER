"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  return (
    <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <div className="text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-maroon">
          Contacto
        </p>
        <h1 className="mt-2 font-display text-4xl font-black uppercase tracking-tight text-ink">
          Hablemos
        </h1>
        <p className="mt-4 text-ink/60">
          ¿Preguntas sobre un pedido, ventas al por mayor o alianzas? Escribinos.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2">
        <div className="space-y-4">
          <a
            href="https://wa.me/59899648628"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-2xl border border-black/10 bg-white p-5 transition hover:border-maroon"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy text-cream-light">
              📱
            </span>
            <div>
              <p className="font-semibold text-ink">WhatsApp</p>
              <p className="text-sm text-ink/60">+598 99 648 628</p>
            </div>
          </a>
          <a
            href="https://instagram.com/kaliver.uy"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-2xl border border-black/10 bg-white p-5 transition hover:border-maroon"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy text-cream-light">
              📷
            </span>
            <div>
              <p className="font-semibold text-ink">Instagram</p>
              <p className="text-sm text-ink/60">@kaliver.uy</p>
            </div>
          </a>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setStatus("sent");
          }}
          className="space-y-4 rounded-2xl border border-black/10 bg-white p-6"
        >
          <label className="block text-sm">
            <span className="mb-1 block font-medium text-ink/70">Nombre</span>
            <input required className="w-full rounded-lg border border-black/15 px-3 py-2 outline-none focus:border-maroon" />
          </label>
          <label className="block text-sm">
            <span className="mb-1 block font-medium text-ink/70">Email</span>
            <input type="email" required className="w-full rounded-lg border border-black/15 px-3 py-2 outline-none focus:border-maroon" />
          </label>
          <label className="block text-sm">
            <span className="mb-1 block font-medium text-ink/70">Mensaje</span>
            <textarea required rows={4} className="w-full rounded-lg border border-black/15 px-3 py-2 outline-none focus:border-maroon" />
          </label>
          <button
            type="submit"
            className="w-full rounded-full bg-maroon py-3 text-sm font-bold uppercase tracking-wide text-cream-light hover:bg-maroon-dark"
          >
            {status === "sent" ? "¡Mensaje enviado!" : "Enviar mensaje"}
          </button>
        </form>
      </div>
    </div>
  );
}
