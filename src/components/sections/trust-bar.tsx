import { Shield, Wrench, MapPin, Clock } from "lucide-react";

const items = [
  { Icon: Shield, text: "Independent — no dealership ties" },
  { Icon: Wrench, text: "Calibrated professional tools" },
  { Icon: MapPin, text: "All of Hyderabad covered" },
  { Icon: Clock, text: "Same-day slots available" },
];

export function TrustBar() {
  return (
    <section
      aria-label="Why Drive Shine"
      style={{ background: "#17181C", borderBottom: "1px solid #2A2C31" }}
      className="py-5"
    >
      <div className="shell flex flex-wrap items-center justify-between gap-4">
        {items.map(({ Icon, text }) => (
          <div key={text} className="flex items-center gap-2.5 text-[#D7D9DE] text-[13.5px]">
            <Icon className="size-4 shrink-0 text-red" aria-hidden="true" />
            <span>{text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
