import { useState } from "react";
import { useContextHub } from "../../context/ContextHub";
import Blocks from "../Blocks/Blocks";
import "./AlgorithmWrapper.css";

const AlgorithmWrapper = ({ title, code, facts, onAction, actionLabel, onReset, onRestart, children }) => {
  const { speed, setSpeed } = useContextHub();
  const [panelView, setPanelView] = useState("code");

  return (
    <div className="Algorithm-Container">
      <header className="Algorithm-Header">
        <div className="Header-Left"><h2>{title}</h2></div>
        <div className="Header-Right">
          <div className="Controls">
            <select className="speed-select" value={speed} onChange={(e) => setSpeed(Number(e.target.value))}>
              <option value={1000}>Slow</option>
              <option value={200}>Normal</option>
              <option value={0}>Real World</option>
            </select>
            <button className="btn-secondary" onClick={onReset}>New Data</button>
            <button className="btn-secondary" onClick={onRestart}>Restart</button>
            <button className="btn-primary" onClick={onAction}>{actionLabel}</button>
            {children}
          </div>
        </div>
      </header>

      <div className="Algorithm-Stage">
        <div className="Visualizer-Section"><Blocks /></div>
        <aside className="Reference-Panel">
          <div className="Panel-Toggles">
            <button className={panelView === "code" ? "active" : ""} onClick={() => setPanelView("code")}>Code</button>
            <button className={panelView === "facts" ? "active" : ""} onClick={() => setPanelView("facts")}>Facts</button>
          </div>
          <div className="Panel-Content">
            {panelView === "code" ? (
              <pre className="DSA_Code"><code>{code}</code></pre>
            ) : (
              <div className="DSA_Facts">
                {facts.map((f, i) => (
                  <div key={i} className="Fact-Item">
                    <h4>{f.title}</h4>
                    <p>{f.content}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
};

export default AlgorithmWrapper;