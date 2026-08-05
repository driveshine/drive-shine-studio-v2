import type { ReactNode } from "react";
import { srcSet, heroSizes } from "@/lib/img";

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
    <section className="relative flex min-h-[52svh] items-end overflow-hidden md:min-h-[60svh]">
      {/* TODO: replace with client photography */}
      <img
        src={image}
        srcSet={srcSet(image)}
        sizes={heroSizes}
        loading="eager"
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
      <div className="shell relative z-10 pb-12 pt-28 md:pb-16 md:pt-40">
        <p className="mono-label">{eyebrow}</p>
        <h1 className="text-white mt-4 text-[clamp(2.1rem,9vw,3rem)] md:mt-5 md:text-[clamp(2.5rem,6vw,5rem)]">{title}</h1>
        {copy && <p className="mt-5 max-w-xl text-base leading-[1.7] text-muted-foreground md:mt-6 md:text-lg">{copy}</p>}
        {children}
      </div>
    </section>
  );
}
