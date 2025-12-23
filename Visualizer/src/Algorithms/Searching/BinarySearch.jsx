import { useEffect, useState } from "react";
import { useContextHub } from "../../context/ContextHub";
import AlgorithmWrapper from "../../components/AlgorithmWrapper/AlgorithmWrapper";

const BINARY_CODE = `
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; // Found the index
        } else if (arr[mid] < target) {
            left = mid + 1; // Search right half
        } else {
            right = mid - 1; // Search left half
        }
    }
    return -1; // Not found
}
`;

const BINARY_FACTS = [
  {
    title: "Creation / History",
    content:
      "While the idea dates back to the 1940s, the first bug-free implementation of binary search was published by Bentley in 1962. It is the gold standard for efficient searching.",
  },
  {
    title: "Common Uses",
    content:
      "Used in database indexing, library catalogs, and anytime you need to find an item in a massive, pre-sorted list.",
  },
  {
    title: "Performance",
    content:
      "Best Case: O(1). Average/Worst Case: O(log n). This means in a list of 1,000,000 items, it finds the target in roughly 20 comparisons.",
  },
  {
    title: "How it Works",
    content:
      "It checks the middle element. If it's not the target, it throws away the half of the list where the target cannot possibly be and repeats the process on the remaining half.",
  },
  {
    title: "Key Takeaways",
    content:
      "Extremely fast for large data, but useless on unsorted data. Always sort your array before using this.",
  },
];

const BinarySearch = () => {
  const {
    array,
    setArray,
    setActiveIndices,
    generateNewArray,
    restartCurrent,
    speed,
    timerRef,
    stopAnimation,
  } = useContextHub();
  const [target, setTarget] = useState(50);
  const [status, setStatus] = useState(null);
  const [foundIndex, setFoundIndex] = useState(null);

  useEffect(() => {
    if (array.length === 0) {
      generateNewArray(15, 100);
    }
  }, [array.length, generateNewArray]);

  // Added Sort Functionality
  const sortArrayManually = () => {
    stopAnimation();
    setStatus(null);
    setActiveIndices([]);
    const sorted = [...array].sort((a, b) => a - b);
    setArray(sorted);
  };

  const startSearch = () => {
    stopAnimation();

    // Safety check: ensure array is sorted before running
    const isSorted = array.every((v, i, a) => !i || a[i - 1] <= v);
    if (!isSorted) {
      alert("Array must be sorted for Binary Search!");
      return;
    }

    setStatus("searching");
    setFoundIndex(null);

    let steps = [];
    let left = 0;
    let right = array.length - 1;
    let finalIdx = -1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      steps.push({ active: [mid] });

      if (array[mid] === target) {
        finalIdx = mid;
        break;
      } else if (array[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    let i = 0;
    timerRef.current = setInterval(() => {
      if (i >= steps.length) {
        stopAnimation();
        if (finalIdx !== -1) {
          setStatus("found");
          setFoundIndex(finalIdx);
        } else {
          setStatus("not-found");
          setActiveIndices([]);
        }
        return;
      }
      setActiveIndices(steps[i].active);
      i++;
    }, speed);
  };

  return (
    <AlgorithmWrapper
      title="Binary Search"
      code={BINARY_CODE}
      facts={BINARY_FACTS}
      onAction={startSearch}
      actionLabel="Run Search"
      onReset={() => {
        setStatus(null);
        generateNewArray(15, 100);
      }}
      onRestart={() => {
        setStatus(null);
        restartCurrent();
      }}
    >
      <div className="Controls-Group">
        <input
          type="number"
          className="target-input"
          placeholder="Target"
          value={target}
          onChange={(e) => setTarget(Number(e.target.value))}
        />
        {/* Added Sort Button */}
        <button className="btn-secondary" onClick={sortArrayManually}>
          Sort Array
        </button>
      </div>

      {status && status !== "searching" && (
        <div className={`Search-Result ${status}`}>
          {status === "found"
            ? `Target found at index ${foundIndex}`
            : "Target not found in array"}
          <button onClick={() => setStatus(null)}>x</button>
        </div>
      )}
    </AlgorithmWrapper>
  );
};

export default BinarySearch;
