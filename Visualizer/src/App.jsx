import "./App.css";
import Bubble from "./Algorithms/Sorting/BubbleSort/Bubble";
import Navbar from "./components/navbar/Navbar";
const App = () => {
  return (
    <>
      <Navbar />
      <div className="app-container">
        <Bubble />
      </div>
    </>
  );
};

export default App;
