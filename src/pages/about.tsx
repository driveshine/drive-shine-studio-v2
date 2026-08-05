import { useEffect } from "react";
import { Clock, Eye, Gauge, MapPin, Shield } from "lucide-react";
import { aboutCopy, images, site, values } from "@/data/site";
import logoUrl from "@/assets/logo.png";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { SectionHeading } from "@/components/ui/section-heading";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const icons = { shield: Shield, gauge: Gauge, eye: Eye } as const;

export default function AboutPage() {
  const ref = useGsapReveal<HTMLElement>();
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    document.title = "About Drive Shine — Independent Inspectors, Hyderabad";
  }, []);

  return (
    <>
      <PageHero
        eyebrow="About • Drive Shine™"
        title="The hour that decides everything."
        image={images.aboutHero}
        alt="Blurred workshop interior at night with deep shadows"
      />

      <section ref={ref} className="bg-carbon">
        <div className="shell section-y grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            {aboutCopy.map((p) => (
              <p key={p.slice(0, 24)} className="reveal mb-6 text-lg text-muted-foreground">
                {p}
              </p>
            ))}
          </div>

          <div className="lg:col-span-5 lg:pl-10">
            <div className="reveal card-surface p-8">
              <h2 className="mono-label">Coverage</h2>
              <ul className="mt-6 space-y-5 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-red" aria-hidden="true" />
                  Across {site.city} — dealership or your home
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 size-4 shrink-0 text-red" aria-hidden="true" />
                  {site.hours}
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="mt-0.5 size-4 shrink-0 text-red" aria-hidden="true" />
                  Certified, independent inspectors only
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="noise-grid relative overflow-hidden bg-carbon-800">
        <div className="shell section-y">
          <SectionHeading eyebrow="Values" title="What we refuse to compromise." />
          <ul className="mt-14 grid gap-8 lg:grid-cols-3">
            {values.map((v) => {
              const Icon = icons[v.icon as keyof typeof icons];
              return (
                <li key={v.label} className="card-surface p-8">
                  <Icon className="size-6 text-red" aria-hidden="true" />
                  <h3 className="mono-label mt-6 text-bone">{v.label}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{v.copy}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="bg-carbon">
        <div className="shell section-y flex flex-col items-center text-center">
          <div className="relative grid size-56 place-items-center sm:size-72">
            <span
              aria-hidden="true"
              className="absolute inset-0 rounded-full border border-dashed border-red/40"
              style={reduced ? undefined : { animation: "ds-spin 12s linear infinite" }}
            />
            <img
              src={logoUrl}
              alt="Drive Shine circular logo"
              loading="lazy"
              width={240}
              height={240}
              className="size-[82%] rounded-full"
            />
          </div>
          <p className="chrome-text mt-10 max-w-2xl font-display text-[clamp(1.5rem,3vw,2.5rem)] font-extrabold">
            {site.tagline}
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
