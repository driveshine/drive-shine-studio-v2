import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ShoppingCart } from "lucide-react";
import { products, comingSoonProducts, usageTips } from "@/data/products";
import { images } from "@/data/site";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { SectionHeading } from "@/components/ui/section-heading";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import { cn } from "@/lib/utils";

function ProductCard({ product: p }: { product: (typeof products)[number] }) {
  const [showBefore, setShowBefore] = useState(true);

  useEffect(() => {
    if (!p.beforeAfterImage) return;
    const id = setInterval(() => setShowBefore((v) => !v), 2500);
    return () => clearInterval(id);
  }, [p.beforeAfterImage]);

  const displayImage = p.beforeAfterImage && !showBefore ? p.beforeAfterImage : p.image;

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-black/[0.08] bg-white shadow-sm">

      {/* Auto-sliding image */}
      <div className="relative flex items-center justify-center bg-white overflow-hidden" style={{ minHeight: 200 }}>
        <AnimatePresence mode="wait">
          <motion.img
            key={displayImage}
            src={displayImage}
            alt={p.alt}
            loading="lazy"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="h-44 w-full object-contain p-3"
          />
        </AnimatePresence>
        {/* Dot indicator */}
        {p.beforeAfterImage && (
          <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
            <span className={cn("size-1.5 rounded-full transition-colors duration-300", showBefore ? "bg-red" : "bg-black/20")} />
            <span className={cn("size-1.5 rounded-full transition-colors duration-300", !showBefore ? "bg-red" : "bg-black/20")} />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        <p className="mono-label text-gray-400">{p.eyebrow}</p>
        <h2 className="mt-1 font-display text-lg font-bold text-gray-900">{p.name}</h2>

        {/* Price */}
        <div className="mt-1.5 flex items-baseline gap-2">
          <span className="font-display text-xl font-black text-red">{p.price}</span>
          {p.mrp && <span className="mono-label text-gray-400">{p.mrp}</span>}
        </div>

        <p className="mt-2 text-xs leading-relaxed text-gray-500">{p.benefit}</p>

        {/* Bullets */}
        <ul className="mt-3 flex flex-col gap-1.5">
          {p.bullets.map((b) => (
            <li key={b} className="flex items-start gap-2 text-xs text-gray-600">
              <Check className="mt-0.5 size-3.5 shrink-0 text-red" aria-hidden="true" />
              {b}
            </li>
          ))}
        </ul>

        {/* Specs */}
        {p.specs && (
          <div className="mt-3 border-t border-black/[0.06] pt-3">
            <dl className="grid grid-cols-2 gap-y-1.5 text-xs">
              {p.specs.map((s) => (
                <div key={s.label} className="contents">
                  <dt className="text-gray-400">{s.label}</dt>
                  <dd className="text-right font-semibold text-gray-900">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        )}

        {/* How to Use */}
        {p.howToUse && (
          <div className="mt-3 border-t border-black/[0.06] pt-3">
            <p className="mono-label text-gray-400 mb-2">How to Use</p>
            <ol className="flex flex-col gap-1">
              {p.howToUse.map((step, i) => (
                <li key={i} className="flex gap-2 text-xs text-gray-600">
                  <span className="shrink-0 font-semibold text-gray-400">{i + 1}.</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        )}

        {/* Buy on Amazon */}
        <div className="mt-4">
          <a
            href={p.amazonUrl}
            target="_blank"
            rel="noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-[#FF9900] py-2.5 font-sans text-sm font-bold text-[#0B0C0E] transition-opacity hover:opacity-90"
          >
            <ShoppingCart className="size-3.5" aria-hidden="true" />
            Buy on Amazon
          </a>
        </div>
      </div>
    </article>
  );
}

export default function ProductsPage() {
  const tipsRef = useGsapReveal<HTMLElement>();

  useEffect(() => {
    document.title = "Car Care Products — Drive Shine Hyderabad";
  }, []);

  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Care that matches the finish."
        copy="Professional car care products — the same quality our inspectors trust."
        image={images.productsHero}
        alt="Car care bottles on a tabletop"
      />

      <section className="bg-white">
        <div className="shell section-y">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
            {comingSoonProducts.map((p) => (
              <div key={p.id} className="flex flex-col overflow-hidden rounded-2xl border border-black/[0.08] bg-white shadow-sm opacity-60">
                <div className="flex items-center justify-center bg-gray-50" style={{ minHeight: 200 }}>
                  <span className="mono-label rounded-full border border-black/10 px-5 py-2 text-gray-400">Coming Soon</span>
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <p className="mono-label text-gray-400">{p.eyebrow}</p>
                  <h2 className="mt-1 font-display text-lg font-bold text-gray-900">{p.name}</h2>
                  <p className="mt-2 text-xs text-gray-400">Available soon.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={tipsRef} className="bg-gray-50">
        <div className="shell section-y">
          <SectionHeading eyebrow="Usage tips" title="Get more from every bottle." />
          <ul className="mt-10 grid gap-5 md:mt-14 md:gap-6 lg:grid-cols-3">
            {usageTips.map((t) => (
              <li key={t.title} className="card-surface p-5 md:p-8">
                <h3 className="font-display text-lg font-bold text-gray-900">{t.title}</h3>
                <p className="mt-3 text-base leading-[1.7] text-gray-500">{t.copy}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title="Not sure what your car needs?"
        copy="Send us the make, model and paint colour. We'll recommend the right products."
      />
    </>
  );
}
