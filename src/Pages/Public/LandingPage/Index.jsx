import React from "react";
import Header from "../../../layouts/headers";
import Footer from "../../../layouts/footer/Index";
import CommPanel from "./componets/CommPanel";
import HeroSection from "./componets/HeroSection";
import ReviewCard from "./componets/ReviewCard";
import LogoCarousel from "./componets/LogoCarousel";
import StatsSection from "./componets/StatsSection";
import ProductsGrid from "./componets/ProductsGrid";
import AppLayout from "../../../layouts/Index";
export default function LandingPage({ children }) {
  return (
    <>
      <AppLayout>
        {/* <Header /> */}
        <HeroSection />
        <LogoCarousel />
        <CommPanel />
        <ProductsGrid />
        <StatsSection />
        <ReviewCard />
        {/* {children} */}
        {/* <Footer /> */}
      </AppLayout>
    </>
  );
}
