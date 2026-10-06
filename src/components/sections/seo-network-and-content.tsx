import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  MapPin,
  CheckCircle2,
  AlertTriangle,
  FileText,
  Wrench,
  Gauge,
  Phone,
  ChevronDown,
  Building2,
  Calendar,
  Layers,
  Sparkles,
  Award,
} from "lucide-react";
import { AP_TELANGANA_CITIES } from "@/data/cities";
import { SectionHeading } from "@/components/ui/section-heading";

const inspectionCategories = [
  {
    title: "Exterior & Body Condition",
    points: "Panel alignment, panel gaps, door hinges, bumper fitment, hood/boot alignment",
  },
  {
    title: "Paint & Clear-Coat (Elcometer)",
    points: "Digital paint thickness scan across 14+ panels to detect transit repaints and scratches",
  },
  {
    title: "Tyres & Wheels",
    points: "DOT manufacturing date match, rim scratches, tread depth, spare tyre check",
  },
  {
    title: "Interior & Cabin Quality",
    points: "Upholstery stains, dashboard rattles, seatbelt lock tests, trim fitment",
  },
  {
    title: "Electrical Systems & Lights",
    points: "Headlights, tail lamps, fog lamps, indicators, power windows, wipers, horn",
  },
  {
    title: "AC & Climate Control",
    points: "Digital thermometer cooling check, cabin blower airflow, heater & vent operation",
  },
  {
    title: "Engine Bay, Battery & Fluids",
    points: "Engine oil, coolant, brake fluid, battery terminal health, rodent bite checks",
  },
  {
    title: "Brakes, Steering & Suspension",
    points: "Brake pedal feel, steering rack play, suspension bounce & damper visual check",
  },
  {
    title: "Underbody & Exhaust Audit",
    points: "Ground scraping marks, floorboard rust, exhaust line mounts, catalytic converter",
  },
  {
    title: "OBD-II Diagnostic Scan",
    points: "ECU error code scan, electronic module status, odometer rollback verification",
  },
  {
    title: "VIN & Documentation Check",
    points: "Form 22, engine & chassis number match, manufacturing month/year decoder",
  },
  {
    title: "Accessories & Delivery Kit",
    points: "Jack, spanner, toolkit, floor mats, owner manual, dual key check",
  },
];

const faqs = [
  {
    q: "Does the car dealership allow third-party PDI inspectors?",
    a: "Yes. As a car buyer, you have the full legal right to inspect the vehicle you are paying for before registration. Dealerships across Hyderabad, Visakhapatnam, Vijayawada, Guntur, and all other cities routinely grant access to Drive Shine inspectors at their showrooms or stockyards.",
  },
  {
    q: "When is the best time to do a PDI?",
    a: "The ideal time is when the car arrives at the dealer's stockyard, BEFORE you sign the RTO registration papers and before loan disbursement. Once a car is registered with the RTO in your name, dealers cannot exchange the vehicle even if serious transit damage is discovered.",
  },
  {
    q: "How does Drive Shine detect repainted panels on a new car?",
    a: "We use calibrated digital paint thickness gauges (Elcometers) that measure coating thickness in microns. Factory paint is typically 90–130 microns thick with even distribution, while transit-damage repainting done by dealers registers significantly higher (200+ microns) with uneven clear coats.",
  },
  {
    q: "What happens if Drive Shine finds defects during the inspection?",
    a: "You receive a comprehensive digital report with photos and notes immediately via WhatsApp. You can present this report to the dealership to have parts replaced, transit scratches professionally corrected, or ask for another vehicle chassis to be allotted before registration.",
  },
  {
    q: "How much does a Drive Shine Pre-Delivery Inspection cost?",
    a: "Drive Shine inspection packages start from just ₹1,999. Considering a new car costs anywhere between ₹8 Lakhs to ₹40+ Lakhs, an independent ₹1,999 PDI is the smartest insurance to ensure you receive a flawless factory-spec car.",
  },
];

