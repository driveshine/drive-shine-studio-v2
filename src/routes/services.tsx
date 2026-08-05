import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { services, reportItems } from "@/data/services";
import { images } from "@/data/site";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { SectionHeading } from "@/components/ui/section-heading";
import { useGsapReveal } from "@/hooks/useGsapReveal";

const title = "PDI Services — Drive Shine Hyderabad";
const description =
  "Eight independent pre-delivery inspection services: new car PDI, dealership and home inspections, paint, mechanical, electrical and full expert reports.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const listRef = useGsapReveal<HTMLDivElement>();
  const reportRef = useGsapReveal<HTMLElement>();

  return (
    <>
      <PageHero
        eyebrow="Services • Independent PDI"
        title="Inspected before you sign."
        copy="A new car is a dealer's responsibility until you accept it. We use that window properly."
        image={images.servicesHero}
        alt="Close crop of a hand holding an inspection light against new car paint"
      />

      <section className="bg-carbon">
        <div className="shell section-y">
          <div ref={listRef}>
            <p className="reveal max-w-3xl text-lg text-muted-foreground">
              An independent PDI costs a fraction of a single paint correction, yet it is the
              only chance you get to raise defects while they are still someone else's problem.
              Every service below runs on the same measured protocol and ends in a documented,
              severity-rated report.
            </p>

            <ul className="mt-16 divide-y divide-white/8 border-y border-white/8">
              {services.map((s) => (
                <li
                  key={s.n}
                  className="reveal group relative grid gap-6 border-l-2 border-transparent px-0 py-12 transition-[border-color,padding,background-color] duration-400 ease-shine hover:border-red hover:bg-white/[0.02] hover:pl-8 lg:grid-cols-12 lg:gap-10"
                >
                  <div className="lg:col-span-1">
                    <span className="mono-label grid size-11 place-items-center rounded-full border border-white/10 text-chrome-500 transition-colors duration-400 group-hover:border-red/50 group-hover:text-red">
                      {s.n}
                    </span>
                  </div>
                  <div className="lg:col-span-5">
                    <h2 className="font-display text-2xl font-extrabold text-bone transition-colors duration-400 md:text-3xl">
                      {s.title}
                    </h2>
                    <p className="mt-3 max-w-md text-muted-foreground">{s.summary}</p>
                  </div>
                  <ul className="grid content-start gap-3 sm:grid-cols-2 lg:col-span-6">
                    {s.checklist.map((c) => (
                      <li
                        key={c}
                        className="flex items-start gap-2 rounded-lg border border-white/[0.05] bg-carbon-800/60 px-3 py-2.5 text-sm text-muted-foreground transition-colors duration-400 group-hover:border-white/10"
                      >
                        <Check className="mt-0.5 size-4 shrink-0 text-red" aria-hidden="true" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section ref={reportRef} className="noise-grid relative overflow-hidden bg-carbon-800">
        <div className="shell section-y grid gap-14 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            eyebrow="Deliverable"
            title="What's in the report."
            copy="Delivered within two hours of the inspection, as a shareable PDF and web link. Written so you can act on it immediately — and so the dealer can't argue with it."
          />
          <div className="reveal card-surface p-8">
            <div className="flex items-center justify-between border-b border-white/8 pb-5">
              <p className="mono-label">Inspection report</p>
              <p className="mono-label text-red">Severity rated</p>
            </div>
            <ul className="mt-6 space-y-4">
              {reportItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full border border-red/50">
                    <Check className="size-3 text-red" aria-hidden="true" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
