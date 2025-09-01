import React from "react";
import AppLayout from "../../../layouts/Index";
import AboutPage from "./component/AboutPage";

export default function Index({ openModal }) {
  return (
    <AppLayout>
      <AboutPage openModal={openModal} />
    </AppLayout>
  );
}
