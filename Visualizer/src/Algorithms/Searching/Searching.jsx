import { useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";
import LinearSearch from "./LinearSearch";
import BinarySearch from "./BinarySearch";

const Searching = () => {
  const [selectedAlgo, setSelectedAlgo] = useState("linear");

  const algorithmList = [
    { id: "linear", name: "Linear Search" },
    { id: "binary", name: "Binary Search" },
    { id: "jump", name: "Jump Search" },
  ];

  return (
    <DashboardLayout 
      title="Searching" 
      list={algorithmList} 
      selectedId={selectedAlgo} 
      onSelect={setSelectedAlgo}
    >
      {selectedAlgo === "linear" && <LinearSearch />}
      {selectedAlgo === "binary" && <BinarySearch />}
    </DashboardLayout>
  );
};

export default Searching;
    