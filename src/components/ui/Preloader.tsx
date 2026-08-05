import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import logoUrl from "@/assets/logo.png";

const isMobile = () =>
  typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches;
const isReduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// ─── Better car SVG — lower, wider, more aggressive coupe profile ────────────
function CarSVG({ width }: { width: number }) {
  const h = width * 0.42;
  return (
    <svg width={width} height={h} viewBox="0 0 220 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="cg" x1="0" y1="0" x2="220" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#8b9096" />
          <stop offset="30%"  stopColor="#e4e6e9" />
          <stop offset="50%"  stopColor="#ffffff" />
          <stop offset="70%"  stopColor="#e4e6e9" />
          <stop offset="100%" stopColor="#8b9096" />
        </linearGradient>
        <linearGradient id="wg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(255,255,255,0.18)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.04)" />
        </linearGradient>
      </defs>

      {/* Body */}
      <path
        d="M8 58 L8 52 C8 52 14 46 22 44 L46 28 C52 20 66 14 84 13 L136 13 C154 13 168 18 178 26 L200 42 C208 44 214 48 214 52 L214 58 Z"
        stroke="url(#cg)" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"
      />
      {/* Roof glass fill */}
      <path
        d="M52 28 L72 14 L136 14 L162 28 Z"
        fill="url(#wg)" stroke="url(#cg)" strokeWidth="1" strokeLinejoin="round"
      />
      {/* A-pillar */}
      <line x1="52" y1="28" x2="72" y2="14" stroke="url(#cg)" strokeWidth="1.5" />
      {/* C-pillar */}
      <line x1="162" y1="28" x2="136" y2="14" stroke="url(#cg)" strokeWidth="1.5" />
      {/* B-pillar */}
      <line x1="108" y1="14" x2="108" y2="28" stroke="url(#cg)" strokeWidth="1" opacity="0.5" />
      {/* Door line */}
      <line x1="108" y1="28" x2="108" y2="56" stroke="url(#cg)" strokeWidth="0.8" opacity="0.35" />
      {/* Side skirt */}
      <line x1="44" y1="58" x2="176" y2="58" stroke="url(#cg)" strokeWidth="1" opacity="0.4" />
      {/* Front bumper detail */}
      <path d="M8 52 L18 48 L28 48" stroke="url(#cg)" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
      {/* Headlight */}
      <path d="M12 46 L22 44 L26 48 L14 50 Z" fill="rgba(255,255,255,0.12)" stroke="url(#cg)" strokeWidth="1" />
      {/* Rear light */}
      <path d="M206 46 L198 44 L196 50 L208 52 Z" fill="rgba(224,27,34,0.25)" stroke="#E01B22" strokeWidth="1" />

      {/* Front wheel */}
      <circle cx="52"  cy="64" r="13" stroke="url(#cg)" strokeWidth="2" />
      <circle cx="52"  cy="64" r="7"  stroke="url(#cg)" strokeWidth="1.2" opacity="0.6" />
      <circle cx="52"  cy="64" r="2"  fill="url(#cg)" />
      {/* Rear wheel */}
      <circle cx="168" cy="64" r="13" stroke="url(#cg)" strokeWidth="2" />
      <circle cx="168" cy="64" r="7"  stroke="url(#cg)" strokeWidth="1.2" opacity="0.6" />
      <circle cx="168" cy="64" r="2"  fill="url(#cg)" />

      {/* Ground shadow */}
      <ellipse cx="110" cy="78" rx="90" ry="3" fill="rgba(224,27,34,0.12)" />
    </svg>
  );
}

