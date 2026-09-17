"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useCart } from "@/lib/cart-context";

const NAV_LINKS = [
  { href: "/tienda", label: "Comprar" },
  { href: "/nosotros", label: "Conocé Kaliver" },
];

// Underline that grows from the left on hover and stays on the active page.
const underline =
  "relative after:absolute after:inset-x-0 after:-bottom-1 after:h-[2px] after:origin-left after:scale-x-0 after:bg-maroon after:transition-transform after:duration-300 hover:after:scale-x-100";

export default function Header() {
  const { totalItems, openCart } = useCart();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    const frame = requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 bg-cream-light/95 backdrop-blur transition-shadow duration-300 ${
        scrolled ? "shadow-[0_8px_24px_-12px_rgba(23,18,15,0.25)]" : ""
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:h-[4.5rem] sm:px-6 lg:px-8">
        <Link href="/" className="shrink-0" aria-label="Kaliver, inicio">
          <Image
            src="/images/logo-wordmark-maroon-cropped.png"
            alt="Kaliver"
            width={1005}
            height={364}
            className="h-7 w-auto transition-opacity hover:opacity-80 sm:h-10"
            priority
          />
        </Link>

        <nav className="flex items-center gap-5 sm:gap-10">
          {NAV_LINKS.map((link) => {
            const active = pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`${underline} font-condensed text-base font-semibold tracking-wide transition-colors sm:text-xl ${
                  active ? "text-maroon after:scale-x-100" : "text-ink hover:text-maroon"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <button
            type="button"
            onClick={openCart}
            aria-label={`Abrir carrito (${totalItems} ${totalItems === 1 ? "producto" : "productos"})`}
            className={`${underline} group flex items-center gap-2 font-condensed text-base font-semibold tracking-wide text-ink transition-colors hover:text-maroon sm:text-xl`}
          >
            <span className="relative">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M2 3h3l2.4 11.2a2 2 0 0 0 2 1.6h8.2a2 2 0 0 0 2-1.5L22 7H6" />
                <circle cx="10" cy="20" r="1.3" />
                <circle cx="18" cy="20" r="1.3" />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-maroon px-1 font-text text-[10px] font-bold text-cream-light sm:hidden">
                  {totalItems}
                </span>
              )}
            </span>
            <span className="hidden sm:inline">Carrito ({totalItems})</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
