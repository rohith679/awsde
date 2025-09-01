import React, { useEffect, useState } from "react";
import { FaShieldAlt } from "react-icons/fa";
import HeroSection from "../../../../Component/HeroSection";
import BookServices from "../../../../Component/BookServices";
import service from "../../../../assets/services1.webp";
import service2 from "../../../../assets/service2.webp";
import useHomeSectionMedia from "../../../../Hooks/useHomeMedia";
export default function ElectricalServicesPage() {
  const [serviceOpen, setServiceOpen] = useState(false);
  const [reviewOpenE, setReviewOpenE] = useState(false);
  const { fetchSections, sectionsMap } = useHomeSectionMedia();
  useEffect(() => {
    fetchSections(true); // 👈 important (banner=true)
  }, []);

  return (
    <div id="electrical-services" className="page-section">
      {/* Hero */}
      <HeroSection
        title={"Electrical Services"}
        subtitle={
          "Professional electrical installation, maintenance, and repair services"
        }
        backgroundImage={sectionsMap["Electrical Services"]} // ✅ now it will work
        duration={1000}
      />

      {/* Main */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left column */}
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Complete Service Portfolio
            </h2>

            <div className="space-y-8">
              <SpecBlock
                color="yellow"
                title="Installation Services"
                description="Complete electrical installations for all types of buildings."
                items={[
                  "New construction electrical wiring",
                  "Electrical panel installation and setup",
                  "Motor and equipment installation",
                  "Generator and solar system installation",
                  "Street lighting and outdoor electrical work",
                ]}
              />

              <SpecBlock
                color="blue"
                title="Maintenance Services"
                description="Comprehensive maintenance programs for electrical systems."
                items={[
                  "Annual Maintenance Contracts (AMC)",
                  "Preventive maintenance schedules",
                  "Emergency repair services 24/7",
                  "Power quality analysis and testing",
                  "Electrical safety audits and inspections",
                ]}
              />

              <SpecBlock
                color="green"
                title="Specialized Services"
                description="Advanced electrical services and solutions."
                items={[
                  "Motor rewinding and repair services",
                  "Energy audit and efficiency consulting",
                  "Industrial automation and control systems",
                  "Smart home automation installation",
                  "Lightning protection systems",
                ]}
              />
            </div>

            {/* CTAs */}
            {/* <BookServices /> */}
          </div>

          {/* Right column */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Service Standards</h2>
            <div className="bg-yellow-50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4">Quality Assurance</h3>
              <ul className="space-y-3">
                <QualityItem text="Licensed electricians with safety certifications" />
                <QualityItem text="IS 732 wiring standards compliance" />
                <QualityItem text="12-month warranty on all electrical work" />
                <QualityItem text="Emergency services within 2 hours" />
                <QualityItem text="Comprehensive insurance coverage" />
              </ul>
            </div>

            <h3 className="text-xl font-semibold mb-4">Service Areas</h3>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Residential</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>Homes and apartments</li>
                    <li>Villas and bungalows</li>
                    <li>Gated communities</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Commercial</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>Offices and shops</li>
                    <li>Restaurants and hotels</li>
                    <li>Hospitals and schools</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Industrial</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>Manufacturing plants</li>
                    <li>Warehouses</li>
                    <li>Processing facilities</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Infrastructure</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>Street lighting</li>
                    <li>Traffic signals</li>
                    <li>Public utilities</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SpecBlock({ color, title, description, items }) {
  const colors = {
    yellow: "bg-yellow-100 border-yellow-400",
    blue: "bg-blue-100 border-blue-400",
    green: "bg-green-100 border-green-400",
  };
  return (
    <div className={`p-6 rounded-lg border-l-4 ${colors[color]}`}>
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="mb-4 text-gray-700">{description}</p>
      <ul className="list-disc pl-5 space-y-1 text-gray-600">
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

function QualityItem({ text }) {
  return (
    <li className="flex items-center text-gray-700">
      <FaShieldAlt className="text-yellow-600 mr-3" />
      {text}
    </li>
  );
}
