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
}

export const API_BASE_URL =
  (import.meta.env['VITE_API_URL'] as string | undefined) ||
  (typeof window !== 'undefined' && window.location.hostname === 'localhost'
    ? 'http://localhost:5173'
    : 'https://pdi.driveshine.co.in');

export const FALLBACK_CITIES: CityData[] = [
  // Row 1 - Metros & Major hubs
  {
    id: 'gurgaon',
    name: 'Gurgaon',
    slug: 'gurgaon',
    headline: 'Car PDI in Gurgaon — 150+ Point Vehicle Inspection',
    description:
      'Ensure your new car is 100% factory-spec before signing delivery documents. Our certified automobile engineers inspect your vehicle on-site at any Gurgaon showroom or dealer stockyard with digital paint meters and OBD-II diagnostics.',
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
      'Unbiased on-site pre-delivery vehicle assessment by senior automotive inspectors across North, South, East, and West Delhi. We detect transit scrapes, hidden structural rework, and assembly line defects before registration.',
    coverageAreas: ['Connaught Place', 'Saket', 'Dwarka', 'Rohini', 'South Extension', 'Okhla Industrial Area'],
    contactPhone: '+919494642244',
    highlightStyle: 'dark',
  },
  {
    id: 'noida',
    name: 'Noida',
    slug: 'noida',
    headline: 'Car PDI in Noida & Greater Noida — 150+ Checkpoint Inspection',
    description:
      'Protect your hard-earned investment against transit flaws and repainted panels with DriveShine’s precision inspection tools at any Noida or Greater Noida dealership stockyard.',
    coverageAreas: ['Sector 18', 'Sector 62', 'Greater Noida West', 'Noida Expressway', 'Pari Chowk'],
    contactPhone: '+919494642244',
    highlightStyle: 'dark',
  },
  {
    id: 'bangalore',
    name: 'Bangalore',
    slug: 'bangalore',
    headline: 'Car PDI in Bangalore — Professional Pre-Delivery Car Inspection',
    description:
      'Bengaluru’s leading independent vehicle inspection service. Our certified inspectors bring industrial-grade paint thickness gauges, tyre tread tools, and battery diagnostics to any showroom or stockyard across the city.',
    coverageAreas: ['Whitefield', 'Koramangala', 'Indiranagar', 'Electronic City', 'HSR Layout', 'Hebbal', 'Marathahalli'],
    contactPhone: '+919494642244',
    highlightStyle: 'dark',
  },
  {
    id: 'mumbai',
    name: 'Mumbai',
    slug: 'mumbai',
    headline: 'Car PDI in Mumbai — Independent Vehicle Inspection Service',
    description:
      'Avoid flood transit wear, repainted body panels, and electrical faults with DriveShine’s 150+ checkpoint inspection service covering Mumbai, Thane, and Navi Mumbai dealerships.',
    coverageAreas: ['Andheri', 'Bandra', 'Powai', 'Borivali', 'Navi Mumbai', 'Thane West', 'Worli', 'Kurla'],
    contactPhone: '+919494642244',
    highlightStyle: 'dark',
  },
  {
    id: 'pune',
    name: 'Pune',
    slug: 'pune',
    headline: 'Car PDI in Pune — Expert Car PDI Before Delivery',
    description:
      'Comprehensive pre-delivery inspection at all Pune and PCMC showrooms. We catch transit dents, fluid leaks, sensor faults, and odometer tampering before you take delivery.',
    coverageAreas: ['Wakad', 'Hinjewadi', 'Baner', 'Viman Nagar', 'Kharadi', 'Kothrud', 'Hadapsar', 'Pimpri-Chinchwad'],
    contactPhone: '+919494642244',
    highlightStyle: 'dark',
  },
  {
    id: 'hyderabad',
    name: 'Hyderabad',
    slug: 'hyderabad',
    headline: 'Car PDI in Hyderabad — 150+ Point Vehicle Inspection',
    description:
      'DriveShine’s flagship pre-delivery inspection service covering Greater Hyderabad. Don’t sign delivery papers blindly — our certified engineers perform rigorous 150+ checkpoint evaluations right at the dealer stockyard.',
    coverageAreas: ['Gachibowli', 'Kondapur', 'Madhapur', 'Kukatpally', 'Hitech City', 'Banjara Hills', 'Jubilee Hills', 'Secunderabad'],
    contactPhone: '+919494642244',
    highlightStyle: 'light',
  },
  {
    id: 'chennai',
    name: 'Chennai',
    slug: 'chennai',
    headline: 'Car PDI in Chennai — Comprehensive Showroom PDI',
    description:
      'Independent vehicle pre-delivery assessment for new car buyers in Chennai. Coastal humidity and transit storage can cause unadvertised rust and electrical issues that our calibrated equipment uncovers.',
    coverageAreas: ['Anna Nagar', 'OMR', 'Velachery', 'Guindy', 'T Nagar', 'Porur', 'Tambaram', 'Alwarpet'],
    contactPhone: '+919494642244',
    highlightStyle: 'light',
  },
  {
    id: 'kolkata',
    name: 'Kolkata',
    slug: 'kolkata',
    headline: 'Car PDI in Kolkata — 150+ Point Pre-Delivery Check',
    description:
      'Verify paint consistency, electrical systems, and mechanical integrity before delivery across Kolkata and Howrah dealership stockyards with DriveShine certified engineers.',
    coverageAreas: ['Salt Lake', 'New Town', 'Park Street', 'Ballygunge', 'Rajarhat', 'Alipore', 'Howrah'],
    contactPhone: '+919494642244',
    highlightStyle: 'light',
  },
  {
    id: 'ahmedabad',
    name: 'Ahmedabad',
    slug: 'ahmedabad',
    headline: 'Car PDI in Ahmedabad — Pre-Delivery Car Inspection Experts',
    description:
      'Complete diagnostic scan, digital paint depth inspection, and interior audit before accepting keys at Ahmedabad and Gandhinagar showrooms.',
    coverageAreas: ['SG Highway', 'Prahlad Nagar', 'Bodakdev', 'Satellite', 'Vastrapur', 'Gandhinagar', 'Naroda'],
    contactPhone: '+919494642244',
    highlightStyle: 'light',
  },

  // Row 2 - Expanding cities & Tri-city
  {
    id: 'ghaziabad',
    name: 'Ghaziabad',
    slug: 'ghaziabad',
    headline: 'Car PDI in Ghaziabad — Certified Inspection Near You',
    description:
      'Ensure zero transit damage and factory assembly defects before driving your new vehicle home from Ghaziabad dealerships and stockyards.',
    coverageAreas: ['Indirapuram', 'Vaishali', 'Vasundhara', 'Raj Nagar Extension', 'Crossings Republik'],
    contactPhone: '+919494642244',
    highlightStyle: 'light',
  },
  {
    id: 'faridabad',
    name: 'Faridabad',
    slug: 'faridabad',
    headline: 'Car PDI in Faridabad — On-Site Dealership PDI',
    description:
      'Certified inspectors equipped with digital diagnostic tools at your dealership across Faridabad and Ballabhgarh.',
    coverageAreas: ['Sector 15', 'Sector 16', 'NIT Faridabad', 'Greater Faridabad', 'Mathura Road'],
    contactPhone: '+919494642244',
    highlightStyle: 'light',
  },
  {
    id: 'chandigarh',
    name: 'Chandigarh',
    slug: 'chandigarh',
    headline: 'Car PDI in Chandigarh — The City Beautiful’s Trusted PDI',
    description:
      'Independent, professional pre-delivery inspection service covering Chandigarh Tri-City showrooms and regional stockyards.',
    coverageAreas: ['Sector 17', 'Sector 35', 'Industrial Area Phase 1 & 2', 'Manimajra', 'Madhya Marg'],
    contactPhone: '+919494642244',
    highlightStyle: 'light',
  },
  {
    id: 'mohali',
    name: 'Mohali',
    slug: 'mohali',
    headline: 'Car PDI in Mohali — Comprehensive New Car Verification',
    description:
      'Inspect every body panel, engine component, and electrical module before signing dealer delivery forms in Mohali.',
    coverageAreas: ['Phase 7', 'Phase 3B2', 'Sector 70', 'Sector 82 Industrial Area', 'Airport Road'],
    contactPhone: '+919494642244',
    highlightStyle: 'light',
  },
  {
    id: 'panchkula',
    name: 'Panchkula',
    slug: 'panchkula',
    headline: 'Car PDI in Panchkula — Certified Vehicle PDI Service',
    description:
      'Complete peace of mind with 150+ point pre-delivery inspection at all Panchkula car dealerships and regional stockyards.',
    coverageAreas: ['Sector 5', 'Sector 20', 'MDC Sector 4', 'Industrial Area Phase 1', 'Pinjore Road'],
    contactPhone: '+919494642244',
    highlightStyle: 'outline',
  },
  {
    id: 'jaipur',
    name: 'Jaipur',
    slug: 'jaipur',
    headline: 'Car PDI in Jaipur — Pink City’s Premier Inspection Service',
    description:
      'Full diagnostic scan, paint depth inspection, and underbody review before taking car delivery across Jaipur dealerships.',
    coverageAreas: ['Tonk Road', 'Malviya Nagar', 'Vaishali Nagar', 'Mansarovar', 'C-Scheme', 'Ajmer Road'],
    contactPhone: '+919494642244',
    highlightStyle: 'light',
  },
  {
    id: 'lucknow',
    name: 'Lucknow',
    slug: 'lucknow',
    headline: 'Car PDI in Lucknow — Trusted Pre-Delivery Car Inspection',
    description:
      'Avoid transit scratches, odometer discrepancies, and repainted panels with certified PDI in Lucknow and Shaheed Path hubs.',
    coverageAreas: ['Gomti Nagar', 'Hazratganj', 'Alambagh', 'Indira Nagar', 'Kanpur Road', 'Shaheed Path'],
    contactPhone: '+919494642244',
    highlightStyle: 'light',
  },
  {
    id: 'kanpur',
    name: 'Kanpur',
    slug: 'kanpur',
    headline: 'Car PDI in Kanpur — On-Demand Dealership Vehicle Check',
    description:
      'Protect yourself from dealership surprises with comprehensive 150+ checkpoint vehicle inspections across Kanpur.',
    coverageAreas: ['Civil Lines', 'Swaroop Nagar', 'Mall Road', 'Kakadeo', 'GT Road'],
    contactPhone: '+919494642244',
    highlightStyle: 'light',
  },
  {
    id: 'vijayawada',
    name: 'Vijayawada',
    slug: 'vijayawada',
    headline: 'Car PDI in Vijayawada — Certified Car PDI Engineers',
    description:
      'Professional vehicle inspections across Benz Circle, MG Road, and auto clusters in Vijayawada and Guntur.',
    coverageAreas: ['Benz Circle', 'MG Road', 'Auto Nagar', 'Governorpet', 'Kanuru', 'Enikepadu'],
    contactPhone: '+919494642244',
    highlightStyle: 'light',
  },
  {
    id: 'visakhapatnam',
    name: 'Visakhapatnam',
    slug: 'visakhapatnam',
    headline: 'Car PDI in Vizag — Independent Inspection at All Dealerships',
    description:
      'Marine and coastal transit checks, paint inspection, and full OBD2 scan for new car buyers in Visakhapatnam.',
    coverageAreas: ['Siripuram', 'MVP Colony', 'Gajuwaka', 'Madhurawada', 'Dwaraka Nagar', 'NAD Junction'],
    contactPhone: '+919494642244',
    highlightStyle: 'light',
  },
  {
    id: 'warangal',
    name: 'Warangal',
    slug: 'warangal',
    headline: 'Car PDI in Warangal — Certified Vehicle Inspection',
    description:
      'Independent pre-delivery car inspection covering Warangal, Hanamkonda, and Kazipet dealerships.',
    coverageAreas: ['Hanamkonda', 'Kazipet', 'Subedari', 'Naimnagar', 'Hunter Road'],
    contactPhone: '+919494642244',
    highlightStyle: 'light',
  },
];

