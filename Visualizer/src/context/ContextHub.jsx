// /src/context/ContextHub.jsx
import { createContext, useContext, useState, useCallback, useRef } from "react";

const ContextHub = createContext(null);

export function ContextHubProvider({ children }) {
  const [array, setArray] = useState([]);
  const [originalArray, setOriginalArray] = useState([]); // To restart from beginning
  const [activeIndices, setActiveIndices] = useState([]);
  const [speed, setSpeed] = useState(200);
  const timerRef = useRef(null);

  const stopAnimation = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setActiveIndices([]);
  }, []);

  const generateNewArray = useCallback((length = 12, max = 100) => {
    stopAnimation();
    const newArr = Array.from({ length }, () => Math.floor(Math.random() * (max - 15)) + 15);
    setArray(newArr);
    setOriginalArray(newArr);
  }, [stopAnimation]);

  const restartCurrent = useCallback(() => {
    stopAnimation();
    setArray([...originalArray]);
  }, [originalArray, stopAnimation]);

  const value = {
    array, setArray,
    activeIndices, setActiveIndices,
    generateNewArray,
    restartCurrent,
    speed, setSpeed,
    timerRef,
    stopAnimation
  };

  return <ContextHub.Provider value={value}>{children}</ContextHub.Provider>;
}

export const useContextHub = () => useContext(ContextHub);