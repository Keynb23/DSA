// /src/Algorithms/Sorting/BubbleSort/Bubble.jsx
import { useEffect } from "react";
import { useContextHub } from "../../../context/ContextHub";
import AlgorithmWrapper from "../../../components/AlgorithmWrapper/AlgorithmWrapper";

const BUBBLE_CODE = `
function bubbleSort(arr) {
  const a = [...arr];
  for (let i = 0; i < a.length - 1; i++) {
    for (let j = 0; j < a.length - 1 - i; j++) {
      if (a[j] > a[j + 1]) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
      }
    }
  }
  return a;
}
`;

const BUBBLE_FACTS = [
  {
    title: "Creation / History",
    content: "Bubble sort is one of the oldest sorting algorithms, first described in the 1950s. Its simplicity makes it a classic teaching example."
  },
  {
    title: "Common Uses",
    content: "Used primarily for educational purposes and small datasets. Rarely used in production due to inefficiency."
  },
  {
    title: "Performance",
    content: "Best Case: O(n), Average/Worst Case: O(n²). Space Complexity: O(1). Not suitable for large datasets."
  },
  {
    title: "How it Works",
    content: "Imagine a line of students with random heights. You compare each pair and swap if the left is taller. The tallest 'bubbles' to the end. Repeat until sorted."
  },
  {
    title: "Key Takeaways",
    content: "Super easy to understand, great for visual learning, but slow for large datasets."
  }
];

const Bubble = () => {
  const { array, setArray, setActiveIndices, generateNewArray, restartCurrent, speed, timerRef, stopAnimation } = useContextHub();

  useEffect(() => {
    if (array.length === 0) generateNewArray(12, 100);
    return () => stopAnimation(); // Cleanup on leave
  }, [generateNewArray, stopAnimation, array.length]);

  const startSort = () => {
    stopAnimation();
    let a = [...array];
    let steps = [];

    for (let i = 0; i < a.length - 1; i++) {
      for (let j = 0; j < a.length - i - 1; j++) {
        steps.push({ currentArray: [...a], active: [j, j + 1] });
        if (a[j] > a[j + 1]) {
          [a[j], a[j + 1]] = [a[j + 1], a[j]];
          steps.push({ currentArray: [...a], active: [j, j + 1] });
        }
      }
    }

    let i = 0;
    timerRef.current = setInterval(() => {
      if (i >= steps.length) {
        stopAnimation();
        return;
      }
      setArray(steps[i].currentArray);
      setActiveIndices(steps[i].active);
      i++;
    }, speed);
  };

  return (
    <AlgorithmWrapper 
      title="Bubble Sort"
      actionLabel="Run Animation"
      onAction={startSort}
      onReset={() => generateNewArray(12, 100)}
      onRestart={restartCurrent}
      code={BUBBLE_CODE}
      facts={BUBBLE_FACTS}
    />
  );
};

export default Bubble;