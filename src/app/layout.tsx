import type { Metadata } from "next";
import { nhgDisplay, nhgText } from "@/lib/fonts";
import { CartProvider } from "@/lib/cart-context";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kaliver | Charqui de vacuno 100% carne",
  description:
    "Charqui de vacuno artesanal, sin azúcares agregados y 30g de proteína por porción. Sal, Romero y Chimichurri. Hecho en Uruguay.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es-UY"
      className={`${nhgDisplay.variable} ${nhgText.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream-light text-ink">
        <CartProvider>
          <Header />
          <CartDrawer />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
