import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { images, site } from "@/data/site";
import { DsButtonLink } from "@/components/ui/ds-button";
import { registerGsap } from "@/hooks/useLenis";
import { srcSet, heroSizes } from "@/lib/img";

const headlineLines = ["Know the car", "before it's yours."];

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

      // No parallax below 768px — it costs frames and gains nothing on a phone.
      if (window.matchMedia("(min-width: 768px)").matches) {
        gsap.to(".hero-img", {
          yPercent: 12,
          ease: "none",
          scrollTrigger: { trigger: el, start: "top top", end: "bottom top", scrub: true },
        });
      }
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative flex min-h-[88svh] items-end overflow-hidden md:min-h-[100svh]">
      {/* TODO: replace with client hero photography — dark studio car, wet reflective floor */}
      <picture className="hero-img absolute inset-0 size-full">
        <img
          src="/heroimage.jpg"
          alt="Drive Shine inspector examining a car at a dealership"
          fetchPriority="high"
          width={1920}
          height={1080}
          className="absolute inset-0 size-full object-cover [filter:saturate(0.8)_brightness(0.75)]"
        />
      </picture>
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,10,11,.35) 0%, rgba(10,10,11,.85) 60%, #0A0A0B 100%)",
        }}
      />

      <div className="shell relative z-10 pb-14 pt-32 md:pb-16 md:pt-40 lg:pb-24">
        <p className="hero-fade mono-label text-white/60">Independent PDI • {site.city}</p>
        <h1 className="mt-5 font-display text-[clamp(2.8rem,8vw,5.5rem)] font-extrabold leading-[1.05] tracking-tight text-white md:mt-6">
          {headlineLines.map((line) => (
            <span key={line} className="hero-line block overflow-hidden pb-1">
              <span className="block">{line}</span>
            </span>
          ))}
        </h1>
        <p className="hero-fade mt-6 max-w-xl text-[15px] leading-[1.7] text-white/70 md:mt-7 md:text-lg">
          Drive Shine inspects your brand new car before you accept delivery — independently,
          on site, with a 300+ point protocol. We walk you through every finding in person,
          clearly explaining any problems along with the pros and cons, before you decide.
        </p>
        <div className="hero-fade mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4 md:mt-10">
          <DsButtonLink to="/contact" className="w-full justify-center sm:w-auto">
            Book an inspection <ArrowRight className="size-4" aria-hidden="true" />
          </DsButtonLink>
          <DsButtonLink to="/services" variant="ghost" className="w-full justify-center sm:w-auto">
            View services
          </DsButtonLink>
        </div>
        <p className="hero-fade mono-label mt-10 border-t border-white/10 pt-6 text-white/50 md:mt-14">
          Same-day slots available across Hyderabad
        </p>
      </div>
    </section>
  );
}
