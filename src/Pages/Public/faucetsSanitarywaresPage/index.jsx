import React from "react";
import AppLayout from "../../../layouts/Index";
import FaucetsSanitarywaresPage from "./component/FaucetsSanitarywaresPage";

export default function Index({ openModal }) {
  return (
    <AppLayout>
      <FaucetsSanitarywaresPage />
    </AppLayout>
  );
}
