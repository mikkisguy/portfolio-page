import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./shared/translations/i18n";
import App from "./components/App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
