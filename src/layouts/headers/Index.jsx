import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../../public/sme.jpg";
import ReviewModal from "../../Pages/Public/LandingPage/componets/ReviewModal";
import pdf from "../../../public/pdf.pdf";
import { useNavigate, useLocation } from "react-router-dom";
import QuickServiceModal from "../../Component/QuickServiceModal";

export default function Header({ openModal }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [openProducts, setOpenProducts] = React.useState(false);
  const [openServices, setOpenServices] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [openService, setOpenService] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      setMobileOpen(false);
    }
  }, []);

  function handleSubmitReview(data) {
    console.log("review submitted", data);
  }

  function handleSubmitService(data) {
    console.log("Service submitted", data);
  }

  React.useEffect(() => {
    setMobileOpen(false);
    setOpenProducts(false);
    setOpenServices(false);
  }, [location.pathname]);

  const handleNav = (path) => {
    navigate(path);
    setMobileOpen(false);
    setOpenProducts(false);
    setOpenServices(false);
  };

  const productItems = [
    { key: "motors-pumps", label: "Motors & Pumps", path: "/product-pump" },
    {
      key: "wires-accessories",
      label: "Wires & Accessories",
      path: "/products/wires-accessories",
    },
    {
      key: "switches-accessories",
      label: "Switches & Accessories",
      path: "/products/switches-accessories",
    },
    {
      key: "lighting-solutions",
      label: "Lighting Solutions",
      path: "/products/lighting-solutions",
    },
    {
      key: "faucets-sanitarywares",
      label: "Faucets & Sanitarywares",
      path: "/products/faucets-sanitarywares",
    },
    {
      key: "plumbing-products",
      label: "Plumbing Products",
      path: "/products/plumbing-products",
    },
    { key: "appliances", label: "Appliances", path: "/products/appliances" },
  ];

  const serviceItems = [
    {
      key: "electrical",
      label: "Electrical Services",
      path: "/services/electrical",
    },
    { key: "plumbing", label: "Plumbing Services", path: "/services/plumbing" },
  ];

  return (
    <header className="bg-white shadow-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <img
              src={logo}
              alt="Sri Murugan Enterprises Logo"
              className="h-12 w-20 object-contain"
            />
            <div className="ml-2">
              <div className="text-lg font-semibold text-gray-900">
                Sri Murugan Enterprises
              </div>
              <div className="text-sm text-gray-600">
                Electrical & Plumbing Solutions
              </div>
            </div>
          </motion.div>

          {/* Contact Info */}
          <div className="hidden md:flex items-center space-x-8">
            <motion.div whileHover={{ scale: 1.05 }} className="text-right">
              <div className="text-sm text-gray-600">Call Us</div>
              <a
                href="tel:+919952638166"
                className="text-sm font-semibold text-blue-600 hover:underline"
              >
                +91 99526 38166
              </a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="text-right">
              <div className="text-sm text-gray-600">Email Us</div>
              <a
                href="mailto:srimuruganenterprisesvlr@gmail.com"
                className="text-sm font-semibold text-blue-600 hover:underline"
              >
                srimuruganenterprisesvlr@gmail.com
              </a>
            </motion.div>
          </div>

          {/* Mobile Hamburger */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md border border-gray-200 hover:bg-gray-100 transition"
            aria-controls="mobile-nav"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block border-t border-gray-200">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-between items-center py-3"
          >
            {/* Nav Links */}
            <div className="flex space-x-6 text-gray-700 font-medium">
              <span
                className={`cursor-pointer ${
                  location.pathname === "/"
                    ? "text-blue-600"
                    : "hover:text-blue-600"
                }`}
                onClick={() => navigate("/")}
              >
                Home
              </span>

              {/* Products Dropdown */}
              <div className="relative group cursor-pointer">
                Products
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 w-64 hidden group-hover:block"
                  >
                    {productItems.map((item) => (
                      <span
                        key={item.key}
                        className={`block px-4 py-2 cursor-pointer hover:bg-blue-50 ${
                          location.pathname === item.path
                            ? "text-blue-600 font-medium"
                            : ""
                        }`}
                        onClick={() => navigate(item.path)}
                      >
                        {item.label}
                      </span>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Services Dropdown */}
              <div className="relative group cursor-pointer">
                Services
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 w-48 hidden group-hover:block"
                >
                  {serviceItems.map((item) => (
                    <span
                      key={item.key}
                      className={`block px-4 py-2 cursor-pointer hover:bg-blue-50 ${
                        location.pathname === item.path
                          ? "text-blue-600 font-medium"
                          : ""
                      }`}
                      onClick={() => navigate(item.path)}
                    >
                      {item.label}
                    </span>
                  ))}
                </motion.div>
              </div>

              <span
                className={`cursor-pointer ${
                  location.pathname === "/about"
                    ? "text-blue-600"
                    : "hover:text-blue-600"
                }`}
                onClick={() => navigate("/about")}
              >
                About Us
              </span>
              <span
                className={`cursor-pointer ${
                  location.pathname === "/contact"
                    ? "text-blue-600"
                    : "hover:text-blue-600"
                }`}
                onClick={() => navigate("/contact")}
              >
                Contact
              </span>
              <a
                href={pdf}
                download="Sri-Murugan-Brochure.pdf"
                className="hover:text-blue-600"
              >
                Download Brochure
              </a>
            </div>

            {/* Buttons */}
            <div className="flex space-x-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                onClick={() => setOpenService(true)}
              >
                ⚡ Quick Service
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
                onClick={() => setOpen(true)}
              >
                ⭐ Add Review
              </motion.button>
            </div>
          </motion.div>
        </nav>

        {/* Mobile Nav (Animated) */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="md:hidden border-t border-gray-200 bg-white shadow-lg rounded-b-lg"
            >
              <div className="p-3 space-y-2">
                {/* Home */}
                <button
                  className="block w-full text-left px-4 py-2 rounded-md hover:bg-blue-50 font-medium"
                  onClick={() => handleNav("/")}
                >
                  Home
                </button>

                {/* Products Accordion */}
                <div>
                  <button
                    onClick={() => setOpenProducts((v) => !v)}
                    className="w-full flex items-center justify-between px-4 py-2 rounded-md hover:bg-blue-50 font-medium"
                  >
                    <span>Products</span>
                    <svg
                      className={`w-5 h-5 transition-transform ${
                        openProducts ? "rotate-180" : ""
                      }`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.086l3.71-3.855a.75.75 0 111.08 1.04l-4.24 4.4a.75.75 0 01-1.08 0l-4.24-4.4a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {openProducts && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="pl-6 space-y-1"
                      >
                        {productItems.map((item) => (
                          <button
                            key={item.key}
                            className="block w-full text-left px-3 py-2 rounded-md hover:bg-blue-50 text-gray-700"
                            onClick={() => handleNav(item.path)}
                          >
                            {item.label}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Services Accordion */}
                <div>
                  <button
                    onClick={() => setOpenServices((v) => !v)}
                    className="w-full flex items-center justify-between px-4 py-2 rounded-md hover:bg-blue-50 font-medium"
                  >
                    <span>Services</span>
                    <svg
                      className={`w-5 h-5 transition-transform ${
                        openServices ? "rotate-180" : ""
                      }`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.086l3.71-3.855a.75.75 0 111.08 1.04l-4.24 4.4a.75.75 0 01-1.08 0l-4.24-4.4a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {openServices && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="pl-6 space-y-1"
                      >
                        {serviceItems.map((item) => (
                          <button
                            key={item.key}
                            className="block w-full text-left px-3 py-2 rounded-md hover:bg-blue-50 text-gray-700"
                            onClick={() => handleNav(item.path)}
                          >
                            {item.label}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Other Links */}
                <button
                  className="block w-full text-left px-4 py-2 rounded-md hover:bg-blue-50 font-medium"
                  onClick={() => handleNav("/about")}
                >
                  About Us
                </button>
                <button
                  className="block w-full text-left px-4 py-2 rounded-md hover:bg-blue-50 font-medium"
                  onClick={() => handleNav("/contact")}
                >
                  Contact
                </button>
                <a
                  href={pdf}
                  download="Sri-Murugan-Brochure.pdf"
                  className="block w-full text-left px-4 py-2 rounded-md hover:bg-blue-50 font-medium"
                >
                  Download Brochure
                </a>

                {/* Action Buttons */}
                <div className="flex flex-col gap-2 mt-3">
                  <button
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                    onClick={() => setOpenService(true)}
                  >
                    Quick Service
                  </button>
                  <button
                    className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
                    onClick={() => setOpen(true)}
                  >
                    Add Review
                  </button>
                </div>

                {/* Contact Quick Actions */}
                <div className="flex gap-3 mt-4">
                  <a
                    href="tel:+919952638166"
                    className="flex-1 text-center px-3 py-2 rounded-md border hover:bg-gray-50"
                    onClick={() => setMobileOpen(false)}
                  >
                    📞 Call
                  </a>
                  <a
                    href="mailto:srimuruganenterprisesvlr@gmail.com"
                    className="flex-1 text-center px-3 py-2 rounded-md border hover:bg-gray-50"
                    onClick={() => setMobileOpen(false)}
                  >
                    ✉️ Email
                  </a>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>

      {/* Modals */}
      <ReviewModal
        open={open}
        onClose={() => setOpen(false)}
        onSubmit={handleSubmitReview}
      />
      <QuickServiceModal
        open={openService}
        onClose={() => setOpenService(false)}
        onSubmit={handleSubmitService}
      />
    </header>
  );
}
