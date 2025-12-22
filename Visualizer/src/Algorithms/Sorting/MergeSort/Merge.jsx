import { useEffect } from "react";
import { useContextHub } from "@context/ContextHub"; 
import AlgorithmWrapper from "@components/AlgorithmWrapper/AlgorithmWrapper";

const MERGE_CODE = `function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
}`;

const MERGE_FACTS = [
    {
        title: "Creation / History",
        content: "Merge Sort was invented by John von Neumann in 1945. It was one of the first algorithms designed for electronic computing to demonstrate the power of recursion."
    },
    {
        title: "Common Uses",
        content: "Highly preferred for sorting linked lists and massive datasets that don't fit into RAM (external sorting), as it accesses data sequentially."
    },
    {
        title: "Performance",
        content: "Time: O(n log n) for Best, Average, and Worst cases. Space: O(n). It is significantly more predictable than Quick Sort for large-scale data."
    },
    {
        title: "How it Works",
        content: "It recursively divides the array into single-element groups, then merges those groups back together in sorted order by comparing the smallest available elements."
    },
    {
        title: "Key Takeaways",
        content: "A stable, divide-and-conquer algorithm. While it requires extra memory (O(n)), its guaranteed performance makes it a backbone of modern data processing."
    }
];

const Merge = () => {
    const { array, setArray, setActiveIndices, generateNewArray, restartCurrent, speed, timerRef, stopAnimation } = useContextHub();

    useEffect(() => {
        if (array.length === 0) generateNewArray(12, 100);
        return () => stopAnimation();
    }, [generateNewArray, stopAnimation, array.length]);

    const startSort = () => {
        stopAnimation();
        let steps = [];
        let aux = [...array];

        const getSteps = (mainArr, start, end, temp) => {
            if (start === end) return;
            const mid = Math.floor((start + end) / 2);
            getSteps(temp, start, mid, mainArr);
            getSteps(temp, mid + 1, end, mainArr);
            doMerge(mainArr, start, mid, end, temp);
        };

        const doMerge = (mainArr, start, mid, end, temp) => {
            let k = start, i = start, j = mid + 1;
            while (i <= mid && j <= end) {
                steps.push({ type: 'compare', indices: [i, j], range: [start, end] });
                if (temp[i] <= temp[j]) {
                    steps.push({ type: 'overwrite', index: k, value: temp[i], range: [start, end] });
                    mainArr[k++] = temp[i++];
                } else {
                    steps.push({ type: 'overwrite', index: k, value: temp[j], range: [start, end] });
                    mainArr[k++] = temp[j++];
                }
            }
            while (i <= mid) {
                steps.push({ type: 'overwrite', index: k, value: temp[i], range: [start, end] });
                mainArr[k++] = temp[i++];
            }
            while (j <= end) {
                steps.push({ type: 'overwrite', index: k, value: temp[j], range: [start, end] });
                mainArr[k++] = temp[j++];
            }
        };

        getSteps(aux, 0, array.length - 1, [...array]);
        animate(steps);
    };

    const animate = (steps) => {
        let i = 0;
        const run = () => {
            if (i >= steps.length) {
                setActiveIndices([]);
                return;
            }
            const step = steps[i];
            const activeRange = [];
            for (let r = step.range[0]; r <= step.range[1]; r++) {
                activeRange.push(r);
            }
            setActiveIndices(activeRange);

            if (step.type === 'overwrite') {
                setArray(prev => {
                    const next = [...prev];
                    next[step.index] = step.value;
                    return next;
                });
            }
            i++;
            timerRef.current = setTimeout(run, speed);
        };
        run();
    };

    return (
        <AlgorithmWrapper 
            title="Merge Sort"
            actionLabel="Run Animation" // Added this to match your Insertion Sort button
            onAction={startSort}
            onReset={() => generateNewArray(12, 100)}
            onRestart={restartCurrent}
            code={MERGE_CODE}
            facts={MERGE_FACTS}
        />
    );
};

export default Merge;