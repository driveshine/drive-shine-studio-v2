export type ProductCategory = "Exterior" | "Interior" | "Protection" | "Accessories";

export type Product = {
  id: string;
  name: string;
  benefit: string;
  category: ProductCategory;
  image: string;
  alt: string;
};

/* TODO: swap Unsplash placeholders for client product photography on dark tiles */
export const products: Product[] = [
  {
    id: "car-wash-shampoo",
    name: "Car Wash Shampoo",
    benefit: "pH-neutral foam that lifts grit without stripping protection.",
    category: "Exterior",
    image:
      "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=800&q=70",
    alt: "Bottle of car wash shampoo on a dark surface",
  },
  {
    id: "glass-cleaner",
    name: "Glass Cleaner",
    benefit: "Streak-free clarity on windscreens, mirrors and tint-safe glass.",
    category: "Exterior",
    image:
      "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=800&q=70",
    alt: "Spray bottle of glass cleaner beside a clean car window",
  },
  {
    id: "dashboard-polish",
    name: "Dashboard Polish",
    benefit: "Satin, non-greasy finish that shields plastics from UV fade.",
    category: "Interior",
    image:
      "https://images.unsplash.com/photo-1600661653561-629509216228?auto=format&fit=crop&w=800&q=70",
    alt: "Car dashboard with a clean satin finish",
  },
  {
    id: "tyre-polish",
    name: "Tyre Polish",
    benefit: "Deep black sidewalls with a dry, sling-free finish.",
    category: "Exterior",
    image:
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=70",
    alt: "Detailed close-up of a glossy black tyre sidewall",
  },
  {
    id: "interior-cleaner",
    name: "Interior Cleaner",
    benefit: "Safe on fabric, leather and trim — lifts stains, leaves no film.",
    category: "Interior",
    image:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=70",
    alt: "Clean car interior seats and console",
  },
  {
    id: "rat-repellent-spray",
    name: "Rat Repellent Spray",
    benefit: "Engine-bay safe deterrent that protects wiring looms from rodents.",
    category: "Protection",
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=800&q=70",
    alt: "Engine bay of a modern car under workshop lighting",
  },
  {
    id: "car-care-accessories",
    name: "Premium Car Care Accessories",
    benefit: "Microfibre, applicators and wash tools that won't mark new paint.",
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1600661653561-629509216228?auto=format&fit=crop&w=800&q=70",
    alt: "Set of microfibre car care accessories",
  },
];

export const productCategories: ProductCategory[] = [
  "Exterior",
  "Interior",
  "Protection",
  "Accessories",
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
