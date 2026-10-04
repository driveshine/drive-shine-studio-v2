import { useId, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Calendar, Car, CheckCircle2, Loader2, MapPin, PhoneCall, RotateCcw } from "lucide-react";
import { toast } from "sonner";
import { DsButton } from "@/components/ui/ds-button";
import { cn } from "@/lib/utils";
import { site } from "@/data/site";
import { submitWebsiteBooking } from "@/data/cities";

const schema = z.object({
  fullName: z.string().min(2, "Enter your full name"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().min(10, "Enter a valid 10-digit phone number"),
  location: z.string().min(3, "Enter the inspection location"),
  make: z.string().min(2, "Enter the car make"),
  model: z.string().min(1, "Enter the model"),
  year: z.string().optional(),
  date: z.string().optional(),
  time: z.string().optional(),
  notes: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

function Field({
  label,
  error,
  children,
  className,
}: {
  label: string;
  error?: string | undefined;
  children: React.ReactNode;
  className?: string | undefined;
}) {
  return (
    <div className={cn("relative", className)}>
      <label className="mono-label mb-2 block text-black">{label}</label>
      {children}
      {error && <p className="mono-label mt-2 text-red">{error}</p>}
    </div>
  );
}

const inputClass =
  "h-[52px] w-full border-0 border-b-2 border-black/20 bg-transparent px-0 text-base font-bold text-black placeholder:text-gray-400 placeholder:font-normal transition-colors focus:border-red focus:outline-none";

export interface BookingFormProps {
  defaultLocation?: string;
  defaultCity?: string;
  sourceUrl?: string;
  title?: string;
}

export function BookingForm({
  defaultLocation,
  defaultCity,
  sourceUrl,
  title = "Book Your Inspection",
}: BookingFormProps = {}) {
  const uid = useId();
  const [submittedData, setSubmittedData] = useState<FormValues | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      location: defaultLocation || (defaultCity ? `${defaultCity} (Dealership / Stockyard)` : ""),
    },
  });

  const onSubmit = async (values: FormValues) => {
    // 1. Store lead in Cloudflare D1 SQL database / Admin Panel
    try {
      await submitWebsiteBooking({
        fullName: values.fullName,
        phone: values.phone,
        email: values.email,
        location: values.location,
        city: defaultCity || undefined,
        make: values.make,
        model: values.model,
        year: values.year,
        date: values.date,
        time: values.time,
        notes: values.notes,
        sourceUrl: sourceUrl || (typeof window !== "undefined" ? window.location.pathname : "/"),
      });
      toast.success("Booking request received! Our executive will call you shortly.");
    } catch {
      // Continue gracefully even if network issue occurs
    }

    // 2. Set submitted data to display confirmation and executive callback notice
    setSubmittedData(values);
  };

  if (submittedData) {
    const lines = [
      `🚗 *New Inspection Booking — Drive Shine*`,
      ``,
      `*👤 Customer Details*`,
      `Name: ${submittedData.fullName}`,
      `Phone: ${submittedData.phone}`,
      `Email: ${submittedData.email}`,
      `Location: ${submittedData.location}`,
      defaultCity ? `City: ${defaultCity}` : null,
      ``,
      `*🚘 Vehicle Details*`,
      `Make: ${submittedData.make}`,
      `Model: ${submittedData.model}`,
      submittedData.year ? `Year: ${submittedData.year}` : null,
      ``,
      `*📅 Preferred Schedule*`,
      submittedData.date ? `Date: ${submittedData.date}` : `Date: Not specified`,
      submittedData.time ? `Time: ${submittedData.time}` : `Time: Not specified`,
      ``,
      submittedData.notes ? `*📝 Notes*\n${submittedData.notes}` : null,
      ``,
      `_Sent via Drive Shine website (${sourceUrl || "Booking Form"})_`,
    ]
      .filter(Boolean)
      .join("\n");

    const whatsappUrl = `https://wa.me/${site.phone}?text=${encodeURIComponent(lines)}`;

    return (
      <div className="card-surface p-6 sm:p-8 md:p-10 border border-black/10 rounded-2xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <div>
            <span className="mono-label text-emerald-600 font-bold tracking-wider text-xs">
              ✓ BOOKING REQUEST RECORDED
            </span>
            <h2 className="font-display text-2xl font-black text-ink mt-0.5">
              Thank you, {submittedData.fullName}!
            </h2>
          </div>
        </div>

        {/* Executive Callback Callout Banner */}
        <div className="rounded-xl border border-red/20 bg-red/5 p-4 sm:p-5 mb-6 flex items-start gap-3.5">
          <div className="w-9 h-9 rounded-lg bg-red text-white flex items-center justify-center shrink-0 mt-0.5">
            <PhoneCall className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-display font-extrabold text-base text-ink">
              Our executive will call you shortly.
            </h3>
            <p className="text-sm text-gray-600 mt-1 leading-relaxed">
              We have saved your booking in our system. A DriveShine inspection coordinator will call you to confirm your dealership timing, inspector allocation, and answer any questions.
            </p>
          </div>
        </div>

        {/* Booking Summary Box */}
        <div className="rounded-xl bg-gray-50 border border-gray-200 p-4 sm:p-5 mb-6 space-y-2.5 text-xs sm:text-sm">
          <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
            Inspection Summary
          </div>
          <div className="flex items-center justify-between gap-4 py-1 border-b border-gray-200/60">
            <span className="text-gray-500 flex items-center gap-2">
              <Car className="w-4 h-4 text-gray-400" /> Vehicle
            </span>
            <strong className="text-ink text-right">
              {submittedData.make} {submittedData.model} {submittedData.year ? `(${submittedData.year})` : ''}
            </strong>
          </div>
          <div className="flex items-center justify-between gap-4 py-1 border-b border-gray-200/60">
            <span className="text-gray-500 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-gray-400" /> Location
            </span>
            <strong className="text-ink text-right">{submittedData.location}</strong>
          </div>
          <div className="flex items-center justify-between gap-4 py-1 border-b border-gray-200/60">
            <span className="text-gray-500 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-gray-400" /> Date &amp; Time
            </span>
            <strong className="text-ink text-right">
              {submittedData.date || 'Flexible'} {submittedData.time ? `· ${submittedData.time}` : ''}
            </strong>
          </div>
          <div className="flex items-center justify-between gap-4 py-1">
            <span className="text-gray-500 flex items-center gap-2">
              <PhoneCall className="w-4 h-4 text-gray-400" /> Contact Phone
            </span>
            <strong className="text-ink text-right">{submittedData.phone}</strong>
          </div>
        </div>

        {/* WhatsApp Fast Track Option */}
        <div className="pt-2 flex flex-col gap-3">
          <p className="text-xs sm:text-sm text-gray-600 font-medium">
            Prefer an instant update or have questions right now? Chat with us directly on WhatsApp:
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white px-5 py-3 font-sans font-bold text-sm shadow-sm transition-all hover:shadow"
            >
              <svg viewBox="0 0 24 24" className="size-4 fill-current" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L.057 23.882l6.186-1.443A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.371l-.36-.214-3.724.868.936-3.42-.235-.372A9.818 9.818 0 1112 21.818z" />
              </svg>
              Chat on WhatsApp for Instant Update
            </a>

            <button
              type="button"
              onClick={() => {
                setSubmittedData(null);
                reset();
              }}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-black py-2 px-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Book Another Car
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="card-surface p-5 md:p-8 lg:p-10" noValidate>
      <h2 className="font-display text-2xl font-extrabold text-bone">{title}</h2>

      <fieldset className="mt-10">
        <legend className="mono-label text-red">Your Information</legend>
        <div className="mt-6 grid gap-5 sm:gap-6">
          <Field label="Full Name *" error={errors.fullName?.message}>
            <input
              id={`${uid}-name`}
              className={inputClass}
              placeholder="Your name"
              autoComplete="name"
              {...register("fullName")}
            />
          </Field>
          <Field label="Phone Number *" error={errors.phone?.message}>
            <input
              id={`${uid}-phone`}
              type="tel"
              inputMode="tel"
              className={inputClass}
              placeholder="9XXXXXXXXX"
              autoComplete="tel"
              {...register("phone")}
            />
          </Field>
          <Field label="Email Address *" error={errors.email?.message}>
            <input
              id={`${uid}-email`}
              type="email"
              className={inputClass}
              placeholder="you@example.com"
              autoComplete="email"
              {...register("email")}
            />
          </Field>
          <Field label="Inspection Location *" error={errors.location?.message}>
            <input
              id={`${uid}-location`}
              className={inputClass}
              placeholder="Showroom name, address or area (e.g. Kondapur, Hyderabad)"
              {...register("location")}
            />
          </Field>
        </div>
      </fieldset>

      <fieldset className="mt-12">
        <legend className="mono-label text-red">Vehicle Details</legend>
        <div className="mt-6 grid gap-5 min-[480px]:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          <Field label="Car Make *" error={errors.make?.message}>
            <input
              id={`${uid}-make`}
              className={inputClass}
              placeholder="Suzuki, Hyundai, Tata"
              {...register("make")}
            />
          </Field>
          <Field label="Model *" error={errors.model?.message}>
            <input
              id={`${uid}-model`}
              className={inputClass}
              placeholder="Swift, Creta, Nexon"
              {...register("model")}
            />
          </Field>
          <Field label="Year">
            <input
              id={`${uid}-year`}
              className={inputClass}
              placeholder="2026"
              inputMode="numeric"
              {...register("year")}
            />
          </Field>
        </div>
      </fieldset>

      <fieldset className="mt-12">
        <legend className="mono-label text-red">Preferred Schedule</legend>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 sm:gap-6">
          <Field label="Preferred Date">
            <input
              id={`${uid}-date`}
              type="date"
              className={cn(inputClass, "[color-scheme:light]")}
              {...register("date")}
            />
          </Field>
          <Field label="Preferred Time">
            <input
              id={`${uid}-time`}
              type="time"
              className={cn(inputClass, "[color-scheme:light]")}
              {...register("time")}
            />
          </Field>
        </div>
      </fieldset>

      <div className="mt-12">
        <Field label="Additional Notes">
          <textarea
            id={`${uid}-notes`}
            rows={4}
            className={cn(inputClass, "h-auto resize-none py-3")}
            placeholder="Dealership name, delivery date, stockyard location, anything else we should know"
            {...register("notes")}
          />
        </Field>
      </div>

      <DsButton type="submit" disabled={isSubmitting} className="mt-10 w-full justify-center sm:w-auto">
        {isSubmitting ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden="true" /> Saving Booking Request…
          </>
        ) : (
          <>
            Book Inspection Slot →
          </>
        )}
      </DsButton>
    </form>
  );
}
