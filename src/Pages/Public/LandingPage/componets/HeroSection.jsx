"use client";

import { Button } from "antd";
import { motion } from "framer-motion";
import { FaTools, FaWhatsapp } from "react-icons/fa";
import QuickServiceModal from "../../../../Component/QuickServiceModal";
import video from "../../../../../public/video.mp4";
import { useEffect, useState } from "react";
import useHomeSectionMedia from "../../../../Hooks/useHomeMedia";

export default function HeroSection() {
  const [openService, setOpenService] = useState(false);
  const { sections, fetchSections } = useHomeSectionMedia();

  useEffect(() => {
    // ✅ fetch only Top Banner
    fetchSections(false);
  }, []);

  const topBanner = sections.find((s) => s.sectionName === "Top Banner");

  function handleSubmitService(data) {
    // send to your API here
    console.log("Service submitted", data);
  }
  console.log("topBanner: ", topBanner);

  return (
    <section className="relative w-full min-h-[80vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Video Layer */}
      <div className="absolute inset-0 -z-10">
        {topBanner?.type === "video" ? (
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src={topBanner.url}
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src={topBanner?.url}
            alt="Top Banner"
          />
        )}

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="text-white font-extrabold leading-tight tracking-tight
                     text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
        >
          Your Trusted Partner for{" "}
          <span className="whitespace-nowrap">Electrical &amp; Plumbing</span>{" "}
          Solutions
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.4 }}
          className="mt-5 text-white/90 text-base sm:text-lg md:text-xl"
        >
          Quality products, professional services, and customer satisfaction
          guaranteed for over <strong>12+ years</strong>.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.4 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            onClick={() => setOpenService(true)}
            type="button"
            className="inline-flex items-center gap-2 rounded-xl bg-white text-slate-900
             font-semibold px-6 py-3 shadow-lg hover:shadow-xl
             active:scale-[0.99] transition cursor-pointer"
          >
            <FaTools className="text-xl" />
            Get Quick Service
          </a>

          <a
            href="https://wa.me/9952638166?text=Hi%20Murugan%20Electronic%2C%20I%27d%20like%20a%20quote."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-green-500 text-white
                       font-semibold px-6 py-3 shadow-lg hover:bg-green-600
                       active:scale-[0.99] transition"
          >
            <FaWhatsapp className="text-xl" />
            WhatsApp Quote
          </a>
        </motion.div>
      </div>

      <QuickServiceModal
        open={openService}
        onClose={() => setOpenService(false)}
        onSubmit={handleSubmitService}
      />
    </section>
  );
}
