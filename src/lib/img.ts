/** Build a responsive srcset from an Unsplash URL (WebP, mobile-first widths). */
export function srcSet(url: string, widths: number[] = [480, 768, 1280]) {
  return widths
    .map((w) => `${url.replace(/w=\d+/, `w=${w}`)}&fm=webp ${w}w`)
    .join(", ");
}

export const heroSizes = "(min-width: 768px) 100vw, 100vw";
export const cardSizes = "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 92vw";
