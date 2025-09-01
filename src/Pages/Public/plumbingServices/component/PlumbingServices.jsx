import React, { useEffect, useState } from "react";
import HeroSection from "../../../../Component/HeroSection";
import BookServices from "../../../../Component/BookServices";
import plumbing from "../../../../assets/plumbing.webp";
import useHomeSectionMedia from "../../../../Hooks/useHomeMedia";

export default function PlumbingServices() {
  const [serviceOpen, setServiceOpen] = useState(false);
  const [reviewOpen, setReviewOpen] = useState(false);
  const { fetchSections, sectionsMap } = useHomeSectionMedia();
  useEffect(() => {
    fetchSections(true); // 👈 important (banner=true)
  }, []);

  return (
    <div id="plumbing-services" className="page-section">
      {/* Hero */}
      <HeroSection
        title={"Plumbing Services"}
        subtitle={
          "Complete plumbing solutions for installation, repair, and maintenance."
        }
        backgroundImage={sectionsMap["Plumbing Services"]} // ✅ now it will work
        duration={1000}
        // loading={loading}
      />

      {/* Main */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left column */}
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Complete Plumbing Solutions
            </h2>
            <div className="space-y-8">
              <SpecBlock
                color="cyan"
                title="Installation Services"
                description="Complete plumbing installations for all types of projects."
                items={[
                  "New construction plumbing systems",
                  "Bathroom and kitchen installations",
                  "Water tank and pipeline connections",
                  "Sewage and drainage system installation",
                  "Swimming pool plumbing and filtration",
                ]}
              />

              <SpecBlock
                color="blue"
                title="Repair & Maintenance"
                description="Professional repair and maintenance services."
                items={[
                  "Leak detection and repair services",
                  "High-pressure drain cleaning",
                  "Water heater repair and maintenance",
                  "Faucet and fixture replacement",
                  "Emergency pipe burst repairs",
                ]}
              />

              <SpecBlock
                color="green"
                title="Specialized Services"
                description="Advanced plumbing solutions and systems."
                items={[
                  "Water pressure boosting systems",
                  "Rainwater harvesting installation",
                  "Sewage treatment plant setup",
                  "Commercial kitchen plumbing",
                  "Waterproofing and leak-proofing",
                ]}
              />
            </div>

            {/* CTAs */}
            {/* <BookServices /> */}
          </div>

          {/* Right column */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Service Packages</h2>
            <div className="space-y-6">
              <PackageBlock
                title="Residential Packages"
                description="Comprehensive plumbing services for homes and apartments."
                items={[
                  "Annual maintenance contracts",
                  "Emergency service priority",
                  "Bathroom renovation packages",
                  "6-month warranty on work",
                ]}
              />

              <PackageBlock
                title="Commercial Packages"
                description="Professional plumbing services for businesses."
                items={[
                  "Office building maintenance",
                  "Restaurant plumbing services",
                  "Hotel plumbing solutions",
                  "Preventive maintenance programs",
                ]}
              />

              <PackageBlock
                title="Emergency Services"
                description="24/7 emergency plumbing support."
                items={[
                  "24/7 availability",
                  "Response within 2 hours",
                  "Emergency contact numbers",
                  "Mobile service vehicles",
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SpecBlock({ color, title, description, items }) {
  const colors = {
    cyan: "border-cyan-600",
    blue: "border-blue-600",
    green: "border-green-600",
  };
  return (
    <div className={`border-l-4 ${colors[color]} pl-6`}>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-3">{description}</p>
      <ul className="list-disc list-inside text-gray-600 space-y-1">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function PackageBlock({ title, description, items }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-3">{description}</p>
      <ul className="list-disc list-inside text-gray-600 space-y-1">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function Modal({ title, children, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        {children}
      </div>
    </div>
  );
}
