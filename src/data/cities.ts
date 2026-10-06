import { useEffect, useState } from 'react';

export interface CityData {
  id: string;
  name: string;
  slug: string;
  headline: string;
  description: string;
  coverageAreas: string[];
  contactPhone: string;
  displayOrder?: number;
  highlightStyle?: 'dark' | 'light' | 'outline';
  state?: 'Telangana' | 'Andhra Pradesh' | 'Network Hub';
}

export const API_BASE_URL =
  (import.meta.env['VITE_API_URL'] as string | undefined) ||
  (typeof window !== 'undefined' && window.location.hostname === 'localhost'
    ? 'http://localhost:5173'
    : 'https://pdi.driveshine.co.in');

// ── Core Network: Andhra Pradesh & Telangana 8 Cities ─────────────────────────
export const AP_TELANGANA_CITIES: CityData[] = [
  {
    id: 'hyderabad',
    name: 'Hyderabad',
    slug: 'hyderabad',
    state: 'Telangana',
    headline: 'Car PDI in Hyderabad — 150+ Point Vehicle Inspection',
    description:
      'Drive Shine’s flagship pre-delivery inspection service covering Greater Hyderabad. Don’t sign delivery papers blindly — our certified automotive engineers perform rigorous 150+ checkpoint evaluations right at the dealer showroom or stockyard.',
    coverageAreas: [
      'Gachibowli',
      'Kondapur',
      'Madhapur',
      'Kukatpally',
      'Hitech City',
      'Banjara Hills',
      'Jubilee Hills',
      'Secunderabad',
      'LB Nagar',
      'Miyapur',
      'Bowenpally',
    ],
    contactPhone: '+919494642244',
    highlightStyle: 'dark',
    displayOrder: 1,
  },
  {
    id: 'visakhapatnam',
    name: 'Visakhapatnam (Vizag)',
    slug: 'visakhapatnam',
    state: 'Andhra Pradesh',
    headline: 'Car PDI in Visakhapatnam & Vizag — Independent Inspection',
    description:
      'Professional on-site pre-delivery vehicle inspection across Vizag. Marine and coastal transit checks, digital paint thickness gauge tests, OBD-II diagnostic scans, and paperwork audits before vehicle handover.',
    coverageAreas: [
      'Madhurawada',
      'Gajuwaka',
      'Siripuram',
      'MVP Colony',
      'NAD Junction',
      'Dwaraka Nagar',
      'Sheela Nagar Auto Cluster',
      'Pendurthi',
    ],
    contactPhone: '+919494642244',
    highlightStyle: 'dark',
    displayOrder: 2,
  },
  {
    id: 'vijayawada',
    name: 'Vijayawada',
    slug: 'vijayawada',
    state: 'Andhra Pradesh',
    headline: 'Car PDI in Vijayawada — Certified Car Pre-Delivery Inspection',
    description:
      'Professional vehicle inspections across Benz Circle, MG Road, Auto Nagar, and NH16 showroom corridors. Inspect every body panel, engine component, and electrical system before vehicle registration.',
    coverageAreas: [
      'Benz Circle',
      'MG Road',
      'Auto Nagar',
      'Governorpet',
      'Kanuru',
      'Enikepadu',
      'Bhavanipuram',
      'Gannavaram',
    ],
    contactPhone: '+919494642244',
    highlightStyle: 'light',
    displayOrder: 3,
  },
  {
    id: 'guntur',
    name: 'Guntur',
    slug: 'guntur',
    state: 'Andhra Pradesh',
    headline: 'Car PDI in Guntur — Professional Pre-Delivery Vehicle Inspection',
    description:
      'Drive Shine PDI is available across Guntur for customers purchasing new or pre-owned vehicles. Protect your hard-earned investment against transit scrapes and repaint jobs before signing delivery papers.',
    coverageAreas: [
      'Brodipet',
      'Arundelpet',
      'Auto Nagar',
      'Amaravati Road',
      'Nallapadu',
      'Collectorate Road',
      'Pattabhipuram',
    ],
    contactPhone: '+919494642244',
    highlightStyle: 'light',
    displayOrder: 4,
  },
  {
    id: 'rajahmundry',
    name: 'Rajahmundry',
    slug: 'rajahmundry',
    state: 'Andhra Pradesh',
    headline: 'Car PDI in Rajahmundry — Professional Car Inspection Before Delivery',
    description:
      'Book a professional Drive Shine car inspection before taking vehicle delivery in Rajahmundry. Unbiased 150+ point assessment covering exterior paint, mechanical health, tyre DOT codes, and paperwork.',
    coverageAreas: [
      'Danavaipeta',
      'Morampudi',
      'Diwancheruvu Auto Corridor',
      'Lalacheruvu',
      'Prakash Nagar',
      'Kotipalli Bus Stand',
      'Dowleswaram',
    ],
    contactPhone: '+919494642244',
    highlightStyle: 'light',
    displayOrder: 5,
  },
  {
    id: 'kakinada',
    name: 'Kakinada',
    slug: 'kakinada',
    state: 'Andhra Pradesh',
    headline: 'Car PDI in Kakinada — Certified Vehicle Inspection at Dealership',
    description:
      'Drive Shine provides professional car PDI services in Kakinada. Our inspectors inspect your car on-site at dealer stockyards with digital paint meters and diagnostic scanners before delivery day.',
    coverageAreas: [
      'Bhanugudi',
      'Jagannaickpur',
      'Ramanayyapeta',
      'Madhavapatnam Auto Hub',
      'Sarpavaram',
      'Cinema Road',
      'Samalkot Highway',
    ],
    contactPhone: '+919494642244',
    highlightStyle: 'light',
    displayOrder: 6,
  },
  {
    id: 'warangal',
    name: 'Warangal',
    slug: 'warangal',
    state: 'Telangana',
    headline: 'Car PDI in Warangal — Certified New Car Inspection Service',
    description:
      'Professional car PDI and pre-delivery vehicle inspection services in Warangal, Hanamkonda, and Kazipet. Ensure zero dealer-side transit damages or repaints before signing RTO papers.',
    coverageAreas: [
      'Hanamkonda',
      'Kazipet',
      'Subedari',
      'Naimnagar',
      'Hunter Road Dealerships',
      'Mulugu Road',
    ],
    contactPhone: '+919494642244',
    highlightStyle: 'light',
    displayOrder: 7,
  },
  {
    id: 'karimnagar',
    name: 'Karimnagar',
    slug: 'karimnagar',
    state: 'Telangana',
    headline: 'Car PDI in Karimnagar — Expert Car Inspection Before Delivery',
    description:
      'Get your new car inspected before delivery in Karimnagar. Drive Shine engineers evaluate 150+ points including paint gauge check, electrical systems, battery health, and fluid levels on-site.',
    coverageAreas: [
      'Collectorate Road',
      'Mankammathota',
      'Kothapalli Auto Cluster',
      'Jagtial Road',
      'Housing Board Colony',
      'Mukarampura',
    ],
    contactPhone: '+919494642244',
    highlightStyle: 'light',
    displayOrder: 8,
  },
];

