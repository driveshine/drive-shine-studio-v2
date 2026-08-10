import { useEffect, useRef } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { registerGsap } from "@/hooks/useLenis";
import { cn } from "@/lib/utils";

const tools = [
  {
    image: "/pic3.jpg",
    alt: "Inspector using paint depth gauge on car panel",
    eyebrow: "Paint Depth Gauge",
    title: "Detects what the eye can't see.",
    copy: "Every panel is measured with a digital paint depth gauge. Repaints, touch-ups and accident repairs show up as numbers — not guesses.",
  },
  {
    image: "/pic1.jpg",
    alt: "Inspector measuring tyre tread depth",
    eyebrow: "Tyre Tread Depth Gauge",
    title: "Precise measurement, not a visual estimate.",
    copy: "We measure tread depth digitally on every tyre. You get an exact reading — not a thumb-press and a shrug.",
  },
  {
    image: "/pic2.jpg",
    alt: "Inspector checking AC temperature with meter",
    eyebrow: "AC Temperature Check",
    title: "Cooling performance verified before handover.",
    copy: "A calibrated temperature meter confirms the AC is performing to spec. If it isn't, you know before you sign.",
  },
] as const;

export function ToolsHighlight() {
  const root = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const { gsap } = registerGsap();

    const ctx = gsap.context(() => {
      const rows = gsap.utils.toArray<HTMLElement>(".tool-row");
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
        const img = row.querySelector(".tool-img");
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
        <SectionHeading eyebrow="Professional Tools" title="We use instruments, not guesswork." />
        <div className="mt-10 space-y-10 md:mt-12 md:space-y-12">
          {tools.map((tool, i) => (
            <div
              key={tool.eyebrow}
              className="tool-row grid items-center gap-6 md:gap-10 lg:grid-cols-12"
            >
              <div
                className={cn(
                  "overflow-hidden rounded-2xl lg:col-span-7",
                  i % 2 === 1 && "lg:order-2",
                )}
              >
                <div className="aspect-16/10 overflow-hidden">
                  <img
                    src={tool.image}
                    alt={tool.alt}
                    loading="lazy"
                    width={1200}
                    height={750}
                    className="tool-img size-full object-cover md:scale-110 [filter:saturate(0.8)_brightness(0.8)]"
                  />
                </div>
              </div>
              <div className="lg:col-span-5">
                <p className="mono-label text-red">{tool.eyebrow}</p>
                <h3 className="mt-4 font-display text-[clamp(1.5rem,2.4vw,2.25rem)] font-extrabold text-ink">
                  {tool.title}
                </h3>
                <p className="mt-4 text-base leading-[1.7] text-muted-foreground">{tool.copy}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
