import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";

export function RouteProgressBar() {
  const barRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();
  const isFirst = useRef(true);

  useEffect(() => {
    // Skip on initial mount — preloader handles that
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    const bar = barRef.current;
    if (!bar) return;

    gsap.fromTo(
      bar,
      { scaleX: 0, opacity: 1, transformOrigin: "left center" },
      {
        scaleX: 1,
        duration: 0.35,
        ease: "power2.out",
        onComplete: () => {
          gsap.to(bar, { opacity: 0, duration: 0.2, delay: 0.05 });
        },
      },
    );
  }, [pathname]);

  return (
    <div
      ref={barRef}
      className="fixed inset-x-0 top-0 z-[9998] h-[2px] origin-left opacity-0"
      style={{ background: "#E01B22" }}
      aria-hidden="true"
    />
  );
}