export const FALLBACK_CITIES: CityData[] = [
  ...AP_TELANGANA_CITIES,
  // Other major metros across India
  {
    id: 'gurgaon',
    name: 'Gurgaon',
    slug: 'gurgaon',
    headline: 'Car PDI in Gurgaon — 150+ Point Vehicle Inspection',
    description:
      'Ensure your new car is 100% factory-spec before signing delivery documents. Certified inspectors on-site at Gurgaon showrooms and stockyards.',
    coverageAreas: ['Golf Course Road', 'Cyber Hub', 'Sohna Road', 'MG Road', 'Sector 29', 'Manesar'],
    contactPhone: '+919494642244',
    highlightStyle: 'dark',
  },
  {
    id: 'delhi',
    name: 'Delhi',
    slug: 'delhi',
    headline: 'Car PDI in Delhi NCR — Certified Pre-Delivery Inspection',
    description:
      'Unbiased on-site pre-delivery vehicle assessment by senior automotive inspectors across North, South, East, and West Delhi.',
    coverageAreas: ['Connaught Place', 'Saket', 'Dwarka', 'Rohini', 'South Extension', 'Okhla'],
    contactPhone: '+919494642244',
    highlightStyle: 'dark',
  },
  {
    id: 'bangalore',
    name: 'Bangalore',
    slug: 'bangalore',
    headline: 'Car PDI in Bangalore — Professional Pre-Delivery Car Inspection',
    description:
      'Bengaluru’s leading independent vehicle inspection service with industrial-grade paint thickness gauges and OBD-II diagnostics.',
    coverageAreas: ['Whitefield', 'Koramangala', 'Indiranagar', 'Electronic City', 'HSR Layout', 'Hebbal'],
    contactPhone: '+919494642244',
    highlightStyle: 'dark',
  },
  {
    id: 'chennai',
    name: 'Chennai',
    slug: 'chennai',
    headline: 'Car PDI in Chennai — Comprehensive Showroom PDI',
    description:
      'Independent vehicle pre-delivery assessment for new car buyers in Chennai. Coastal humidity and transit storage checks.',
    coverageAreas: ['Anna Nagar', 'OMR', 'Velachery', 'Guindy', 'T Nagar', 'Porur', 'Tambaram'],
    contactPhone: '+919494642244',
    highlightStyle: 'light',
  },
  {
    id: 'mumbai',
    name: 'Mumbai',
    slug: 'mumbai',
    headline: 'Car PDI in Mumbai — Independent Vehicle Inspection Service',
    description:
      'Avoid flood transit wear, repainted body panels, and electrical faults with 150+ checkpoint inspection service in Mumbai and Thane.',
    coverageAreas: ['Andheri', 'Bandra', 'Powai', 'Borivali', 'Navi Mumbai', 'Thane West'],
    contactPhone: '+919494642244',
    highlightStyle: 'dark',
  },
  {
    id: 'pune',
    name: 'Pune',
    slug: 'pune',
    headline: 'Car PDI in Pune — Expert Car PDI Before Delivery',
    description:
      'Comprehensive pre-delivery inspection at all Pune and PCMC showrooms before you sign delivery documents.',
    coverageAreas: ['Wakad', 'Hinjewadi', 'Baner', 'Viman Nagar', 'Kharadi', 'Kothrud'],
    contactPhone: '+919494642244',
    highlightStyle: 'dark',
  },
];

