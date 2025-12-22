import { useState } from "react";
import Bubble from "./BubbleSort/Bubble";
import Selection from "./SelectionSort/Selection";
import Insertion from "./InsertionSort/Insertion";
import CocktailShaker from "./CocktailShakerSort/CocktailShaker";
import Merge from "./MergeSort/Merge";
import "./Sorting.css";

const Sorting = () => {
  const [selectedAlgo, setSelectedAlgo] = useState("bubble");

  const algorithmList = [
    { id: "bubble", name: "Bubble Sort" },
    { id: "selection", name: "Selection Sort" },
    { id: "insertion", name: "Insertion Sort" },
    { id: "cocktail-shaker", name: "Cocktail Shaker Sort" },
    { id: "merge", name: "Merge Sort" },
  ];

  return (
    <>
      <div className="Dashboard">
        <aside className="Sidebar">
          <h3 className="Sidebar-Title">Sorting</h3>
          <ul>
            {algorithmList.map((algo) => (
              <li
                key={algo.id}
                className={selectedAlgo === algo.id ? "active" : ""}
                onClick={() => setSelectedAlgo(algo.id)}
              >
                {algo.name}
              </li>
            ))}
          </ul>
        </aside>

        <main className="Content">
          <div className="Al-Ds-Viewer">
            {selectedAlgo === "bubble" && <Bubble />}
            {selectedAlgo === "selection" && <Selection />}
            {selectedAlgo === "insertion" && <Insertion />}
            {selectedAlgo === "cocktail-shaker" && <CocktailShaker />}
            {selectedAlgo === "merge" && <Merge />}
          </div>
        </main>
      </div>
    </>
  );
};

export default Sorting;
