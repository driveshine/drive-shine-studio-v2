import { Phone } from "lucide-react";
import { site } from "@/data/site";

export function FloatingCall() {
  return (
    <a
      href={site.phoneHref}
      aria-label={`Call Drive Shine on ${site.phone}`}
      style={{ animation: "ds-pulse 2.4s ease-out infinite" }}
      className="fixed bottom-6 right-6 z-40 grid size-14 place-items-center rounded-full bg-red text-white shadow-lg lg:hidden"
    >
      <Phone className="size-5" aria-hidden="true" />
    </a>
  );
}