// Additional city directory for the expandable pan-India modal
export const EXTENDED_CITIES = [
  'Noida', 'Faridabad', 'Ghaziabad', 'Chandigarh', 'Mohali', 'Panchkula', 'Jaipur', 'Lucknow',
  'Kanpur', 'Kolkata', 'Ahmedabad', 'Coimbatore', 'Kochi', 'Thiruvananthapuram', 'Madurai', 'Trichy',
  'Salem', 'Calicut', 'Mysore', 'Mangalore', 'Hubli', 'Belgaum', 'Surat', 'Vadodara', 'Rajkot',
  'Indore', 'Bhopal', 'Nagpur', 'Nashik', 'Aurangabad', 'Patna', 'Ranchi', 'Bhubaneswar', 'Dehradun',
  'Agra', 'Varanasi', 'Amritsar', 'Ludhiana', 'Udaipur', 'Nellore', 'Kurnool', 'Tirupati', 'Anantapur',
  'Nizamabad', 'Khammam', 'Ramagundam',
];

const TELANGANA_CITIES = new Set([
  'hyderabad',
  'warangal',
  'karimnagar',
  'nizamabad',
  'khammam',
  'ramagundam',
  'nalgonda',
  'mahbubnagar',
  'siddipet',
  'mancherial',
  'adilabad',
  'suryapet',
  'miryalaguda',
]);

const ANDHRA_CITIES = new Set([
  'visakhapatnam',
  'vizag',
  'vijayawada',
  'guntur',
  'rajahmundry',
  'kakinada',
  'srikakulam',
  'nellore',
  'kurnool',
  'tirupati',
  'anantapur',
  'kadapa',
  'eluru',
  'ongole',
  'vizianagaram',
  'machilipatnam',
  'tenali',
  'chittoor',
  'hindupur',
  'bhimavaram',
  'madanapalle',
  'guntakal',
  'dharmavaram',
  'gudivada',
  'narasaraopet',
  'tadepalligudem',
  'amaravati',
]);

export function inferState(cityName: string, slug?: string): 'Telangana' | 'Andhra Pradesh' | 'Network Hub' {
  const norm = (slug || cityName).toLowerCase().replace(/[^a-z]/g, '');
  for (const ts of TELANGANA_CITIES) {
    if (norm.includes(ts)) return 'Telangana';
  }
  for (const ap of ANDHRA_CITIES) {
    if (norm.includes(ap)) return 'Andhra Pradesh';
  }
  return 'Network Hub';
}

export function getCityUrl(slug: string): string {
  const normalized = slug.toLowerCase().trim();
  const canonical = normalized === 'vizag' ? 'visakhapatnam' : normalized;
  return `/pdi-${canonical}`;
}

let cachedCities: CityData[] | null = null;
let fetchPromise: Promise<CityData[]> | null = null;

