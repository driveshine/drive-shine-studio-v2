import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { products, productCategories, usageTips } from "@/data/products";
import { images } from "@/data/site";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { SectionHeading } from "@/components/ui/section-heading";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import { cn } from "@/lib/utils";
import { srcSet, cardSizes } from "@/lib/img";

function ProductCard({ product: p }: { product: (typeof products)[number] }) {
  return (
    <article className="card-surface h-full overflow-hidden">
      <div className="relative aspect-4/3 overflow-hidden bg-carbon">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-8 bottom-0 h-24 rounded-full bg-red/25 blur-3xl"
        />
        {/* TODO: replace with client product photography on dark tiles */}
        <img
          src={p.image}
          srcSet={srcSet(p.image)}
          sizes={cardSizes}
          alt={p.alt}
          loading="lazy"
          width={800}
          height={600}
          className="relative size-full object-cover [filter:saturate(0.8)_brightness(0.8)]"
        />
      </div>
      <div className="p-5 md:p-7">
        <p className="mono-label text-red">{p.category}</p>
        <h2 className="mt-3 font-display text-xl font-bold text-bone">{p.name}</h2>
        <p className="mt-2 text-base leading-[1.7] text-muted-foreground">{p.benefit}</p>
        <Link
          to="/contact"
          className="mono-label mt-5 inline-flex min-h-12 items-center gap-2 text-chrome-300 hover:text-red"
        >
          Enquire <ArrowUpRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

export default function ProductsPage() {
  const [filter, setFilter] = useState<string>("All");
  const tipsRef = useGsapReveal<HTMLElement>();
  const visible = filter === "All" ? products : products.filter((p) => p.category === filter);

  useEffect(() => {
    document.title = "Car Care Products — Drive Shine Hyderabad";
  }, []);

  return (
    <>
      <PageHero
        eyebrow="Products • Enquiry only"
        title="Care that matches the finish."
        copy="A short, deliberate range. No prices online — tell us what you drive and we'll advise."
        image={images.productsHero}
        alt="Car care bottles on a dark tabletop lit from one side"
      />

      <section className="bg-carbon">
        <div className="shell section-y">
          <div
            className="hide-scrollbar -mx-5 flex snap-x gap-3 overflow-x-auto px-5 pb-1 md:mx-0 md:flex-wrap md:px-0"
            role="group"
            aria-label="Filter products"
          >
            {["All", ...productCategories].map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setFilter(c)}
                aria-pressed={filter === c}
                className={cn(
                  "mono-label shrink-0 snap-start whitespace-nowrap rounded-full border px-5 py-3 transition-colors duration-300",
                  filter === c
                    ? "border-red bg-red text-white"
                    : "border-white/12 text-chrome-300 hover:border-white/35 hover:text-bone",
                )}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Mobile: peeking snap slider */}
          <div className="hide-scrollbar -mx-5 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 md:hidden">
            {visible.map((p) => (
              <div key={p.id} className="w-[85%] shrink-0 snap-start">
                <ProductCard product={p} />
              </div>
            ))}
          </div>

          <motion.ul layout className="mt-14 hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {visible.map((p) => (
                <motion.li
                  key={p.id}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <ProductCard product={p} />
                </motion.li>
              ))}
            </AnimatePresence>
          </motion.ul>
        </div>
      </section>

      <section ref={tipsRef} className="noise-grid relative overflow-hidden bg-carbon-800">
        <div className="shell section-y">
          <SectionHeading eyebrow="Usage tips" title="Get more from every bottle." />
          <ul className="mt-10 grid gap-5 md:mt-14 md:gap-6 lg:grid-cols-3">
            {usageTips.map((t) => (
              <li key={t.title} className="reveal card-surface p-5 md:p-8">
                <h3 className="font-display text-lg font-bold text-bone">{t.title}</h3>
                <p className="mt-3 text-base leading-[1.7] text-muted-foreground">{t.copy}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title="Not sure what your car needs?"
        copy="Send us the make, model and paint colour. We'll recommend the shortest useful list."
      />
    </>
  );
}
