import React from "react";
import AppLayout from "../../../layouts/Index";
import SwitchesAccessoriesPage from "./component/SwitchesAccessoriesPage";

export default function Index({ openModal }) {
  return (
    <AppLayout>
      <SwitchesAccessoriesPage />
    </AppLayout>
  );
}
