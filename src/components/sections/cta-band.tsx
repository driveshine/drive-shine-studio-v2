import { useGsapReveal } from "@/hooks/useGsapReveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { DsButtonLink } from "@/components/ui/ds-button";
import { ArrowRight } from "lucide-react";

export function CtaBand({
  title = "Book your inspection before delivery day.",
  copy = "Slots fill fast around weekend deliveries. Tell us the car and the date — we handle the rest.",
}: {
  title?: string;
  copy?: string;
}) {
  const ref = useGsapReveal<HTMLElement>();
  return (
    <section ref={ref} className="glow-band relative overflow-hidden bg-carbon-800">
      <div className="shell section-y flex flex-col items-start gap-8 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading eyebrow="Next step" title={title} copy={copy} />
        <DsButtonLink to="/contact" className="reveal shrink-0">
          Book an inspection <ArrowRight className="size-4" aria-hidden="true" />
        </DsButtonLink>
      </div>
    </section>
  );
}
