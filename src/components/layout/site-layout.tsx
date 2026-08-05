import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouterState } from "@tanstack/react-router";
import { useLenis } from "@/hooks/useLenis";
import { Header } from "./header";
import { Footer } from "./footer";
import { MobileActionBar } from "./mobile-action-bar";

function Intro() {
  const [show, setShow] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("ds-intro")) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    sessionStorage.setItem("ds-intro", "1");
    setShow(true);
    const mobile = window.matchMedia("(max-width: 767px)").matches;
    setReduced(mobile);
    const t = window.setTimeout(() => setShow(false), mobile ? 400 : 1200);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: reduced ? 0.2 : 0.4 }}
          className="fixed inset-0 z-[100] grid place-items-center bg-carbon"
        >
          <div className="relative overflow-hidden px-6">
            <motion.span
              initial={{ opacity: 0, scale: reduced ? 1 : 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: reduced ? 0.25 : 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="chrome-text block font-display text-4xl font-extrabold uppercase tracking-tight sm:text-6xl"
            >
              Drive Shine
            </motion.span>
            {!reduced && (
            <motion.span
              aria-hidden="true"
              initial={{ x: "-120%" }}
              animate={{ x: "120%" }}
              transition={{ duration: 0.9, ease: "easeInOut", delay: 0.15 }}
              className="absolute inset-y-0 left-0 w-24 bg-linear-to-r from-transparent via-red to-transparent opacity-70"
            />
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function SiteLayout({ children }: { children: React.ReactNode }) {
  useLenis();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="mobile-bar-pad min-h-screen bg-carbon">
      <Intro />
      <Header />
      <AnimatePresence mode="wait">
        <motion.main
          key={pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
      <MobileActionBar />
    </div>
  );
}
