import { useContextHub } from "../../context/ContextHub";
import "./Blocks.css";

const Blocks = () => {
  const { array, activeIndices } = useContextHub();

  return (
    <div className="BlocksContainer">
      {array.map((value, index) => (
        <div
          key={index}
          className={`Block ${activeIndices.includes(index) ? "active" : ""}`}
          style={{ height: `${value}%` }}
        >
          <span className="Block-Value">{value}</span>
        </div>
      ))}
    </div>
  );
};

export default Blocks;