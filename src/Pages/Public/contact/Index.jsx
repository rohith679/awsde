import React from "react";
import AppLayout from "../../../layouts/Index";
import ContactPage from "./componet/ContactPage";

export default function Index({ openModal }) {
  return (
    <AppLayout>
      <ContactPage />
    </AppLayout>
  );
}
