import React from "react";
import AppLayout from "../../../layouts/Index";
import LightingSolutionsPage from "./component/LightingSolutionsPage";

export default function Index({ openModal }) {
  return (
    <AppLayout>
      <LightingSolutionsPage />
    </AppLayout>
  );
}
