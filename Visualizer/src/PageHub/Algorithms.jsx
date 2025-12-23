import { useParams } from "react-router-dom";
import Sorting from "@algorithms/Sorting/Sorting"; 
import Searching from "@algorithms/Searching/Searching";
  
const Algorithms = () => {
  const { category } = useParams();

  const algoMap = {
    sorting: <Sorting />, 
    searching: <Searching />,
  };

  return (
    <div className="page-hub-container">
      {algoMap[category] ? (
        algoMap[category]
      ) : (
        <div className="coming-soon-view">
          <h1>{category?.replace(/-/g, ' ').toUpperCase()}</h1>
          <p>This module is currently under development. Check back soon!</p>
        </div>
      )}
    </div>
  );
};

export default Algorithms;