import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function ServicesPreview() {
  const ref = useGsapReveal<HTMLElement>();
  return (
    <section ref={ref} className="bg-white">
      <div className="shell section-y">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            eyebrow="Services"
            title="Eight checks between you and a bad delivery."
          />
          <Link
            to="/services"
            className="reveal mono-label inline-flex items-center gap-2 text-red hover:text-bone"
          >
            All services <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <li key={s.n} className="reveal card-surface p-6">
              <span className="mono-label text-red">{s.n}</span>
              <h3 className="mt-4 font-display text-lg font-bold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.summary}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
