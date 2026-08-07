# Kaliver

E-commerce de Kaliver — charqui de vacuno 100% carne, sin azúcares agregados. Hecho en Uruguay.

Sitio en producción: https://kaliver.vercel.app

## Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- Tailwind CSS v4
- Carrito con Context API + localStorage
- Checkout con [Mercado Pago](https://www.mercadopago.com.uy) (`src/app/api/checkout/route.ts`) — corre en modo demo hasta que se configure `MP_ACCESS_TOKEN`

## Desarrollo local

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

## Deploy

Conectado a Vercel: cada push a `main` dispara un deploy automático a producción.

## Estructura

- `src/app` — páginas (home, tienda, producto, carrito, checkout, nosotros, contacto)
- `src/components` — Header, Footer, CartDrawer, ProductCard, ProductDetail
- `src/lib` — datos de productos, contexto de carrito, fuentes, formato de precios
- `public/images`, `public/fonts` — assets de marca
