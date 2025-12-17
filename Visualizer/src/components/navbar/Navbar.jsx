import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="nav-container">
      <nav className="navbar">
        <div className="nav-brand">DSA Visualizer</div>

        <ul className="Nav-Links">
          <li className="Nav-Link">Home</li>

          {/* Data Structures Dropdown */}
          <li className="Nav-Link dropdown-container">
            <span>Data Structures ▾</span>
            <ul className="DS-Menu">
              <li className="DS-Dropdown">Primitive Data</li>
              <li className="DS-Dropdown">Linear Data</li>
              <li className="DS-Dropdown">Hash-Based Data</li>
              <li className="DS-Dropdown">Tree Data</li>
              <li className="DS-Dropdown">Graph Data</li>
              <li className="DS-Dropdown">Set & Disjoint Data</li>
              <li className="DS-Dropdown">Heap & Priority</li>
              <li className="DS-Dropdown">String Data</li>
              <li className="DS-Dropdown">Advanced / Specialized</li>
            </ul>
          </li>

          {/* Algorithms Dropdown */}
          <li className="Nav-Link dropdown-container">
            <span>Algorithms ▾</span>
            <ul className="Algo-Menu">
              <li className="Al-Dropdown">Sorting</li>
              <li className="Al-Dropdown">Searching</li>
              <li className="Al-Dropdown">Graph</li>
              <li className="Al-Dropdown">Tree</li>
              <li className="Al-Dropdown">Dynamic Programming</li>
              <li className="Al-Dropdown">Greedy</li>
              <li className="Al-Dropdown">Backtracking</li>
              <li className="Al-Dropdown">Divide and Conquer</li>
              <li className="Al-Dropdown">Bit Manipulation</li>
              <li className="Al-Dropdown">Mathematical</li>
              <li className="Al-Dropdown">String</li>
              <li className="Al-Dropdown">Randomized</li>
              <li className="Al-Dropdown">Optimization & AI</li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
