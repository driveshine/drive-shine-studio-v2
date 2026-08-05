import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { site } from "@/data/site";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-6 fill-current" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L.057 23.882l6.186-1.443A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.371l-.36-.214-3.724.868.936-3.42-.235-.372A9.818 9.818 0 1112 21.818z" />
    </svg>
  );
}

export function FloatingButtons() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <div className="fixed bottom-24 right-4 z-[90] flex flex-col items-end gap-3 lg:bottom-8 lg:right-6">

      {/* Back button — only on non-home pages */}
      <AnimatePresence>
        {!isHome && (
          <motion.button
            initial={{ opacity: 0, scale: 0.7, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.7, x: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => navigate(-1)}
            aria-label="Go back"
            className="group grid size-11 place-items-center rounded-full border border-white/15 bg-carbon-800/90 text-chrome-300 backdrop-blur-xl transition-colors duration-300 hover:border-red/50 hover:text-bone"
            style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.4)" }}
          >
            <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-0.5" aria-hidden="true" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* WhatsApp button — always visible */}
      <motion.a
        href={site.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="grid size-13 place-items-center rounded-full text-white"
        style={{
          width: 52,
          height: 52,
          background: "linear-gradient(135deg, #E01B22 0%, #A50F16 100%)",
          boxShadow: "0 0 0 0 rgba(224,27,34,0.5)",
          animation: "wa-pulse 2.5s ease-out infinite",
        }}
      >
        <WhatsAppIcon />
      </motion.a>
    </div>
  );
}
