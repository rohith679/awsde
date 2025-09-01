import React from "react";
import { ConfigProvider } from "antd";
import { ANT_THEME } from "./theme";

const ThemeProvider = ({ children }) => {
  return <ConfigProvider theme={ANT_THEME}>{children}</ConfigProvider>;
};

export default ThemeProvider;
