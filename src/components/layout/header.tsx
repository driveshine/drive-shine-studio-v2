import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Facebook, Instagram, Linkedin, Menu, Phone, X } from "lucide-react";
import logoUrl from "@/assets/logo.png";
import { nav, site } from "@/data/site";
import { DsButtonLink } from "@/components/ui/ds-button";
import { cn } from "@/lib/utils";

const socialIcons = { Facebook, Instagram, LinkedIn: Linkedin } as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* ── Top bar ─────────────────────────────────────────────────────── */}
      <motion.header
        initial={false}
        animate={{
          backgroundColor: scrolled ? "rgba(10,10,11,0.92)" : "rgba(10,10,11,0.6)",
          borderBottomColor: scrolled ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.04)",
        }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl backdrop-saturate-150"
      >
        <div
          className="shell flex items-center justify-between"
          style={{ height: scrolled ? 60 : 68, transition: "height 0.4s cubic-bezier(0.16,1,0.3,1)" }}
        >
          {/* Logo */}
          <Link to="/" className="flex min-w-0 items-center gap-2.5" aria-label="Drive Shine home">
            <img
              src={logoUrl}
              alt="Drive Shine logo"
              width={38}
              height={38}
              className="shrink-0 rounded-full"
              style={{ width: scrolled ? 32 : 38, height: scrolled ? 32 : 38, transition: "width 0.4s, height 0.4s" }}
            />
            <span className="chrome-text font-display text-[14px] font-extrabold uppercase tracking-[0.14em]">
              Drive Shine
            </span>
          </Link>

          {/* Desktop nav */}
          <nav
            aria-label="Primary"
            className="hidden items-center gap-1 rounded-full border border-white/[0.06] bg-white/[0.03] p-1 backdrop-blur-xl lg:flex"
          >
            {nav.map((item) => {
              const isActive = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-[11px] font-medium uppercase tracking-[0.14em] transition-colors duration-300",
                    isActive ? "text-bone" : "text-chrome-500 hover:text-chrome-100",
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      transition={{ type: "spring", stiffness: 420, damping: 36 }}
                      className="absolute inset-0 rounded-full border border-white/[0.08] bg-white/[0.07]"
                    />
                  )}
                  <span className="relative">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <DsButtonLink to="/contact" className="hidden lg:inline-flex">
              Book Inspection
            </DsButtonLink>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-bone transition-colors hover:border-red/40 lg:hidden"
            >
              <Menu className="size-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* ── Mobile full-screen menu — z-[200] so it covers everything ───── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: "0%" }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 lg:hidden"
            style={{ zIndex: 200, background: "#0A0A0B" }}
          >
            {/* Red glow accent */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute right-0 top-0 h-64 w-48 blur-3xl"
              style={{ background: "radial-gradient(circle at top right, rgba(224,27,34,0.22) 0%, transparent 70%)" }}
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0 left-0 h-48 w-48 blur-3xl"
              style={{ background: "radial-gradient(circle at bottom left, rgba(224,27,34,0.12) 0%, transparent 70%)" }}
            />

            {/* Header row inside menu */}
            <div className="shell flex h-16 items-center justify-between">
              <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
                <img src={logoUrl} alt="Drive Shine" width={34} height={34} className="rounded-full" />
                <span className="chrome-text font-display text-sm font-extrabold uppercase tracking-[0.14em]">
                  Drive Shine
                </span>
              </Link>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="grid size-10 place-items-center rounded-full border border-white/15 text-bone"
              >
                <X className="size-5" aria-hidden="true" />
              </button>
            </div>

            {/* Hairline */}
            <div className="h-px w-full" style={{ background: "rgba(255,255,255,0.06)" }} />

            {/* Nav links */}
            <div className="shell flex h-[calc(100svh-65px)] flex-col justify-between overflow-y-auto py-8">
              <nav aria-label="Mobile" className="flex flex-col gap-1">
                {nav.map((item, i) => {
                  const isActive = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
                  return (
                    <motion.div
                      key={item.to}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.04 * i, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Link
                        to={item.to}
                        className={cn(
                          "flex items-center justify-between rounded-xl px-4 py-4 font-display text-2xl font-extrabold uppercase leading-none transition-colors",
                          isActive ? "text-red" : "text-bone hover:text-red",
                        )}
                      >
                        {item.label}
                        {isActive && (
                          <span className="h-1.5 w-1.5 rounded-full bg-red" />
                        )}
                      </Link>
                      <div className="h-px mx-4" style={{ background: "rgba(255,255,255,0.05)" }} />
                    </motion.div>
                  );
                })}
              </nav>

              {/* Bottom contact block */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.22, duration: 0.4 }}
                className="flex flex-col gap-5"
              >
                <DsButtonLink to="/contact" className="w-full justify-center">
                  Book Inspection
                </DsButtonLink>

                <a
                  href={site.phoneHref}
                  className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.03] px-4 py-3"
                >
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-red/10">
                    <Phone className="size-4 text-red" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="mono-label text-[10px]">Call us</p>
                    <p className="font-display text-lg font-bold text-bone">{site.phone}</p>
                  </div>
                </a>

                <div className="flex items-center justify-between">
                  <p className="mono-label text-[10px]">{site.city} • {site.hours}</p>
                  <ul className="flex gap-2">
                    {site.socials.map((soc) => {
                      const Icon = socialIcons[soc.label as keyof typeof socialIcons];
                      return (
                        <li key={soc.label}>
                          <a
                            href={soc.href}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={soc.label}
                            className="grid size-9 place-items-center rounded-full border border-white/10 text-chrome-300 transition-colors hover:border-red/40 hover:text-red"
                          >
                            <Icon className="size-3.5" aria-hidden="true" />
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
