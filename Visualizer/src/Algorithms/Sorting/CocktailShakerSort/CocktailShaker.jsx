// src/Algorithms/Sorting/CocktailShakerSort/CocktailShaker.jsx

import { useContextHub } from "../../../context/ContextHub";
import AlgorithmWrapper from "../../../components/AlgorithmWrapper/AlgorithmWrapper";
import { useEffect } from "react";

const COCKSTAIL_CODE = `
function cocktailShakerSort(arr) {
    let isSorted = false;
    let start = 0;
    let end = arr.length - 1;

    while (!isSorted) {
        // Reset the isSorted flag at the beginning of the loop
        isSorted = true;

        // Forward pass (similar to standard bubble sort)
        for (let i = start; i < end; i++) {
            if (arr[i] > arr[i + 1]) {
                // Swap elements
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                isSorted = false;
            }
        }

        // If no swaps occurred in the forward pass, the array is sorted
        if (isSorted) {
            break;
        }

        // Decrease the end boundary, as the largest element is now in the correct spot
        end--;

        // Reset the isSorted flag for the backward pass
        isSorted = true;

        // Backward pass
        for (let j = end; j > start; j--) {
            if (arr[j - 1] > arr[j]) {
                // Swap elements
                [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
                isSorted = false;
            }
        }

        // Increase the start boundary, as the smallest element is now in the correct spot
        start++;
    }
    return arr;
}
`;

const COCKSTAIL_FACTS = [
    {
        title: "Creation / History",
        content: "Cocktail shaker sort is a simple comparison-based sorting algorithm. First described in the 1950s."
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

const CocktailShaker = () => {
    const { array, setArray, setActiveIndices, generateNewArray, restartCurrent, speed, timerRef, stopAnimation } = useContextHub();

    useEffect(() => {
        if (array.length === 0) generateNewArray(12, 100);
        return () => stopAnimation(); // Cleanup on leave
    }, [generateNewArray, stopAnimation, array.length]);

    const startSort = () => {
        stopAnimation();
        let a = [...array];
        let steps = [];

        let isSorted = false;
        let start = 0;
        let end = a.length - 1;

        while (!isSorted) {
            // Reset the isSorted flag at the beginning of the loop
            isSorted = true;

            // Forward pass (similar to standard bubble sort)
            for (let i = start; i < end; i++) {
                if (a[i] > a[i + 1]) {
                    // Swap elements
                    [a[i], a[i + 1]] = [a[i + 1], a[i]];
                    isSorted = false;
                }
            }

            // If no swaps occurred in the forward pass, the array is sorted
            if (isSorted) {
                break;
            }

            // Decrease the end boundary, as the largest element is now in the correct spot
            end--;

            // Reset the isSorted flag for the backward pass
            isSorted = true;

            // Backward pass
            for (let j = end; j > start; j--) {
                if (a[j - 1] > a[j]) {
                    // Swap elements
                    [a[j], a[j - 1]] = [a[j - 1], a[j]];
                    isSorted = false;
                }
            }

            // Increase the start boundary, as the smallest element is now in the correct spot
            start++;
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
            title="Cocktail Shaker Sort"
            actionLabel="Run Animation"
            onAction={startSort}
            onReset={() => generateNewArray(12, 100)}
            onRestart={restartCurrent}
            code={COCKSTAIL_CODE}
            facts={COCKSTAIL_FACTS}
        />
    );
};

export default CocktailShaker;
