import { useEffect, useRef } from "react";
import { Shield, ClipboardList, Camera, UserCheck, MapPin, Search, Building2, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { registerGsap } from "@/hooks/useLenis";
import { useCities } from "@/data/cities";

const stats = [
  { icon: Shield, label: "150+ Point PDI", sub: "Structured checklist" },
  { icon: Camera, label: "Digital Report", sub: "Photos & explanations via WhatsApp" },
  { icon: UserCheck, label: "100% Unbiased", sub: "Zero dealership affiliation" },
  { icon: ClipboardList, label: "From ₹1,999", sub: "Transparent flat pricing" },
];

const trustItems = [
  { icon: Shield, text: "Independent & Unbiased" },
  { icon: Search, text: "Digital Paint Depth Scan" },
  { icon: UserCheck, text: "Inspect Before Registration" },
];

export function Hero() {
  const root = useRef<HTMLElement | null>(null);
  const { cities } = useCities();

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
          <div className="flex flex-col justify-center order-2 lg:order-1">
            {/* Badge */}
            <div className="hero-fade inline-flex w-fit items-center gap-2 rounded-full bg-red px-4 py-2 mb-4">
              <Shield className="size-4 text-white" aria-hidden="true" />
              <span className="font-sans text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
                150+ Point Professional PDI
              </span>
            </div>

            {/* Eyebrow */}
            <p className="hero-fade mono-label text-ink-muted mb-2">
              Andhra Pradesh &amp; Telangana’s Growing PDI Network
            </p>

            {/* Heading (SEO Target H1) */}
            <h1 className="hero-fade font-display font-black leading-[1.08] tracking-tight text-[clamp(1.9rem,4vw,3.4rem)] text-ink">
              Professional Car PDI Service Across{" "}
              <span className="text-red">Andhra Pradesh &amp; Telangana</span>
            </h1>

            {/* Sub-hook */}
            <p className="hero-fade mt-3 text-base sm:text-lg font-bold text-ink">
              Buying a new car? Inspect it before you accept it.
            </p>

            {/* Body */}
            <p className="hero-fade mt-2 max-w-xl text-sm leading-[1.75] text-ink-soft">
              Drive Shine provides professional Pre-Delivery Inspection (PDI) services for new and used cars across major cities in Andhra Pradesh and Telangana. With a growing multi-city network of authorized Drive Shine PDI inspectors, we help car buyers identify visible defects, paint and body issues, tyre condition, documentation concerns, and other inspection findings before vehicle delivery.
            </p>

            <div className="hero-fade mt-4 h-0.5 w-10 rounded-full bg-red" />

            {/* Stats row */}
            <div className="hero-fade mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map(({ icon: Icon, label, sub }) => (
                <div key={label} className="flex flex-col gap-1 p-2 rounded-lg bg-carbon-800/60 border border-hairline">
                  <Icon className="size-4 text-red" aria-hidden="true" />
                  <p className="font-display text-xs sm:text-sm font-bold text-ink">{label}</p>
                  <p className="text-[11px] text-ink-muted leading-tight">{sub}</p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="hero-fade mt-6 flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-red px-6 py-3.5 font-sans text-sm font-bold text-white transition-opacity hover:opacity-90 shadow-md"
              >
                <ClipboardList className="size-4" aria-hidden="true" />
                BOOK YOUR PDI
              </Link>
              <a
                href="tel:+919494642244"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-ink px-6 py-3.5 font-sans text-sm font-bold text-ink transition-colors hover:border-red hover:text-red"
              >
                <Phone className="size-4 text-red" aria-hidden="true" />
                94946 42244
              </a>
            </div>
          </div>

          {/* Right — image */}
          <div className="hero-fade relative order-1 lg:order-2">
            <div className="relative w-full overflow-hidden rounded-2xl lg:rounded-none lg:h-full" style={{ aspectRatio: "4/3" }}>
              <img
                src="/heroimage1.jpeg"
                alt="Drive Shine certified inspector performing car PDI inspection"
                fetchPriority="high"
                width={900}
                height={700}
                className="w-full h-full object-cover object-top"
              />
              {/* Left fade blend — desktop only */}
              <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent hidden lg:block" />
              {/* Trust card overlay */}
              <div className="absolute bottom-4 right-4 rounded-xl bg-black/85 px-4 py-3 backdrop-blur-sm lg:bottom-8 lg:right-6 border border-white/10">
                <ul className="flex flex-col gap-2">
                  {trustItems.map(({ icon: Icon, text }) => (
                    <li key={text} className="flex items-center gap-2">
                      <Icon className="size-3.5 shrink-0 text-red" aria-hidden="true" />
                      <span className="text-xs font-semibold text-white">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar — Dynamically Highlighting Active Admin Cities */}
      <div className="border-t border-black/[0.07] bg-carbon-800">
        <div className="shell py-4">
          <div className="flex flex-wrap items-center justify-between gap-4 text-sm">
            <div className="flex items-center gap-2 font-medium text-ink-soft">
              <MapPin className="size-4 text-red shrink-0" aria-hidden="true" />
              <span>
                Our PDI network currently serves:{" "}
                <span className="font-bold text-ink">
                  {cities.map((c) => c.name).join(" | ")}
                </span>
              </span>
            </div>
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-2 text-ink-soft text-xs">
                <Search className="size-4 text-red" aria-hidden="true" />
                <span className="font-bold text-ink">{cities.length} Cities. One Standard.</span>
              </div>
              <div className="flex items-center gap-2 text-ink-soft text-xs">
                <Building2 className="size-4 text-red" aria-hidden="true" />
                <span>Showroom &amp; Stockyard Inspection</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
