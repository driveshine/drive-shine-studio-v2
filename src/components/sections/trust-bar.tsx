import { stats } from "@/data/site";
import { Counter } from "@/components/ui/counter";

export function TrustBar() {
  return (
    <section aria-label="Drive Shine in numbers" className="bg-carbon">
      <div className="shell grid grid-cols-2 gap-y-12 border-y border-white/8 py-14 lg:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={
              i > 0 ? "lg:border-l lg:border-red/40 lg:pl-8" : "lg:pr-8"
            }
          >
            <Counter value={s.value} suffix={s.suffix} />
            <p className="mono-label mt-3">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
