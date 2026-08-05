export const site = {
  name: "Drive Shine",
  trademark: "Drive Shine™",
  tagline: "Know the car before it's yours.",
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
  hero: "/heroimage.jpg",
  heroMobile: "/heroimage.jpg",
  servicesHero: "/heroimage.jpg",
  productsHero:
    "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1920&q=70",
  aboutHero:
    "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1920&q=70",
  pdi: "/pic1.jpg",
  care: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=1200&q=70",
  why1: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=70",
  why2: "/pic2.jpg",
  why3: "/pic3.jpg",
  tool1: "/pic1.jpg",
  tool2: "/pic2.jpg",
  tool3: "/pic3.jpg",
} as const;

export const stats = [
  { value: 300, suffix: "+", label: "Checkpoints" },
  { value: 6, suffix: "", label: "Systems covered" },
  { value: 3, suffix: "", label: "Vehicle plans" },
] as const;

export const steps = [
  {
    n: "01",
    title: "Book your slot",
    copy: "Tell us the car, the dealership or seller, and the date. We lock an inspector for that window — same-day slots available.",
  },
  {
    n: "02",
    title: "We inspect on site",
    copy: "Our inspector arrives with calibrated tools — paint depth gauge, tyre tread depth gauge, AC temperature meter — and checks 300+ points.",
  },
  {
    n: "03",
    title: "Walk through every finding",
    copy: "We explain every issue in person, clearly, with the pros and cons — before you decide whether to accept delivery.",
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
    copy: "Paint depth gauges, tyre tread depth measurement, AC temperature checks and panel-gap verification. Every finding has a number behind it.",
    image: images.why2,
    alt: "Close-up of a car body panel being measured during inspection",
  },
  {
    eyebrow: "Transparency",
    title: "Clear findings you can act on",
    copy: "Plain language, photographic proof and a severity rating on every finding — so the conversation at delivery is short and factual.",
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
      "Worth every rupee. The inspection was thorough and they found issues the showroom never mentioned. Completely independent.",
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
    copy: "Paint depth gauge, tyre tread depth gauge, AC temperature check — calibrated tools on every inspection.",
  },
  {
    icon: "eye",
    label: "Transparency",
    copy: "Every defect photographed and explained in language you can act on immediately.",
  },
] as const;

export const coverageAreas = [
  "Gachibowli", "Kondapur", "Banjara Hills", "Jubilee Hills", "Madhapur",
  "Hitech City", "Kukatpally", "Miyapur", "Manikonda", "Nanakramguda",
  "Secunderabad", "Begumpet", "Ameerpet", "Dilsukhnagar", "LB Nagar",
] as const;

export const trustItems = [
  { icon: "shield", text: "Independent — no dealership ties" },
  { icon: "wrench", text: "Calibrated professional tools" },
  { icon: "map-pin", text: "All of Hyderabad covered" },
  { icon: "clock", text: "Same-day slots available" },
] as const;

export const aboutCopy = [
  "Drive Shine™ is an independent pre-delivery inspection service based in Hyderabad. We exist for one moment: the hour before you accept the keys to a brand new car — when problems are still the dealer's responsibility, not yours.",
  "A new vehicle passes through transport, storage and yard handling before it reaches you. Transit scratches, paint rework, missing accessories and electrical niggles are common — and far easier to resolve before delivery than after. Our inspectors arrive with calibrated tools: paint depth gauges, tyre tread depth gauges and AC temperature meters.",
  "We also inspect pre-owned vehicles so you know exactly what you are buying. Alongside inspections, we supply a curated range of premium car care products. We operate across Hyderabad, 24 hours a day, at the dealership or at your home.",
] as const;
