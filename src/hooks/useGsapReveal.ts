import { useEffect, useRef } from "react";
import { registerGsap } from "./useLenis";

/**
 * Scroll reveal for a container: animates children matching `selector`
 * from y:40/opacity:0 once, at "top 80%".
 */
export function useGsapReveal<T extends HTMLElement = HTMLDivElement>(
  selector = ".reveal",
) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const { gsap, ScrollTrigger } = registerGsap();

    const ctx = gsap.context(() => {
      const targets = gsap.utils.toArray<HTMLElement>(selector);
      if (!targets.length) return;
      if (reduced) {
        gsap.set(targets, { opacity: 1, y: 0 });
        return;
      }
      gsap.fromTo(
        targets,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.07,
          scrollTrigger: { trigger: el, start: "top 80%", once: true },
        },
      );
    }, el);

    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, [selector]);

  return ref;
}
