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
      <motion.header
        initial={false}
        animate={{
          backgroundColor: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.92)",
          borderBottomColor: scrolled ? "rgba(0,0,0,0.08)" : "rgba(0,0,0,0.04)",
          boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.08)" : "none",
        }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl"
      >
        <div
          className="shell flex items-center justify-between"
          style={{ height: scrolled ? 60 : 68, transition: "height 0.4s cubic-bezier(0.16,1,0.3,1)" }}
        >
          {/* Logo */}
          <Link to="/" className="flex min-w-0 items-center gap-3 group" aria-label="Drive Shine home">
            <div className="relative shrink-0">
              <img
                src={logoUrl}
                alt="Drive Shine logo"
                className="rounded-full ring-2 ring-red/20 transition-all duration-300 group-hover:ring-red/60"
                style={{ width: scrolled ? 32 : 40, height: scrolled ? 32 : 40, transition: "width 0.4s, height 0.4s" }}
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display text-[15px] font-black uppercase tracking-[0.18em] text-ink">
                Drive Shine™
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav
            aria-label="Primary"
            className="hidden items-center gap-1 rounded-full border border-black/[0.06] bg-black/[0.02] p-1 lg:flex"
          >
            {nav.map((item) => {
              const isActive = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-[12px] font-bold uppercase tracking-[0.12em] transition-colors duration-300",
                    isActive ? "text-white" : "text-ink hover:text-red",
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      transition={{ type: "spring", stiffness: 420, damping: 36 }}
                      className="absolute inset-0 rounded-full bg-red"
                    />
                  )}
                  <span className="relative">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            {/* Social icons between Contact and Book Inspection */}
            <div className="hidden lg:flex items-center gap-1.5 mr-1">
              {site.socials.map((soc) => {
                const Icon = socialIcons[soc.label as keyof typeof socialIcons];
                const colors: Record<string, string> = {
                  Facebook: "#1877F2",
                  Instagram: "#E1306C",
                  LinkedIn: "#0A66C2",
                };
                return (
                  <a
                    key={soc.label}
                    href={soc.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={soc.label}
                    className="grid size-8 place-items-center rounded-full text-white transition-transform duration-200 hover:scale-110"
                    style={{ background: colors[soc.label] ?? "#333" }}
                  >
                    <Icon className="size-3.5" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
            <DsButtonLink to="/contact" className="hidden lg:inline-flex">
              Book Inspection
            </DsButtonLink>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="grid size-10 place-items-center rounded-full border border-black/10 text-gray-700 transition-colors hover:border-red/40 hover:text-red lg:hidden"
            >
              <Menu className="size-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu — white */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: "0%" }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 lg:hidden"
            style={{ zIndex: 200, background: "#ffffff" }}
          >
            {/* Red accent top */}
            <div className="absolute inset-x-0 top-0 h-1 bg-red" />

            {/* Header row */}
            <div className="shell flex h-16 items-center justify-between">
              <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
                <img src={logoUrl} alt="Drive Shine" width={36} height={36} className="rounded-full ring-2 ring-red/30" />
                <div className="flex flex-col leading-none">
                  <span className="font-display text-[15px] font-black uppercase tracking-[0.18em] text-ink">Drive Shine™</span>
                </div>
              </Link>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="grid size-10 place-items-center rounded-full border border-black/10 text-gray-700"
              >
                <X className="size-5" aria-hidden="true" />
              </button>
            </div>

            <div className="h-px w-full bg-black/[0.06]" />

            {/* Nav + contact */}
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
                          isActive ? "text-red" : "text-gray-900 hover:text-red",
                        )}
                      >
                        {item.label}
                        {isActive && <span className="h-2 w-2 rounded-full bg-red" />}
                      </Link>
                      <div className="mx-4 h-px bg-black/[0.05]" />
                    </motion.div>
                  );
                })}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.22, duration: 0.4 }}
                className="flex flex-col gap-4"
              >
                <DsButtonLink to="/contact" className="w-full justify-center">
                  Book Inspection
                </DsButtonLink>

                <a
                  href={site.phoneHref}
                  className="flex items-center gap-3 rounded-xl border border-black/[0.07] bg-gray-50 px-4 py-3"
                >
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-red/10">
                    <Phone className="size-4 text-red" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="mono-label text-[10px] text-gray-500">Call us</p>
                    <p className="font-display text-lg font-bold text-gray-900">{site.phone}</p>
                  </div>
                </a>

                <div className="flex items-center justify-between">
                  <p className="mono-label text-[10px] text-gray-400">{site.city} • {site.hours}</p>
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
                            className="grid size-9 place-items-center rounded-full border border-black/10 text-gray-500 transition-colors hover:border-red hover:text-red"
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
