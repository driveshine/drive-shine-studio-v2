import { steps } from "@/data/site";
import { SectionHeading } from "@/components/ui/section-heading";

export function HowItWorks() {
  return (
    <section className="bg-carbon-800">
      <div className="shell section-y">
        <SectionHeading
          eyebrow="Process"
          title="How our PDI works."
          copy="Four simple steps between booking and walking away with confidence."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 md:mt-16">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="relative rounded-2xl border border-black/[0.08] bg-white p-8 transition-shadow duration-300 hover:shadow-lg"
            >
              {/* Step number */}
              <span className="mono-label text-red">{s.n}</span>

              {/* Connector line (desktop) */}
              {i < steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute -right-3 top-10 hidden h-px w-6 bg-red/30 lg:block"
                />
              )}

              <h3 className="mt-4 font-display text-xl font-bold text-ink">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {s.copy}
              </p>

              {/* Bottom accent */}
              <div className="mt-6 h-0.5 w-10 rounded-full bg-red" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
