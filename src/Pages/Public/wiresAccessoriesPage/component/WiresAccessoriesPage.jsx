import React, { useEffect } from "react";
import HeroSection from "../../../../Component/HeroSection";
import BrandCard from "../../../../Component/BrabdCard";
import polycab from "../../../../assets/Images/polycab.webp";
import havells from "../../../../assets/Images/havells.webp";
import finolex from "../../../../assets/Images/finolex.webp";
import wire from "../../../../assets/wire.jpeg";
import kei from "../../../../assets/Images/kei.webp";
import Quote from "../../../../Component/Quote";
import useHomeSectionMedia from "../../../../Hooks/useHomeMedia";
export default function WiresAccessoriesPage({ openModal }) {
  const certifications = [
    "ISI marked products",
    "BIS approved manufacturers",
    "CE certified for exports",
    "Fire testing certificates",
    "Third-party quality testing",
  ];
  const { fetchSections, sectionsMap } = useHomeSectionMedia();
  useEffect(() => {
    fetchSections(true); // 👈 important (banner=true)
  }, []);

  const brands = [
    {
      name: "Polycab",
      desc: "Market leader in cables and wires",
      image: polycab,
    },
    {
      name: "Havells",
      desc: "Premium quality electrical products",
      image: havells,
    },
    {
      name: "Finolex",
      desc: "Trusted brand for residential wiring",
      image: finolex,
    },
    { name: "KEI", desc: "Industrial cable specialists", image: kei },
  ];

  const CheckCert = () => (
    <svg
      className="w-5 h-5 text-yellow-500 mr-3 flex-shrink-0"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );

  return (
    <section id="wires-accessories" className="page-section">
      {/* Hero */}
      <HeroSection
        title={"Wires & Accessories"}
        subtitle={
          "Premium electrical cables and wiring solutions for all applications"
        }
        backgroundImage={sectionsMap["Wires & Accessories"]} // ✅ now it will work
      />

      {/* Main content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Cable Range */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Complete Cable Range</h2>

            <div className="space-y-8">
              {/* House Wires */}
              <div className="border-l-4 border-red-600 pl-6">
                <h3 className="text-xl font-semibold mb-3">House Wires</h3>
                <p className="text-gray-600 mb-3">
                  FR/FRLS cables for residential and commercial wiring.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Size Range: 1.0mm² to 35mm²</li>
                  <li>Flame retardant PVC insulation</li>
                  <li>ISI marked and BIS approved</li>
                  <li>Multicore and single core options</li>
                  <li>Color coded for easy identification</li>
                </ul>
              </div>

              {/* Industrial Cables */}
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-xl font-semibold mb-3">
                  Industrial Cables
                </h3>
                <p className="text-gray-600 mb-3">
                  Armoured and control cables for industrial applications.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>LT and HT cables up to 33kV</li>
                  <li>Control cables 2-core to 37-core</li>
                  <li>Armoured cables for underground installation</li>
                  <li>Heat and oil resistant variants</li>
                  <li>Flame proof and explosion proof options</li>
                </ul>
              </div>

              {/* Cable Accessories */}
              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="text-xl font-semibold mb-3">
                  Cable Accessories
                </h3>
                <p className="text-gray-600 mb-3">
                  Complete range of cable accessories and installation
                  materials.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Cable lugs and terminals (1.5mm² to 400mm²)</li>
                  <li>Cable glands (brass, plastic, explosion-proof)</li>
                  <li>Junction boxes (weatherproof, flame proof)</li>
                  <li>Cable trays and support systems</li>
                  <li>Heat shrink joints and terminations</li>
                </ul>
              </div>
            </div>

            {/* CTAs */}
            {/* <Quote /> */}
          </div>

          {/* Right: Quality + Brands */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Quality Assurance</h2>

            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4">
                Certifications & Standards
              </h3>
              <ul className="space-y-3">
                {certifications.map((text) => (
                  <li key={text} className="flex items-center text-gray-700">
                    <CheckCert />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h3 className="text-xl font-semibold mb-4">Trusted Brands</h3>
            <div className="grid grid-cols-2 gap-6">
              {brands.map((b) => (
                <BrandCard
                  key={b.name}
                  name={b.name}
                  image={b.image}
                  desc={b.desc}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
