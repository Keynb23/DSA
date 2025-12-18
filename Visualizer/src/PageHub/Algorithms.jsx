import { useParams } from "react-router-dom";
import Sorting from "../Algorithms/Sorting/Sorting"; // Import the wrapper

const Algorithms = () => {
  const { category } = useParams();

  const algoMap = {
    // Now when the URL is /algorithms/sorting, it shows the Sorting wrapper
    sorting: <Sorting />, 
    bubble: <Sorting />, 
  };

  return (
    <div className="page-hub-container">
      {algoMap[category] ? (
        algoMap[category]
      ) : (
        <div className="all-view">
          <h1>Browse {category}</h1>
        </div>
      )}
    </div>
  );
};
export default Algorithms;