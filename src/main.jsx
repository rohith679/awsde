import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import store from "./Redux/store.js";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "antd/dist/reset.css";
import { SnackbarProvider } from "notistack";
import ThemeProvider from "./themes/ThemeProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <SnackbarProvider>
          <BrowserRouter>
            {/* <HashRouter> */}
            <App />
            {/* </HashRouter> */}
          </BrowserRouter>
        </SnackbarProvider>
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
