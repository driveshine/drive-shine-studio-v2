import { useEffect } from "react";
import { Hero } from "@/components/sections/hero";
import { SeoNetworkAndContent } from "@/components/sections/seo-network-and-content";
import { ToolsHighlight } from "@/components/sections/tools-highlight";
import { HowItWorks } from "@/components/sections/how-it-works";
import { ServicesPreview } from "@/components/sections/services-preview";
import { WhyRows } from "@/components/sections/why-rows";
import { CityPills } from "@/components/sections/city-pills";
import { Testimonials } from "@/components/sections/testimonials";
import { CtaBand } from "@/components/sections/cta-band";

export default function HomePage() {
  useEffect(() => {
    document.title = "Car PDI Service in Andhra Pradesh & Telangana | Drive Shine";

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      'content',
      'Drive Shine offers professional Pre-Delivery Inspection (PDI) services for new and used cars across Andhra Pradesh & Telangana. 150+ point inspection, detailed reports and professional inspectors.'
    );
  }, []);

  return (
    <>
      <Hero />
      <SeoNetworkAndContent />
      <ToolsHighlight />
      <HowItWorks />
      <ServicesPreview />
      <WhyRows />
      <CityPills />
      <Testimonials />
      <CtaBand />
    </>
  );
}