// Additional city directory for the "+ 181 more cities" expandable modal
export const EXTENDED_CITIES = [
  'Coimbatore', 'Kochi', 'Thiruvananthapuram', 'Madurai', 'Trichy', 'Salem', 'Calicut', 'Mysore', 'Mangalore',
  'Hubli', 'Belgaum', 'Surat', 'Vadodara', 'Rajkot', 'Bhavnagar', 'Jamnagar', 'Indore', 'Bhopal', 'Jabalpur',
  'Gwalior', 'Ujjain', 'Nagpur', 'Nashik', 'Aurangabad', 'Solapur', 'Kolhapur', 'Amravati', 'Nanded',
  'Patna', 'Ranchi', 'Jamshedpur', 'Dhanbad', 'Bhubaneswar', 'Cuttack', 'Rourkela', 'Guwahati', 'Raipur',
  'Bilaspur', 'Dehradun', 'Haridwar', 'Agra', 'Varanasi', 'Prayagraj', 'Meerut', 'Bareilly', 'Aligarh',
  'Moradabad', 'Saharanpur', 'Gorakhpur', 'Amritsar', 'Jalandhar', 'Ludhiana', 'Patiala', 'Bathinda',
  'Jodhpur', 'Kota', 'Bikaner', 'Udaipur', 'Ajmer', 'Bhilwara', 'Alwar', 'Guntur', 'Nellore', 'Kurnool',
  'Rajahmundry', 'Tirupati', 'Kakinada', 'Anantapur', 'Nizamabad', 'Khammam', 'Karimnagar', 'Ramagundam',
];

