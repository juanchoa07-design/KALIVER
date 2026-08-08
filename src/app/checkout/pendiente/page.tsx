import Link from "next/link";

export default function CheckoutPendingPage() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center gap-4 px-4 py-24 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-bronze text-ink">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      </div>
      <h1 className="font-display text-3xl font-black uppercase tracking-tight text-ink">
        Pago pendiente
      </h1>
      <p className="text-ink/60">
        Tu pago está siendo procesado. Te avisaremos por email en cuanto se
        confirme.
      </p>
      <Link
        href="/tienda"
        className="mt-4 rounded-full bg-maroon px-8 py-3 text-sm font-bold uppercase tracking-wide text-cream-light hover:bg-maroon-dark"
      >
        Volver a la tienda
      </Link>
    </div>
  );
}