// ─── Preloader ───────────────────────────────────────────────────────────────
export function Preloader({ onDone }: { onDone: () => void }) {
  const overlayRef  = useRef<HTMLDivElement>(null);
  const topHalfRef  = useRef<HTMLDivElement>(null);
  const botHalfRef  = useRef<HTMLDivElement>(null);
  const roadRef     = useRef<HTMLDivElement>(null);
  const carRef      = useRef<HTMLDivElement>(null);
  const trail1Ref   = useRef<HTMLDivElement>(null);
  const trail2Ref   = useRef<HTMLDivElement>(null);
  const trail3Ref   = useRef<HTMLDivElement>(null);
  const logoWrapRef = useRef<HTMLDivElement>(null);
  const ringRef     = useRef<HTMLDivElement>(null);
  const wordRef     = useRef<HTMLDivElement>(null);
  const taglineRef  = useRef<HTMLParagraphElement>(null);
  const shineRef    = useRef<HTMLSpanElement>(null);
  const counterRef  = useRef<HTMLSpanElement>(null);

  const mobile   = isMobile();
  const reduced  = isReduced();
  const totalDur = mobile ? 1.8 : 2.4;
  const carWidth = mobile ? 130 : 200;
  const logoSize = mobile ? 52 : 72;

  useEffect(() => {
    document.body.style.overflow = "hidden";

    if (reduced) {
      gsap.set([logoWrapRef.current, wordRef.current, taglineRef.current], { opacity: 1, y: 0 });
      const t = setTimeout(() => {
        gsap.to(overlayRef.current, {
          opacity: 0, duration: 0.4,
          onComplete: () => { document.body.style.overflow = ""; onDone(); },
        });
      }, 600);
      return () => clearTimeout(t);
    }

    const tl = gsap.timeline({
      onComplete: () => { document.body.style.overflow = ""; onDone(); },
    });

    const counter = { val: 0 };

    // ── Initial states ──────────────────────────────────────────────────────
    gsap.set(topHalfRef.current, { y: "-100%" });
    gsap.set(botHalfRef.current, { y:  "100%" });
    gsap.set(carRef.current,     { opacity: 0, x: mobile ? "-50vw" : "-55vw" });
    gsap.set(roadRef.current,    { scaleX: 0, transformOrigin: "left center" });
    gsap.set([trail1Ref.current, trail2Ref.current, trail3Ref.current], { scaleX: 0, opacity: 0 });
    gsap.set(logoWrapRef.current, { opacity: 0, scale: 0.7 });
    gsap.set(ringRef.current,     { scale: 1.4, opacity: 0 });
    gsap.set(wordRef.current,     { opacity: 0, y: 18 });
    gsap.set(taglineRef.current,  { opacity: 0, y: 10 });
    gsap.set(shineRef.current,    { x: "-120%" });

    // ── 0.15s — road sweeps in ──────────────────────────────────────────────
    tl.to(roadRef.current, { scaleX: 1, duration: 0.55, ease: "power3.inOut", delay: 0.15 });

    // ── 0.4s — car drives in with trails ───────────────────────────────────
    tl.to(carRef.current, { opacity: 1, x: "2%", duration: mobile ? 0.55 : 0.7, ease: "power4.out" }, "-=0.25")
      .to(carRef.current, { x: "0%", duration: 0.2, ease: "power2.inOut" });

    tl.to(
      [trail1Ref.current, trail2Ref.current, trail3Ref.current],
      { scaleX: 1, opacity: 0.6, duration: 0.3, stagger: { each: 0.05 }, ease: "power2.out" },
      "<-0.5",
    ).to(
      [trail1Ref.current, trail2Ref.current, trail3Ref.current],
      { scaleX: 0, opacity: 0, duration: 0.4, stagger: 0.05, ease: "power2.in" },
      ">-0.1",
    );

    // ── 1.0s — car fades, logo + wordmark appear ────────────────────────────
    tl.to(carRef.current, { opacity: 0, x: "8vw", duration: 0.4, ease: "power2.in" }, "+=0.1");

    tl.to(logoWrapRef.current, { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.4)" }, "<+0.05");
    tl.to(ringRef.current,     { scale: 1,   opacity: 1, duration: 0.6, ease: "power3.out" }, "<");
    tl.to(wordRef.current,     { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }, "<+0.1");
    tl.to(taglineRef.current,  { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }, "<+0.15");

    // ── Shine sweep across logo + wordmark ──────────────────────────────────
    tl.to(shineRef.current, { x: "120%", duration: mobile ? 0.45 : 0.6, ease: "power2.inOut" }, "+=0.1");

    // ── Ring pulse ──────────────────────────────────────────────────────────
    tl.to(ringRef.current, { scale: 1.08, opacity: 0.5, duration: 0.35, ease: "power1.inOut", yoyo: true, repeat: 1 }, "<");

    // ── Counter 0 → 100 ─────────────────────────────────────────────────────
    tl.to(counter, {
      val: 100,
      duration: totalDur - 0.5,
      ease: "power1.inOut",
      onUpdate: () => {
        if (counterRef.current)
          counterRef.current.textContent = String(Math.round(counter.val)).padStart(2, "0");
      },
    }, 0);

    // ── Exit ─────────────────────────────────────────────────────────────────
    const exitAt = mobile ? 1.25 : 1.85;

    // Fade all content
    tl.to(
      [logoWrapRef.current, wordRef.current, taglineRef.current, roadRef.current],
      { opacity: 0, duration: 0.22, ease: "power2.in" },
      exitAt,
    );

    // Curtain halves slide in to cover
    tl.to(topHalfRef.current, { y: "0%", duration: 0.28, ease: "power3.in" }, exitAt + 0.08);
    tl.to(botHalfRef.current, { y: "0%", duration: 0.28, ease: "power3.in" }, "<");

    // Curtain halves split away revealing hero
    tl.to(topHalfRef.current, { y: "-100%", duration: 0.5, ease: "power4.inOut" }, exitAt + 0.38);
    tl.to(botHalfRef.current, { y:  "100%", duration: 0.5, ease: "power4.inOut" }, "<");

    return () => { tl.kill(); document.body.style.overflow = ""; };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9999]"
      style={{ background: "#0A0A0B" }}
      aria-hidden="true"
    >
      {/* ── Content layer (z:2) ─────────────────────────────────────────── */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-0" style={{ zIndex: 2 }}>

        {/* Car + trails */}
        <div className="relative flex items-center justify-center" style={{ marginBottom: -4 }}>
          {[trail1Ref, trail2Ref, trail3Ref].map((ref, i) => (
            <div
              key={i}
              ref={ref}
              className="absolute"
              style={{
                right: "100%",
                top: "50%",
                transform: "translateY(-50%)",
                transformOrigin: "right center",
                width: [90, 60, 36][i],
                height: [2, 1.5, 1][i],
                background: "linear-gradient(to left, #E01B22, transparent)",
                marginRight: 4,
              }}
            />
          ))}
          <div ref={carRef}>
            <CarSVG width={carWidth} />
          </div>
        </div>

        {/* Road hairline */}
        <div
          ref={roadRef}
          style={{
            width: "min(560px, 88vw)",
            height: 2,
            background: "linear-gradient(to right, transparent, #E01B22 15%, #E01B22 85%, transparent)",
          }}
        />

        {/* Logo + wordmark block */}
        <div className="mt-8 flex flex-col items-center gap-3">

          {/* Logo with glow ring */}
          <div ref={logoWrapRef} className="relative flex items-center justify-center">
            {/* Animated ring */}
            <div
              ref={ringRef}
              className="absolute rounded-full"
              style={{
                width:  logoSize + 16,
                height: logoSize + 16,
                border: "1.5px solid rgba(224,27,34,0.5)",
                boxShadow: "0 0 24px 4px rgba(224,27,34,0.2)",
              }}
            />
            <img
              src={logoUrl}
              alt=""
              className="rounded-full relative"
              style={{ width: logoSize, height: logoSize, zIndex: 1 }}
            />
          </div>

          {/* Wordmark */}
          <div ref={wordRef} className="relative overflow-hidden">
            <span
              className="block font-display font-extrabold uppercase"
              style={{
                fontSize: mobile ? "clamp(1.6rem,7vw,2.2rem)" : "clamp(2.2rem,5vw,3.2rem)",
                letterSpacing: "0.1em",
                backgroundImage: "linear-gradient(180deg,#fff 0%,#e4e6e9 38%,#8b9096 55%,#fff 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
                whiteSpace: "nowrap",
              }}
            >
              Drive Shine
            </span>
            {/* Shine sweep */}
            <span
              ref={shineRef}
              className="pointer-events-none absolute inset-0"
              style={{
                background: "linear-gradient(105deg, transparent 15%, rgba(255,255,255,0.6) 50%, transparent 85%)",
                transform: "skewX(-16deg)",
              }}
            />
          </div>

          {/* Tagline */}
          <p
            ref={taglineRef}
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: 10,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#9CA1A8",
            }}
          >
            Know before you drive it home
          </p>
        </div>

        {/* Counter */}
        <div
          className="absolute bottom-8 right-8 font-mono font-medium"
          style={{ fontSize: 11, letterSpacing: "0.2em", color: "#4a4f55" }}
        >
          <span ref={counterRef}>00</span>
          <span style={{ color: "#2a2f35" }}> / 100</span>
        </div>

        {/* Red corner accent */}
        <div
          className="absolute bottom-0 left-0"
          style={{
            width: mobile ? 80 : 120,
            height: mobile ? 80 : 120,
            background: "radial-gradient(circle at bottom left, rgba(224,27,34,0.18) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-0 right-0"
          style={{
            width: mobile ? 80 : 120,
            height: mobile ? 80 : 120,
            background: "radial-gradient(circle at top right, rgba(224,27,34,0.1) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* ── Curtain halves (z:1) — start off-screen ─────────────────────── */}
      <div ref={topHalfRef} className="absolute inset-x-0 top-0 h-1/2 bg-[#0A0A0B]" style={{ zIndex: 1 }} />
      <div ref={botHalfRef} className="absolute inset-x-0 bottom-0 h-1/2 bg-[#0A0A0B]" style={{ zIndex: 1 }} />
    </div>
  );
}
