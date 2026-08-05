import { createFileRoute } from "@tanstack/react-router";
import { Clock, Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/data/site";
import { BookingForm } from "@/components/sections/booking-form";
import { Eyebrow } from "@/components/ui/section-heading";

const title = "Contact & Book — Drive Shine Hyderabad";
const description =
  "Book an independent new car pre-delivery inspection in Hyderabad. Call 9494642244 or request a slot — we respond within 2 hours, 24/7.";

export const Route = createFileRoute("/contact")({
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
  component: ContactPage,
});

const socialIcons = { Facebook, Instagram, LinkedIn: Linkedin } as const;

function ContactPage() {
  return (
    <section className="bg-carbon">
      <div className="shell grid gap-14 pb-24 pt-40 lg:grid-cols-12 lg:gap-20 lg:pb-36">
        <div className="lg:col-span-5">
          <Eyebrow>Contact • 24/7</Eyebrow>
          <h1 className="chrome-text mt-5 text-[clamp(2.5rem,5vw,4rem)]">
            Talk to an inspector.
          </h1>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">
            Deliveries move fast. Call us directly, or send the form and we'll confirm your slot
            within two hours.
          </p>

          <ul className="mt-12 space-y-7">
            <li className="flex items-start gap-4">
              <Phone className="mt-1 size-5 shrink-0 text-red" aria-hidden="true" />
              <div>
                <p className="mono-label">Phone</p>
                <a href={site.phoneHref} className="text-lg text-bone hover:text-red">
                  {site.phone}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <Mail className="mt-1 size-5 shrink-0 text-red" aria-hidden="true" />
              <div>
                <p className="mono-label">Email</p>
                <a
                  href={`mailto:${site.email}`}
                  className="break-all text-lg text-bone hover:text-red"
                >
                  {site.email}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <MapPin className="mt-1 size-5 shrink-0 text-red" aria-hidden="true" />
              <div>
                <p className="mono-label">Coverage</p>
                <p className="text-lg text-bone">{site.city}</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <Clock className="mt-1 size-5 shrink-0 text-red" aria-hidden="true" />
              <div>
                <p className="mono-label">Hours</p>
                <p className="text-lg text-bone">{site.hours}</p>
              </div>
            </li>
          </ul>

          <ul className="mt-12 flex gap-3">
            {site.socials.map((s) => {
              const Icon = socialIcons[s.label as keyof typeof socialIcons];
              return (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="grid size-11 place-items-center rounded-full border border-white/10 text-chrome-300 transition-colors hover:border-red/40 hover:text-red"
                  >
                    <Icon className="size-4" aria-hidden="true" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="lg:col-span-7">
          <BookingForm />
        </div>
      </div>
    </section>
  );
}
