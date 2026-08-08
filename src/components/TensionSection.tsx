import Image from "next/image";
import Reveal from "@/components/Reveal";

const ANCESTRAL = ["Carne", "Fuego", "Tierra", "Fuerza", "Tradición", "Supervivencia"];
const MODERNO = ["Practicidad", "Diseño", "Rendimiento", "Tecnología", "Portabilidad", "Conveniencia"];

export default function TensionSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative overflow-hidden bg-carbon px-6 py-10 text-cream-light sm:px-12 sm:py-16 lg:py-24">
          <Image
            src="/images/texture-2.jpg"
            alt=""
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover opacity-[0.08]"
          />
          <div className="relative mx-auto max-w-md lg:ml-auto lg:mr-12">
            <p className="text-xs font-bold uppercase tracking-widest text-bronze">
              De donde venimos
            </p>
            <h2 className="mt-2 font-display text-4xl uppercase tracking-tight sm:text-5xl">
              Ancestral
            </h2>
            <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 sm:mt-6 sm:block sm:space-y-2">
              {ANCESTRAL.map((word) => (
                <li key={word} className="text-base text-cream-light/70 sm:text-lg">
                  {word}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          aria-hidden
          className="relative z-10 -my-5 flex justify-center lg:hidden"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full border-4 border-cream-light bg-bronze font-display text-lg text-carbon shadow-lg">
            ×
          </span>
        </div>

        <div className="relative overflow-hidden bg-cream px-6 py-10 sm:px-12 sm:py-16 lg:py-24">
          <Image
            src="/images/texture-4.jpg"
            alt=""
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover opacity-[0.10] mix-blend-multiply"
          />
          <div className="relative mx-auto max-w-md lg:ml-12 lg:mr-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-maroon">
              A donde vamos
            </p>
            <h2 className="mt-2 font-display text-4xl uppercase tracking-tight text-ink sm:text-5xl">
              Moderno
            </h2>
            <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 sm:mt-6 sm:block sm:space-y-2">
              {MODERNO.map((word) => (
                <li key={word} className="text-base text-ink/70 sm:text-lg">
                  {word}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 hidden h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-cream-light bg-bronze font-display text-3xl text-carbon shadow-xl lg:flex"
      >
        ×
      </div>

      <Reveal className="border-t border-black/10 bg-cream-light px-4 py-10 text-center sm:px-6 sm:py-14">
        <p className="mx-auto max-w-2xl font-display text-lg uppercase leading-snug tracking-tight text-ink sm:text-2xl">
          &ldquo;Kaliver no pertenece completamente a ninguno de los dos mundos.
          Su identidad aparece precisamente al combinarlos.&rdquo;
        </p>
        <p className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-maroon">
          Alimentos ancestrales · Formatos modernos
        </p>
      </Reveal>
    </section>
  );
}
