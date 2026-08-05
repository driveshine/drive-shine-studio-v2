import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { SplitCards } from "@/components/sections/split-cards";
import { HowItWorks } from "@/components/sections/how-it-works";
import { ServicesPreview } from "@/components/sections/services-preview";
import { WhyRows } from "@/components/sections/why-rows";
import { Testimonials } from "@/components/sections/testimonials";
import { CtaBand } from "@/components/sections/cta-band";

const title = "Drive Shine — Independent New Car PDI, Hyderabad";
const description =
  "Independent pre-delivery inspection for new cars in Hyderabad. 150+ point protocol, digital report in 2 hours. Know before you drive it home.";

export const Route = createFileRoute("/")({
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
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <TrustBar />
      <SplitCards />
      <HowItWorks />
      <ServicesPreview />
      <WhyRows />
      <Testimonials />
      <CtaBand />
    </>
  );
}
