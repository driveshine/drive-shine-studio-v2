import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const tools = [
  {
    image: "/pic1.jpg",
    label: "Paint Depth Gauge",
    desc: "Detects repaints, touch-ups and accident repairs on every panel — invisible to the naked eye.",
  },
  {
    image: "/pic2.jpg",
    label: "Tyre Tread Depth Gauge",
    desc: "Precise digital measurement of tyre wear — not a visual estimate.",
  },
  {
    image: "/pic3.jpg",
    label: "AC Temperature Check",
    desc: "Verifies cooling performance meets spec before you accept delivery.",
  },
] as const;

export function ToolsHighlight() {
  return (
    <section className="bg-white">
      <div className="shell section-y">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Professional Tools"
            title="We use instruments, not guesswork."
            copy="Every inspection uses calibrated professional tools — for both new and pre-owned cars."
          />
          <Link
            to="/services"
            className="mono-label inline-flex shrink-0 items-center gap-2 text-red hover:underline"
          >
            View all services <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3 md:mt-16">
          {tools.map((tool) => (
            <div
              key={tool.label}
              className="group overflow-hidden rounded-2xl border border-black/[0.08] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src={tool.image}
                  alt={tool.label}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2">
                  <span className="size-2 shrink-0 rounded-full bg-red" />
                  <h3 className="font-display text-lg font-bold text-gray-900">{tool.label}</h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{tool.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom banner */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-red/20 bg-red/5 px-8 py-6 sm:flex-row">
          <p className="font-display text-lg font-bold text-gray-900">
            Used for <span className="text-red">both new &amp; pre-owned</span> car inspections.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-red px-6 py-3 font-sans text-sm font-bold text-white transition-opacity hover:opacity-90"
          >
            Book an Inspection <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
