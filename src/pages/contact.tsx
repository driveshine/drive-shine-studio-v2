import { useEffect } from "react";
import { Clock, Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/data/site";
import { BookingForm } from "@/components/sections/booking-form";
import { Eyebrow } from "@/components/ui/section-heading";

const socialIcons = { Facebook, Instagram, LinkedIn: Linkedin } as const;

export default function ContactPage() {
  useEffect(() => {
    document.title = "Contact & Book — Drive Shine Hyderabad";
  }, []);

  return (
    <div className="bg-white">

      {/* ── Contact + Form ─────────────────────────────────────────────── */}
      <section>
        <div className="shell grid gap-14 pb-16 pt-32 lg:grid-cols-12 lg:gap-20 lg:pb-24">
          <div className="lg:col-span-5">
            <Eyebrow>Contact • 24/7</Eyebrow>
            <h1 className="mt-5 text-[clamp(2.5rem,5vw,4rem)] font-display font-extrabold text-gray-900">
              Talk to an inspector.
            </h1>
            <p className="mt-6 max-w-md text-lg text-gray-500">
              Deliveries move fast. Call us directly, or send the form and we'll confirm your slot
              quickly.
            </p>

            <ul className="mt-10 space-y-6">
              <li className="flex items-start gap-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-red/10">
                  <Phone className="size-4 text-red" aria-hidden="true" />
                </span>
                <div>
                  <p className="mono-label text-gray-400">Phone</p>
                  <a href={site.phoneHref} className="text-lg font-semibold text-gray-900 hover:text-red">
                    {site.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-red/10">
                  <Mail className="size-4 text-red" aria-hidden="true" />
                </span>
                <div>
                  <p className="mono-label text-gray-400">Email</p>
                  <a href={`mailto:${site.email}`} className="break-all text-lg font-semibold text-gray-900 hover:text-red">
                    {site.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-red/10">
                  <MapPin className="size-4 text-red" aria-hidden="true" />
                </span>
                <div>
                  <p className="mono-label text-gray-400">Coverage</p>
                  <p className="text-lg font-semibold text-gray-900">{site.city}</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-red/10">
                  <Clock className="size-4 text-red" aria-hidden="true" />
                </span>
                <div>
                  <p className="mono-label text-gray-400">Hours</p>
                  <p className="text-lg font-semibold text-gray-900">{site.hours}</p>
                </div>
              </li>
            </ul>

            <ul className="mt-10 flex gap-3">
              {site.socials.map((s) => {
                const Icon = socialIcons[s.label as keyof typeof socialIcons];
                return (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={s.label}
                      className="grid size-11 place-items-center rounded-full border border-black/10 text-gray-500 transition-colors hover:border-red hover:text-red"
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

      {/* ── Inspector photo ─────────────────────────────────────────────── */}
      <section className="bg-gray-50">
        <div className="shell section-y grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mono-label text-red">Our inspectors</p>
            <h2 className="mt-4 font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-extrabold text-gray-900">
              Professional tools. Independent eyes.
            </h2>
            <p className="mt-5 text-lg text-gray-500">
              Every Drive Shine inspector arrives with calibrated paint depth gauges, tyre tread
              depth tools and AC temperature meters — not just a checklist and a phone camera.
              We work for you, not the dealership.
            </p>
            <ul className="mt-8 space-y-3">
              {["Paint depth gauge", "Tyre tread depth gauge", "AC temperature check", "8+ years field experience"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-700">
                  <span className="size-2 shrink-0 rounded-full bg-red" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="overflow-hidden rounded-2xl border border-black/[0.06] shadow-lg">
            <img
              src="/heroimage.jpg"
              alt="Drive Shine inspector with customer"
              loading="lazy"
              width={1200}
              height={800}
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>

    </div>
  );
}
