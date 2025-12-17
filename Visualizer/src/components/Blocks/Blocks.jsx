import "./Blocks.css";

const Blocks = ({ array, activeIndices = [] }) => {
  return (
    <div className="BlocksContainer">
      {array.map((value, index) => (
        <div
          key={index}
          className={`Block ${activeIndices.includes(index) ? "active" : ""}`}
          style={{ "--height": value }}
        >
          {value}
        </div>
      ))}
    </div>
  );
};

export default Blocks;
