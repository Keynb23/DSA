import { useState } from "react";
import { useContextHub } from "../../../context/ContextHub";
import Blocks from "../../Blocks/Blocks";
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

const Bubble = () => {
  const { Random } = useContextHub();
  const { numbers, setNumbers, regenerate } = Random.useRandomArray(12, 100);

  const [showCode, setShowCode] = useState(false);
  const [activeIndices, setActiveIndices] = useState([]);

  const startSort = () => {
    const a = [...numbers];
    const steps = [];

    // generate steps with active indices for animation
    for (let i = 0; i < a.length - 1; i++) {
      for (let j = 0; j < a.length - 1 - i; j++) {
        steps.push({ array: [...a], active: [j, j + 1] });
        if (a[j] > a[j + 1]) {
          [a[j], a[j + 1]] = [a[j + 1], a[j]];
          steps.push({ array: [...a], active: [j, j + 1] });
        }
      }
    }

    // animate steps
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
    }, 500); // slower for clarity
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
      </div>

      {!showCode ? (
        <Blocks array={numbers} activeIndices={activeIndices} />
      ) : (
        <pre className="Code">
          <code>{BUBBLE_SORT_CODE}</code>
        </pre>
      )}
    </div>
  );
};

export default Bubble;
