import React from "react";
import { Suspense } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Route, Routes, useLocation } from "react-router-dom";
import LandingPage from "./LandingPage/Index";
import About from "./about/Index";
import Contact from "./contact/Index";
import PumpPage from "./productSubPage/Index";
import WiresPage from "./wiresAccessoriesPage/Index";
import SwitchesPage from "./switchesAccessoriesPage/Index";
import LightingSolutionsPage from "./lightingSolutionsPage/index";
import FaucetsSanitarywaresPage from "./faucetsSanitarywaresPage/index";
import PlumbingProductsPage from "./plumbingProductsPage/Index";
import AppliancesPage from "./appliancesPage/Index";
import ElectricalServices from "./electricalServices/Index";
import PlumbingServices from "./plumbingServices/Index";
import ScrollToTop from "../../Component/ScrollToTop";

const Index = () => {
  return (
    <>
      <ScrollToTop />
      <Suspense
        fallback={
          <div className="text-center mt-10">
            <LoadingOutlined />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product-pump" element={<PumpPage />} />
          <Route path="/products/wires-accessories" element={<WiresPage />} />
          <Route
            path="/products/switches-accessories"
            element={<SwitchesPage />}
          />
          <Route
            path="/products/lighting-solutions"
            element={<LightingSolutionsPage />}
          />
          <Route
            path="/products/faucets-sanitarywares"
            element={<FaucetsSanitarywaresPage />}
          />
          <Route
            path="/products/plumbing-products"
            element={<PlumbingProductsPage />}
          />
          <Route path="/products/appliances" element={<AppliancesPage />} />
          <Route path="/services/electrical" element={<ElectricalServices />} />
          <Route path="/services/plumbing" element={<PlumbingServices />} />
        </Routes>
      </Suspense>
    </>
  );
};
export default Index;
