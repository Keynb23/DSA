
import { useEffect, useState } from "react";
import { useContextHub } from "../../context/ContextHub";
import AlgorithmWrapper from "../../components/AlgorithmWrapper/AlgorithmWrapper";

const LINEAR_CODE = `
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}
`;

const LINEAR_FACTS = [
    {
        title: "Creation / History",
        content: "Linear search is the most fundamental searching technique, serving as the baseline for data retrieval since the earliest days of computing."
    },
    {
        title: "Common Uses",
        content: "Used for small, unsorted datasets where the overhead of sorting (required for Binary Search) isn't efficient."
    },
    {
        title: "Performance",
        content: "Best Case: O(1), Average/Worst Case: O(n). Space Complexity: O(1)."
    },
    {
        title: "How it Works",
        content: "It starts at the first element and compares it to the target. If they don't match, it moves to the next until a match is found or the list ends."
    },
    {
        title: "Key Takeaways",
        content: "Predictable and simple, but performance scales linearly with the size of the input."
    }
];
const LinearSearch = () => {
    const { array, setActiveIndices, generateNewArray, restartCurrent, speed, timerRef, stopAnimation } = useContextHub();
    const [target, setTarget] = useState(50);
    const [status, setStatus] = useState(null); // 'searching', 'found', or 'not-found'
    const [foundIndex, setFoundIndex] = useState(null);

    useEffect(() => {
        if (array.length === 0) generateNewArray(12, 100);
        return () => stopAnimation();
    }, [generateNewArray, stopAnimation, array.length]);

    const startSearch = () => {
        stopAnimation();
        setStatus("searching");
        setFoundIndex(null);
        
        let steps = [];
        let finalIndex = -1;

        for (let i = 0; i < array.length; i++) {
            steps.push({ active: [i], isMatch: false });
            if (array[i] === target) {
                steps.push({ active: [i], isMatch: true });
                finalIndex = i;
                break; 
            }
        }

        let stepIdx = 0;
        timerRef.current = setInterval(() => {
            if (stepIdx >= steps.length) {
                stopAnimation();
                // Check if the last step was a match
                if (finalIndex !== -1) {
                    setStatus("found");
                    setFoundIndex(finalIndex);
                } else {
                    setStatus("not-found");
                    setActiveIndices([]);
                }
                return;
            }

            setActiveIndices(steps[stepIdx].active);
            stepIdx++;
        }, speed);
    };

    return (
        <AlgorithmWrapper 
            title="Linear Search"
            actionLabel="Run Search"
            onAction={startSearch}
            onReset={() => { setStatus(null); generateNewArray(12, 100); }}
            onRestart={() => { setStatus(null); restartCurrent(); }}
            code={LINEAR_CODE}
            facts={LINEAR_FACTS}
        >
            <div className="Controls-Group">
                <input 
                    type="number" 
                    className="target-input"
                    placeholder="Target"
                    value={target}
                    onChange={(e) => setTarget(Number(e.target.value))}
                />
            </div>

            {/* Simple Result Popup */}
            {status && status !== "searching" && (
                <div className={`Search-Result ${status}`}>
                    {status === "found" 
                        ? `Target found at index ${foundIndex}` 
                        : "Target not found in array"}
                    <button onClick={() => setStatus(null)}>×</button>
                </div>
            )}
        </AlgorithmWrapper>
    );
};

export default LinearSearch;
    