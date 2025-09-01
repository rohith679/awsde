import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";
import HearoSection from "../../../../Component/HeroSection";
import BrandCard from "../../../../Component/BrabdCard";
import astral from "../../../../assets/Images/astral.webp";
import supreme from "../../../../assets/Images/supreme.webp";
import princePipes from "../../../../assets/Images/princePipes.webp";
import finolex from "../../../../assets/Images/finolex.webp";
import plum from "../../../../assets/plum.webp";
import Quote from "../../../../Component/Quote";
import useHomeSectionMedia from "../../../../Hooks/useHomeMedia";
export default function PlumbingProductsPage() {
  const { fetchSections, sectionsMap } = useHomeSectionMedia();
  useEffect(() => {
    fetchSections(true); // 👈 important (banner=true)
  }, []);

  const brands = [
    {
      name: "Astral",
      desc: "Leading pipe manufacturer",
      image: astral,
    },
    {
      name: "Supreme",
      desc: "Trusted plumbing brand",
      image: supreme,
    },
    {
      name: "Prince Pipes",
      desc: "Premium pipe systems",
      image: princePipes,
    },
    {
      name: "Finolex",
      desc: "Quality pipe solutions",
      image: finolex,
    },
  ];
  return (
    <div id="plumbing-products" className="page-section">
      {/* Hero */}
      <HearoSection
        title={"Plumbing Products"}
        subtitle={"Complete range of pipes, fittings, and plumbing materials"}
        backgroundImage={sectionsMap["Plumbing Products"]} // ✅ now it will work
      />

      {/* Main */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left column */}
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Complete Piping Solutions
            </h2>

            <div className="space-y-8">
              <SpecBlock
                color="indigo"
                title="PVC & CPVC Pipes"
                description="High-quality pipes for water supply and plumbing applications."
                items={[
                  "Pressure pipes PN4 to PN16 ratings",
                  "Size range: 20mm to 315mm diameter",
                  "Hot water CPVC pipes up to 82°C",
                  "ISI certified and pressure tested",
                  "Corrosion and chemical resistant",
                ]}
              />

              <SpecBlock
                color="green"
                title="Pipe Fittings"
                description="Complete range of pipe fittings and accessories."
                items={[
                  "Elbow fittings: 45° and 90° bends",
                  "Tee fittings: Equal and reducing types",
                  "Union fittings for detachable joints",
                  "Reducer fittings and end caps",
                  "Threaded and solvent weld options",
                ]}
              />

              <SpecBlock
                color="blue"
                title="Water Storage"
                description="Water tanks and storage solutions for all applications."
                items={[
                  "Overhead tanks: 200L to 10,000L capacity",
                  "Underground storage systems",
                  "Septic tanks and treatment systems",
                  "Level indicators and overflow systems",
                  "Food-grade and UV-resistant materials",
                ]}
              />
            </div>

            {/* CTA Buttons */}
            {/* <Quote /> */}
          </div>

          {/* Right column */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Quality Standards</h2>
            <div className="bg-gray-50 rounded-2xl p-6 mb-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Quality Assurance</h3>
              <ul className="space-y-3">
                <AdvantageItem text="ISI certification and quality testing" />
                <AdvantageItem text="Pressure testing and leak-proof joints" />
                <AdvantageItem text="Virgin material and food-grade pipes" />
                <AdvantageItem text="Installation guidelines and support" />
                <AdvantageItem text="Manufacturer warranty coverage" />
              </ul>
            </div>

            <h3 className="text-xl font-semibold mb-4">Trusted Brands</h3>
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
    indigo: "border-indigo-600",
    green: "border-green-600",
    blue: "border-blue-600",
  };
  return (
    <div className={`border-l-4 ${colorMap[color]} pl-6`}>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
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
      <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100">
        <FaCertificate className="text-indigo-600" />
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
