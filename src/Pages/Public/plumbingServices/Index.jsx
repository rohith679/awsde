import React from "react";
import AppLayout from "../../../layouts/Index";
import PlumbingServices from "./component/PlumbingServices";

export default function Index({ openModal }) {
  return (
    <AppLayout>
      <PlumbingServices />
    </AppLayout>
  );
}
