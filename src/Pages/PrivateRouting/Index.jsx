import React, { useEffect } from "react";
import { Suspense } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Review from "./review/index";
import AdminLogin from "./login/Index";
import Service from "./service/index";
import Contact from "./contact/Index";
import ScrollToTop from "../../Component/ScrollToTop";
import LocalStorage from "../../config/LocalStorage";
import HomeSectionMedia from "./HomeMedia/Index";
import BannerMedia from "./BannerMedia/Index";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // const user = JSON.parse(localStorage.getItem("user") || "");
    // const token = JSON.parse(localStorage.getItem("token") || "");
    // if (!user && !token) {
    //   navigate("/admin");
    // }

    const user = JSON.parse(localStorage.getItem("user") || "null");
    // const token = JSON.parse(localStorage.getItem("token") || "null");
    console.log("user: ", user);
    // const token = JSON.parse(localStorage.getItem("token") || "null");

    // console.log("token: ", token);

    if (!user) {
      navigate("/admin");
    }
  }, []);
  return (
    <>
      <ScrollToTop />
      <Suspense
        fallback={
          <div className="text-center mt-10">
            <LoadingOutlined />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<AdminLogin />} />
          <Route path="/service" element={<Service />} />
          <Route path="/reviews" element={<Review />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/homeMedia" element={<HomeSectionMedia />} />
          <Route path="/bannerMedia" element={<BannerMedia />} />
        </Routes>
      </Suspense>
    </>
  );
};
export default Index;
