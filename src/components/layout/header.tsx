import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Facebook, Instagram, Linkedin, Menu, Phone, X } from "lucide-react";
import logo from "@/assets/logo.asset.json";
import { nav, site } from "@/data/site";
import { DsButtonLink } from "@/components/ui/ds-button";
import { cn } from "@/lib/utils";

const socialIcons = { Facebook, Instagram, LinkedIn: Linkedin } as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={false}
      animate={{
        backgroundColor: scrolled ? "rgba(10,10,11,0.62)" : "rgba(10,10,11,0)",
        borderBottomColor: scrolled ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0)",
      }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b",
        scrolled && "backdrop-blur-2xl backdrop-saturate-150",
      )}
    >
      <motion.div
        initial={false}
        animate={{ height: scrolled ? 60 : 80 }}
        style={{ minHeight: 64 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="shell flex items-center justify-between gap-6"
      >
        <Link
          to="/"
          className="group flex min-w-0 items-center gap-3"
          aria-label="Drive Shine home"
        >
          <motion.img
            src={logo.url}
            alt="Drive Shine logo"
            width={44}
            height={44}
            initial={false}
            animate={{ width: scrolled ? 34 : 44, height: scrolled ? 34 : 44 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="shrink-0 rounded-full"
          />
          <span className="chrome-text hidden font-display text-[15px] font-extrabold uppercase tracking-[0.14em] sm:block">
            Drive Shine
          </span>
        </Link>

        <nav
          aria-label="Primary"
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-full border border-white/[0.06] bg-white/[0.03] p-1 backdrop-blur-xl lg:flex"
        >
          {nav.map((item) => {
            const isActive =
              item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className={cn(
                  "relative rounded-full px-4 py-2 text-[11px] font-medium uppercase tracking-[0.14em] transition-colors duration-300",
                  isActive ? "text-bone" : "text-chrome-500 hover:text-chrome-100",
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    transition={{ type: "spring", stiffness: 420, damping: 36 }}
                    className="absolute inset-0 rounded-full border border-white/[0.08] bg-white/[0.07] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
                  />
                )}
                <span className="relative">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <DsButtonLink to="/contact" className="hidden lg:inline-flex">
            Book Inspection
          </DsButtonLink>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-bone backdrop-blur-xl transition-colors hover:border-red/40 lg:hidden"
          >
            <Menu className="size-5" aria-hidden="true" />
          </button>
        </div>
      </motion.div>


      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-carbon lg:hidden"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 top-0 h-full w-72 rotate-12 bg-linear-to-b from-red/25 to-transparent blur-2xl"
            />
            <div className="shell relative flex h-16 items-center justify-end">
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="-mr-2 grid size-12 place-items-center rounded-full border border-white/15 text-bone"
              >
                <X className="size-5" aria-hidden="true" />
              </button>
            </div>

            <div className="relative flex h-[calc(100svh-4rem)] flex-col justify-between overflow-y-auto pb-10">
              <nav aria-label="Mobile" className="shell mt-6 flex flex-col gap-6">
                {nav.map((item, i) => (
                  <motion.div
                    key={item.to}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.06 * i, duration: 0.4 }}
                  >
                    <Link
                      to={item.to}
                      className="block font-display text-[28px] font-extrabold uppercase leading-none text-bone"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.06 * nav.length, duration: 0.4 }}
                className="shell mt-12"
              >
                <DsButtonLink to="/contact" className="w-full justify-center">
                  Book Inspection
                </DsButtonLink>
                <a
                  href={site.phoneHref}
                  className="mt-6 flex items-center gap-3 font-display text-xl font-extrabold text-bone"
                >
                  <Phone className="size-5 text-red" aria-hidden="true" />
                  {site.phone}
                </a>
                <ul className="mt-6 flex gap-3">
                  {site.socials.map((soc) => {
                    const Icon = socialIcons[soc.label as keyof typeof socialIcons];
                    return (
                      <li key={soc.label}>
                        <a
                          href={soc.href}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={soc.label}
                          className="grid size-12 place-items-center rounded-full border border-white/10 text-chrome-300"
                        >
                          <Icon className="size-4" aria-hidden="true" />
                        </a>
                      </li>
                    );
                  })}
                </ul>
                <p className="mono-label mt-6">
                  {site.city} • {site.hours}
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
