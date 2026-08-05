import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo.asset.json";
import { nav, site } from "@/data/site";
import { services } from "@/data/services";

const socialIcons = { Facebook, Instagram, LinkedIn: Linkedin } as const;

export function Footer() {
  return (
    <footer className="relative bg-carbon">
      <div
        aria-hidden="true"
        className="h-px w-full bg-linear-to-r from-chrome-500/60 via-chrome-300/30 to-red"
      />
      <div className="shell grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={logo.url}
              alt="Drive Shine logo"
              width={48}
              height={48}
              loading="lazy"
              className="size-12 rounded-full"
            />
            <span className="chrome-text font-display text-lg font-extrabold uppercase">
              Drive Shine
            </span>
          </div>
          <p className="mt-5 max-w-xs text-sm text-muted-foreground">{site.tagline}</p>
          <ul className="mt-6 flex gap-3">
            {site.socials.map((s) => {
              const Icon = socialIcons[s.label as keyof typeof socialIcons];
              return (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="grid size-10 place-items-center rounded-full border border-white/10 text-chrome-300 transition-colors hover:border-red/40 hover:text-red"
                  >
                    <Icon className="size-4" aria-hidden="true" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <nav aria-label="Quick links">
          <h2 className="mono-label">Quick links</h2>
          <ul className="mt-5 space-y-3">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-sm text-muted-foreground transition-colors hover:text-bone"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="mono-label">Services</h2>
          <ul className="mt-5 space-y-3">
            {services.slice(0, 5).map((s) => (
              <li key={s.n}>
                <Link
                  to="/services"
                  className="text-sm text-muted-foreground transition-colors hover:text-bone"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mono-label">Contact</h2>
          <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-red" aria-hidden="true" />
              <a href={site.phoneHref} className="hover:text-bone">
                {site.phone}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-red" aria-hidden="true" />
              <a href={`mailto:${site.email}`} className="break-all hover:text-bone">
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-red" aria-hidden="true" />
              <span>
                {site.city}
                <br />
                {site.hours}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="hairline-t">
        <div className="shell flex flex-col gap-2 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="mono-label">© 2026 Drive Shine™. All rights reserved.</p>
          <p className="mono-label">Hyderabad • Independent PDI</p>
        </div>
      </div>
    </footer>
  );
}
