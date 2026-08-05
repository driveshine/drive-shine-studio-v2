export const site = {
  name: "Drive Shine",
  trademark: "Drive Shine™",
  tagline: "Know before you drive it home.",
  city: "Hyderabad, India",
  phone: "9494642244",
  phoneHref: "tel:+919494642244",
  whatsapp: "https://wa.me/919494642244",
  email: "customercare@drive-shine.com",
  hours: "24 Hours • 7 Days a Week",
  socials: [
    { label: "Facebook", href: "https://facebook.com/driveshine" },
    { label: "Instagram", href: "https://instagram.com/driveshine" },
    { label: "LinkedIn", href: "https://linkedin.com/company/driveshine" },
  ],
} as const;

export const nav = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Products", to: "/products" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;

/* TODO: replace Unsplash placeholders with client photography */
export const images = {
  hero: "https://images.unsplash.com/photo-1616422285623-13ff0162193c?auto=format&fit=crop&w=1920&q=70",
  servicesHero:
    "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1920&q=70",
  productsHero:
    "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1920&q=70",
  aboutHero:
    "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1920&q=70",
  pdi: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1200&q=70",
  care: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=1200&q=70",
  why1: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=70",
  why2: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1200&q=70",
  why3: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1200&q=70",
} as const;

export const stats = [
  { value: 150, suffix: "+", label: "Point inspection" },
  { value: 24, suffix: "/7", label: "Availability" },
  { value: 8, suffix: "yrs", label: "Field experience" },
  { value: 2, suffix: "hr", label: "Report turnaround" },
] as const;

export const steps = [
  {
    n: "01",
    title: "Book your slot",
    copy: "Tell us the car, the dealership and the delivery date. We lock an inspector for that window.",
  },
  {
    n: "02",
    title: "We inspect on site",
    copy: "Our inspector arrives at the dealership or your home with calibrated tools and a 150+ point protocol.",
  },
  {
    n: "03",
    title: "Detailed digital report",
    copy: "Photographic evidence, paint readings, electrical checks and a clear verdict — delivered within hours.",
  },
  {
    n: "04",
    title: "Accept with confidence",
    copy: "Walk into delivery knowing exactly what you are signing for, with leverage to get issues fixed first.",
  },
] as const;

export const whyRows = [
  {
    eyebrow: "Independent",
    title: "We work for you, never the dealership",
    copy: "No commissions, no referrals, no soft-pedalling defects. Our only obligation is to the person paying for the car.",
    image: images.why1,
    alt: "Dark modern car parked under low workshop lighting",
  },
  {
    eyebrow: "Precision",
    title: "Instrument-backed, not eyeball-backed",
    copy: "Paint depth gauges, OBD scans, panel-gap measurement and torque verification. Every claim in the report has a number behind it.",
    image: images.why2,
    alt: "Close-up of a car body panel being measured during inspection",
  },
  {
    eyebrow: "Transparency",
    title: "A report you can hand to the dealer",
    copy: "Plain language, photographic proof and a severity rating on every finding, so the conversation at delivery is short and factual.",
    image: images.why3,
    alt: "Detailed close-up of clean car headlight and bodywork",
  },
] as const;

export const testimonials = [
  {
    quote:
      "They found transit scratches and a mismatched paint panel on my new SUV before I signed. The dealer resolved everything the same day.",
    name: "Rahul K.",
    meta: "Gachibowli • SUV delivery",
  },
  {
    quote:
      "Worth every rupee. The report was more thorough than anything the showroom handed me, and it arrived within two hours.",
    name: "Sneha P.",
    meta: "Kondapur • Hatchback delivery",
  },
  {
    quote:
      "Professional, quick and completely independent. They inspected at my home on a Sunday evening without any fuss.",
    name: "Imran S.",
    meta: "Banjara Hills • Sedan delivery",
  },
] as const;

export const values = [
  {
    icon: "shield",
    label: "Independence",
    copy: "We take no money from dealerships. Our findings answer to you alone.",
  },
  {
    icon: "gauge",
    label: "Precision",
    copy: "A repeatable 150+ point protocol with measured, documented outcomes.",
  },
  {
    icon: "eye",
    label: "Transparency",
    copy: "Every defect photographed, rated and explained in language you can act on.",
  },
] as const;

export const aboutCopy = [
  "Drive Shine™ is an independent pre-delivery inspection service based in Hyderabad. We exist for one moment: the hour before you accept the keys to a brand new car — when problems are still the dealer's responsibility, not yours.",
  "A new vehicle passes through transport, storage and yard handling before it reaches you. Transit scratches, paint rework, missing accessories, software faults and electrical niggles are common, and they are far easier to resolve before delivery than after. Our inspectors arrive with the tools and the protocol to surface them.",
  "Alongside inspections, we supply a curated range of premium car care products so the finish you sign for stays that way. We operate across Hyderabad, 24 hours a day, at the dealership or at your home.",
] as const;
