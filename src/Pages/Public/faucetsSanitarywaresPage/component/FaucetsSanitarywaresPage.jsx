import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaHammer } from "react-icons/fa";
import HeroSection from "../../../../Component/HeroSection";
import BrandCard from "../../../../Component/BrabdCard";
import kohler from "../../../../assets/Images/kohler.webp";
import cera from "../../../../assets/Images/cera.webp";
import jaquar from "../../../../assets/Images/jaquar.jpeg";
import Quote from "../../../../Component/Quote";
import hindware from "../../../../assets/Images/hindware.jpeg";
import scan from "../../../../assets/scan.jpeg";
import useHomeSectionMedia from "../../../../Hooks/useHomeMedia";
export default function FaucetsSanitarywaresPage() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [reviewOpen, setReviewOpen] = useState(false);
  const { fetchSections, sectionsMap } = useHomeSectionMedia();
  useEffect(() => {
    fetchSections(true); // 👈 important (banner=true)
  }, []);

  const brands = [
    {
      name: "Kohler",
      desc: "American premium bathroom brand",
      image: kohler,
    },
    {
      name: "Jaquar",
      desc: "Leading Indian sanitaryware brand",
      image: jaquar,
    },
    {
      name: "Hindware",
      desc: "Trusted bathroom solutions",
      image: hindware,
    },
    {
      name: "Cera",
      desc: "Wide range of sanitaryware",
      image: cera,
    },
  ];
  return (
    <div id="faucets-sanitarywares" className="page-section">
      {/* Hero */}
      <HeroSection
        title={"Faucets & Sanitarywares"}
        subtitle={"Premium bathroom and kitchen fixtures for modern homes"}
        backgroundImage={sectionsMap["Faucets & Sanitarywares"]} // ✅ now it will work
      />

      {/* Main */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left column */}
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Complete Bathroom Solutions
            </h2>

            <div className="space-y-8">
              <SpecBlock
                color="teal"
                title="Faucet Collection"
                description="Modern faucets for basin, kitchen, and shower applications."
                items={[
                  "Single lever and pillar tap designs",
                  "Chrome, brushed nickel, gold finishes",
                  "Ceramic cartridge for durability",
                  "Water-saving aerators included",
                  "Wall-mounted and deck-mounted options",
                ]}
              />

              <SpecBlock
                color="blue"
                title="Sanitaryware Range"
                description="Premium water closets, wash basins, and bathroom fixtures."
                items={[
                  "Wall-hung and floor-mounted WCs",
                  "Table-top and under-counter basins",
                  "Dual flush mechanisms for water saving",
                  "Soft-close and quick-release seats",
                  "Anti-bacterial coating options",
                ]}
              />

              <SpecBlock
                color="green"
                title="Bath Accessories"
                description="Complete range of bathroom accessories and fittings."
                items={[
                  "Towel rails and robe hooks",
                  "Soap dispensers and holders",
                  "Grab bars and safety rails",
                  "Toilet paper holders and brushes",
                  "Matching finish options available",
                ]}
              />
            </div>

            {/* CTA Buttons */}
            {/* <Quote /> */}
          </div>

          {/* Right column */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Installation Services</h2>
            <div className="bg-blue-50 rounded-2xl p-6 mb-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">
                Professional Installation
              </h3>
              <ul className="space-y-3">
                <AdvantageItem text="Complete bathroom design service" />
                <AdvantageItem text="3D visualization and planning" />
                <AdvantageItem text="Professional installation team" />
                <AdvantageItem text="Waterproofing and tiling services" />
                <AdvantageItem text="After-installation support" />
              </ul>
            </div>

            <h3 className="text-xl font-semibold mb-4">Premium Brands</h3>
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
    teal: "border-teal-600",
    blue: "border-blue-600",
    green: "border-green-600",
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
      <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-teal-100">
        <FaHammer className="text-teal-600" />
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
