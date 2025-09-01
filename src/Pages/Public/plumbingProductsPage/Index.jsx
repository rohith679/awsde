import React from "react";
import AppLayout from "../../../layouts/Index";
import PlumbingProductsPage from "./component/PlumbingProductsPage";

export default function Index({ openModal }) {
  return (
    <AppLayout>
      <PlumbingProductsPage />
    </AppLayout>
  );
}
