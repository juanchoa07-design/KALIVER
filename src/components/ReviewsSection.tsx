import Reveal from "@/components/Reveal";

type Review = {
  quote: string;
  author: string;
  // e.g. "Montevideo" or the product they bought.
  detail?: string;
};

// Placeholders for layout only: replace with real, authorized customer
// reviews before publishing. Don't ship invented testimonials.
const REVIEWS: Review[] = [
  { quote: "Reseña pendiente: acá va el comentario de un cliente real.", author: "Nombre del cliente", detail: "Ciudad o producto" },
  { quote: "Reseña pendiente: acá va el comentario de un cliente real.", author: "Nombre del cliente", detail: "Ciudad o producto" },
  { quote: "Reseña pendiente: acá va el comentario de un cliente real.", author: "Nombre del cliente", detail: "Ciudad o producto" },
];

export default function ReviewsSection() {
  return (
    <section className="bg-cream py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="font-condensed text-5xl font-extrabold uppercase leading-[0.95] text-maroon sm:text-6xl">
            Lo que dicen de Kaliver
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {REVIEWS.map((review, i) => (
            <Reveal key={i} delay={i * 80} className="h-full">
              <figure className="flex h-full flex-col rounded-2xl border border-ink/10 bg-cream-light p-6">
                <span aria-hidden className="font-condensed text-6xl font-extrabold leading-none text-maroon/30">
                  &ldquo;
                </span>
                <blockquote className="flex-1 text-lg text-ink">{review.quote}</blockquote>
                <figcaption className="mt-6 border-t border-ink/10 pt-4">
                  <p className="font-condensed text-xl font-bold uppercase text-ink">{review.author}</p>
                  {review.detail && <p className="text-sm text-ink/60">{review.detail}</p>}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
