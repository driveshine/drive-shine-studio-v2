import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("mono-label flex items-center gap-3", className)}>
      <span className="inline-block h-px w-8 bg-red" aria-hidden="true" />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  copy,
  className,
}: {
  eyebrow?: string;
  title: string;
  copy?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      {eyebrow && <Eyebrow className="reveal">{eyebrow}</Eyebrow>}
      <h2 className="reveal mt-5 chrome-text text-[clamp(2rem,4vw,3.25rem)]">{title}</h2>
      {copy && <p className="reveal mt-5 text-[1.0625rem] text-muted-foreground">{copy}</p>}
    </div>
  );
}
