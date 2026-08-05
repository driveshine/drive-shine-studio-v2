import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.asset.json";
import { nav, site } from "@/data/site";
import { DsButtonLink } from "@/components/ui/ds-button";
import { cn } from "@/lib/utils";

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
        backgroundColor: scrolled ? "rgba(10,10,11,0.8)" : "rgba(10,10,11,0)",
        borderBottomColor: scrolled ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0)",
      }}
      transition={{ duration: 0.35 }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b",
        scrolled && "backdrop-blur-xl",
      )}
    >
      <div className="shell flex h-20 items-center justify-between gap-6">
        <Link to="/" className="flex min-w-0 items-center gap-3" aria-label="Drive Shine home">
          <img
            src={logo.url}
            alt="Drive Shine logo"
            width={44}
            height={44}
            className="size-11 shrink-0 rounded-full"
          />
          <span className="chrome-text hidden font-display text-lg font-extrabold uppercase tracking-tight sm:block">
            Drive Shine
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-9 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="mono-label relative py-1 text-chrome-300 transition-colors hover:text-bone data-[status=active]:text-bone"
            >
              {item.label}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-red transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <DsButtonLink to="/contact" className="hidden lg:inline-flex">
            Book Inspection
          </DsButtonLink>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="grid size-11 place-items-center rounded-full border border-white/15 text-bone lg:hidden"
          >
            <Menu className="size-5" aria-hidden="true" />
          </button>
        </div>
      </div>

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
            <div className="shell relative flex h-20 items-center justify-end">
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="grid size-11 place-items-center rounded-full border border-white/15 text-bone"
              >
                <X className="size-5" aria-hidden="true" />
              </button>
            </div>
            <nav aria-label="Mobile" className="shell relative mt-8 flex flex-col gap-2">
              {nav.map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.4 }}
                >
                  <Link
                    to={item.to}
                    className="block border-b border-white/8 py-5 font-display text-3xl font-extrabold uppercase text-bone"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.34, duration: 0.4 }}
                className="mt-8"
              >
                <DsButtonLink to="/contact">Book Inspection</DsButtonLink>
                <p className="mono-label mt-6">{site.city} • {site.hours}</p>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
