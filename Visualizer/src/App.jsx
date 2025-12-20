// App.jsx

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./Home";
import Algorithms from "./PageHub/Algorithms";
import DataStructures from "./PageHub/DataStructures";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/algorithms/:category" element={<Algorithms />} />
          <Route path="/data-structures/:category" element={<DataStructures />} />
        </Routes>
      </div>
    </>
  );
};
export default App;