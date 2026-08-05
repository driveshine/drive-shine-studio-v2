import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SiteLayout } from "@/components/layout/site-layout";
import HomePage from "@/pages/home";
import ServicesPage from "@/pages/services";
import ProductsPage from "@/pages/products";
import AboutPage from "@/pages/about";
import ContactPage from "@/pages/contact";
import NotFoundPage from "@/pages/not-found";
import PreloaderTestPage from "@/pages/preloader-test";

export default function App() {
  return (
    <BrowserRouter>
      <SiteLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/preloader-test" element={<PreloaderTestPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </SiteLayout>
    </BrowserRouter>
  );
}
