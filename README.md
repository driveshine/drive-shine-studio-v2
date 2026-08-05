# Drive Shine Studio

PROJECT: Drive Shine — premium marketing website (frontend only, 5 pages)
the above is logo

STACK
- Vite + React 18 + TypeScript
- Tailwind CSS (config-driven design tokens, no arbitrary hex in JSX)
- React Router DOM v6 for the 5 routes
- Animation stack:
  - GSAP + ScrollTrigger  -> all scroll-driven reveals, pinned sections, counters, parallax
  - Lenis                 -> smooth inertial scrolling, synced to GSAP ticker
  - Framer Motion         -> page transitions, hover/tap micro-interactions, modal + mobile nav
  - Embla Carousel        -> product slider and testimonial slider
- lucide-react for icons. No icon fonts.
- No backend, no CMS, no database. Contact form is UI-only: validate client-side, show a success state, log payload to console with a clearly marked TODO for API wiring.

BRAND
Drive Shine™ — automotive Pre-Delivery Inspection (PDI) and premium car care products, Hyderabad, India.
Positioning: the independent expert who inspects your NEW car before you accept delivery. Tone = confident, technical, protective. Think performance-car brand, not local garage.
Tagline direction: "Know before you drive it home."

DESIGN TOKENS (tailwind.config.js — extend theme, use CSS variables)
Colors:
  --carbon:      #0A0A0B   (page background)
  --carbon-800:  #121214   (cards / raised surfaces)
  --carbon-700:  #1B1B1F   (borders, hairlines at 60% opacity)
  --red:         #E01B22   (primary accent — CTAs, active states, underlines)
  --red-deep:    #A50F16   (gradient stop, pressed state)
  --chrome-100:  #F2F3F5
  --chrome-300:  #C9CCD1
  --chrome-500:  #8B9096   (chrome gradient stops)
  --bone:        #F5F6F7   (primary text on dark)
  --muted:       #9CA1A8   (body copy on dark)
