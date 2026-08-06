import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Phone } from "lucide-react";
import { site } from "@/data/site";

export function MobileActionBar() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleBook = () => {
    if (pathname === "/contact") {
      document.getElementById("book")?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      navigate("/contact");
      setTimeout(() => {
        document.getElementById("book")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 500);
    }
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 80 }}
          animate={{ y: 0 }}
          exit={{ y: 80 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-black/[0.08] bg-white/90 backdrop-blur-xl lg:hidden"
        >
          <a
            href={site.phoneHref}
            aria-label={`Call Drive Shine on ${site.phone}`}
            className="mono-label flex h-14 items-center justify-center gap-2 border-r border-black/[0.08] text-gray-700"
          >
            <Phone className="size-4" aria-hidden="true" />
            Call
          </a>
          <button
            type="button"
            onClick={handleBook}
            className="mono-label flex h-14 items-center justify-center bg-red text-white"
          >
            Book Inspection
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
