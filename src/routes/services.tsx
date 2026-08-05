import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import {
  services,
  servicesIntro,
  report,
  servicesFaq,
  servicesCta,
} from "@/data/services";
import { images } from "@/data/site";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
  const faqRef = useGsapReveal<HTMLElement>();

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
            <div className="reveal max-w-3xl">
              <p className="mono-label text-red">{servicesIntro.eyebrow}</p>
              <h2 className="chrome-text mt-5 font-display text-3xl font-extrabold tracking-tight md:text-5xl">
                {servicesIntro.title}
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">{servicesIntro.body}</p>
            </div>

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
                    <h3 className="font-display text-2xl font-extrabold text-bone transition-colors duration-400 md:text-3xl">
                      {s.title}
                    </h3>
                    <p className="mt-3 max-w-md text-muted-foreground">{s.summary}</p>
                  </div>
                  <div className="lg:col-span-6">
                    <p className="mono-label">Covered</p>
                    <ul className="mt-4 grid content-start gap-3 sm:grid-cols-2">
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
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section ref={reportRef} className="noise-grid relative overflow-hidden bg-carbon-800">
        <div className="shell section-y grid gap-14 lg:grid-cols-2 lg:items-center">
          <SectionHeading eyebrow={report.eyebrow} title={report.title} copy={report.body} />
          <div className="reveal grid gap-4 sm:grid-cols-2">
            {report.stats.map((stat) => (
              <div
                key={stat}
                className="card-surface flex min-h-32 flex-col justify-between p-6"
              >
                <span className="grid size-8 place-items-center rounded-full border border-red/40">
                  <Check className="size-4 text-red" aria-hidden="true" />
                </span>
                <p className="mono-label mt-6 text-bone">{stat}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={faqRef} className="bg-carbon">
        <div className="shell section-y grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="FAQ" title="Before you book." />
          </div>
          <div className="reveal lg:col-span-8">
            <Accordion type="single" collapsible className="w-full">
              {servicesFaq.map((item, i) => (
                <AccordionItem key={item.q} value={`faq-${i}`} className="border-white/8">
                  <AccordionTrigger className="text-left font-display text-lg font-bold text-bone hover:no-underline">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <CtaBand title={servicesCta.title} copy={servicesCta.copy} />
    </>
  );
}

