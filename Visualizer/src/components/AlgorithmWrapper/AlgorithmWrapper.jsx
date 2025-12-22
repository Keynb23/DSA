import { useContextHub } from "../../context/ContextHub";
import Blocks from "../Blocks/Blocks";
import "./AlgorithmWrapper.css";
import { useState } from "react";

const AlgorithmWrapper = ({
  title,
  code,
  facts,
  onAction,
  actionLabel,
  onReset,
  onRestart,
  children,
}) => {
  const { speed, setSpeed } = useContextHub();
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <>
      <div className="Algorithm-Layout">
        {/* Main Container: Header + Stage + Code */}
        <div className="Algorithm-Container">
          <header className="Algorithm-Header">
            <div className="Header-Left">
              <h2>{title}</h2>
            </div>
            <div className="Header-Right">
              <div className="Controls">
                <select
                  className="speed-select"
                  value={speed}
                  onChange={(e) => setSpeed(Number(e.target.value))}
                >
                  <option value={1000}>Slow</option>
                  <option value={200}>Normal</option>
                  <option value={0}>Real World</option>
                </select>
                <button className="btn-secondary" onClick={onReset}>
                  New Data
                </button>
                <button className="btn-secondary" onClick={onRestart}>
                  Restart
                </button>
                <button className="btn-primary" onClick={onAction}>
                  {actionLabel}
                </button>
                {children}
              </div>
            </div>
          </header>

          <div className="Algorithm-Stage">
            <Blocks />
          </div>
        </div>

        {/* Persistent Fact Panel on the right of the screen */}
        <aside className="Reference-Panel">
          <div className="Panel-Content">
            <div className="Scroll-Box">
              <h3 className="FC-Panel_Title">Facts</h3>
              <div className="DSA_Facts">
                {facts.map((f, i) => (
                  <div key={i} className="Fact-Item">
                    <h4>{f.title}</h4>
                    <p>{f.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>

        <div className="Panel-Content Code-Area">
          <div className="Scroll-Box">
            <h3 className="FC-Panel_Title">Code</h3>
            <pre className="DSA_Code" onMouseLeave={() => setHoverIndex(null)}>
              <code>
                {code.split("").map((char, index) => (
                  <span
                    key={index}
                    onMouseEnter={() => setHoverIndex(index)}
                    className={
                      hoverIndex !== null && index <= hoverIndex
                        ? "code-highlight"
                        : ""
                    }
                  >
                    {char}
                  </span>
                ))}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </>
  );
};

export default AlgorithmWrapper;
