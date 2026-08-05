import { useEffect, useRef, useState } from "react";
import { steps } from "@/data/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { registerGsap } from "@/hooks/useLenis";
import { cn } from "@/lib/utils";

function DiagnosticPanel({ index }: { index: number }) {
  const step = steps[Math.min(index, steps.length - 1)]!;
  const progress = (index + 1) / steps.length;

  return (
    <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl border border-white/[0.07] bg-carbon-800">
      <div className="absolute inset-x-0 top-0 flex h-12 items-center gap-2 border-b border-white/[0.07] px-6">
        <span className="size-2 rounded-full bg-white/10" />
        <span className="size-2 rounded-full bg-white/10" />
        <span className="size-2 rounded-full bg-white/10" />
        <span className="mono-label ml-4 text-chrome-500/70">
          {step.module}_v2.04
        </span>
      </div>

      <div className="absolute inset-0 flex flex-col justify-center p-8 pt-16 lg:p-12 lg:pt-16">
        <div className="relative overflow-hidden rounded-xl border border-red/20 bg-carbon p-8">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(224,27,34,0.06)_0%,transparent_70%)]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-px animate-pulse bg-red/50 shadow-[0_0_10px_#E01B22]"
          />
          <div className="relative text-center">
            <p className="mono-label text-red">{step.status}…</p>
            <dl className="mt-8 grid grid-cols-2 gap-8 text-left">
              {step.metrics.map((m) => (
                <div key={m.label}>
                  <dt className="mono-label text-chrome-500/60">{m.label}</dt>
                  <dd className="mt-1 font-display text-xl font-extrabold text-bone">
                    {m.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-4 gap-3" aria-hidden="true">
          {steps.map((s, i) => (
            <span
              key={s.n}
              className={cn(
                "h-1 rounded-full transition-colors duration-500",
                i <= index ? "bg-red" : "bg-white/10",
              )}
            />
          ))}
        </div>
        <div className="mono-label mt-4 flex justify-between text-chrome-500/70">
          <span>{step.caption}</span>
          <span>{step.footnote}</span>
        </div>
        <div className="mono-label mt-2 text-right text-chrome-500/40">
          {Math.round(progress * 100)}%
        </div>
      </div>
    </div>
  );
}

export function HowItWorks() {
  // GSAP pinning wraps the pinned node in a pin-spacer. Pin an INNER div so
  // React never has to remove a node whose parent GSAP replaced (otherwise
  // route transitions throw NotFoundError: removeChild).
  const root = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const desktop = window.matchMedia("(min-width: 1024px)").matches;
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

      gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: () => `+=${items.length * 420}`,
          pin: true,
          scrub: 0.6,
          onUpdate: (self) => {
            const i = Math.min(
              items.length - 1,
              Math.floor(self.progress * items.length),
            );
            setActive(i);
          },
        },
      }).to(".step-rail-fill", { scaleY: 1, ease: "none" }, 0);
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="noise-grid relative overflow-hidden bg-carbon-800">
      <div className="shell section-y">
        <SectionHeading eyebrow="Process" title="How our PDI works." />

        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="flex gap-8 lg:col-span-5">
            <div aria-hidden="true" className="relative w-0.5 shrink-0 bg-white/10">
              <div className="step-rail-fill absolute inset-x-0 top-0 h-full origin-top scale-y-0 bg-red shadow-[0_0_15px_rgba(224,27,34,0.45)]" />
            </div>
            <ol className="flex-1 space-y-14">
              {steps.map((s, i) => {
                const isActive = i === active;
                return (
                  <li
                    key={s.n}
                    className={cn(
                      "step-item max-w-md transition-opacity duration-500",
                      "lg:opacity-40",
                      isActive && "lg:opacity-100",
                      i > active && "lg:opacity-25",
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <p
                        className={cn(
                          "mono-label transition-colors duration-500",
                          isActive ? "text-red" : "text-chrome-500",
                        )}
                      >
                        Step {s.n}
                      </p>
                      {isActive && <span className="h-px w-8 bg-red/40" />}
                    </div>
                    <h3
                      className={cn(
                        "mt-3 font-display text-3xl font-extrabold tracking-tight md:text-4xl",
                        isActive ? "chrome-text" : "text-bone",
                      )}
                    >
                      {s.title}
                    </h3>
                    <p
                      className={cn(
                        "mt-3 text-lg leading-relaxed",
                        isActive ? "text-chrome-300" : "text-muted-foreground",
                      )}
                    >
                      {s.copy}
                    </p>
                  </li>
                );
              })}
            </ol>
          </div>

          <div className="hidden lg:col-span-7 lg:block">
            <DiagnosticPanel index={active} />
          </div>
        </div>
      </div>
    </section>
  );
}
