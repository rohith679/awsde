import React from "react";
import AppLayout from "../../../layouts/Index";
import MotorsPumpsPage from "./component/MotorsPumpsPage";

export default function Index({ openModal }) {
  return (
    <AppLayout>
      <MotorsPumpsPage />
    </AppLayout>
  );
}
