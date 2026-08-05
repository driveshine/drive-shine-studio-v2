import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { images } from "@/data/site";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import { SectionHeading } from "@/components/ui/section-heading";

const cards = [
  {
    to: "/services",
    label: "PDI Services",
    copy: "A full independent inspection of your new car — at the dealership or your doorstep — before the keys change hands.",
    image: "/heroimage.jpg",
    alt: "Drive Shine inspector with customer at car delivery",
  },
  {
    to: "/products",
    label: "Auto Care Products",
    copy: "A curated range of shampoos, polishes, cleaners and protection so the finish you signed for stays that way.",
    image: images.care,
    alt: "Premium car care products arranged on a dark surface",
  },
] as const;

export function SplitCards() {
  const ref = useGsapReveal<HTMLElement>();
  return (
    <section ref={ref} className="bg-carbon">
      <div className="shell section-y">
        <SectionHeading
          eyebrow="What we do"
          title="Two ways we protect your new car."
          copy="Inspection first, care after. Both built around the same standard."
        />
        <div className="mt-12 grid gap-6 md:mt-16 md:gap-8 lg:grid-cols-2">
          {cards.map((c) => (
            <Link
              key={c.to}
              to={c.to}
              className="reveal card-surface group block overflow-hidden"
            >
              <div className="aspect-16/10 overflow-hidden">
                <img
                  src={c.image}
                  alt={c.alt}
                  loading="lazy"
                  width={1200}
                  height={750}
                  className="size-full object-cover [filter:saturate(0.8)_brightness(0.8)] transition-transform duration-700 ease-shine group-hover:scale-105"
                />
              </div>
              <div className="p-5 md:p-8">
                <h3 className="font-display text-2xl font-extrabold text-bone">{c.label}</h3>
                <p className="mt-3 text-base leading-[1.7] text-muted-foreground">{c.copy}</p>
                <span className="mono-label mt-6 inline-flex items-center gap-2 text-red">
                  Explore <ArrowUpRight className="size-4" aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
