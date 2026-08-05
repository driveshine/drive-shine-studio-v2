import { useEffect, useRef } from "react";
import { steps } from "@/data/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { registerGsap } from "@/hooks/useLenis";

export function HowItWorks() {
  const root = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const desktop = window.matchMedia("(min-width: 768px)").matches;
    const { gsap } = registerGsap();

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".step-item");

      if (reduced || !desktop) {
        gsap.set(items, { opacity: 1, y: 0 });
        gsap.set(".step-rail-fill", { scaleY: 1 });
        if (!reduced) {
          gsap.fromTo(
            items,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              stagger: 0.1,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: { trigger: el, start: "top 80%", once: true },
            },
          );
        }
        return;
      }

      gsap.set(items, { opacity: 0.25 });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: () => `+=${items.length * 400}`,
          pin: true,
          scrub: 0.6,
        },
      });

      tl.to(".step-rail-fill", { scaleY: 1, ease: "none" }, 0);
      items.forEach((item, i) => {
        tl.to(item, { opacity: 1, duration: 0.3 }, i * 0.3);
        if (i < items.length - 1) tl.to(item, { opacity: 0.25, duration: 0.3 }, i * 0.3 + 0.3);
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="noise-grid relative overflow-hidden bg-carbon-800">
      <div className="shell section-y">
        <SectionHeading eyebrow="Process" title="How our PDI works." />
        <div className="mt-14 flex gap-8 md:gap-14">
          <div
            aria-hidden="true"
            className="relative w-px shrink-0 bg-white/10 md:w-0.5"
          >
            <div className="step-rail-fill absolute inset-x-0 top-0 h-full origin-top scale-y-0 bg-red" />
          </div>
          <ol className="flex-1 space-y-14 md:space-y-16">
            {steps.map((s) => (
              <li key={s.n} className="step-item max-w-2xl">
                <p className="mono-label text-red">Step {s.n}</p>
                <h3 className="mt-3 font-display text-2xl font-extrabold text-bone md:text-3xl">
                  {s.title}
                </h3>
                <p className="mt-3 text-muted-foreground">{s.copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
