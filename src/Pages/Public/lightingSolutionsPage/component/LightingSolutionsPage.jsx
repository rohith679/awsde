import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaBolt, FaLeaf } from "react-icons/fa";
import HearoSection from "../../../../Component/HeroSection";
import BrandCard from "../../../../Component/BrabdCard";
import philips from "../../../../assets/Images/philips.webp";
import havells from "../../../../assets/Images/havells.webp";
import crompton from "../../../../assets/Images/crompton.jpeg";
import Quote from "../../../../Component/Quote";
import orientElectric from "../../../../assets/Images/orientElectric.webp";
import light from "../../../../assets/ligh.jpeg";
import useHomeSectionMedia from "../../../../Hooks/useHomeMedia";

export default function LightingSolutionsPage() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [reviewOpen, setReviewOpen] = useState(false);
  const { fetchSections, sectionsMap } = useHomeSectionMedia();
  useEffect(() => {
    fetchSections(true); // 👈 important (banner=true)
  }, []);

  const brands = [
    {
      name: "Philips",
      desc: "Global lighting technology leader",
      image: philips,
    },
    {
      name: "Havells",
      desc: "Premium Indian lighting brand",
      image: havells,
    },
    {
      name: "Crompton",
      desc: "Trusted lighting solutions",
      image: crompton,
    },
    {
      name: "Orient Electric",
      desc: "Innovative lighting products",
      image: orientElectric,
    },
  ];
  return (
    <div id="lighting-solutions" className="page-section">
      {/* Hero */}

      <HearoSection
        title={"Lighting Solutions"}
        subtitle={"Energy-efficient LED lights and lighting fixtures"}
        backgroundImage={sectionsMap["Lighting Solutions"]} // ✅ now it will work
      />

      {/* Main */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left column */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Complete LED Range</h2>

            <div className="space-y-8">
              <SpecBlock
                color="yellow"
                title="LED Bulbs"
                description="Energy-efficient LED bulbs for residential and commercial use."
                items={[
                  "Power Range: 3W to 50W",
                  "Base Types: B22, E27, E14 options",
                  "Color Temperature: 2700K to 6500K",
                  "Lumen Output: 270 to 4500 lumens",
                  "50,000 hours rated life",
                ]}
              />

              <SpecBlock
                color="blue"
                title="LED Tube Lights"
                description="Direct replacement for traditional fluorescent tubes."
                items={[
                  "Length: 2ft (600mm), 4ft (1200mm)",
                  "Power: 9W, 18W, 22W variants",
                  "Flicker-free operation",
                  "Surface and recessed mounting",
                  "Instant start technology",
                ]}
              />

              <SpecBlock
                color="green"
                title="Street Lighting"
                description="High-power LED street lights for outdoor applications."
                items={[
                  "Power Range: 30W to 200W",
                  "Luminous Efficacy: 130+ lumens per watt",
                  "IP65/IP66 weather protection",
                  "Photocell and surge protection",
                  "Aluminum heat sink design",
                ]}
              />
            </div>

            {/* <Quote /> */}
          </div>

          {/* Right column */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Energy Efficiency</h2>
            <div className="bg-green-50 rounded-2xl p-6 mb-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">LED Advantages</h3>
              <ul className="space-y-3">
                <AdvantageItem text="Up to 80% energy savings" />
                <AdvantageItem text="50,000+ hours lifespan" />
                <AdvantageItem text="Instant start, no warm-up time" />
                <AdvantageItem text="Mercury-free, eco-friendly" />
                <AdvantageItem text="Reduced heat generation" />
              </ul>
            </div>

            <h3 className="text-xl font-semibold mb-4">Leading Brands</h3>
            <div className="grid grid-cols-2 gap-6">
              {brands.map((brand) => (
                <BrandCard
                  key={brand.name}
                  desc={brand.desc}
                  image={brand.image}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SpecBlock({ color, title, description, items }) {
  const colorMap = {
    yellow: "border-yellow-500",
    blue: "border-blue-500",
    green: "border-green-500",
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

function AdvantageItem({ text }) {
  return (
    <li className="flex items-center text-gray-700">
      <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
        <FaLeaf className="text-green-600" />
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
