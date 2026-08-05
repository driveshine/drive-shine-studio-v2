import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Phone } from "lucide-react";
import { site } from "@/data/site";

export function MobileActionBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 80 }}
          animate={{ y: 0 }}
          exit={{ y: 80 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-white/8 bg-carbon/80 backdrop-blur-xl lg:hidden"
        >
          <a
            href={site.phoneHref}
            aria-label={`Call Drive Shine on ${site.phone}`}
            className="mono-label flex h-14 items-center justify-center gap-2 border-r border-white/8 text-chrome-100"
          >
            <Phone className="size-4" aria-hidden="true" />
            Call
          </a>
          <Link
            to="/contact"
            className="mono-label flex h-14 items-center justify-center bg-red text-white"
          >
            Book Inspection
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
