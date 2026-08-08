import Link from "next/link";

export default async function CheckoutSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ orderId?: string; demo?: string }>;
}) {
  const { orderId, demo } = await searchParams;

  return (
    <div className="mx-auto flex max-w-xl flex-col items-center gap-4 px-4 py-24 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-carbon text-cream-light">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 6 9 17l-5-5" />
        </svg>
      </div>
      <h1 className="font-display text-3xl font-black uppercase tracking-tight text-ink">
        ¡Pedido confirmado!
      </h1>
      <p className="text-ink/60">
        Gracias por tu compra. Te vamos a contactar por WhatsApp o email para
        coordinar el envío.
      </p>
      {orderId && (
        <p className="rounded-full bg-cream px-4 py-1 text-sm font-medium text-ink/70">
          Orden #{orderId}
        </p>
      )}
      {demo === "1" && (
        <p className="max-w-md rounded-xl bg-bronze/20 px-4 py-3 text-sm text-ink/70">
          Este pedido se procesó en modo de demostración porque todavía no se
          configuraron las credenciales de Mercado Pago.
        </p>
      )}
      <Link
        href="/tienda"
        className="mt-4 rounded-full bg-maroon px-8 py-3 text-sm font-bold uppercase tracking-wide text-cream-light hover:bg-maroon-dark"
      >
        Seguir comprando
      </Link>
    </div>
  );
}
