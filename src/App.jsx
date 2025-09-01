import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { Suspense, useEffect } from "react";
import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
const Public = React.lazy(() => import("./Pages/Public/Index"));
const PrivateRouting = React.lazy(() => import("./Pages/PrivateRouting/Index"));

function App() {
  return (
    <Suspense
      fallback={
        <div className="text-center mt-10">
          <LoadingOutlined />
        </div>
      }
    >
      <Routes>
        <Route path="/*" element={<Public />} />
        <Route path="/admin/*" element={<PrivateRouting />}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
