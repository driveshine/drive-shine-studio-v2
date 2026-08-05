import { useEffect } from "react";
import { Check } from "lucide-react";
import { services, servicesIntro, report, servicesFaq, servicesCta } from "@/data/services";
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

export default function ServicesPage() {
  const listRef = useGsapReveal<HTMLDivElement>();
  const reportRef = useGsapReveal<HTMLElement>();
  const faqRef = useGsapReveal<HTMLElement>();

  useEffect(() => {
    document.title = "PDI Services — Drive Shine Hyderabad";
  }, []);

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

            {/* No pricing tiers */}

            <ul className="mt-16 divide-y divide-black/[0.06] border-y border-black/[0.06]">
              {services.map((s) => (
                <li
                  key={s.n}
                  className="reveal group relative grid gap-6 border-l-2 border-transparent px-0 py-12 transition-[border-color,padding,background-color] duration-400 ease-shine hover:border-red hover:bg-red/[0.02] hover:pl-8 lg:grid-cols-12 lg:gap-10"
                >
                  <div className="lg:col-span-1">
                    <span className="mono-label grid size-11 place-items-center rounded-full border border-black/10 text-gray-400 transition-colors duration-400 group-hover:border-red/50 group-hover:text-red">
                      {s.n}
                    </span>
                  </div>
                  <div className="lg:col-span-4">
                    <h3 className="font-display text-2xl font-extrabold text-gray-900 transition-colors duration-400 md:text-3xl">
                      {s.title}
                    </h3>
                    <p className="mt-3 max-w-md text-gray-500">{s.summary}</p>
                  </div>
                  <div className="lg:col-span-7">
                    <p className="mono-label text-gray-400">Covered</p>
                    <ul className="mt-4 grid content-start gap-3 sm:grid-cols-2">
                      {s.checklist.map((c) => (
                        <li
                          key={c}
                          className="flex items-start gap-2 rounded-lg border border-black/[0.05] bg-gray-50 px-3 py-2.5 text-sm text-gray-600"
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

      <section ref={reportRef} className="bg-gray-50">
        <div className="shell section-y">
          <SectionHeading eyebrow={report.eyebrow} title={report.title} copy={report.body} />
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {report.tools.map((tool) => (
              <div key={tool.label} className="overflow-hidden rounded-2xl border border-black/[0.08] bg-white shadow-sm transition-shadow hover:shadow-md">
                <div className="aspect-4/3 overflow-hidden">
                  <img
                    src={tool.image}
                    alt={tool.label}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-red" />
                    <p className="font-display text-lg font-bold text-gray-900">{tool.label}</p>
                  </div>
                  <p className="mt-2 text-sm text-gray-500">{tool.desc}</p>
                </div>
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
                <AccordionItem key={item.q} value={`faq-${i}`} className="border-black/[0.08]">
                  <AccordionTrigger className="text-left font-display text-lg font-bold text-ink hover:no-underline">
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
