import { useEffect } from "react";
import { Check, Clock, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { site } from "@/data/site";
import { BookingForm } from "@/components/sections/booking-form";

const included = [
  "150+ Point Inspection",
  "Paint Thickness Test",
  "Tyre Tread Depth Measurement",
  "AC Cooling Performance Test",
  "Engine & Transmission Check",
  "Interior & Exterior Inspection",
  "Road Test",
  "On-Spot Findings Walkthrough",
  "HD Photos & Videos",
  "Expert Purchase Recommendation",
];

const pricingTiers = [
  {
    name: "HATCHBACK",
    price: "₹1,499",
    icon: (
      <svg viewBox="0 0 24 24" className="size-7 fill-current" aria-hidden="true">
        <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
      </svg>
    ),
    featured: false,
  },
  {
    name: "SEDAN",
    price: "₹1,599",
    icon: (
      <svg viewBox="0 0 24 24" className="size-7 fill-current" aria-hidden="true">
        <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
      </svg>
    ),
    featured: false,
  },
  {
    name: "SUV / MPV",
    price: "₹1,999",
    icon: (
      <svg viewBox="0 0 24 24" className="size-7 fill-current" aria-hidden="true">
        <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
      </svg>
    ),
    featured: true,
  },
];

export default function ContactPage() {
  useEffect(() => {
    document.title = "Contact & Book — Drive Shine Hyderabad";
  }, []);

  return (
    <div className="bg-white">

      {/* ── Pricing Section ─────────────────────────────────────────────── */}
      <section className="pt-28 pb-12">
        <div className="shell">
          <div className="text-center mb-10">
            <p className="mono-label text-red mb-2">Transparent Pricing</p>
            <h1 className="font-display text-[clamp(2rem,4vw,3rem)] font-black text-ink">Simple, honest pricing.</h1>
            <p className="mt-2 text-gray-500">One flat fee based on vehicle type. No hidden charges.</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative flex flex-col rounded-2xl border p-8 ${
                  tier.featured
                    ? "border-red shadow-[0_0_0_2px_#D91E2C]"
                    : "border-black/[0.1] shadow-sm"
                }`}
              >
                {tier.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="mono-label rounded-full bg-red px-4 py-1.5 text-white shadow">Most Popular</span>
                  </div>
                )}

                {/* Icon */}
                <div className={`mb-5 inline-flex size-14 items-center justify-center rounded-xl ${tier.featured ? "bg-red text-white" : "bg-red/10 text-red"}`}>
                  {tier.icon}
                </div>

                {/* Name */}
                <h2 className="font-display text-xl font-black tracking-wide text-ink">{tier.name}</h2>

                {/* Price */}
                <p className="mt-2 font-display text-4xl font-black text-red">{tier.price}</p>
                <p className="mt-1 text-xs text-red">Includes Complete Drive Shine PDI Inspection</p>

                {/* Checklist */}
                <ul className="mt-5 flex flex-col gap-2 flex-1">
                  {included.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <Check className="size-3.5 shrink-0 text-red" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  to="#book"
                  onClick={() => document.getElementById("book")?.scrollIntoView({ behavior: "smooth" })}
                  className={`mt-6 flex w-full items-center justify-center rounded-xl py-3.5 font-sans text-sm font-bold transition-opacity hover:opacity-90 ${
                    tier.featured ? "bg-red text-white" : "border-2 border-black/20 text-ink hover:border-red hover:text-red"
                  }`}
                >
                  Book Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Booking Form ─────────────────────────────────────────────── */}
      <section id="book" className="bg-gray-50 py-16">
        <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-20">
          {/* Left — contact info */}
          <div className="lg:col-span-4">
            <p className="mono-label text-red mb-2">Book Inspection</p>
            <h2 className="font-display text-2xl font-extrabold text-ink">Talk to an inspector.</h2>
            <p className="mt-3 text-sm text-gray-500">Deliveries move fast. Fill the form and we'll confirm your slot quickly.</p>
            <ul className="mt-6 space-y-4">
              <li className="flex items-center gap-3">
                <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-red/10"><Phone className="size-4 text-red" /></span>
                <a href={site.phoneHref} className="font-semibold text-gray-900 hover:text-red">{site.phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-red/10"><Mail className="size-4 text-red" /></span>
                <a href={`mailto:${site.email}`} className="break-all font-semibold text-gray-900 hover:text-red">{site.email}</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-red/10"><MapPin className="size-4 text-red" /></span>
                <span className="font-semibold text-gray-900">{site.city}</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-red/10"><Clock className="size-4 text-red" /></span>
                <span className="font-semibold text-gray-900">{site.hours}</span>
              </li>
            </ul>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-8">
            <BookingForm />
          </div>
        </div>
      </section>

      {/* ── Inspector photo ─────────────────────────────────────────────── */}
      <section className="bg-white">
        <div className="shell section-y grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mono-label text-red">Our inspectors</p>
            <h2 className="mt-4 font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-extrabold text-gray-900">
              Professional tools. Independent eyes.
            </h2>
            <p className="mt-5 text-lg text-gray-500">
              Every Drive Shine inspector arrives with calibrated paint depth gauges, tyre tread
              depth tools and AC temperature meters — not just a checklist and a phone camera.
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
            <img src="/heroimage.jpg" alt="Drive Shine inspector with customer" loading="lazy" width={1200} height={800} className="w-full object-cover" />
          </div>
        </div>
      </section>

    </div>
  );
}