export async function fetchCities(forceFresh = false): Promise<CityData[]> {
  if (cachedCities && !forceFresh) return cachedCities;
  if (fetchPromise && !forceFresh) return fetchPromise;

  fetchPromise = (async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/public/cities`, {
        headers: { Accept: 'application/json' },
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = await res.json();
      if (json.success && Array.isArray(json.data) && json.data.length > 0) {
        const mapped: CityData[] = json.data.map((c: any) => {
          const rawAreas = typeof c.coverageAreas === 'string'
            ? c.coverageAreas.split(',').map((s: string) => s.trim()).filter(Boolean)
            : Array.isArray(c.coverageAreas) ? c.coverageAreas : [];
          const coverageAreas = rawAreas.length > 0
            ? rawAreas
            : [`Central ${c.name}`, 'Dealership Corridor', 'Showroom Hub'];

          const desc = typeof c.description === 'string' && c.description.trim().length > 10
            ? c.description.trim()
            : `Drive Shine provides professional Pre-Delivery Inspection (PDI) services for new and used cars across ${c.name}. 150+ point inspection with digital paint meter and OBD scanner.`;

          return {
            id: c.id,
            name: c.name,
            slug: c.slug,
            state: inferState(c.name, c.slug),
            headline: c.headline || `Car PDI in ${c.name} — 150+ Point Vehicle Inspection`,
            description: desc,
            coverageAreas,
            contactPhone: c.contactPhone || '+919494642244',
            displayOrder: c.displayOrder,
            highlightStyle:
              c.slug === 'hyderabad' || c.slug === 'visakhapatnam'
                ? 'dark'
                : 'light',
          };
        });
        cachedCities = mapped;
        return mapped;
      }
    } catch (err) {
      console.warn('Using bundled fallback cities:', err);
    }
    return FALLBACK_CITIES;
  })();

  const result = await fetchPromise;
  fetchPromise = null;
  return result || FALLBACK_CITIES;
}

export function useCities() {
  const [cities, setCities] = useState<CityData[]>(() => cachedCities || AP_TELANGANA_CITIES);
  const [loading, setLoading] = useState<boolean>(!cachedCities);

  useEffect(() => {
    let mounted = true;
    void fetchCities().then((res) => {
      if (mounted && res && res.length > 0) {
        setCities(res);
        setLoading(false);
      }
    });
    return () => {
      mounted = false;
    };
  }, []);

  return { cities, loading, count: cities.length };
}

export async function fetchCityBySlug(slug: string): Promise<CityData | null> {
  const normalized = slug.toLowerCase().trim();

  // Special alias handling: 'vizag' -> 'visakhapatnam'
  const lookupSlug = normalized === 'vizag' ? 'visakhapatnam' : normalized;

  try {
    const res = await fetch(`${API_BASE_URL}/api/public/cities/${encodeURIComponent(lookupSlug)}`, {
      headers: { Accept: 'application/json' },
    });
    if (res.ok) {
      const json = await res.json();
      if (json.success && json.data) {
        const c = json.data;
        return {
          id: c.id,
          name: normalized === 'vizag' ? 'Visakhapatnam (Vizag)' : c.name,
          slug: normalized,
          headline: c.headline,
          description: c.description,
          coverageAreas: typeof c.coverageAreas === 'string'
            ? c.coverageAreas.split(',').map((s: string) => s.trim()).filter(Boolean)
            : Array.isArray(c.coverageAreas) ? c.coverageAreas : [],
          contactPhone: c.contactPhone || '+919494642244',
          displayOrder: c.displayOrder,
        };
      }
    }
  } catch (err) {
    console.warn(`Fallback lookup for city slug ${slug}:`, err);
  }

  const found = FALLBACK_CITIES.find((c) => c.slug === lookupSlug);
  if (found) {
    if (normalized === 'vizag') {
      return { ...found, slug: 'vizag', name: 'Visakhapatnam (Vizag)' };
    }
    return found;
  }

  // If in extended list, dynamically generate a realistic profile
  const extendedMatch = EXTENDED_CITIES.find((c) => c.toLowerCase().replace(/\s+/g, '-') === normalized);
  if (extendedMatch) {
    return {
      id: `city-${normalized}`,
      name: extendedMatch,
      slug: normalized,
      headline: `Car PDI in ${extendedMatch} — 150+ Point Vehicle Inspection`,
      description: `Drive Shine provides independent, certified pre-delivery car inspections across all car dealerships and stockyards in ${extendedMatch}. Avoid transit scratches, repainted panels, and electrical faults before delivery.`,
      coverageAreas: [`Central ${extendedMatch}`, `Auto Nagar`, `Industrial Cluster`, `Showroom Hub`],
      contactPhone: '+919494642244',
    };
  }

  return null;
}

export async function submitWebsiteBooking(payload: {
  fullName: string;
  phone: string;
  email?: string | undefined;
  location?: string | undefined;
  city?: string | undefined;
  make?: string | undefined;
  model?: string | undefined;
  year?: string | undefined;
  date?: string | undefined;
  time?: string | undefined;
  notes?: string | undefined;
  sourceUrl?: string | undefined;
}): Promise<{ success: boolean; id?: string }> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/public/submit-booking`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    return { success: true, id: data.data?.id };
  } catch (err) {
    console.warn('Failed to post booking to Worker API, client WhatsApp flow remains active:', err);
    return { success: false };
  }
}
