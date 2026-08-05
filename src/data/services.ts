export type Service = {
  n: string;
  title: string;
  summary: string;
  checklist: string[];
};

export const services: Service[] = [
  {
    n: "01",
    title: "New Car PDI",
    summary:
      "The complete pre-delivery inspection on a brand new vehicle, carried out before you sign anything.",
    checklist: [
      "150+ point protocol",
      "VIN & manufacture date verification",
      "Odometer and transit history",
      "Photographic evidence of every finding",
    ],
  },
  {
    n: "02",
    title: "Dealership Inspection",
    summary:
      "We attend the showroom on your behalf and inspect the exact unit allocated to you, on their floor.",
    checklist: [
      "On-site at the dealership",
      "Unit-match against your booking",
      "Yard damage and storage checks",
      "Immediate verbal verdict",
    ],
  },
  {
    n: "03",
    title: "Home Delivery Inspection",
    summary:
      "Taking delivery at home? We inspect at your doorstep before the paperwork is handed over.",
    checklist: [
      "Anywhere in Hyderabad",
      "Evening and weekend slots",
      "Transport damage assessment",
      "Handover checklist walkthrough",
    ],
  },
  {
    n: "04",
    title: "Paint & Body Inspection",
    summary:
      "Coating thickness readings across every panel to expose rework, respray and transit repair.",
    checklist: [
      "Digital paint depth gauge readings",
      "Panel gap measurement",
      "Swirl, scratch and dent mapping",
      "Underbody and wheel arch check",
    ],
  },
  {
    n: "05",
    title: "Mechanical & Electrical Inspection",
    summary:
      "Engine bay, drivetrain, fluids and full electronic diagnostics before the car ever sees a road.",
    checklist: [
      "OBD-II fault code scan",
      "Fluid levels and leak inspection",
      "Battery health and charging test",
      "Cold start and idle behaviour",
    ],
  },
  {
    n: "06",
    title: "Interior & Exterior Quality Check",
    summary:
      "Trim, upholstery, glass, seals and finish inspected to showroom-delivery standard.",
    checklist: [
      "Upholstery and trim condition",
      "Glass, seals and weatherstrip",
      "Panel alignment and shut lines",
      "Odour, damp and cleanliness",
    ],
  },
  {
    n: "07",
    title: "Accessories & Feature Verification",
    summary:
      "Everything you paid for, verified present and functional — nothing quietly missing at delivery.",
    checklist: [
      "Invoice-to-fitment match",
      "Infotainment and connectivity",
      "Safety systems and cameras",
      "Tool kit, spare and documents",
    ],
  },
  {
    n: "08",
    title: "Expert Inspection Report",
    summary:
      "A structured digital report with severity ratings you can put in front of the dealer immediately.",
    checklist: [
      "Delivered within 2 hours",
      "Photo evidence per finding",
      "Severity rating and recommendation",
      "Shareable PDF and web link",
    ],
  },
];

export const reportItems = [
  "Vehicle identity and VIN verification",
  "Paint thickness readings, panel by panel",
  "Panel gap and alignment measurements",
  "OBD-II diagnostic scan output",
  "Electrical and infotainment function log",
  "Interior condition and trim assessment",
  "Accessory and feature verification list",
  "Severity-rated summary with recommendation",
];
