import { useState } from "react";

export function useRandomArray(length = 10, max = 100) {
  const [numbers, setNumbers] = useState(() =>
    Array.from({ length }, () => Math.floor(Math.random() * max))
  );

  const regenerate = () => {
    setNumbers(
      Array.from({ length }, () => Math.floor(Math.random() * max))
    );
  };

  return { numbers, setNumbers, regenerate };
}
