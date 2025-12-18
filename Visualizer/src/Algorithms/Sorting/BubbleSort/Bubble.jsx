import { useState } from "react";
import { useContextHub } from "../../../context/ContextHub";
import Blocks from "../../../components/Blocks/Blocks";
import "./Bubble.css";

const BUBBLE_SORT_CODE = `
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

const BUBBLE_SORT_FACTS = [
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
  const { Random } = useContextHub();
  const { numbers, setNumbers, regenerate } = Random.useRandomArray(12, 100);

  const [showCode, setShowCode] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [activeIndices, setActiveIndices] = useState([]);

  const startSort = () => {
    const a = [...numbers];
    const steps = [];

    for (let i = 0; i < a.length - 1; i++) {
      for (let j = 0; j < a.length - 1 - i; j++) {
        steps.push({ array: [...a], active: [j, j + 1] });
        if (a[j] > a[j + 1]) {
          [a[j], a[j + 1]] = [a[j + 1], a[j]];
          steps.push({ array: [...a], active: [j, j + 1] });
        }
      }
    }

    let i = 0;
    const interval = setInterval(() => {
      if (i >= steps.length) {
        setActiveIndices([]);
        clearInterval(interval);
        return;
      }
      setNumbers(steps[i].array);
      setActiveIndices(steps[i].active);
      i++;
    }, 500);
  };

  return (
    <div className="Bubble">
      <h2>Bubble Sort</h2>

      <div className="Controls">
        <button onClick={regenerate}>New Array</button>
        <button onClick={startSort}>Sort</button>
        <button onClick={() => setShowCode(!showCode)}>
          {showCode ? "Show Visualization" : "Show Code"}
        </button>
        <button onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? "Hide Info" : "Show Info"}
        </button>
      </div>

      {!showCode && !showInfo && (
        <Blocks array={numbers} activeIndices={activeIndices} />
      )}

      {showCode && (
        <pre className="Code">
          <code>{BUBBLE_SORT_CODE}</code>
        </pre>
      )}

      {showInfo && (
        <div className="InfoPanel">
          {BUBBLE_SORT_FACTS.map((fact, idx) => (
            <div key={idx} className="Fact">
              <h3>{fact.title}</h3>
              <p>{fact.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Bubble;
