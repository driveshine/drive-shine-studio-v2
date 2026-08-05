import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;
export function registerGsap() {
  if (!registered && typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
    registered = true;
  }
  return { gsap, ScrollTrigger };
}

/** Smooth inertial scroll wired into the GSAP ticker.
 *  Pass `ready=false` to defer initialisation (e.g. until preloader exits). */
export function useLenis(ready = true) {
  useEffect(() => {
    if (!ready) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let lenis: { raf: (t: number) => void; destroy: () => void } | null = null;
    let cancelled = false;

    (async () => {
      const { default: Lenis } = await import("lenis");
      if (cancelled) return;
      const { gsap, ScrollTrigger } = registerGsap();
      // Native scroll on phones — Lenis smoothing is a liability on low-end Android.
      if (window.matchMedia("(max-width: 767px)").matches) return;
      const instance = new Lenis({
        duration: 1.2,
        syncTouch: true,
        touchMultiplier: 1.5,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        wheelMultiplier: 1,
      });
      lenis = instance;
      instance.on("scroll", ScrollTrigger.update);
      const raf = (time: number) => instance.raf(time * 1000);
      gsap.ticker.add(raf);
      gsap.ticker.lagSmoothing(0);
    })();

    return () => {
      cancelled = true;
      lenis?.destroy();
    };
  }, [ready]);
}
