import { site } from "@/data/site";

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4 fill-current shrink-0" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 015.13 12.7 19.79 19.79 0 012.07 4.11 2 2 0 014.05 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4 fill-current shrink-0" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L.057 23.882l6.186-1.443A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.371l-.36-.214-3.724.868.936-3.42-.235-.372A9.818 9.818 0 1112 21.818z" />
    </svg>
  );
}

const WA_MESSAGE = encodeURIComponent("Hello Drive Shine, I would like to know more about your car inspection services.");

export function FloatingButtons() {
  return (
    <div className="fixed bottom-24 right-4 z-[90] flex flex-col items-end gap-3 lg:bottom-8 lg:right-6">

      {/* Phone pill */}
      <a
        href={site.phoneHref}
        aria-label="Call Drive Shine"
        className="flex items-center gap-2.5 rounded-full px-5 py-3 text-white text-sm font-bold shadow-lg transition-transform duration-200 hover:scale-105 active:scale-95"
        style={{ background: "#D91E2C", boxShadow: "0 4px 20px rgba(217,30,44,0.45)" }}
      >
        <PhoneIcon />
        <span>+91 94946 42244</span>
      </a>

      {/* WhatsApp pill */}
      <a
        href={`${site.whatsapp}?text=${WA_MESSAGE}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex items-center gap-2.5 rounded-full px-5 py-3 text-white text-sm font-bold shadow-lg transition-transform duration-200 hover:scale-105 active:scale-95"
        style={{
          background: "#1FA855",
          boxShadow: "0 4px 20px rgba(31,168,85,0.45)",
          animation: "wa-pulse 2.5s ease-out infinite",
        }}
      >
        <WhatsAppIcon />
        <span>Chat on WhatsApp</span>
      </a>
    </div>
  );
}
