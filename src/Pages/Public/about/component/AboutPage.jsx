import React, { useEffect } from "react";
import HeroSection from "../../../../Component/HeroSection";
import about from "../../../../assets/about.webp";
import useHomeSectionMedia from "../../../../Hooks/useHomeMedia";

export default function AboutPage({ openModal }) {
  const handleOpen = (id) => {
    if (typeof openModal === "function") openModal(id);
    else console.warn("openModal prop is missing. Tried to open:", id);
  };
  const { fetchSections, sectionsMap } = useHomeSectionMedia();
  useEffect(() => {
    fetchSections(true); // 👈 important (banner=true)
  }, []);

  const values = [
    "Quality Excellence",
    "Customer Focus",
    "Integrity",
    "Innovation",
    "Reliability",
  ];

  const CheckIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 12l2 2 4-4"
      />
      {/* circle */}
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20z"
      />
    </svg>
  );

  return (
    <div id="about" className="page-section">
      {/* Top banner */}
      <HeroSection
        title="About Sri Murugan Enterprises"
        subtitle="Your trusted partner in electrical and plumbing solutions since 2010"
        backgroundImage={sectionsMap["About Us"]} // ✅ now it will work
      />

      {/* Main content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left column */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Company Heritage</h2>
            <p className="text-gray-700 mb-6">
              Sri Murugan Enterprises was established in 2010 with a clear
              vision: to become the most trusted partner for electrical and
              plumbing solutions in our region. What started as a small family
              business with a 300 sq ft showroom has evolved into a
              comprehensive solution provider serving thousands of customers
              across residential, commercial, and industrial sectors.
            </p>

            <p className="text-gray-700 mb-6">
              Our founder, with over 25 years of experience in the electrical
              and plumbing industry, recognized the need for a single
              destination where customers could find quality products coupled
              with professional services. This vision has guided our growth and
              continues to drive our commitment to excellence.
            </p>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To provide comprehensive electrical and plumbing solutions that
                exceed customer expectations through quality products,
                professional services, and innovative solutions while building
                lasting relationships based on trust, integrity, and superior
                customer service.
              </p>
            </div>
          </div>

          {/* Right column */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Key Achievements</h2>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  15,000+
                </div>
                <p className="text-gray-600">Satisfied Customers</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  50+
                </div>
                <p className="text-gray-600">Brand Partnerships</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  12+
                </div>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  95%
                </div>
                <p className="text-gray-600">Customer Satisfaction</p>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
            <div className="bg-green-50 rounded-lg p-6 mb-6">
              <p className="text-gray-700">
                To become the region&apos;s leading electrical and plumbing
                solutions provider, recognized for our commitment to quality,
                innovation, customer satisfaction, and sustainable business
                practices.
              </p>
            </div>

            <h3 className="text-xl font-semibold mb-4">Core Values</h3>
            <ul className="space-y-2">
              {values.map((v) => (
                <li key={v} className="flex items-center text-gray-800">
                  <CheckIcon />
                  {v}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Team */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Professional Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                RK
              </div>
              <h3 className="text-xl font-semibold mb-2">Rajesh Kumar</h3>
              <p className="text-gray-600 mb-2">Managing Director</p>
              <p className="text-sm text-gray-500">
                25+ years industry experience, B.E. Electrical Engineering
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                PS
              </div>
              <h3 className="text-xl font-semibold mb-2">Priya Sharma</h3>
              <p className="text-gray-600 mb-2">Operations Manager</p>
              <p className="text-sm text-gray-500">
                18+ years operations experience, B.Tech Civil Engineering
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                SP
              </div>
              <h3 className="text-xl font-semibold mb-2">Suresh Patel</h3>
              <p className="text-gray-600 mb-2">Technical Manager</p>
              <p className="text-sm text-gray-500">
                20+ years technical experience, Diploma Electrical
              </p>
            </div>
          </div>
        </div>

        {/* CTA buttons */}
        {/* <div className="mt-12 text-center">
          <button
            onClick={() => handleOpen("serviceModal")}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 mr-4"
          >
            Contact Us
          </button>
          <button
            onClick={() => handleOpen("reviewModal")}
            className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700"
          >
            Share Your Experience
          </button>
        </div> */}
      </div>
    </div>
  );
}
