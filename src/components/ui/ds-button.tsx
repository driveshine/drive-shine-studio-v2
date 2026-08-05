import { Link } from "@tanstack/react-router";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "red" | "ghost" | "link";

const base =
  "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 font-mono text-xs font-medium uppercase tracking-[0.12em] transition-[color,box-shadow,border-color] duration-300";

const variants: Record<Variant, string> = {
  red: "bg-red text-white hover:red-glow",
  ghost: "border border-white/20 text-bone hover:border-white/45",
  link: "px-0 py-0 text-chrome-300 hover:text-bone",
};

function Inner({ children, variant }: { children: ReactNode; variant: Variant }) {
  return (
    <>
      {variant === "ghost" && (
        <span className="absolute inset-0 origin-left scale-x-0 bg-red transition-transform duration-500 ease-shine group-hover:scale-x-100" />
      )}
      {variant === "red" && (
        <span className="absolute inset-0 origin-left scale-x-0 bg-red-deep transition-transform duration-500 ease-shine group-hover:scale-x-100" />
      )}
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </>
  );
}

export function DsButtonLink({
  to,
  variant = "red",
  className,
  children,
  ariaLabel,
}: {
  to: string;
  variant?: Variant;
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
}) {
  return (
    <Link to={to} className={cn(base, variants[variant], className)} aria-label={ariaLabel}>
      <Inner variant={variant}>{children}</Inner>
    </Link>
  );
}

export function DsButton({
  variant = "red",
  className,
  children,
  ...rest
}: { variant?: Variant; children: ReactNode } & ComponentPropsWithoutRef<"button">) {
  return (
    <button
      className={cn(base, variants[variant], "disabled:opacity-60", className)}
      {...rest}
    >
      <Inner variant={variant}>{children}</Inner>
    </button>
  );
}

export function DsAnchorButton({
  href,
  variant = "ghost",
  className,
  children,
  ...rest
}: { href: string; variant?: Variant; children: ReactNode } & Omit<
  ComponentPropsWithoutRef<"a">,
  "href" | "children"
>) {
  return (
    <a href={href} className={cn(base, variants[variant], className)} {...rest}>
      <Inner variant={variant}>{children}</Inner>
    </a>
  );
}
