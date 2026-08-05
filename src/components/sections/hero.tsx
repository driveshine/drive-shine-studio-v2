import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { images, site } from "@/data/site";
import { DsButtonLink } from "@/components/ui/ds-button";
import { registerGsap } from "@/hooks/useLenis";

const headlineLines = ["Know before", "you drive it home."];

export function Hero() {
  const root = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const { gsap } = registerGsap();

    const ctx = gsap.context(() => {
      if (reduced) {
        gsap.set(".hero-line span, .hero-fade", { y: 0, opacity: 1 });
        return;
      }
      gsap
        .timeline({ delay: 0.35 })
        .from(".hero-line span", {
          yPercent: 110,
          duration: 1.1,
          ease: "power4.out",
          stagger: 0.08,
        })
        .from(".hero-fade", { y: 24, opacity: 0, duration: 0.8, stagger: 0.08 }, "-=0.6");

      gsap.fromTo(
        ".hero-img",
        { scale: 1.08 },
        { scale: 1, duration: 2, ease: "power2.out" },
      );

      gsap.to(".hero-img", {
        yPercent: 12,
        ease: "none",
        scrollTrigger: { trigger: el, start: "top top", end: "bottom top", scrub: true },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative flex min-h-[100svh] items-end overflow-hidden">
      {/* TODO: replace with client hero photography — dark studio car, wet reflective floor */}
      <img
        src={images.hero}
        alt="Dark modern car photographed low and side-on in a studio with a reflective floor"
        fetchPriority="high"
        width={1920}
        height={1080}
        className="hero-img absolute inset-0 size-full object-cover [filter:saturate(0.8)_brightness(0.75)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,10,11,.35) 0%, rgba(10,10,11,.85) 60%, #0A0A0B 100%)",
        }}
      />

      <div className="shell relative z-10 pb-16 pt-40 lg:pb-24">
        <p className="hero-fade mono-label">Independent PDI • {site.city}</p>
        <h1 className="mt-6 text-[clamp(3rem,7vw,6.5rem)]">
          {headlineLines.map((line) => (
            <span key={line} className="hero-line block overflow-hidden pb-1">
              <span className="chrome-text block">{line}</span>
            </span>
          ))}
        </h1>
        <p className="hero-fade mt-7 max-w-xl text-lg text-muted-foreground">
          Drive Shine inspects your brand new car before you accept delivery — independently,
          on site, with a 150+ point protocol and a report you can hand straight to the dealer.
        </p>
        <div className="hero-fade mt-10 flex flex-wrap gap-4">
          <DsButtonLink to="/contact">
            Book an inspection <ArrowRight className="size-4" aria-hidden="true" />
          </DsButtonLink>
          <DsButtonLink to="/services" variant="ghost">
            View services
          </DsButtonLink>
        </div>
        <p className="hero-fade mono-label mt-14 border-t border-white/8 pt-6">
          Hyderabad • 24/7 • Certified inspectors
        </p>
      </div>
    </section>
  );
}
