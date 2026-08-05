import { useEffect, useRef } from "react";
import { whyRows } from "@/data/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { registerGsap } from "@/hooks/useLenis";
import { cn } from "@/lib/utils";

export function WhyRows() {
  const root = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const { gsap } = registerGsap();

    const ctx = gsap.context(() => {
      const rows = gsap.utils.toArray<HTMLElement>(".why-row");
      if (reduced) {
        gsap.set(rows, { opacity: 1, y: 0 });
        return;
      }
      rows.forEach((row) => {
        gsap.fromTo(
          row,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: row, start: "top 80%", once: true },
          },
        );
        const img = row.querySelector(".why-img");
        if (img && window.matchMedia("(min-width: 768px)").matches) {
          gsap.fromTo(
            img,
            { yPercent: -6 },
            {
              yPercent: 6,
              ease: "none",
              scrollTrigger: { trigger: row, start: "top bottom", end: "bottom top", scrub: true },
            },
          );
        }
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="bg-white">
      <div className="shell section-y">
        <SectionHeading eyebrow="Why Drive Shine" title="Independent. Measured. Documented." />
        <div className="mt-10 space-y-10 md:mt-12 md:space-y-12">
          {whyRows.map((row, i) => (
            <div
              key={row.eyebrow}
              className="why-row grid items-center gap-6 md:gap-10 lg:grid-cols-12"
            >
              <div
                className={cn(
                  "overflow-hidden rounded-2xl lg:col-span-7",
                  i % 2 === 1 && "lg:order-2",
                )}
              >
                <div className="aspect-16/10 overflow-hidden">
                  {/* TODO: replace with client photography */}
                  <img
                    src={row.image}
                    alt={row.alt}
                    loading="lazy"
                    width={1200}
                    height={750}
                    className="why-img size-full object-cover md:scale-110 [filter:saturate(0.8)_brightness(0.8)]"
                  />
                </div>
              </div>
              <div className="lg:col-span-5">
                <p className="mono-label text-red">{row.eyebrow}</p>
        <h3 className="mt-4 font-display text-[clamp(1.5rem,2.4vw,2.25rem)] font-extrabold text-ink">
                  {row.title}
                </h3>
                <p className="mt-4 text-base leading-[1.7] text-muted-foreground">{row.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
