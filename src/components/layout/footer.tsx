import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import logo from "@/assets/logo.asset.json";
import { nav, site } from "@/data/site";
import { services } from "@/data/services";

const socialIcons = { Facebook, Instagram, LinkedIn: Linkedin } as const;

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-carbon">
      <div
        aria-hidden="true"
        className="h-px w-full bg-linear-to-r from-chrome-500/60 via-chrome-300/30 to-red"
      />

      {/* Oversized brand watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex select-none items-end justify-end overflow-hidden"
      >
        <span className="translate-x-8 translate-y-16 font-display text-[9rem] font-black uppercase leading-none tracking-tighter text-bone/[0.025] md:text-[16rem] lg:text-[20rem]">
          Drive
        </span>
      </div>

      <div className="shell relative z-10 grid gap-12 py-16 md:py-24 lg:grid-cols-12 lg:gap-8">
        {/* Brand */}
        <div className="flex flex-col gap-8 lg:col-span-4">
          <div className="flex items-center gap-4">
            <img
              src={logo.url}
              alt="Drive Shine logo"
              width={56}
              height={56}
              loading="lazy"
              className="size-14 rounded-full border border-white/10"
            />
            <span className="chrome-text font-display text-2xl font-extrabold uppercase tracking-tight md:text-3xl">
              Drive Shine
            </span>
          </div>
          <p className="max-w-xs text-lg leading-relaxed text-muted-foreground">{site.tagline}</p>
          <ul className="flex gap-4">
            {site.socials.map((s) => {
              const Icon = socialIcons[s.label as keyof typeof socialIcons];
              return (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="grid size-11 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-chrome-300 transition-colors duration-300 hover:border-red hover:bg-red hover:text-bone"
                  >
                    <Icon className="size-4" aria-hidden="true" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Quick links */}
        <nav aria-label="Quick links" className="lg:col-span-2">
          <h2 className="mono-label mb-8 flex items-center gap-2 text-red">
            <span className="opacity-40">01</span> Quick links
          </h2>
          <ul className="flex flex-col gap-5">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="font-medium text-muted-foreground transition-colors hover:text-bone"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Services */}
        <div className="lg:col-span-3">
          <h2 className="mono-label mb-8 flex items-center gap-2 text-red">
            <span className="opacity-40">02</span> Services
          </h2>
          <ul className="flex flex-col gap-5">
            {services.slice(0, 5).map((s) => (
              <li key={s.n}>
                <Link
                  to="/services"
                  className="font-medium text-muted-foreground transition-colors hover:text-bone"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="lg:col-span-3">
          <h2 className="mono-label mb-8 flex items-center gap-2 text-red">
            <span className="opacity-40">03</span> Contact
          </h2>
          <div className="space-y-6 rounded-2xl border border-white/[0.07] bg-carbon-800 p-6">
            <a href={site.phoneHref} className="group flex items-center gap-4">
              <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-white/[0.07] bg-carbon">
                <Phone className="size-4 text-red" aria-hidden="true" />
              </span>
              <span className="flex flex-col">
                <span className="mono-label">Direct line</span>
                <span className="font-display font-bold text-bone transition-colors group-hover:text-red">
                  {site.phone}
                </span>
              </span>
            </a>

            <a href={`mailto:${site.email}`} className="group flex items-center gap-4">
              <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-white/[0.07] bg-carbon">
                <Mail className="size-4 text-red" aria-hidden="true" />
              </span>
              <span className="flex min-w-0 flex-col">
                <span className="mono-label">Support</span>
                <span className="break-all font-display text-sm font-bold text-bone transition-colors group-hover:text-red">
                  {site.email}
                </span>
              </span>
            </a>

            <div className="hairline-t pt-4 text-sm leading-relaxed text-muted-foreground">
              {site.city}
              <br />
              <span className="font-semibold text-bone">{site.hours}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hairline-t relative z-10">
        <div className="shell flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
          <p className="mono-label">© 2026 Drive Shine™. All rights reserved.</p>
          <p className="mono-label">Hyderabad • Independent PDI</p>
        </div>
      </div>
    </footer>
  );
}
