import { useParams } from "react-router-dom";
import Sorting from "@algorithms/Sorting/Sorting"; 

// Future Modules (Ready for when you create the files)
// import Searching from "@algorithms/Searching/Searching";
// import Graph from "@algorithms/Graph/Graph";

const Algorithms = () => {
  const { category } = useParams();

  const algoMap = {
    sorting: <Sorting />, 
    // "searching": <Searching />,
    // "graph": <Graph />,
    // "tree": <Tree />,
    // "dynamic-programming": <DynamicProgramming />,
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