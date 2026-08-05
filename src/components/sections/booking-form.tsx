import { useId } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2 } from "lucide-react";
import { DsButton } from "@/components/ui/ds-button";
import { cn } from "@/lib/utils";
import { site } from "@/data/site";

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
      <label className="mono-label mb-2 block">{label}</label>
      {children}
      {error && <p className="mono-label mt-2 text-red">{error}</p>}
    </div>
  );
}

const inputClass =
  "h-[52px] w-full border-0 border-b border-black/15 bg-transparent px-0 text-base text-ink placeholder:text-ink-muted/60 transition-colors focus:border-red focus:outline-none";

export function BookingForm() {
  const uid = useId();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = (values: FormValues) => {
    const lines = [
      `🚗 *New Inspection Booking — Drive Shine*`,
      ``,
      `*👤 Customer Details*`,
      `Name: ${values.fullName}`,
      `Phone: ${values.phone}`,
      `Email: ${values.email}`,
      `Location: ${values.location}`,
      ``,
      `*🚘 Vehicle Details*`,
      `Make: ${values.make}`,
      `Model: ${values.model}`,
      values.year ? `Year: ${values.year}` : null,
      ``,
      `*📅 Preferred Schedule*`,
      values.date ? `Date: ${values.date}` : `Date: Not specified`,
      values.time ? `Time: ${values.time}` : `Time: Not specified`,
      ``,
      values.notes ? `*📝 Notes*\n${values.notes}` : null,
      ``,
      `_Sent via Drive Shine website_`,
    ]
      .filter(Boolean)
      .join("\n");

    const url = `https://wa.me/${site.phone}?text=${encodeURIComponent(lines)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="card-surface p-5 md:p-8 lg:p-10" noValidate>
      <h2 className="font-display text-2xl font-extrabold text-bone">Book Your Inspection</h2>

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
              placeholder="Suzuki, Hyundai"
              {...register("make")}
            />
          </Field>
          <Field label="Model *" error={errors.model?.message}>
            <input
              id={`${uid}-model`}
              className={inputClass}
              placeholder="Swift, i20"
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
              className={cn(inputClass, "[color-scheme:dark]")}
              {...register("date")}
            />
          </Field>
          <Field label="Preferred Time">
            <input
              id={`${uid}-time`}
              type="time"
              className={cn(inputClass, "[color-scheme:dark]")}
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
            placeholder="Dealership name, delivery date, anything else we should know"
            {...register("notes")}
          />
        </Field>
      </div>

      <DsButton type="submit" disabled={isSubmitting} className="mt-10 w-full justify-center sm:w-auto">
        {isSubmitting
          ? <><Loader2 className="size-4 animate-spin" aria-hidden="true" /> Sending…</>
          : <>
              <svg viewBox="0 0 24 24" className="size-4 fill-current" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L.057 23.882l6.186-1.443A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.371l-.36-.214-3.724.868.936-3.42-.235-.372A9.818 9.818 0 1112 21.818z"/>
              </svg>
              Send via WhatsApp
            </>
        }
      </DsButton>
    </form>
  );
}
