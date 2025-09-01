import React from "react";
import AppLayout from "../../../layouts/Index";
import WiresAccessoriesPage from "./component/WiresAccessoriesPage";

export default function Index({ openModal }) {
  return (
    <AppLayout>
      <WiresAccessoriesPage />
    </AppLayout>
  );
}
