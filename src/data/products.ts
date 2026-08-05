export type ProductCategory = "Exterior" | "Interior" | "Protection" | "Accessories";

export type Product = {
  id: string;
  name: string;
  eyebrow: string;
  price: string;
  mrp?: string;
  benefit: string;
  bullets: string[];
  specs?: { label: string; value: string }[];
  howToUse?: string[];
  category: ProductCategory;
  image: string;
  beforeAfterImage?: string;
  alt: string;
  amazonUrl: string;
  comingSoon?: boolean;
};

export const products: Product[] = [
  {
    id: "car-wash-shampoo",
    name: "Car & Bike Shampoo",
    eyebrow: "Premium Foam Wash",
    price: "₹249",
    mrp: "500ml",
    benefit: "A pH-balanced foam shampoo that lifts dirt and road grime without stripping wax or sealant. Safe for daily washes on both cars and bikes.",
    bullets: [
      "Rich foam lifts dirt & grime effectively",
      "pH-balanced — safe & gentle on all surfaces",
      "Leaves a high-gloss shine after every wash",
      "Won't strip existing wax or ceramic coating",
    ],
    specs: [
      { label: "Volume", value: "500ml" },
      { label: "Suitable for", value: "Cars & bikes" },
      { label: "Dilution", value: "1:40 with water" },
    ],
    howToUse: [
      "Rinse the vehicle to remove loose dirt.",
      "Dilute in a foam gun or bucket and apply.",
      "Agitate gently, then rinse off and dry with a microfiber towel.",
    ],
    category: "Exterior",
    image: "/WhatsApp Image 2026-08-05 at 2.59.35 PM.jpeg",
    beforeAfterImage: "/WhatsApp Image 2026-08-05 at 2.59.36 PM.jpeg",
    alt: "Drive Shine Car & Bike Shampoo",
    amazonUrl: "https://www.amazon.in/dp/B0H9552CX3",
  },
  {
    id: "dashboard-polish",
    name: "Dashboard Polish",
    eyebrow: "Premium Interior Care",
    price: "₹199",
    mrp: "250ml",
    benefit: "A UV-protective interior polish that restores factory shine to dashboards, door panels, and trim — without the greasy residue most polishes leave behind.",
    bullets: [
      "UV protection guards against fading & cracking",
      "Dries to a clean, non-greasy finish",
      "Restores original finish with a rich shine",
      "Repels dust build-up for longer",
    ],
    specs: [
      { label: "Volume", value: "250ml" },
      { label: "Suitable for", value: "Dash, door panels, trim" },
      { label: "Finish", value: "Satin, non-greasy" },
    ],
    howToUse: [
      "Wipe the surface clean and dry.",
      "Spray a small amount onto a microfiber cloth.",
      "Apply in even strokes and buff to a satin finish.",
    ],
    category: "Interior",
    image: "/WhatsApp Image 2026-08-05 at 2.59.48 PM.jpeg",
    beforeAfterImage: "/WhatsApp Image 2026-08-05 at 2.59.49 PM.jpeg",
    alt: "Drive Shine Dashboard Polish",
    amazonUrl: "https://www.amazon.in/dp/B0H9592CQ6",
  },
  {
    id: "glass-cleaner",
    name: "Glass Cleaner",
    eyebrow: "Streak-Free Formula",
    price: "₹149",
    mrp: "250ml",
    benefit: "A fast-acting, ammonia-conscious glass cleaner that cuts through road film, fingerprints, and smudges for a clear, streak-free view — inside and out.",
    bullets: [
      "Crystal clear visibility, streak-free finish",
      "Cuts through dirt, dust & smudges fast",
      "Safe on tinted & treated glass",
      "Quick-dry, no residue left behind",
    ],
    specs: [
      { label: "Volume", value: "250ml" },
      { label: "Suitable for", value: "Windshield, windows, mirrors" },
      { label: "Formula", value: "Streak-free, quick-dry" },
    ],
    howToUse: [
      "Spray directly onto the glass surface.",
      "Wipe with a clean microfiber towel in straight lines.",
      "Buff any residual streaks with a dry section of the towel.",
    ],
    category: "Exterior",
    image: "/WhatsApp Image 2026-08-05 at 2.59.58 PM.jpeg",
    beforeAfterImage: "/WhatsApp Image 2026-08-05 at 2.59.58 PM (1).jpeg",
    alt: "Drive Shine Glass Cleaner",
    amazonUrl: "https://www.amazon.in/dp/B0H9548K31",
  },
];

export const comingSoonProducts: Pick<Product, "id" | "name" | "eyebrow" | "category">[] = [
  { id: "windshield-washer", name: "Windshield Washer", eyebrow: "Glass Care", category: "Exterior" },
  { id: "interior-cleaner", name: "Interior Cleaner", eyebrow: "Interior Care", category: "Interior" },
  { id: "rat-repellent-spray", name: "Rat Repellent Spray", eyebrow: "Protection", category: "Protection" },
];

export const productCategories: ProductCategory[] = [
  "Exterior",
  "Interior",
];

export const usageTips = [
  {
    title: "Wash in the shade",
    copy: "Direct sun bakes shampoo onto panels and leaves water spots. Early morning or after sunset is best.",
  },
  {
    title: "Two-bucket method",
    copy: "One bucket for suds, one for rinse. It is the single cheapest way to avoid swirl marks on new paint.",
  },
  {
    title: "Top-down, one panel at a time",
    copy: "Work roof to sills and dry each section before it air-dries. Fresh microfibre only — never reuse a dropped cloth.",
  },
];
