import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosotros | Kaliver",
  description: "La historia detrás de Kaliver, charqui de vacuno uruguayo.",
};

export default function AboutPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-ink text-cream-light">
        <div className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6">
          <p className="text-xs font-bold uppercase tracking-widest text-bronze">
            Nuestra historia
          </p>
          <h1 className="mt-3 font-display text-4xl font-black uppercase tracking-tight sm:text-5xl">
            Carne de verdad, sin vueltas
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-cream-light/80">
            Kaliver nació en Uruguay con una idea simple: hacer un snack de
            proteína que sea, literalmente, carne. Nada de rellenos, nada de
            azúcares escondidos. Solo cortes magros de vacuno, marinados con
            recetas propias y deshidratados con paciencia hasta lograr el
            charqui que nos gustaría encontrar en cualquier góndola.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
          <Image src="/images/product-chimichurri.jpg" alt="Charqui Kaliver" fill className="object-cover" />
        </div>
        <div>
          <h2 className="font-display text-3xl font-black uppercase tracking-tight text-ink">
            Por qué charqui
          </h2>
          <p className="mt-4 text-ink/70">
            El charqui es una de las técnicas de conservación de carne más
            antiguas de Sudamérica. Deshidratando la carne, se concentra el
            sabor y la proteína en un formato que aguanta el bolso del gimnasio,
            la mochila del trabajo o la guantera del auto, sin necesidad de
            refrigeración.
          </p>
          <p className="mt-4 text-ink/70">
            Elegimos recuperar esa tradición y llevarla a un formato moderno:
            porciones individuales de 50g, con 30g de proteína cada una, y tres
            marinados pensados para distintos momentos del día.
          </p>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="text-center font-display text-3xl font-black uppercase tracking-tight text-ink">
            Lo que no negociamos
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {[
              {
                title: "100% carne",
                text: "Sin rellenos de soja ni proteínas aisladas. El ingrediente principal siempre es carne de vacuno.",
              },
              {
                title: "Sin azúcares agregados",
                text: "Marinados con especias, hierbas y vinagre de manzana. Nada de jarabes ni azúcares escondidos.",
              },
              {
                title: "Producción cuidada",
                text: "Cortes magros seleccionados, marinado propio y deshidratado lento para cuidar textura y sabor.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="font-display text-lg font-bold text-maroon">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-ink/70">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
        <h2 className="font-display text-3xl font-black uppercase tracking-tight text-ink">
          Probalo vos mismo
        </h2>
        <p className="mt-4 text-ink/70">
          La mejor forma de entender por qué Kaliver es distinto es
          probándolo.
        </p>
        <Link
          href="/tienda"
          className="mt-6 inline-block rounded-full bg-maroon px-8 py-3 text-sm font-bold uppercase tracking-wide text-cream-light hover:bg-maroon-dark"
        >
          Ir a la tienda
        </Link>
      </section>
    </div>
  );
}
