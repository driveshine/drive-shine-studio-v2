import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Search, Sparkles, X, Clock, CheckCircle2 } from 'lucide-react';
import { useCities, getCityUrl, EXTENDED_CITIES } from '@/data/cities';

export function CityPills() {
  const { cities: dbCities } = useCities();
  const [modalOpen, setModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Active pills on the homepage: ONLY cities added by the admin
  const activePills = useMemo(() => {
    return dbCities.map((c, i) => ({
      name: c.name,
      slug: c.slug,
      isDark: c.slug === 'hyderabad' || c.slug === 'visakhapatnam' || i < 3,
    }));
  }, [dbCities]);

  // Set of active slugs for quick lookup
  const activeSlugSet = useMemo(() => {
    return new Set(dbCities.map((c) => c.slug.toLowerCase()));
  }, [dbCities]);

  // Full directory: Active cities + Upcoming expansion cities marked "Coming Soon"
  const directory = useMemo(() => {
    const active = dbCities.map((c) => ({
      name: c.name,
      slug: c.slug,
      isActive: true,
    }));

    // Other cities marked as Coming Soon
    const otherHubs = [
      'Bangalore', 'Chennai', 'Mumbai', 'Pune', 'Delhi', 'Gurgaon', 'Noida', 'Kolkata',
      ...EXTENDED_CITIES,
    ];

    const comingSoonMap = new Map<string, { name: string; slug: string; isActive: boolean }>();
    otherHubs.forEach((name) => {
      const slug = name.toLowerCase().replace(/\s+/g, '-');
      if (!activeSlugSet.has(slug) && !comingSoonMap.has(slug)) {
        comingSoonMap.set(slug, { name, slug, isActive: false });
      }
    });

    const comingSoonList = Array.from(comingSoonMap.values()).sort((a, b) => a.name.localeCompare(b.name));

    return {
      active,
      comingSoon: comingSoonList,
    };
  }, [dbCities, activeSlugSet]);

  const filteredActive = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return directory.active;
    return directory.active.filter((c) => c.name.toLowerCase().includes(q) || c.slug.toLowerCase().includes(q));
  }, [directory.active, searchQuery]);

  const filteredComingSoon = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return directory.comingSoon;
    return directory.comingSoon.filter((c) => c.name.toLowerCase().includes(q) || c.slug.toLowerCase().includes(q));
  }, [directory.comingSoon, searchQuery]);

  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden border-b border-neutral-100">
      <div className="container mx-auto px-4 max-w-6xl text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red/10 border border-red/20 mb-4">
          <Sparkles className="w-3.5 h-3.5 text-red-600" />
          <span className="text-[11px] md:text-xs font-bold uppercase tracking-widest text-red-600">
            AUTHORIZED PDI NETWORK
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-neutral-900 mb-3">
          PDI Experts in <span className="text-[#f59e0b]">{dbCities.length} Cities</span>
        </h2>

        {/* Subtitle */}
        <p className="text-neutral-600 text-sm md:text-base font-normal max-w-xl mx-auto mb-10 md:mb-12">
          Book a certified inspector near your dealership.
        </p>

        {/* Pills container — ONLY active admin-added cities */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-5xl mx-auto">
          {activePills.map((item) => (
            <Link
              key={item.slug}
              to={getCityUrl(item.slug)}
              className={`inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 transform hover:-translate-y-0.5 shadow-xs ${
                item.isDark
                  ? 'bg-neutral-900 text-white hover:bg-neutral-800 hover:shadow-md'
                  : 'bg-neutral-100 text-neutral-800 hover:bg-neutral-200/90 hover:text-black border border-neutral-200/60'
              }`}
            >
              {item.name}
            </Link>
          ))}

          {/* "+ Other Cities (Coming Soon)" button */}
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full text-sm font-medium text-neutral-600 border border-dashed border-neutral-300 bg-white hover:bg-neutral-50 hover:border-neutral-900 hover:text-neutral-900 transition-all cursor-pointer shadow-xs"
          >
            <span>+ Other Cities</span>
            <span className="text-[10px] font-bold uppercase bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded-full">Coming Soon</span>
          </button>
        </div>
      </div>

      {/* Directory Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-neutral-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="p-5 md:p-6 border-b border-neutral-100 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-neutral-900 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-red-600" />
                  Drive Shine City Coverage
                </h3>
                <p className="text-xs md:text-sm text-neutral-500 mt-1">
                  Active in {dbCities.length} cities across Andhra Pradesh &amp; Telangana. Expanding soon to other major hubs.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-neutral-400 hover:text-neutral-800 hover:bg-neutral-100 transition-colors cursor-pointer"
                aria-label="Close dialog"
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
                  placeholder="Search city (e.g. Warangal, Vijayawada, Bangalore)…"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white border border-neutral-200 rounded-xl pl-10 pr-4 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                  autoFocus
                />
              </div>
            </div>

            {/* City Sections */}
            <div className="p-5 overflow-y-auto flex-1 space-y-6">
              {/* Active Cities Section */}
              {filteredActive.length > 0 && (
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-700 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      Active PDI Network ({filteredActive.length})
                    </h4>
                    <span className="text-[11px] font-medium text-neutral-500">Instant Booking Available</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {filteredActive.map((item) => (
                      <Link
                        key={item.slug}
                        to={getCityUrl(item.slug)}
                        onClick={() => setModalOpen(false)}
                        className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold text-neutral-900 bg-neutral-50 hover:bg-emerald-50 hover:text-emerald-900 border border-neutral-200/60 hover:border-emerald-300 transition-all group"
                      >
                        <span className="truncate">{item.name}</span>
                        <span className="text-[10px] uppercase font-bold text-emerald-600 bg-emerald-100/80 px-1.5 py-0.5 rounded">
                          Book →
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Coming Soon Cities Section */}
              {filteredComingSoon.length > 0 && (
                <div>
                  <div className="flex items-center justify-between mb-3 pt-4 border-t border-neutral-100">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-amber-700 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-amber-600" />
                      Upcoming Expansion Cities
                    </h4>
                    <span className="text-[11px] font-medium text-neutral-500">Launching Soon</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                    {filteredComingSoon.map((item) => (
                      <a
                        key={item.slug}
                        href={`https://wa.me/919494642244?text=Hi%20DriveShine%2C%20I%20would%20like%20to%20request%20car%20PDI%20in%20${encodeURIComponent(item.name)}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-neutral-600 bg-neutral-50/80 hover:bg-amber-50 hover:text-amber-900 border border-dashed border-neutral-200 hover:border-amber-300 transition-colors"
                        title="Click to request service in this city via WhatsApp"
                      >
                        <span className="truncate">{item.name}</span>
                        <span className="text-[9px] font-bold uppercase text-amber-700 bg-amber-100 px-1 py-0.2 rounded ml-1 shrink-0">
                          Coming Soon
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {filteredActive.length === 0 && filteredComingSoon.length === 0 && (
                <div className="py-8 text-center text-neutral-400 text-sm">
                  No cities matching &ldquo;{searchQuery}&rdquo;.
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-4 bg-neutral-50 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
              <span>Need inspection in a custom or unlisted city?</span>
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
