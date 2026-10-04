import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ShieldCheck,
  CheckCircle2,
  MapPin,
  Calendar,
  AlertTriangle,
  Gauge,
  Cpu,
  Clock,
  Car,
  FileCheck2,
  Building2,
  Check,
  Sparkles,
} from "lucide-react";
import { fetchCityBySlug, type CityData, FALLBACK_CITIES } from "@/data/cities";
import { BookingForm } from "@/components/sections/booking-form";
import { CityPills } from "@/components/sections/city-pills";
import { SectionHeading } from "@/components/ui/section-heading";
import { site } from "@/data/site";

export default function CityPage() {
  const { citySlug } = useParams<{ citySlug: string }>();
  const [city, setCity] = useState<CityData | null>(() => {
    const slug = (citySlug || "").toLowerCase().trim();
    return FALLBACK_CITIES.find((c) => c.slug === slug) || null;
  });
  const [loading, setLoading] = useState(!city);

  useEffect(() => {
    if (!citySlug) return;
    void fetchCityBySlug(citySlug).then((data) => {
      setCity(data);
      setLoading(false);
      if (data) {
        document.title = `${data.headline} | DriveShine™`;
      }
    });
  }, [citySlug]);

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-white">
        <div className="animate-pulse text-ink-muted mono-label text-sm flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-red animate-ping" />
          Loading {citySlug} inspection center…
        </div>
      </div>
    );
  }

  const cityName = city?.name || (citySlug ? citySlug.charAt(0).toUpperCase() + citySlug.slice(1) : "Your City");
  const headline = city?.headline || `Car PDI in ${cityName} — 150+ Point Vehicle Inspection`;
  const description =
    city?.description ||
    `DriveShine provides certified independent pre-delivery inspections at any dealership showroom or stockyard across ${cityName}. We ensure your new vehicle is 100% defect-free before you sign handover documents.`;

  const coverage =
    city?.coverageAreas && city.coverageAreas.length > 0
      ? city.coverageAreas
      : [`Central ${cityName}`, `All Major Dealerships`, `Dealer Stockyards`, `Auto Nagar`];

  const whatsappMessage = encodeURIComponent(
    `Hi DriveShine, I want to book a PDI in ${cityName} for my car. Please share available inspector slots.`
  );
  const whatsappUrl = `https://wa.me/${site.phone}?text=${whatsappMessage}`;

  return (
    <div className="bg-white">
      {/* ── HERO SECTION ────────────────────────────────────────────────────── */}
      <section className="bg-white pt-24 pb-16 md:pt-28 md:pb-20 border-b border-hairline overflow-hidden">
        <div className="shell">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs mono-label text-ink-muted mb-6">
            <Link to="/" className="hover:text-red transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link to="/" className="hover:text-red transition-colors">
              Cities
            </Link>
            <span>/</span>
            <span className="text-red font-bold">{cityName}</span>
          </nav>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Heading, Badges, CTAs */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              {/* Eyebrow badge */}
              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-red px-3.5 py-1.5 mb-4 shadow-xs">
                <ShieldCheck className="w-4 h-4 text-white" />
                <span className="font-sans text-xs font-bold uppercase tracking-wider text-white">
                  VERIFIED DEALERSHIP PDI • {cityName.toUpperCase()}
                </span>
              </div>

              <p className="mono-label text-ink-muted mb-2">
                Professional Pre-Delivery Car Inspection
              </p>

              {/* Main Heading */}
              <h1 className="font-display font-black leading-[1.05] tracking-tight text-[clamp(2.2rem,4.5vw,3.8rem)] text-ink mb-4">
                Car PDI in <span className="text-red">{cityName}</span>
              </h1>

              {/* Headline & Description */}
              <p className="text-base sm:text-lg font-bold text-ink-soft mb-3 leading-snug">
                {headline}
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-ink-muted mb-6">
                {description}
              </p>

              <div className="h-0.5 w-12 rounded-full bg-red mb-6" />

              {/* Key Highlights Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-carbon-800 border border-hairline text-ink">
                  <CheckCircle2 className="w-4 h-4 text-red shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold">150+ Checkpoints</span>
                </div>
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-carbon-800 border border-hairline text-ink">
                  <Gauge className="w-4 h-4 text-red shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold">Digital Paint Meter</span>
                </div>
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-carbon-800 border border-hairline text-ink">
                  <Cpu className="w-4 h-4 text-red shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold">OBD-II Diagnostics</span>
                </div>
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-carbon-800 border border-hairline text-ink">
                  <ShieldCheck className="w-4 h-4 text-red shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold">Zero Dealer Tie-Ups</span>
                </div>
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-carbon-800 border border-hairline text-ink">
                  <Clock className="w-4 h-4 text-red shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold">Same-Day Slots</span>
                </div>
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-carbon-800 border border-hairline text-ink">
                  <FileCheck2 className="w-4 h-4 text-red shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold">Instant PDF Report</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#book-pdi"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-red px-6 py-3.5 font-sans text-sm font-bold text-white transition-opacity hover:opacity-90 shadow-md"
                >
                  <Car className="w-4 h-4" />
                  Book Inspection in {cityName}
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-emerald-600 bg-emerald-50/70 hover:bg-emerald-600 hover:text-white text-emerald-700 px-6 py-3.5 font-sans text-sm font-bold transition-all shadow-xs"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L.057 23.882l6.186-1.443A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.371l-.36-.214-3.724.868.936-3.42-.235-.372A9.818 9.818 0 1112 21.818z"/>
                  </svg>
                  WhatsApp {cityName} Inspector
                </a>
              </div>
            </div>

            {/* Right Column: High-Impact Visual Card */}
            <div className="lg:col-span-5">
              <div className="card-surface p-6 sm:p-7 flex flex-col gap-5 border border-hairline">
                <div>
                  <div className="flex items-center gap-2 text-red font-bold text-xs uppercase tracking-wider mb-1">
                    <MapPin className="w-4 h-4" />
                    <span>Showroom &amp; Stockyard Hubs</span>
                  </div>
                  <h3 className="font-display font-extrabold text-xl text-ink">
                    On-Site Coverage in {cityName}
                  </h3>
                  <p className="text-ink-muted text-xs sm:text-sm mt-1">
                    Our certified automotive engineers travel directly to your dealership showroom, delivery yard, or regional stockyard across:
                  </p>
                </div>

                {/* Coverage areas pill tags */}
                <div className="flex flex-wrap gap-2">
                  {coverage.map((area, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center px-3 py-1.5 rounded-lg bg-carbon-800 text-ink text-xs font-semibold border border-hairline"
                    >
                      <MapPin className="w-3 h-3 text-red mr-1.5 shrink-0" />
                      {area}
                    </span>
                  ))}
                </div>

                {/* Real instrument photo */}
                <div className="relative rounded-xl overflow-hidden aspect-video border border-hairline bg-carbon-800">
                  <img
                    src="/pic3.jpg"
                    alt={`DriveShine inspector inspecting car in ${cityName}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2.5 left-2.5 px-3 py-1.5 rounded-md bg-black/80 backdrop-blur-xs text-[11px] font-mono font-bold text-white flex items-center gap-2">
                    <Gauge className="w-3.5 h-3.5 text-red" />
                    Digital Elcometer Gauge On-Site
                  </div>
                </div>

                {/* Brand badges */}
                <div className="pt-3 border-t border-hairline flex flex-col gap-1.5 text-xs">
                  <span className="mono-label text-ink-muted">Authorized Independent Assessment For:</span>
                  <p className="font-semibold text-ink-soft">
                    Maruti Suzuki • Hyundai • Tata • Mahindra • Kia • Toyota • Skoda • Volkswagen • MG • Honda
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY PDI MATTERS IN THIS CITY ───────────────────────────────────────── */}
      <section className="bg-carbon-800 section-y hairline-t">
        <div className="shell">
          <SectionHeading
            eyebrow={`WHY CAR PDI MATTERS IN ${cityName.toUpperCase()}`}
            title="Problems caught before delivery are dealership responsibility. Yours after."
            copy={`Vehicles travel hundreds of kilometres on multi-car carrier trailers, undergo open-yard storage, and pass through multiple handling hands before arrival at ${cityName} showrooms. Once you sign the delivery gate pass, the showroom is rarely accountable.`}
          />

          <div className="grid md:grid-cols-3 gap-6 mt-10 md:mt-12">
            {/* Card 1 */}
            <div className="card-surface p-6 sm:p-7 flex flex-col">
              <div className="rounded-xl overflow-hidden aspect-video mb-5 border border-hairline">
                <img src="/pic3.jpg" alt="Paint depth meter" className="w-full h-full object-cover" />
              </div>
              <div className="w-10 h-10 rounded-lg bg-red/10 flex items-center justify-center text-red mb-4">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h3 className="font-display font-extrabold text-lg text-ink mb-2">
                Concealed Repaints &amp; Transit Scrapes
              </h3>
              <p className="text-ink-muted text-sm leading-relaxed mb-4 flex-1">
                Loading and unloading from carriers causes bumper scrapes and transit scratches. Dealerships routinely repaint panels before handover without informing the buyer. Our digital paint gauge uncovers clear-coat thickness irregularities down to the exact micron.
              </p>
              <div className="pt-3 border-t border-hairline flex items-center gap-2 text-xs font-bold text-red">
                <Check className="w-4 h-4" /> 14-Panel Thickness Scan
              </div>
            </div>

            {/* Card 2 */}
            <div className="card-surface p-6 sm:p-7 flex flex-col">
              <div className="rounded-xl overflow-hidden aspect-video mb-5 border border-hairline">
                <img src="/pic2.jpg" alt="Diagnostic scanner" className="w-full h-full object-cover" />
              </div>
              <div className="w-10 h-10 rounded-lg bg-red/10 flex items-center justify-center text-red mb-4">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="font-display font-extrabold text-lg text-ink mb-2">
                ECU Error Codes &amp; Battery Drain
              </h3>
              <p className="text-ink-muted text-sm leading-relaxed mb-4 flex-1">
                Modern cars house 40+ onboard microprocessors. Vehicles sitting in regional dealer stockyards for months suffer from drained 12V batteries and latent diagnostic trouble codes (DTCs) that our OBD-II diagnostic tool immediately detects.
              </p>
              <div className="pt-3 border-t border-hairline flex items-center gap-2 text-xs font-bold text-red">
                <Check className="w-4 h-4" /> Full Electronic DTC Scan
              </div>
            </div>

            {/* Card 3 */}
            <div className="card-surface p-6 sm:p-7 flex flex-col">
              <div className="rounded-xl overflow-hidden aspect-video mb-5 border border-hairline">
                <img src="/pic1.jpg" alt="Tyre depth inspection" className="w-full h-full object-cover" />
              </div>
              <div className="w-10 h-10 rounded-lg bg-red/10 flex items-center justify-center text-red mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-display font-extrabold text-lg text-ink mb-2">
                100% Buyer Advocate &amp; Leverage
              </h3>
              <p className="text-ink-muted text-sm leading-relaxed mb-4 flex-1">
                DriveShine accepts zero commissions and has no showroom tie-ups. Armed with an objective, instrument-backed inspection report, you have the proof you need to insist on factory parts replacement, polishing, or a fresh vehicle allotment.
              </p>
              <div className="pt-3 border-t border-hairline flex items-center gap-2 text-xs font-bold text-red">
                <Check className="w-4 h-4" /> Zero Showroom Affiliation
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 150+ CHECKPOINT BREAKDOWN ─────────────────────────────────────────── */}
      <section className="bg-white section-y hairline-t">
        <div className="shell">
          <SectionHeading
            eyebrow="COMPREHENSIVE CHECKLIST"
            title={`What We Inspect On-Site in ${cityName}`}
            copy="Every DriveShine inspection covers 150+ individual checkpoints across 6 core systems using calibrated industrial instruments."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 md:mt-12">
            {/* System 1 */}
            <div className="card-surface p-6 sm:p-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-lg bg-red text-white text-xs flex items-center justify-center font-bold">1</span>
                <h3 className="font-display font-extrabold text-base text-ink">
                  Exterior &amp; Paint Thickness
                </h3>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-ink-soft">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Digital paint depth gauge reading across all 14 panels</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Panel gap alignment &amp; factory robotic sealant check</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Glass manufacturing quarterly date codes verification</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Transit stone chips, clearcoat swirl burns &amp; scratches</span>
                </li>
              </ul>
            </div>

            {/* System 2 */}
            <div className="card-surface p-6 sm:p-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-lg bg-red text-white text-xs flex items-center justify-center font-bold">2</span>
                <h3 className="font-display font-extrabold text-base text-ink">
                  Engine Bay &amp; Fluid Integrity
                </h3>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-ink-soft">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Engine oil level, brake fluid, and coolant quality</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Under-hood wiring harness condition &amp; rat bite check</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>12V battery resting voltage &amp; alternator charging state</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Engine head gasket seepage and fluid leak inspection</span>
                </li>
              </ul>
            </div>

            {/* System 3 */}
            <div className="card-surface p-6 sm:p-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-lg bg-red text-white text-xs flex items-center justify-center font-bold">3</span>
                <h3 className="font-display font-extrabold text-base text-ink">
                  OBD-II Diagnostic Scan
                </h3>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-ink-soft">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>ECU diagnostic scan for active and historical error codes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Digital odometer tamper check &amp; transit distance match</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Transmission module, steering angle sensor readiness</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Airbag deployment sensors and ABS module sanity</span>
                </li>
              </ul>
            </div>

            {/* System 4 */}
            <div className="card-surface p-6 sm:p-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-lg bg-red text-white text-xs flex items-center justify-center font-bold">4</span>
                <h3 className="font-display font-extrabold text-base text-ink">
                  Interior &amp; Electricals
                </h3>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-ink-soft">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Air conditioning digital thermometer temperature test</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Infotainment touchscreen, audio, reverse camera &amp; sensors</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Power windows, electric sunroof, mirrors &amp; central lock</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Seat upholstery stitches, dashboard scuffs &amp; carpet dampness</span>
                </li>
              </ul>
            </div>

            {/* System 5 */}
            <div className="card-surface p-6 sm:p-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-lg bg-red text-white text-xs flex items-center justify-center font-bold">5</span>
                <h3 className="font-display font-extrabold text-base text-ink">
                  Tyres &amp; Underbody
                </h3>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-ink-soft">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>All 5 tyre manufacturing DOT codes &amp; tread depths</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Alloy wheel curb rash, rim bends &amp; valve integrity</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Underbody floor pan, chassis rails &amp; exhaust pipe scrapes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Anti-rust coating check &amp; transit tie-down damage review</span>
                </li>
              </ul>
            </div>

            {/* System 6 */}
            <div className="card-surface p-6 sm:p-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-lg bg-red text-white text-xs flex items-center justify-center font-bold">6</span>
                <h3 className="font-display font-extrabold text-base text-ink">
                  Delivery Kit &amp; Road Test
                </h3>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-ink-soft">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Stockyard driving check (steering centering, clutch, brake bite)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Suspension noise, rattle and steering vibration audit</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Spare tyre, jack, wheel spanner, and tow hook present</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Both remote keys, owner handbook, and tool kit verification</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── BOOKING FORM EMBEDDED ────────────────────────────────────────────── */}
      <section id="book-pdi" className="bg-carbon-800 section-y hairline-t">
        <div className="shell">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-red px-3 py-1 mb-4 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span className="font-sans text-xs font-bold uppercase tracking-wider text-white">
                SCHEDULE YOUR INSPECTOR
              </span>
            </div>
            <h2 className="font-display font-black tracking-tight text-[clamp(2rem,3.5vw,2.8rem)] text-ink">
              Book Your Car PDI in {cityName}
            </h2>
            <p className="text-ink-muted text-sm sm:text-base mt-3">
              Lock an inspection slot at your dealership. Our certified inspector will coordinate timing directly with the showroom team.
            </p>
          </div>

          <div className="max-w-3xl mx-auto card-surface p-6 sm:p-10 shadow-lg border border-hairline">
            <BookingForm
              defaultCity={cityName}
              defaultLocation={`${cityName} (Dealership / Stockyard)`}
              sourceUrl={`/city/${citySlug || "city"}`}
              title={`Book Inspection — ${cityName}`}
            />
          </div>
        </div>
      </section>

      {/* ── BROWSE OTHER CITIES SECTION ───────────────────────────────────────── */}
      <CityPills />
    </div>
  );
}
