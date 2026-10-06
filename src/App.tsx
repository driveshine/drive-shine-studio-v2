import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SiteLayout } from "@/components/layout/site-layout";
import HomePage from "@/pages/home";
import ServicesPage from "@/pages/services";
import ProductsPage from "@/pages/products";
import AboutPage from "@/pages/about";
import ContactPage from "@/pages/contact";
import CityPage from "@/pages/city";
import NotFoundPage from "@/pages/not-found";
import PreloaderTestPage from "@/pages/preloader-test";

const PDI_LANDING_SLUGS = [
  "hyderabad",
  "visakhapatnam",
  "vizag",
  "vijayawada",
  "guntur",
  "rajahmundry",
  "kakinada",
  "warangal",
  "karimnagar",
] as const;

export default function App() {
  return (
    <BrowserRouter>
      <SiteLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/car-pdi-andhra-pradesh-telangana" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Dedicated Individual City Landing Pages */}
          {PDI_LANDING_SLUGS.map((slug) => (
            <Route
              key={slug}
              path={`/pdi-${slug}`}
              element={<CityPage citySlugOverride={slug === "vizag" ? "visakhapatnam" : slug} />}
            />
          ))}

          {/* Generic parameterized city routes */}
          <Route path="/city/:citySlug" element={<CityPage />} />
          <Route path="/pdi/:citySlug" element={<CityPage />} />

          <Route path="/preloader-test" element={<PreloaderTestPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </SiteLayout>
    </BrowserRouter>
  );
}