export function SeoNetworkAndContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-white">
      {/* ── 1. AP & TELANGANA 8 CITIES NETWORK ─────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-carbon-800 border-y border-hairline">
        <div className="shell">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-red px-3.5 py-1.5 mb-4 shadow-xs">
              <MapPin className="w-4 h-4 text-white" />
              <span className="font-sans text-xs font-bold uppercase tracking-wider text-white">
                ANDHRA PRADESH &amp; TELANGANA NETWORK
              </span>
            </div>
            <h2 className="font-display font-black tracking-tight text-[clamp(1.9rem,3.8vw,3rem)] text-ink">
              8 Cities. One Standard.
            </h2>
            <p className="text-ink-muted text-sm sm:text-base mt-3 max-w-2xl mx-auto leading-relaxed">
              Drive Shine is building a trusted car inspection and PDI network across Andhra Pradesh and Telangana, making professional vehicle inspection accessible to customers across multiple cities. Every Drive Shine PDI follows a standardized inspection process designed to provide customers with a clear and detailed understanding of the vehicle’s observable condition before delivery.
            </p>
          </div>

          {/* 8 Cities Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {AP_TELANGANA_CITIES.map((city) => (
              <Link
                key={city.slug}
                to={`/pdi-${city.slug}`}
                className="group card-surface p-5 rounded-2xl border border-hairline hover:border-red transition-all duration-200 flex flex-col justify-between shadow-xs hover:shadow-md hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono font-bold text-red uppercase tracking-wider bg-red/10 px-2 py-0.5 rounded">
                      {city.state}
                    </span>
                    <span className="text-xs text-ink-muted font-mono">150+ Points</span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-ink group-hover:text-red transition-colors">
                    {city.name} PDI
                  </h3>
                  <p className="text-xs text-ink-muted mt-2 leading-relaxed line-clamp-3">
                    {city.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {city.coverageAreas.slice(0, 3).map((area) => (
                      <span
                        key={area}
                        className="text-[11px] bg-carbon-800 text-ink-soft px-2 py-0.5 rounded border border-hairline font-medium"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-hairline flex items-center justify-between text-xs font-bold text-red">
                  <span>View City Hub →</span>
                  <span className="text-ink-muted font-normal">On-Site Dealer PDI</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-xs font-mono text-ink-muted">
              Also serving surrounding regional stockyards and auto corridors on request.
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. WHAT IS A CAR PDI & 150+ POINT CHECKLIST ──────────────────────── */}
      <section className="py-16 md:py-24 bg-white border-b border-hairline">
        <div className="shell">
          <SectionHeading
            eyebrow="SYSTEMATIC INSPECTION SCOPE"
            title="What Is a Car PDI? Our 150+ Point Process"
            copy="Pre-Delivery Inspection (PDI) is a detailed inspection performed before a customer accepts delivery of a new or used vehicle. A professional PDI helps identify issues that may not be immediately noticeable during a normal showroom walkaround."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {inspectionCategories.map((cat, i) => (
              <div
                key={cat.title}
                className="p-5 rounded-2xl bg-carbon-800 border border-hairline flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="size-6 rounded-full bg-red/10 text-red font-mono text-xs font-bold grid place-items-center">
                      {i + 1}
                    </span>
                    <h3 className="font-display font-bold text-base text-ink">
                      {cat.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-ink-muted leading-relaxed mt-2">
                    {cat.points}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-hairline flex items-center gap-1.5 text-[11px] font-semibold text-red">
                  <CheckCircle2 className="size-3.5 shrink-0" />
                  <span>Verified by Certified Inspector</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. CRITICAL ADVISORY: INSPECT BEFORE REGISTRATION ─────────────────── */}
      <section className="py-16 md:py-20 bg-carbon-900 text-white relative overflow-hidden">
        <div className="shell relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/20 border border-amber-500/40 px-3.5 py-1.5 mb-5 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <AlertTriangle className="size-4 shrink-0" />
              CRITICAL BUYER ADVISORY
            </div>
            <h2 className="font-display font-black text-2xl sm:text-4xl text-white tracking-tight leading-tight">
              Car PDI Before New Car Delivery:
              <br />
              <span className="text-red">Inspect Before You Sign &amp; Register</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-gray-300 leading-relaxed">
              Buying a new car is a major investment. Before accepting delivery, customers should verify the vehicle’s visible condition, manufacturing information, tyres, paint, body panels, electrical systems, documents, and other accessible inspection points.
            </p>
            <p className="mt-3 text-sm sm:text-base text-amber-200 font-semibold leading-relaxed">
              Don’t rely only on a quick delivery-day walkaround. Once RTO registration is complete, the car is legally yours—dealers cannot swap or replace a damaged car. Get your vehicle professionally inspected before you accept delivery.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-red px-6 py-3.5 font-sans text-sm font-bold text-white transition-opacity hover:opacity-90 shadow-md"
              >
                <ShieldCheck className="size-4" />
                BOOK PDI BEFORE REGISTRATION
              </Link>
              <a
                href="tel:+919494642244"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-6 py-3.5 font-sans text-sm font-bold text-white hover:bg-white/10 transition-colors"
              >
                <Phone className="size-4 text-red" />
                Call 94946 42244
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. WHY CHOOSE DRIVE SHINE PDI? ────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white border-b border-hairline">
        <div className="shell">
          <SectionHeading
            eyebrow="WHY CHOOSE DRIVE SHINE PDI?"
            title="Independent, Tool-Assisted Inspection Standard"
            copy="We don't sell cars, and we have zero dealership commissions. Our only commitment is ensuring you receive a defect-free car."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="p-6 rounded-2xl bg-carbon-800 border border-hairline">
              <div className="size-11 rounded-xl bg-red/10 text-red grid place-items-center mb-4">
                <CheckCircle2 className="size-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-ink mb-2">150+ Point Inspection</h3>
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                A structured inspection covering multiple areas of the vehicle, from paint thickness to underbody rust and engine fluids.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-carbon-800 border border-hairline">
              <div className="size-11 rounded-xl bg-red/10 text-red grid place-items-center mb-4">
                <FileText className="size-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-ink mb-2">Detailed Digital Report</h3>
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                Receive a comprehensive digital report with photos documenting all observable inspection findings via WhatsApp.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-carbon-800 border border-hairline">
              <div className="size-11 rounded-xl bg-red/10 text-red grid place-items-center mb-4">
                <Award className="size-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-ink mb-2">100% Independent Inspection</h3>
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                Get an unbiased inspection focused purely on recording observable vehicle condition without any showroom affiliation.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-carbon-800 border border-hairline">
              <div className="size-11 rounded-xl bg-red/10 text-red grid place-items-center mb-4">
                <Gauge className="size-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-ink mb-2">Professional Inspection Tools</h3>
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                Our inspection process includes precision tools such as digital paint thickness gauges (Elcometers) and OBD scanners.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-carbon-800 border border-hairline">
              <div className="size-11 rounded-xl bg-red/10 text-red grid place-items-center mb-4">
                <MapPin className="size-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-ink mb-2">Multi-City Network</h3>
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                Access Drive Shine PDI services across major cities in Andhra Pradesh and Telangana with standardized processes.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-carbon-800 border border-hairline">
              <div className="size-11 rounded-xl bg-red/10 text-red grid place-items-center mb-4">
                <Wrench className="size-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-ink mb-2">Authorized PDI Inspectors</h3>
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                Inspections are performed through Drive Shine’s trained and authorized automotive engineers with on-site experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. SEO FAQS ACCORDION (CAPTURES FEATURED SNIPPETS) ────────────────── */}
      <section className="py-16 md:py-24 bg-carbon-800 border-b border-hairline">
        <div className="shell max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="FREQUENTLY ASKED QUESTIONS"
            title="Everything You Need to Know About Car PDI"
            copy="Common questions car buyers ask before booking an independent Pre-Delivery Inspection."
          />

          <div className="mt-10 space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.q}
                  className="rounded-2xl border border-hairline bg-white overflow-hidden shadow-xs"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-display font-bold text-base sm:text-lg text-ink hover:text-red transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`size-5 text-red shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 text-sm text-ink-muted leading-relaxed border-t border-hairline pt-4 bg-carbon-800/40">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 6. ABOUT DRIVE SHINE BRAND STORY ──────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="shell">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display font-black text-2xl sm:text-3xl text-ink tracking-tight mb-4">
              About Drive Shine
            </h2>
            <p className="text-sm sm:text-base text-ink-soft leading-relaxed mb-4">
              Drive Shine is an automotive brand focused on helping customers make more informed vehicle-buying decisions. Our PDI service combines a standardized inspection methodology, trained inspectors, digital reporting, and a growing multi-city operational network.
            </p>
            <p className="text-sm sm:text-base text-ink-soft leading-relaxed mb-6 font-semibold">
              Our goal is simple: Make professional vehicle inspection accessible to every car buyer. From a single inspection to a growing network across Andhra Pradesh and Telangana, Drive Shine is building a standardized approach to car PDI and pre-delivery inspection.
            </p>
            <div className="p-6 rounded-2xl bg-red text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
              <div className="text-left">
                <p className="font-display font-black text-xl">Inspect First. Drive With Confidence.</p>
                <p className="text-xs text-white/90 mt-1">
                  Professional PDI packages starting from ₹1,999 across AP &amp; Telangana.
                </p>
              </div>
              <a
                href="tel:+919494642244"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-sans text-sm font-bold text-red hover:bg-neutral-100 transition-colors shrink-0 shadow-sm"
              >
                <Phone className="size-4" />
                📞 94946 42244
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
