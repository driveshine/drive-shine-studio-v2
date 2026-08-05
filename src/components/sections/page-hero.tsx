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
    <section className="bg-white border-b border-black/[0.07] pt-28 pb-10 md:pt-36 md:pb-14">
      <div className="shell">
        <p className="mono-label text-red">{eyebrow}</p>
        <h1 className="mt-3 font-display font-black leading-[1.05] tracking-tight text-ink text-[clamp(2rem,5vw,3.8rem)]">{title}</h1>
        {copy && <p className="mt-4 max-w-2xl text-base leading-[1.7] text-ink-soft md:text-lg">{copy}</p>}
        {children}
      </div>
    </section>
  );
}
