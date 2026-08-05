export type Service = {
  n: string;
  title: string;
  summary: string;
  checklist: string[];
};

export const servicesIntro = {
  eyebrow: "What we inspect",
  title: "Every check that should happen before you take the keys.",
  body: "A new car is not automatically a flawless car. Transit damage, storage marks, missing accessories and factory oversights are common — and once you sign the delivery acceptance, they become your problem. Drive Shine inspects independently, on your side, before the handover. You get a clear report, photographs of every issue, and the leverage to have it fixed before you drive home.",
};

export const services: Service[] = [
  {
    n: "01",
    title: "New Car PDI",
    summary:
      "A complete pre-delivery inspection of your brand-new vehicle, from paint to electronics, carried out before you accept delivery.",
    checklist: [
      "Full walkaround with paint depth and panel gap checks",
      "Engine bay, fluids and undercarriage inspection",
      "All electricals, infotainment and safety systems tested",
      "Odometer, VIN and manufacturing date verification",
      "Photographic evidence of every observation",
    ],
  },
  {
    n: "02",
    title: "Dealership Inspection",
    summary:
      "We inspect the car at the showroom, before it leaves the dealer's premises, so any issue is theirs to correct.",
    checklist: [
      "On-site inspection at the dealership, at your scheduled slot",
      "Verification that the delivered car matches your booked variant and colour",
      "Check for demo use, test-drive wear or long storage effects",
      "Documentation and invoice cross-check",
      "Issues raised with the dealer while you still hold the leverage",
    ],
  },
  {
    n: "03",
    title: "Home Delivery Inspection",
    summary:
      "Taking delivery at home? We inspect on arrival, before you sign the acceptance receipt.",
    checklist: [
      "Inspection at your doorstep, at delivery time",
      "Transit damage assessment — scratches, dents, transport marks",
      "Confirmation that all promised accessories arrived with the car",
      "Immediate verbal verdict plus a written report",
      "Guidance on what to refuse and what to accept",
    ],
  },
  {
    n: "04",
    title: "Paint & Body Inspection",
    summary:
      "Paint thickness readings and panel-by-panel checks that reveal repainting, touch-ups and repairs the eye misses.",
    checklist: [
      "Digital paint depth measurement on every panel",
      "Detection of repainted or repaired sections",
      "Panel gap and alignment consistency",
      "Scratches, dents, swirl marks and stone chips",
      "Glass, headlamp and trim condition",
    ],
  },
  {
    n: "05",
    title: "Mechanical & Electrical Inspection",
    summary:
      "The systems you cannot see. Engine, transmission, brakes, battery and the full electrical harness, checked properly.",
    checklist: [
      "Engine start behaviour, idle quality and unusual noise",
      "Fluid levels and leak inspection",
      "Battery health and charging system",
      "Brakes, suspension and steering response",
      "OBD scan for stored fault codes",
    ],
  },
  {
    n: "06",
    title: "Interior & Exterior Quality Check",
    summary:
      "Fit, finish and function inside and out — the details that decide how the car feels for the next ten years.",
    checklist: [
      "Upholstery, dashboard and trim for stains, tears or gaps",
      "All switches, windows, locks, mirrors and seat adjusters",
      "Air conditioning performance and cabin filter",
      "Boot, spare wheel, jack and tool kit present and correct",
      "Tyre manufacturing dates and matching set verification",
    ],
  },
  {
    n: "07",
    title: "Accessories & Feature Verification",
    summary:
      "We confirm you actually received every accessory and feature you paid for — and that they work.",
    checklist: [
      "Line-by-line check against your invoice and booking sheet",
      "Fitted accessories tested, not just counted",
      "Infotainment, connectivity and camera systems verified",
      "Both keys, manuals, warranty booklet and service book",
      "Missing items flagged before payment is closed",
    ],
  },
  {
    n: "08",
    title: "Expert Inspection Report",
    summary:
      "Everything we find, documented in a clear report you can hand straight to the dealer.",
    checklist: [
      "Point-by-point findings with severity marked",
      "High-resolution photographs of every defect",
      "Paint depth readings recorded panel by panel",
      "A plain-language accept / fix-first recommendation",
      "Delivered digitally, same day",
    ],
  },
];

export const report = {
  eyebrow: "Deliverable",
  title: "A report the dealer cannot argue with.",
  body: "No verbal opinions and no vague summaries. You receive a structured document with photographs, measurements and a clear verdict on each point — the kind of evidence that gets things corrected quickly.",
  stats: ["150+ checkpoints", "Same-day report", "Photo evidence", "24/7 scheduling"],
};

export const reportItems = report.stats;

export const servicesFaq = [
  {
    q: "How long does a PDI take?",
    a: "Most inspections take 60 to 90 minutes depending on the vehicle and where it is parked.",
  },
  {
    q: "Can you inspect at the dealership before I pay the balance?",
    a: "Yes — that is the ideal time. Book your slot and we will be there before the handover.",
  },
  {
    q: "What if you find a problem?",
    a: "You get documented evidence and a clear recommendation. Most issues get resolved by the dealer once they are shown in writing.",
  },
  {
    q: "Do you inspect used cars too?",
    a: "Our focus is new vehicle pre-delivery inspection. Contact us for anything outside that.",
  },
  {
    q: "Which areas do you cover?",
    a: "Hyderabad and surrounding areas, available 24 hours a day, all seven days.",
  },
];

export const servicesCta = {
  title: "Book your inspection before delivery day.",
  copy: "Slots fill fast around weekends and month-end deliveries.",
};
