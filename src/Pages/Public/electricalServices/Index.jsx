import React from "react";
import AppLayout from "../../../layouts/Index";
import ElectricalServices from "./component/ElectricalServices";

export default function Index({ openModal }) {
  return (
    <AppLayout>
      <ElectricalServices />
    </AppLayout>
  );
}
