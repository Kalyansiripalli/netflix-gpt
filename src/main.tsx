import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App.tsx";
import { appStore } from "./utils/appStore";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>

  // </StrictMode>
  <Provider store={appStore}>
    <App />
  </Provider>,
);
