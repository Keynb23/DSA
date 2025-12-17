import { createContext, useContext } from "react";
import { Random } from "./Random";
 
const ContextHub = createContext(null);

export function ContextHubProvider({ children }) {
  const value = {
    Random
  };

  return (
    <ContextHub.Provider value={value}>
      {children}
    </ContextHub.Provider>
  );
}

export function useContextHub() {
  const ctx = useContext(ContextHub);
  if (!ctx) {
    throw new Error("useContextHub must be used inside ContextHubProvider");
  }
  return ctx;
}
