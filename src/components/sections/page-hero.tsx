import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  copy,
  image,
  alt,
  children,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  image: string;
  alt: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative flex min-h-[60svh] items-end overflow-hidden">
      {/* TODO: replace with client photography */}
      <img
        src={image}
        alt={alt}
        width={1920}
        height={1080}
        className="absolute inset-0 size-full object-cover [filter:saturate(0.75)_brightness(0.7)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,10,11,.45) 0%, rgba(10,10,11,.85) 60%, #0A0A0B 100%)",
        }}
      />
      <div className="shell relative z-10 pb-16 pt-40">
        <p className="mono-label">{eyebrow}</p>
        <h1 className="chrome-text mt-5 text-[clamp(2.5rem,6vw,5rem)]">{title}</h1>
        {copy && <p className="mt-6 max-w-xl text-lg text-muted-foreground">{copy}</p>}
        {children}
      </div>
    </section>
  );
}
