import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Search, Sparkles, X } from 'lucide-react';
import { fetchCities, EXTENDED_CITIES, type CityData, FALLBACK_CITIES } from '@/data/cities';

export function CityPills() {
  const [cities, setCities] = useState<CityData[]>(FALLBACK_CITIES);
  const [modalOpen, setModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    void fetchCities().then((res) => {
      if (res && res.length > 0) setCities(res);
    });
  }, []);

  // Split cities into Row 1 and Row 2 matching the client's screenshot
  const row1Slugs = ['gurgaon', 'delhi', 'noida', 'bangalore', 'mumbai', 'pune', 'hyderabad', 'chennai', 'kolkata', 'ahmedabad'];
  const row2Slugs = ['ghaziabad', 'faridabad', 'chandigarh', 'mohali', 'panchkula', 'jaipur', 'lucknow', 'kanpur'];

  const row1Cities = row1Slugs
    .map((slug) => cities.find((c) => c.slug === slug))
    .filter(Boolean) as CityData[];

  const row2Cities = row2Slugs
    .map((slug) => cities.find((c) => c.slug === slug))
    .filter(Boolean) as CityData[];

  // Filtered list for the "+ 181 more cities" dialog
  const allCityNames = Array.from(
    new Set([...cities.map((c) => c.name), ...EXTENDED_CITIES])
  ).sort((a, b) => a.localeCompare(b));

  const filteredDirectory = allCityNames.filter((name) =>
    name.toLowerCase().includes(searchQuery.toLowerCase().trim())
  );

  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden border-b border-neutral-100">
      <div className="container mx-auto px-4 max-w-6xl text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/60 mb-4">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          <span className="text-[11px] md:text-xs font-bold uppercase tracking-widest text-amber-700">
            PAN-INDIA SERVICE
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-neutral-900 mb-3">
          PDI Experts in <span className="text-[#f59e0b]">175+ Cities</span>
        </h2>

        {/* Subtitle */}
        <p className="text-neutral-600 text-sm md:text-base font-normal max-w-xl mx-auto mb-10 md:mb-12">
          Book a certified inspector near your dealership.
        </p>

        {/* Pills container */}
        <div className="flex flex-col items-center gap-3 md:gap-3.5 max-w-5xl mx-auto">
          {/* Row 1 */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-2.5">
            {row1Cities.map((city) => {
              const isDark = ['gurgaon', 'delhi', 'noida', 'bangalore', 'mumbai', 'pune'].includes(city.slug);
              return (
                <Link
                  key={city.slug}
                  to={`/city/${city.slug}`}
                  className={`inline-flex items-center justify-center px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 transform hover:-translate-y-0.5 shadow-xs ${
                    isDark
                      ? 'bg-neutral-900 text-white hover:bg-neutral-800 hover:shadow-md'
                      : 'bg-neutral-100 text-neutral-800 hover:bg-neutral-200/90 hover:text-black border border-neutral-200/40'
                  }`}
                >
                  {city.name}
                </Link>
              );
            })}
          </div>

          {/* Row 2 */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-2.5">
            {row2Cities.map((city) => {
              const isPanchkula = city.slug === 'panchkula';
              return (
                <Link
                  key={city.slug}
                  to={`/city/${city.slug}`}
                  className={`inline-flex items-center justify-center px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 transform hover:-translate-y-0.5 shadow-xs ${
                    isPanchkula
                      ? 'bg-neutral-100 text-neutral-900 border-2 border-neutral-900 hover:bg-neutral-200'
                      : 'bg-neutral-100 text-neutral-800 hover:bg-neutral-200/90 hover:text-black border border-neutral-200/40'
                  }`}
                >
                  {city.name}
                </Link>
              );
            })}

            {/* "+ 181 more cities" pill */}
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium text-neutral-600 border border-dashed border-neutral-300 bg-white hover:bg-neutral-50 hover:border-neutral-900 hover:text-neutral-900 transition-all cursor-pointer shadow-xs"
            >
              + 181 more cities
            </button>
          </div>
        </div>
      </div>

      {/* Directory Modal for "+ 181 more cities" */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-neutral-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="p-5 md:p-6 border-b border-neutral-100 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-neutral-900 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-red-600" />
                  Select Your City for Car PDI
                </h3>
                <p className="text-xs md:text-sm text-neutral-500 mt-1">
                  DriveShine certified inspectors cover 175+ cities across India.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-neutral-400 hover:text-neutral-800 hover:bg-neutral-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Search Input */}
            <div className="p-4 border-b border-neutral-100 bg-neutral-50/50">
              <div className="relative">
                <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search city (e.g. Warangal, Vijayawada, Surat, Indore)…"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white border border-neutral-200 rounded-xl pl-10 pr-4 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                  autoFocus
                />
              </div>
            </div>

            {/* City Grid */}
            <div className="p-5 overflow-y-auto flex-1">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                {filteredDirectory.map((cityName) => {
                  const slug = cityName.toLowerCase().replace(/\s+/g, '-');
                  return (
                    <Link
                      key={slug}
                      to={`/city/${slug}`}
                      onClick={() => setModalOpen(false)}
                      className="flex items-center px-3 py-2 rounded-lg text-sm font-medium text-neutral-700 hover:text-black hover:bg-neutral-100 transition-colors truncate"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-300 mr-2 shrink-0 group-hover:bg-red-500" />
                      <span className="truncate">{cityName}</span>
                    </Link>
                  );
                })}
                {filteredDirectory.length === 0 && (
                  <div className="col-span-full py-8 text-center text-neutral-400 text-sm">
                    No cities matching &ldquo;{searchQuery}&rdquo;. Contact us directly for custom inspection locations!
                  </div>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 bg-neutral-50 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
              <span>Need inspection at an unlisted location?</span>
              <a
                href="https://wa.me/919494642244?text=Hi%20DriveShine%2C%20I%20need%20a%20car%20PDI%20at%20a%20custom%20location"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-red-600 hover:underline"
              >
                Chat on WhatsApp →
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
