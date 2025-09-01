import React, { useEffect, useState } from "react";
import { FaWrench } from "react-icons/fa";
import HeroSection from "../../../../Component/HeroSection";
import BrandCard from "../../../../Component/BrabdCard";
import bajaj from "../../../../assets/Images/bajaj.webp";
import havells from "../../../../assets/Images/havells.webp";
import crompton from "../../../../assets/Images/crompton.jpeg";
import vgard from "../../../../assets/Images/v-gard.jpeg";
import appliances from "../../../../assets/appliances.webp";
import Quote from "../../../../Component/Quote";
import useHomeSectionMedia from "../../../../Hooks/useHomeMedia";
export default function AppliancesPage() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [reviewOpen, setReviewOpen] = useState(false);
  const { fetchSections, sectionsMap } = useHomeSectionMedia();
  useEffect(() => {
    fetchSections(true); // 👈 important (banner=true)
  }, []);

  const brands = [
    {
      name: "Bajaj",
      desc: "Trusted Indian appliance brand",
      image: bajaj,
    },
    {
      name: "Havells",
      desc: "Premium electrical appliances",
      image: havells,
    },
    {
      name: "Crompton",
      desc: "Fans and home appliances",
      image: crompton,
    },
    {
      name: "V-Guard",
      desc: "Voltage stabilizers and appliances",
      image: vgard,
    },
  ];

  return (
    <div id="appliances" className="page-section">
      {/* Hero */}
      <HeroSection
        title={"Home Appliances"}
        subtitle={"Energy-efficient appliances for modern homes and kitchens"}
        backgroundImage={sectionsMap["Appliances"]} // ✅ now it will work
      />

      {/* Main */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Complete Appliance Range
            </h2>

            <SpecBlock
              color="red"
              title="Water Heaters"
              description="Electric, solar, and gas water heaters for all applications."
              items={[
                "Electric heaters: 1kW to 25kW capacity",
                "Solar heaters: 100L to 500L systems",
                "Gas heaters: 6L to 20L instant types",
                "BEE 4-5 star energy ratings",
                "2-7 years comprehensive warranty",
              ]}
            />

            <SpecBlock
              color="orange"
              title="Kitchen Appliances"
              description="Modern kitchen appliances for convenient cooking."
              items={[
                "Kitchen chimneys: 60cm to 120cm width",
                "Mixer grinders: 500W to 1000W motors",
                "Induction cooktops with touch controls",
                "Water purifiers with RO+UV+UF technology",
                "Auto-clean and filterless options",
              ]}
            />

            <SpecBlock
              color="blue"
              title="Home Comfort"
              description="Fans, heaters, and comfort appliances."
              items={[
                "Ceiling fans with BLDC technology",
                "Exhaust fans for ventilation",
                "Room heaters and air coolers",
                "Water dispensers and voltage stabilizers",
                "Energy-efficient 5-star ratings",
              ]}
            />

            {/* CTA Buttons */}
            {/* <Quote /> */}
          </div>

          {/* Right Column */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Installation & Service</h2>
            <div className="bg-red-50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4">Complete Support</h3>
              <ul className="space-y-3">
                <ServiceItem text="Free installation for all appliances" />
                <ServiceItem text="Product demonstration and training" />
                <ServiceItem text="Authorized service center network" />
                <ServiceItem text="Genuine spare parts availability" />
                <ServiceItem text="Extended warranty plans available" />
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
      {/* <Quote /> */}
    </div>
  );
}

function SpecBlock({ color, title, description, items }) {
  const colorMap = {
    red: "border-red-600",
    orange: "border-orange-600",
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

function ServiceItem({ text }) {
  return (
    <li className="flex items-center text-gray-700">
      <FaWrench className="text-red-600 mr-3" />
      {text}
    </li>
  );
}
