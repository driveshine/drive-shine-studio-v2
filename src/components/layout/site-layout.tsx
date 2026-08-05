import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useLenis } from "@/hooks/useLenis";
import { Header } from "./header";
import { Footer } from "./footer";
import { MobileActionBar } from "./mobile-action-bar";
import { Preloader } from "@/components/ui/Preloader";
import { RouteProgressBar } from "@/components/ui/RouteProgressBar";
import { FloatingButtons } from "@/components/ui/FloatingButtons";

const SESSION_KEY = "ds_loaded";

function usePreloader() {
  const [done, setDone] = useState(() => {
    // Already visited this session — skip preloader
    if (typeof window !== "undefined" && sessionStorage.getItem(SESSION_KEY)) return true;
    return false;
  });

  const handleDone = () => {
    sessionStorage.setItem(SESSION_KEY, "1");
    setDone(true);
  };

  return { done, handleDone };
}

export function SiteLayout({ children }: { children: React.ReactNode }) {
  const { done, handleDone } = usePreloader();
  const lenisReady = useRef(false);

  // Only start Lenis after preloader is done
  useLenis(done);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      {!done && <Preloader onDone={handleDone} />}
      <RouteProgressBar />
      <div className="mobile-bar-pad min-h-screen bg-carbon">
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
        <FloatingButtons />
      </div>
    </>
  );
}