export async function fetchCities(): Promise<CityData[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/public/cities`, {
      headers: { Accept: 'application/json' },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    if (json.success && Array.isArray(json.data) && json.data.length > 0) {
      return json.data.map((c: any) => ({
        id: c.id,
        name: c.name,
        slug: c.slug,
        headline: c.headline,
        description: c.description,
        coverageAreas: typeof c.coverageAreas === 'string'
          ? c.coverageAreas.split(',').map((s: string) => s.trim()).filter(Boolean)
          : Array.isArray(c.coverageAreas) ? c.coverageAreas : [],
        contactPhone: c.contactPhone || '+919494642244',
        displayOrder: c.displayOrder,
        highlightStyle:
          c.slug === 'panchkula'
            ? 'outline'
            : ['gurgaon', 'delhi', 'noida', 'bangalore', 'mumbai', 'pune'].includes(c.slug)
            ? 'dark'
            : 'light',
      }));
    }
  } catch (err) {
    console.warn('Using bundled fallback cities:', err);
  }
  return FALLBACK_CITIES;
}

export async function fetchCityBySlug(slug: string): Promise<CityData | null> {
  const normalized = slug.toLowerCase().trim();
  try {
    const res = await fetch(`${API_BASE_URL}/api/public/cities/${encodeURIComponent(normalized)}`, {
      headers: { Accept: 'application/json' },
    });
    if (res.ok) {
      const json = await res.json();
      if (json.success && json.data) {
        const c = json.data;
        return {
          id: c.id,
          name: c.name,
          slug: c.slug,
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

  const found = FALLBACK_CITIES.find((c) => c.slug === normalized);
  if (found) return found;

  // If in extended list, dynamically generate a realistic profile
  const extendedMatch = EXTENDED_CITIES.find((c) => c.toLowerCase().replace(/\s+/g, '-') === normalized);
  if (extendedMatch) {
    return {
      id: `city-${normalized}`,
      name: extendedMatch,
      slug: normalized,
      headline: `Car PDI in ${extendedMatch} — 150+ Point Vehicle Inspection`,
      description: `DriveShine provides independent, certified pre-delivery car inspections across all car dealerships and stockyards in ${extendedMatch}. Avoid transit scratches, repainted panels, and electrical faults before delivery.`,
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
