import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { testimonials } from "@/data/site";
import { Eyebrow } from "@/components/ui/section-heading";

export function Testimonials() {
  const [emblaRef, embla] = useEmblaCarousel({
    loop: true,
    align: "start",
    dragFree: false,
  });
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!embla) return;
    const onSelect = () => setSelected(embla.selectedScrollSnap());
    onSelect();
    embla.on("select", onSelect);
    return () => {
      embla.off("select", onSelect);
    };
  }, [embla]);

  const scroll = useCallback(
    (dir: -1 | 1) => {
      if (!embla) return;
      if (dir === -1) embla.scrollPrev();
      else embla.scrollNext();
    },
    [embla],
  );

  return (
    <section className="noise-grid relative overflow-hidden bg-carbon-800">
      <div className="shell section-y">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <Eyebrow>Owners</Eyebrow>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => scroll(-1)}
              aria-label="Previous testimonial"
              className="grid size-11 place-items-center rounded-full border border-black/15 text-ink transition-colors hover:border-red/50 active:border-red"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scroll(1)}
              aria-label="Next testimonial"
              className="grid size-11 place-items-center rounded-full border border-black/15 text-ink transition-colors hover:border-red/50 active:border-red"
            >
              <ArrowRight className="size-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="mt-8 overflow-hidden md:mt-12" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((t) => (
              <figure key={t.name} className="min-w-0 flex-[0_0_100%] pr-6 lg:flex-[0_0_70%]">
                <blockquote className="font-display text-[clamp(1.5rem,3vw,2.5rem)] font-extrabold leading-tight text-ink">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mono-label mt-6 md:mt-8">
                  {t.name} — {t.meta}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center gap-3 md:mt-10">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              type="button"
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => embla?.scrollTo(i)}
              className={`transition-all duration-300 rounded-full ${
                i === selected
                  ? "bg-red w-6 h-2"
                  : "bg-black/15 size-2 hover:bg-black/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
