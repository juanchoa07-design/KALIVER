const PILLARS = [
  { title: "Fuerza", text: "La energía emocional detrás de cada producto." },
  { title: "Origen", text: "La raíz ancestral que no escondemos." },
  { title: "Autenticidad", text: "Carne real, ingredientes que se pueden nombrar." },
  { title: "Función", text: "Cada producto existe para resolver algo concreto." },
  { title: "Adaptación", text: "El puente entre lo ancestral y la vida moderna." },
];

export default function PillarsSection() {
  return (
    <section className="bg-cream-light py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-maroon">
            Lo que no negociamos
          </p>
          <h2 className="mt-2 font-display text-3xl uppercase tracking-tight text-ink sm:text-4xl">
            Cinco atributos, una marca
          </h2>
        </div>
        <div className="mt-14 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {PILLARS.map((pillar, i) => (
            <div key={pillar.title} className="flex flex-col items-center text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-carbon font-display text-lg text-bronze">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-base uppercase tracking-wide text-ink">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm text-ink/60">{pillar.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
