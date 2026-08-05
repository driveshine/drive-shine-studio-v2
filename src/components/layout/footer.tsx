import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import logoUrl from "@/assets/logo.png";
import { nav, site } from "@/data/site";

const socialIcons = { Facebook, Instagram, LinkedIn: Linkedin } as const;

const pdiServices = [
  "New Car PDI",
  "Dealership Inspection",
  "Home Delivery Inspection",
  "Paint & Body Inspection",
  "Mechanical & Electrical Inspection",
  "Interior & Exterior Quality Check",
  "Accessories & Feature Verification",
  "Expert Inspection Report",
];

const autoProducts = [
  "Car Wash Shampoo",
  "Glass Cleaner",
  "Dashboard Polish",
  "Windshield Washer",
  "Interior Cleaner",
  "Rat Repellent Spray",
  "Car Care Accessories",
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: "#111114" }}>
      <div className="h-1 w-full bg-red" />

      {/* Watermark */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 flex select-none items-end justify-end overflow-hidden">
        <span className="translate-x-8 translate-y-16 font-display text-[9rem] font-black uppercase leading-none tracking-tighter text-white/[0.03] md:text-[14rem]">
          Drive
        </span>
      </div>

      <div className="shell relative z-10 py-16 md:py-24">
        {/* Top row: Brand + Contact side by side */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Brand */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <img src={logoUrl} alt="Drive Shine logo" width={48} height={48} loading="lazy" className="size-12 rounded-full" />
              <span className="font-display text-2xl font-extrabold uppercase tracking-tight text-red">
                Drive Shine
              </span>
            </div>
            <p className="max-w-sm text-base leading-relaxed text-gray-400">{site.tagline}</p>
            <ul className="flex gap-3">
              {site.socials.map((s) => {
                const Icon = socialIcons[s.label as keyof typeof socialIcons];
                return (
                  <li key={s.label}>
                    <a href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}
                      className="grid size-10 place-items-center rounded-full border border-white/10 text-gray-400 transition-colors hover:border-red hover:bg-red hover:text-white">
                      <Icon className="size-4" aria-hidden="true" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="mono-label mb-6 flex items-center gap-2 text-red">
              <span className="opacity-40">04</span> Contact
            </h2>
            <div className="space-y-5 rounded-2xl border border-white/[0.07] bg-white/[0.04] p-6">
              <a href={site.phoneHref} className="group flex items-center gap-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-white/[0.07] bg-white/[0.04]">
                  <Phone className="size-4 text-red" aria-hidden="true" />
                </span>
                <span className="flex flex-col">
                  <span className="mono-label text-gray-500">Direct line</span>
                  <span className="font-bold text-white transition-colors group-hover:text-red">{site.phone}</span>
                </span>
              </a>
              <a href={`mailto:${site.email}`} className="group flex items-center gap-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-white/[0.07] bg-white/[0.04]">
                  <Mail className="size-4 text-red" aria-hidden="true" />
                </span>
                <span className="flex flex-col">
                  <span className="mono-label text-gray-500">Support</span>
                  <span className="font-bold text-white transition-colors group-hover:text-red">{site.email}</span>
                </span>
              </a>
              <div className="border-t border-white/[0.07] pt-4 text-sm text-gray-500">
                {site.city} · <span className="font-semibold text-gray-300">{site.hours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row: Quick Links + PDI Services + Products */}
        <div className="mt-14 grid gap-10 border-t border-white/[0.06] pt-14 sm:grid-cols-3">

          {/* Quick Links */}
          <nav aria-label="Quick links">
            <h2 className="mono-label mb-6 flex items-center gap-2 text-red">
              <span className="opacity-40">01</span> Quick Links
            </h2>
            <ul className="flex flex-col gap-3">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-sm font-medium text-gray-400 transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* PDI Services */}
          <div>
            <h2 className="mono-label mb-6 flex items-center gap-2 text-red">
              <span className="opacity-40">02</span> PDI Services
            </h2>
            <ul className="flex flex-col gap-3">
              {pdiServices.map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-sm font-medium text-gray-400 transition-colors hover:text-white">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Auto Care Products */}
          <div>
            <h2 className="mono-label mb-6 flex items-center gap-2 text-red">
              <span className="opacity-40">03</span> Auto Care Products
            </h2>
            <ul className="flex flex-col gap-3">
              {autoProducts.map((p) => (
                <li key={p}>
                  <Link to="/products" className="text-sm font-medium text-gray-400 transition-colors hover:text-white">
                    {p}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/[0.07] relative z-10">
        <div className="shell flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
          <p className="mono-label text-gray-500">© 2026 Drive Shine™. All rights reserved.</p>
          <p className="mono-label text-gray-500">Hyderabad • Independent PDI</p>
        </div>
      </div>
    </footer>
  );
}
