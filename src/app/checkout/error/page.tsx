import Link from "next/link";

export default function CheckoutErrorPage() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center gap-4 px-4 py-24 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red text-cream-light">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 6 6 18M6 6l12 12" />
        </svg>
      </div>
      <h1 className="font-display text-3xl font-black uppercase tracking-tight text-ink">
        Hubo un problema con el pago
      </h1>
      <p className="text-ink/60">
        No se pudo procesar tu pago. Podés intentar de nuevo o escribirnos por
        WhatsApp si el problema persiste.
      </p>
      <div className="mt-4 flex gap-3">
        <Link
          href="/checkout"
          className="rounded-full bg-maroon px-8 py-3 text-sm font-bold uppercase tracking-wide text-cream-light hover:bg-maroon-dark"
        >
          Reintentar
        </Link>
        <a
          href="https://wa.me/59899648628"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-black/15 px-8 py-3 text-sm font-bold uppercase tracking-wide text-ink hover:border-maroon hover:text-maroon"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}
