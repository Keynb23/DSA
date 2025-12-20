// /src/PageHub/Algorithms.jsx
import { useParams } from "react-router-dom";
import Sorting from "../Algorithms/Sorting/Sorting"; 

// Once you create these files, you will uncomment these imports:
// import Searching from "../Algorithms/Searching/Searching";
// import Graph from "../Algorithms/Graph/Graph";
// import Tree from "../Algorithms/Tree/Tree";
// import DynamicProgramming from "../Algorithms/DynamicProgramming/DynamicProgramming";

const Algorithms = () => {
  const { category } = useParams();

  const algoMap = {
    // Current Active Module
    sorting: <Sorting />, 

    // Future Modules (Commented out until files are created)
    /*
    searching: <Searching />,
    graph: <Graph />,
    tree: <Tree />,
    "dynamic-programming": <DynamicProgramming />,
    greedy: <Greedy />,
    backtracking: <Backtracking />,
    "divide-and-conquer": <DivideAndConquer />,
    "bit-manipulation": <BitManipulation />,
    mathematical: <Mathematical />,
    string: <StringAlgos />,
    randomized: <Randomized />,
    "optimization-ai": <OptimizationAI />,
    */
  };

  return (
    <div className="page-hub-container">
      {/* This logic checks if the category exists in our map.
          If not, it displays a friendly "Coming Soon" message 
          based on the URL parameter.
      */}
      {algoMap[category] ? (
        algoMap[category]
      ) : (
        <div className="coming-soon-view">
          <h1>{category.replace(/-/g, ' ').toUpperCase()}</h1>
          <p>This module is currently under development. Check back soon!</p>
        </div>
      )}
    </div>
  );
};

export default Algorithms;