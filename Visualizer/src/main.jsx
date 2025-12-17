import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ContextHubProvider } from "./context/ContextHub";

createRoot(document.getElementById("root")).render(
  <ContextHubProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </ContextHubProvider>
);
