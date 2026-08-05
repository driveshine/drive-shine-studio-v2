import { useEffect } from "react";
import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { SplitCards } from "@/components/sections/split-cards";
import { HowItWorks } from "@/components/sections/how-it-works";
import { ToolsHighlight } from "@/components/sections/tools-highlight";
import { ServicesPreview } from "@/components/sections/services-preview";
import { WhyRows } from "@/components/sections/why-rows";
import { Testimonials } from "@/components/sections/testimonials";
import { CtaBand } from "@/components/sections/cta-band";

export default function HomePage() {
  useEffect(() => {
    document.title = "Drive Shine — Independent New Car PDI, Hyderabad";
  }, []);

  return (
    <>
      <Hero />
      <TrustBar />
      <SplitCards />
      <HowItWorks />
      <ToolsHighlight />
      <ServicesPreview />
      <WhyRows />
      <Testimonials />
      <CtaBand />
    </>
  );
}
