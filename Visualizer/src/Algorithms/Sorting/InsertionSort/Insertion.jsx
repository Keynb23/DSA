// src/Algorithms/Sorting/InsertionSort/Insertion.jsx
// possibly adding arrows to show where the data is moving, but might make that into a global state.
import { useContextHub } from "../../../context/ContextHub";
import AlgorithmWrapper from "../../../components/AlgorithmWrapper/AlgorithmWrapper";
import { useEffect } from "react";

const INSERTION_CODE = `
function insertionSort(arr) {
  const a = [...arr];
  for (let i = 1; i < a.length; i++) {
    let j = i;
    while (j > 0 && a[j] < a[j - 1]) {
      [a[j], a[j - 1]] = [a[j - 1], a[j]];
      j--;
    }
  }
  return a;
}
`;

const INSERTION_FACTS = [
  {
    title: "Creation / History",
    content: "Insertion sort is a simple comparison-based sorting algorithm. First described in the 1950s."
  },
  {
    title: "Common Uses",
    content: "Used for educational purposes and small datasets. Not suitable for large datasets due to its O(n²) complexity."
  },
  {
    title: "Performance",
    content: "Best Case: O(n), Average/Worst Case: O(n²). Space Complexity: O(1). Not efficient for large datasets."
  },
  {
    title: "How it Works",
    content: "Imagine a line of students with random heights. You repeatedly insert each student into their correct position in the line. Repeat until sorted."
  },
  {
    title: "Key Takeaways",
    content: "Simple to implement, but not efficient for large datasets. Good for educational purposes."
  }
];

const Insertion = () => {
    const { array, setArray, setActiveIndices, generateNewArray, restartCurrent, speed, timerRef, stopAnimation } = useContextHub();

    useEffect(() => {
        if (array.length === 0) generateNewArray(12, 100);
        return () => stopAnimation(); // Cleanup on leave
    }, [generateNewArray, stopAnimation, array.length]);

    const startSort = () => {
        stopAnimation();
        let a = [...array];
        let steps = [];

        for (let i = 1; i < a.length; i++) {
            let j = i;
            while (j > 0 && a[j] < a[j - 1]) {
                [a[j], a[j - 1]] = [a[j - 1], a[j]];
                j--;
                steps.push({ currentArray: [...a], active: [j, j - 1] });
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
            title="Insertion Sort"
            actionLabel="Run Animation"
            onAction={startSort}
            onReset={() => generateNewArray(12, 100)}
            onRestart={restartCurrent}
            code={INSERTION_CODE}
            facts={INSERTION_FACTS}
        />
    );
};

export default Insertion;