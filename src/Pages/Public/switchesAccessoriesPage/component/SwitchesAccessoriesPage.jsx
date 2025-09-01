import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaBolt, FaTools } from "react-icons/fa";
import HeroSection from "../../../../Component/HeroSection";
import BrandCard from "../../../../Component/BrabdCard";
import legrand from "../../../../assets/Images/legrand.webp";
import schneider from "../../../../assets/Images/schneider.webp";
import seimens from "../../../../assets/Images/siemens.webp";
import anchor from "../../../../assets/Images/anchor.webp";
import Quote from "../../../../Component/Quote";
import switchs from "../../../../assets/switch.webp";
import useHomeSectionMedia from "../../../../Hooks/useHomeMedia";

export default function SwitchesAccessoriesPage() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [reviewOpen, setReviewOpen] = useState(false);
  const { fetchSections, sectionsMap } = useHomeSectionMedia();
  useEffect(() => {
    fetchSections(true); // 👈 important (banner=true)
  }, []);

  return (
    <div id="switches-accessories" className="page-section">
      {/* Hero */}
      <HeroSection
        title={"Switches & Accessories"}
        subtitle={
          "Modern electrical switches and protection devices for all applications"
        }
        backgroundImage={sectionsMap["Switches & Accessories"]} // ✅ now it will work
      />

      {/* Main */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left column */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Complete Switch Range</h2>

            <div className="space-y-8">
              <SpecBlock
                color="purple"
                title="Modular Switches"
                description="Premium quality modular switches with LED indicators."
                items={[
                  "6A and 16A current ratings",
                  "1-way, 2-way, and intermediate switches",
                  "LED indicators and soft touch operation",
                  "Multiple finish options available",
                  "Fan regulators and dimmer controls",
                ]}
              />

              <SpecBlock
                color="red"
                title="Protection Devices"
                description="Circuit protection devices for electrical safety."
                items={[
                  "MCBs: 6A to 63A, B, C, D curve types",
                  "RCCBs: 25A to 63A, 30mA to 300mA sensitivity",
                  "MCCBs: 100A to 800A for industrial use",
                  "Isolators and SPDs available",
                  "Distribution boards and enclosures",
                ]}
              />

              <SpecBlock
                color="blue"
                title="Smart Switches"
                description="WiFi-enabled smart switches for home automation."
                items={[
                  "Mobile app control and voice activation",
                  "Timer and scheduling functions",
                  "Remote control operation",
                  "Energy monitoring features",
                  "Integration with smart home systems",
                ]}
              />
            </div>

            {/* CTA Buttons */}
            {/* <Quote /> */}
          </div>

          {/* Right column */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Installation Services</h2>
            <div className="bg-gray-50 rounded-2xl p-6 mb-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">
                Professional Installation
              </h3>
              <ul className="space-y-3">
                <ServiceItem text="Custom electrical panel design" />
                <ServiceItem text="Professional installation and testing" />
                <ServiceItem text="Insulation and earth leakage testing" />
                <ServiceItem text="Complete system commissioning" />
                <ServiceItem text="Preventive maintenance contracts" />
              </ul>
            </div>

            <h3 className="text-xl font-semibold mb-4">Premium Brands</h3>

            <div className="grid grid-cols-2 gap-6">
              <BrandCard
                name="Legrand"
                image={legrand}
                desc="Global leader in electrical solutions"
              />
              <BrandCard
                name="Schneider Electric"
                image={schneider}
                desc="Industrial automation specialists"
              />
              <BrandCard
                name="Siemens"
                image={seimens}
                desc="German engineering excellence"
              />
              <BrandCard
                name="Anchor"
                image={anchor}
                desc="Trusted residential electrical brand"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SpecBlock({ color, title, description, items }) {
  const colorMap = {
    purple: "border-purple-600",
    red: "border-red-600",
    blue: "border-blue-600",
  };
  return (
    <div className={`border-l-4 ${colorMap[color]} pl-6`}>
      <div className="flex items-start gap-3 mb-2">
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600 mb-3">{description}</p>
      <ul className="list-disc list-inside text-gray-600 space-y-1">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function ServiceItem({ text }) {
  return (
    <li className="flex items-center text-gray-700">
      <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-purple-100">
        <FaTools className="text-purple-700" />
      </div>
      {text}
    </li>
  );
}

function Modal({ title, children, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
