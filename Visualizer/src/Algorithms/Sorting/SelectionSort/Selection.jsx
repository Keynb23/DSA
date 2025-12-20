// src/Algorithms/Sorting/SelectionSort/Selection.jsx
// possibly adding arrows to show where the data is moving, but might make that into a global state.
import { useContextHub } from "../../../context/ContextHub";
import AlgorithmWrapper from "../../../components/AlgorithmWrapper/AlgorithmWrapper";
import { useEffect } from "react";

const SELECTION_CODE = `
function selectionSort(arr) {
  const a = [...arr];
  for (let i = 0; i < a.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < a.length; j++) {
      if (a[j] < a[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [a[i], a[minIndex]] = [a[minIndex], a[i]];
    }
  }
  return a;
}
`;

const SELECTION_FACTS = [
  {
    title: "Creation / History",
    content: "Selection sort is a simple comparison-based sorting algorithm. First described in the 1950s."
  },
  {
    title: "Common Uses",
    content: "Used for educational purposes and small datasets. Not suitable for large datasets due to its O(n²) complexity."
  },
  {
    title: "Performance",
    content: "Best Case: O(n²), Average/Worst Case: O(n²). Space Complexity: O(1). Not efficient for large datasets."
  },
  {
    title: "How it Works",
    content: "Imagine a line of students with random heights. You repeatedly find the shortest student and move them to the front. Repeat until sorted."
  },
  {
    title: "Key Takeaways",
    content: "Simple to implement, but not efficient for large datasets. Good for educational purposes."
  }
];

const Selection = () => {
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
            let minIndex = i;
            for (let j = i + 1; j < a.length; j++) {
                if (a[j] < a[minIndex]) {
                    minIndex = j;
                }
            }
            if (minIndex !== i) {
                [a[i], a[minIndex]] = [a[minIndex], a[i]];
                steps.push({ currentArray: [...a], active: [i, minIndex] });
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
            title="Selection Sort"
            actionLabel="Run Animation"
            onAction={startSort}
            onReset={() => generateNewArray(12, 100)}
            onRestart={restartCurrent}
            code={SELECTION_CODE}
            facts={SELECTION_FACTS}
        />
    );
};

export default Selection;
