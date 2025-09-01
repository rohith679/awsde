import React from "react";
import AppLayout from "../../../layouts/Index";
import AppliancesPage from "./component/AppliancesPage";

export default function Index({ openModal }) {
  return (
    <AppLayout>
      <AppliancesPage />
    </AppLayout>
  );
}
