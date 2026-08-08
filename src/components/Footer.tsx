import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-24 bg-ink text-cream-light">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <Image
                src="/images/logo-mark-cream.png"
                alt="Kaliver"
                width={32}
                height={32}
                className="h-8 w-8 object-contain"
              />
              <span className="font-display text-lg font-black tracking-tight">
                KALIVER
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-cream-light/70">
              Charqui de vacuno 100% carne, sin azúcares agregados. Snack de
              proteína real para gente real. Hecho en Uruguay.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wide text-bronze">
              Tienda
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-cream-light/80">
              <li><Link href="/tienda" className="hover:text-white">Todos los sabores</Link></li>
              <li><Link href="/tienda#pack-degustacion" className="hover:text-white">Pack degustación</Link></li>
              <li><Link href="/nosotros" className="hover:text-white">Nuestra historia</Link></li>
              <li><Link href="/#nutricion" className="hover:text-white">Información nutricional</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wide text-bronze">
              Contacto
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-cream-light/80">
              <li>
                <a href="https://wa.me/59899648628" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  WhatsApp +598 99 648 628
                </a>
              </li>
              <li>
                <a href="https://instagram.com/kaliver.uy" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  @kaliver.uy
                </a>
              </li>
              <li><Link href="/contacto" className="hover:text-white">Escribinos</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-cream-light/50 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Kaliver. Todos los derechos reservados.</p>
          <p>Montevideo, Uruguay</p>
        </div>
      </div>
    </footer>
  );
}
