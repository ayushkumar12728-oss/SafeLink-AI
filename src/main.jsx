import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { LanguageProvider } from "./context/LanguageContext";
<LanguageProvider>
    <App />
</LanguageProvider>

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);