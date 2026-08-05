import { useId, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Check, Loader2 } from "lucide-react";
import { DsButton } from "@/components/ui/ds-button";
import { cn } from "@/lib/utils";

const schema = z.object({
  fullName: z.string().min(2, "Enter your full name"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().min(10, "Enter a valid 10-digit phone number"),
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
  "h-[52px] w-full border-0 border-b border-white/15 bg-transparent px-0 text-base text-bone placeholder:text-chrome-500/70 transition-colors focus:border-red focus:outline-none";

export function BookingForm() {
  const [done, setDone] = useState(false);
  const uid = useId();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: FormValues) => {
    await new Promise((r) => setTimeout(r, 900));
    // TODO: wire this payload to the booking API / CRM endpoint.
    console.log("[Drive Shine] booking payload (TODO: send to API):", values);
    setDone(true);
  };

  if (done) {
    return (
      <div className="card-surface p-6 text-center md:p-10">
        <svg viewBox="0 0 52 52" className="mx-auto size-16" aria-hidden="true">
          <circle
            cx="26"
            cy="26"
            r="24"
            fill="none"
            stroke="#E01B22"
            strokeWidth="2"
            strokeDasharray="151"
            strokeDashoffset="151"
          >
            <animate
              attributeName="stroke-dashoffset"
              to="0"
              dur="0.6s"
              fill="freeze"
            />
          </circle>
          <path
            d="M14 27l8 8 16-16"
            fill="none"
            stroke="#E01B22"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="40"
            strokeDashoffset="40"
          >
            <animate
              attributeName="stroke-dashoffset"
              to="0"
              dur="0.4s"
              begin="0.5s"
              fill="freeze"
            />
          </path>
        </svg>
        <h3 className="mt-8 font-display text-2xl font-extrabold text-bone">
          Booking request received
        </h3>
        <p className="mt-3 text-muted-foreground">
          We'll call you within 2 hours to confirm your inspector and slot.
        </p>
      </div>
    );
  }

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
          <Field label="Email Address *" error={errors.email?.message} className="sm:col-span-2">
            <input
              id={`${uid}-email`}
              type="email"
              className={inputClass}
              placeholder="you@example.com"
              autoComplete="email"
              {...register("email")}
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
        {isSubmitting && <Loader2 className="size-4 animate-spin" aria-hidden="true" />}
        {isSubmitting ? "Sending" : "Request booking"}
        {!isSubmitting && <Check className="size-4" aria-hidden="true" />}
      </DsButton>
    </form>
  );
}
