"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import useHomeSectionMedia from "../../../../Hooks/useHomeMedia"; // 🔥 API Hook

export default function ProductsGrid() {
  const navigate = useNavigate();

  // 🔥 Fetch sections from API
  const { sections, fetchSections, loading } = useHomeSectionMedia();

  useEffect(() => {
    // Fetch only non-banner sections (banner=false)
    fetchSections(false);
  }, []);

  const handleSelect = (slug) => {
    // 👇 Example: navigate based on sectionName or slug
    switch (slug) {
      case "Motors & Pumps":
        navigate("/product-pump");
        break;
      case "Wires & Accessories":
        navigate("/products/wires-accessories");
        break;
      case "Switches & Accessories":
        navigate("/products/switches-accessories");
        break;
      case "Lighting Solutions":
        navigate("/products/lighting-solutions");
        break;
      case "Faucets & Sanitarywares":
        navigate("/products/faucets-sanitarywares");
        break;
      case "Plumbing Products":
        navigate("/products/plumbing-products");
        break;
      case "Appliances":
        navigate("/products/appliances");
        break;
      case "Electrical Services":
        navigate("/services/electrical");
        break;
      case "Plumbing Services":
        navigate("/services/plumbing");
        break;
      default:
        break;
    }
  };
  const productItems = sections.filter(
    (item) =>
      item.sectionName !== "Electrical Services" &&
      item.sectionName !== "Plumbing Services" &&
      item.sectionName !== "Top Banner" // exclude banner
  );

  const serviceItems = sections.filter(
    (item) =>
      item.sectionName === "Electrical Services" ||
      item.sectionName === "Plumbing Services"
  );

  // merge → products first, services last
  const displayItems = [...productItems, ...serviceItems];
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-4"
        >
          Our Products &amp; Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center text-gray-600 mb-12 text-lg"
        >
          Comprehensive electrical and plumbing solutions for all your needs
        </motion.p>

        {/* Cards */}
        <div
          // className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-4"

          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "24px",
          }}
        >
          {displayItems.map(({ url, sectionName }, i) => {
            const isLastSingle =
              i === displayItems.length - 1 && displayItems.length % 4 === 1;
            const isLastTwo =
              i >= displayItems.length - 2 && displayItems.length % 4 === 2;

            return (
              <motion.div
                key={sectionName}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className={`group bg-white p-6 rounded-2xl shadow-lg border border-slate-100 text-center cursor-pointer 
                 `}
                onClick={() => handleSelect(sectionName)}
                style={{ width: "300px" }}
              >
                {url?.endsWith(".mp4") ? (
                  <video
                    src={url}
                    className="w-30 h-20 object-contain mx-auto mb-6 rounded-md"
                    muted
                    autoPlay
                    loop
                  />
                ) : (
                  <img
                    src={url}
                    alt={sectionName}
                    className="w-30 h-30 object-contain mx-auto mb-6"
                  />
                )}

                <h3 className="text-lg font-semibold mb-3">{sectionName}</h3>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  className={`font-semibold transition-colors ${
                    sectionName === "Electrical Services" ||
                    sectionName === "Plumbing Services"
                      ? "text-green-600 hover:text-green-800"
                      : "text-blue-600 hover:text-blue-800"
                  }`}
                >
                  Learn More →
                </motion.button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
