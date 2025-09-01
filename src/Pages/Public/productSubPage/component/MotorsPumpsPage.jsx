import React, { useEffect } from "react";
import HeroSection from "../../../../Component/HeroSection";
import crompton from "../../../../assets/Images/crompton.jpeg";
import cri from "../../../../assets/Images/cri.webp";
import havells from "../../../../assets/Images/havells.webp";
import kisloslar from "../../../../assets/Images/kisloslar.webp";
import BrandCard from "../../../../Component/BrabdCard";
import pumb from "../../../../assets/plum.webp";
import Quote from "../../../../Component/Quote";
import useHomeSectionMedia from "../../../../Hooks/useHomeMedia";
export default function MotorsPumpsPage({ openModal }) {
  const { fetchSections, sectionsMap } = useHomeSectionMedia();
  console.log("sectionsMap: ", sectionsMap);

  const services = [
    "Free site survey and pump selection",
    "Professional installation and commissioning",
    "Annual maintenance contracts available",
    "24/7 emergency repair service",
    "Genuine spare parts guarantee",
  ];

  useEffect(() => {
    fetchSections(true); // 👈 important (banner=true)
  }, []);
  const Check = () => (
    <svg
      className="w-5 h-5 text-green-600 mr-3 flex-shrink-0"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L8.5 11.586l6.543-6.543a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );

  return (
    <section id="motors-pumps" className="page-section">
      {/* Hero */}
      <HeroSection
        title="Motors & Pumps"
        subtitle="Complete range of electrical motors and water pumps for all applications"
        backgroundImage={sectionsMap["Motors & Pumps"]} // ✅ now it will work
      />

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Categories */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Product Categories</h2>

            <div className="space-y-8">
              {/* Submersible Pumps */}
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-xl font-semibold mb-3">
                  Submersible Pumps
                </h3>
                <p className="text-gray-600 mb-3">
                  High-quality submersible pumps for borewell and open well
                  applications.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Power Range: 0.5HP to 25HP</li>
                  <li>Flow Rate: 500 LPH to 50,000 LPH</li>
                  <li>Head: 10m to 200m</li>
                  <li>Stainless steel construction</li>
                  <li>Auto-start and dry run protection</li>
                </ul>
              </div>

              {/* Centrifugal Pumps */}
              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="text-xl font-semibold mb-3">
                  Centrifugal Pumps
                </h3>
                <p className="text-gray-600 mb-3">
                  Self-priming monoblock pumps for domestic and agricultural
                  use.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Power Range: 0.5HP to 7.5HP</li>
                  <li>Flow Rate: 1000 LPH to 15,000 LPH</li>
                  <li>Head: 15m to 80m</li>
                  <li>Cast iron body with brass impeller</li>
                  <li>High efficiency and corrosion resistance</li>
                </ul>
              </div>

              {/* Industrial Motors */}
              <div className="border-l-4 border-purple-600 pl-6">
                <h3 className="text-xl font-semibold mb-3">
                  Industrial Motors
                </h3>
                <p className="text-gray-600 mb-3">
                  Three-phase and single-phase motors for various applications.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Power Range: 0.25HP to 50HP</li>
                  <li>IE2 and IE3 energy efficient motors</li>
                  <li>Flame proof and weather resistant options</li>
                  <li>Variable speed drive compatible</li>
                  <li>Long life and low maintenance</li>
                </ul>
              </div>
            </div>

            {/* CTAs */}
            {/* <Quote /> */}
          </div>

          {/* Right: Brand partners + Services */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Brand Partners</h2>
            <div className="grid grid-cols-2 gap-6">
              <BrandCard
                name="Crompton"
                image={crompton}
                desc="Premium quality motors and pumps with advanced technology"
              />
              <BrandCard
                name="Kirloskar"
                image={kisloslar}
                desc="Reliable industrial-grade pumps and motors"
              />
              <BrandCard
                name="Havells"
                image={havells}
                desc="Energy-efficient residential and commercial pumps"
              />
              <BrandCard
                name="CRI"
                image={cri}
                desc="Cost-effective pump solutions"
              />
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Services Included</h3>
              <div className="bg-gray-50 rounded-lg p-6">
                <ul className="space-y-3">
                  {services.map((text) => (
                    <li key={text} className="flex items-center text-gray-700">
                      <Check />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
