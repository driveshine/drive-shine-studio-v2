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
        if (img) {
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
    <section ref={root} className="bg-carbon">
      <div className="shell section-y">
        <SectionHeading eyebrow="Why Drive Shine" title="Independent. Measured. Documented." />
        <div className="mt-16 space-y-20 lg:space-y-28">
          {whyRows.map((row, i) => (
            <div
              key={row.eyebrow}
              className="why-row grid items-center gap-10 lg:grid-cols-12"
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
                    className="why-img size-full scale-110 object-cover [filter:saturate(0.8)_brightness(0.8)]"
                  />
                </div>
              </div>
              <div className="lg:col-span-5">
                <p className="mono-label text-red">{row.eyebrow}</p>
                <h3 className="mt-4 font-display text-[clamp(1.5rem,2.4vw,2.25rem)] font-extrabold text-bone">
                  {row.title}
                </h3>
                <p className="mt-4 text-muted-foreground">{row.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
