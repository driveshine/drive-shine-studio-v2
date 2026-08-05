import { useEffect, useRef } from "react";
import { Shield, ClipboardList, Camera, UserCheck, MapPin, Search, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import { registerGsap } from "@/hooks/useLenis";

const stats = [
  { icon: Shield, label: "Independent", sub: "100% unbiased inspection" },
  { icon: ClipboardList, label: "150+ Points", sub: "Covers every important detail" },
  { icon: Camera, label: "Detailed Report", sub: "With images & explanation" },
  { icon: UserCheck, label: "Expert Support", sub: "Get guidance before you take delivery" },
];

const trustItems = [
  { icon: Shield, text: "Unbiased Inspection" },
  { icon: Search, text: "No Compromise" },
  { icon: UserCheck, text: "Your Confidence Our Priority" },
];

export function Hero() {
  const root = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const { gsap } = registerGsap();
    const ctx = gsap.context(() => {
      if (reduced) { gsap.set(".hero-fade", { opacity: 1, y: 0 }); return; }
      gsap.from(".hero-fade", { y: 28, opacity: 0, duration: 0.8, stagger: 0.1, delay: 0.2, ease: "power3.out" });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="bg-white pt-20 overflow-hidden relative">
      <div className="shell">
        <div className="grid min-h-[88svh] items-center gap-8 lg:grid-cols-2 py-10 lg:py-0">

          {/* Left — text */}
          <div className="flex flex-col justify-center">
            {/* Badge */}
            <div className="hero-fade inline-flex w-fit items-center gap-2 rounded-full bg-red px-4 py-2 mb-5">
              <Shield className="size-4 text-white" aria-hidden="true" />
              <span className="font-sans text-sm font-bold uppercase tracking-wider text-white">150+ Point Inspection</span>
            </div>

            {/* Eyebrow */}
            <p className="hero-fade mono-label text-ink-muted mb-3">Independent PDI</p>

            {/* Heading */}
            <h1 className="hero-fade font-display font-black leading-[1.05] tracking-tight text-[clamp(2rem,4.5vw,3.8rem)]">
              <span className="text-ink">Car</span><br />
              <span className="text-red">Pre-Delivery</span><br />
              <span className="text-ink">Inspection</span>
            </h1>

            {/* Body */}
            <p className="hero-fade mt-4 max-w-lg text-sm leading-[1.75] text-ink-soft">
              Drive Shine independently inspects your new car at the dealership before delivery using a comprehensive{" "}
              <span className="font-bold text-red">150+ point inspection.</span>{" "}
              We explain every finding clearly, so you can drive home with complete confidence.
            </p>

            <div className="hero-fade mt-4 h-0.5 w-10 rounded-full bg-red" />

            {/* Stats row */}
            <div className="hero-fade mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map(({ icon: Icon, label, sub }) => (
                <div key={label} className="flex flex-col gap-1">
                  <Icon className="size-5 text-red" aria-hidden="true" />
                  <p className="font-display text-sm font-bold text-ink">{label}</p>
                  <p className="text-xs text-ink-muted leading-snug">{sub}</p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="hero-fade mt-5 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-red px-6 py-3.5 font-sans text-sm font-bold text-white transition-opacity hover:opacity-90"
              >
                <ClipboardList className="size-4" aria-hidden="true" />
                Book Inspection
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-ink px-6 py-3.5 font-sans text-sm font-bold text-ink transition-colors hover:border-red hover:text-red"
              >
                ▶ How It Works
              </Link>
            </div>
          </div>

          {/* Right — image fills right half */}
          <div className="hero-fade relative hidden lg:flex lg:items-stretch">
            <div className="relative w-full min-h-[88svh] overflow-hidden">
              <img
                src="/pic3.jpg"
                alt="Drive Shine inspector examining a car"
                fetchPriority="high"
                width={900}
                height={700}
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
              {/* Left fade blend */}
              <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent" />
              {/* Trust card overlay */}
              <div className="absolute bottom-8 right-6 rounded-xl bg-black/80 px-5 py-4 backdrop-blur-sm">
                <ul className="flex flex-col gap-2.5">
                  {trustItems.map(({ icon: Icon, text }) => (
                    <li key={text} className="flex items-center gap-2.5">
                      <Icon className="size-4 shrink-0 text-red" aria-hidden="true" />
                      <span className="text-sm font-semibold text-white">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-black/[0.07] bg-white">
        <div className="shell flex flex-wrap items-center gap-6 py-4 text-sm">
          <div className="flex items-center gap-2 font-medium text-ink-soft">
            <MapPin className="size-4 text-red shrink-0" aria-hidden="true" />
            Serving customers across{" "}
            <span className="font-bold text-red">Andhra Pradesh &amp; Telangana</span>
          </div>
          <div className="ml-auto flex flex-wrap gap-6">
            <div className="flex items-center gap-2 text-ink-soft">
              <Search className="size-4 text-red" aria-hidden="true" />
              <div>
                <p className="font-bold text-ink text-xs">All Major Cities</p>
                <p className="text-xs text-ink-muted">Wide Coverage</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-ink-soft">
              <Building2 className="size-4 text-red" aria-hidden="true" />
              <div>
                <p className="font-bold text-ink text-xs">At Dealership</p>
                <p className="text-xs text-ink-muted">Before You Accept</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