Chrome text effect: background-image linear-gradient(180deg, #FFFFFF 0%, #E4E6E9 38%, #8B9096 55%, #FFFFFF 100%) with background-clip:text. Use ONLY on large display headings and the wordmark. Never on body copy.
Red glow: box-shadow 0 0 40px -8px rgba(224,27,34,.55) on primary buttons at hover only.
Rule: red covers no more than ~8% of any viewport. Everything else is carbon + chrome.

TYPOGRAPHY
- Display / headings: "Archivo" (700/800), tight tracking (-0.02em), uppercase for section eyebrows.
- Body: "Inter" 400/500, 16-18px, line-height 1.65, color --muted.
- Numerals / specs / labels: "JetBrains Mono" 500, uppercase, letter-spacing 0.12em, 12px.
- Type scale: hero clamp(3rem, 7vw, 6.5rem); h2 clamp(2rem, 4vw, 3.25rem); h3 1.5rem.

LAYOUT SYSTEM
- Max width 1280px, gutter 24px mobile / 48px desktop.
- Vertical section rhythm: py-24 mobile, py-36 desktop. Be generous — whitespace is what makes it read premium.
- 12-col grid, asymmetric compositions preferred over centered-everything.
- Hairline dividers: 1px solid rgba(255,255,255,.08).
- Card style: --carbon-800 bg, 1px rgba(255,255,255,.07) border, radius 16px, on hover lift -6px + border shifts to rgba(224,27,34,.35). Transition 400ms cubic-bezier(.16,1,.3,1).

MOTION SPEC (this is what makes or breaks it)
- Lenis: duration 1.2, easing easeOutExpo, wheelMultiplier 1. Hook into gsap.ticker; ScrollTrigger.update on lenis scroll.
- Page load: chrome wordmark fade+scale from .96 with a red sweep line crossing it once, then content reveal. Max 1.2s total, run once per session.
- Hero: headline reveals by line via SplitText-style masked spans, y:110% -> 0, stagger .08, ease power4.out. Background car image gets a slow scale 1.08 -> 1 over 2s.
- Scroll reveals: every section uses ScrollTrigger start "top 80%", once:true, y:40 -> 0, opacity 0 -> 1, stagger .07. Never animate on every scroll pass.
- Stat counters: GSAP number tween on enter (e.g. "150+ point inspection", "24/7 availability").
- Parallax: hero image and one mid-page image move at 0.85 / 1.15 speed via ScrollTrigger scrub.
- Pinned section on Home: the "How our PDI works" 4-step flow pins for the duration and steps advance with scrub, with a red progress rail filling on the left.
- Buttons: red fill wipes in from left on hover (scaleX transform-origin left), text stays static, subtle glow.
- Nav: transparent over hero, on scroll past 80px it gets carbon/80 background + backdrop-blur-xl + bottom hairline. Animate with Framer Motion.
- Page transitions: AnimatePresence, 300ms fade + 12px y, scroll to top on route change.
- Respect prefers-reduced-motion: kill Lenis, set all GSAP durations to 0, keep opacity finals.

PAGES

1. HOME (/)
   - Hero: full-viewport, dark automotive photo with a carbon gradient scrim (bottom 60% to opaque), chrome headline "Know before you drive it home.", subline about independent PDI before delivery, two CTAs: "Book an Inspection" (red) + "View Services" (ghost chrome border). Mono label strip at bottom: HYDERABAD • 24/7 • CERTIFIED INSPECTORS.
   - Trust bar: 4 mono stats with animated counters + thin red separators.
   - What we do: 2 large split cards — PDI Services / Auto Care Products — each with image, short copy, arrow link.
   - How it works: pinned 4-step scrub — 1 Book your slot / 2 We inspect on site / 3 Detailed digital report / 4 You accept delivery with confidence. Numbered in mono, red progress rail.
   - Services grid preview: 8 PDI items as compact cards, hover lift.
   - Why Drive Shine: alternating image/text rows, 3 rows, parallax on images.
   - Testimonials: Embla slider, quote in large chrome type, muted attribution.
   - CTA band: full-width carbon-800 with a faint red radial glow, headline + booking button.

2. SERVICES (/services)
   - Compact hero (60vh) with page eyebrow in mono.
   - Intro paragraph on the value of an independent PDI.
   - 8 services, each as an expanded row (not a tiny card): index number in mono, title, 2-line description, a checklist of what's covered, subtle red left border on hover. Stagger reveal.
     New Car PDI / Dealership Inspection / Home Delivery Inspection / Paint & Body Inspection /
     Mechanical & Electrical Inspection / Interior & Exterior Quality Check /
     Accessories & Feature Verification / Expert Inspection Report
   - "What's in the report" section: mock report card visual with checkmark list.
   - CTA band.

3. PRODUCTS (/products)
   - Hero with product-shot styling.
   - Filter chips (Exterior / Interior / Protection / Accessories) — client-side filter with Framer Motion layout animation.
   - Product grid, 7 items: Car Wash Shampoo, Glass Cleaner, Dashboard Polish, Tyre Polish, Interior Cleaner, Rat Repellent Spray, Premium Car Care Accessories.
     Card: product image on a carbon-800 tile with a soft red under-glow, name, one-line benefit, mono "Enquire" link that routes to /contact.
   - No prices, no cart — this is enquiry-driven.
   - Usage tips strip: 3 short cards.

4. ABOUT (/about)
   - Hero with the brand story headline.
   - About copy (rewrite the client's paragraph into 3 tighter paragraphs, same meaning).
   - Values: 3 columns — Independence, Precision, Transparency — icon + mono label + copy.
   - Coverage: Hyderabad, 24/7, on-site at dealership or your home.
   - Logo/brand moment: large circular logo with a slow continuous subtle rotation on the outer ring only (12s linear), pause on reduced-motion.
   - CTA band.

5. CONTACT (/contact)
   - Split layout: left = contact details, right = booking form.
   - Details: phone 9494642244 (tel: link), customercare@drive-shine.com (mailto:), Hyderabad, 24 Hours • 7 Days a Week, social icons (Facebook, Instagram, LinkedIn — use the supplied URLs).
   - Form "Book Your Inspection", grouped in three labelled sections with mono section headers:
       Your Information: Full Name*, Email Address*, Phone Number*
       Vehicle Details: Car Make* (placeholder "Suzuki, Hyundai"), Model* (placeholder "Swift, i20"), Year (optional)
       Preferred Schedule: Preferred Date (date input), Preferred Time (time input)
       Additional Notes (optional, textarea)
   - Input style: transparent bg, 1px bottom border only, label floats up on focus, border turns red on focus, error text in mono red. Validate with react-hook-form + zod.
   - Submit: red button, loading spinner state, then a success panel that replaces the form with a checkmark draw-in animation and a "we'll call you within 2 hours" line.

GLOBAL COMPONENTS
- Header: logo left, links (Home, Services, Products, About, Contact) center, "Book Inspection" red button right. Mobile: full-screen overlay menu, links stagger in, background carbon with a red diagonal accent.
- Footer: 4 columns (brand + tagline / quick links / services / contact), social icons with red hover, bottom bar "© 2026 Drive Shine™. All rights reserved." plus a thin chrome-to-red gradient hairline on top.
- Floating WhatsApp/call button bottom-right on mobile only, red, gentle pulse.
- 404 page in the same visual language.

QUALITY BAR
- Fully responsive: 360 / 768 / 1024 / 1440 / 1920. Test the pinned section carefully on mobile — disable the pin below 768px and fall back to a stacked stagger reveal.
- Semantic HTML, alt text on every image, focus-visible rings in red, keyboard-navigable menu and form, aria-labels on icon buttons.
- Lighthouse target 90+ across the board. Lazy-load below-fold images, use loading="lazy" + width/height to avoid CLS, preload the hero image and the display font.
- react-helmet-async for per-page title + meta description + OG tags.
- Clean structure: src/components/ui, src/components/sections, src/pages, src/hooks (useLenis, useGsapReveal), src/data (services.ts, products.ts), src/styles/tokens.css. All content lives in src/data — no hardcoded strings inside components.
- Use placeholder automotive imagery from Unsplash with clearly marked TODO comments where client photos go.

THEME + IMAGERY PASS — Drive Shine

Theme:

- Dark automotive luxury. Background #0A0A0B everywhere, cards #121214, hairline borders rgba(255,255,255,.07).

- Text: #F5F6F7 headings, #9CA1A8 body.

- Single accent red #E01B22 — buttons, active links, focus rings, small underlines only. Keep it under ~8% of the screen.

- Big headings get a chrome gradient text fill: linear-gradient(180deg,#FFF 0%,#E4E6E9 38%,#8B9096 55%,#FFF 100%) with background-clip:text.

- Section backgrounds: alternate flat carbon with a very subtle red radial glow at 6% opacity behind CTA bands, plus a faint 1px diagonal grid or noise texture at 3% opacity for depth. No gradients that look purple or blue.

Background images:

- Hero: dark studio shot of a new car, shot low and side-on, wet reflective floor. Overlay linear-gradient(180deg, rgba(10,10,11,.35) 0%, rgba(10,10,11,.85) 60%, #0A0A0B 100%) so text stays readable.

- Services page hero: close crop of a hand with an inspection light on car paint, desaturated, red-tinted highlight.

- Products page hero: dark tabletop with bottles lit from one side, deep shadows.

- About page: workshop interior at night, blurred, heavy scrim.

- CTA bands: no photo — carbon with a soft red glow from the bottom edge.

- Section accents: use faint car-silhouette line art in rgba(255,255,255,.04) as decorative background art, not photos.

Image rules:

- All photos desaturated 20% and darkened so nothing competes with the red accent.

- Cars must be modern, clean, dark-coloured (black/grey/white). No stock-photo people smiling at cameras, no showroom clipart, no US license plates visible.

- Product images on transparent or dark tiles with a soft red under-glow, never white backgrounds.

- Every image lazy-loaded with fixed aspect ratios, rounded 16px where inside cards, full-bleed in heroes.

- Mark each with a TODO comment for the client's real photos.
Build the full project. Start with tokens + Tailwind config + layout shell + Home page, then the remaining four pages.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/fc20f3f5-49eb-455a-b570-c30216e9c518).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
