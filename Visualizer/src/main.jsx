// src/main.jsx

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ContextHubProvider } from "./context/ContextHub";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextHubProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContextHubProvider>
  </StrictMode>
);