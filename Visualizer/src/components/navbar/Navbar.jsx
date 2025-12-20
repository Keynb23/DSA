// src/components/navbar/Navbar.js

import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="nav-container">
      <nav className="navbar">
        <div className="nav-brand">
          <NavLink id="NavLink" to="/">DSA Visualizer</NavLink>
          </div>

        <ul className="Nav-Links">
          <li className="Nav-Link">
            <NavLink id="NavLink" to="/" end>Home</NavLink>
          </li>

          {/* Data Structures Dropdown */}
          <li className="Nav-Link dropdown-container">
            <span>Data Structures ▾</span>
            <ul className="DS-Menu">
              {/* DS-Dropdowns are all navlinks to a specific page */}
              <li className="DS-Dropdown">
                <NavLink id="NavLink" to="/data-structures/primitive">Primitive Data</NavLink>
              </li>
              <li className="DS-Dropdown">
                <NavLink id="NavLink" to="/data-structures/linear">Linear Data</NavLink>
              </li>
              <li className="DS-Dropdown">
                <NavLink id="NavLink" to="/data-structures/hash-based">Hash-Based Data</NavLink>
              </li>
              <li className="DS-Dropdown">
                <NavLink id="NavLink" to="/data-structures/tree">Tree Data</NavLink>
              </li>
              <li className="DS-Dropdown">
                <NavLink id="NavLink" to="/data-structures/graph">Graph Data</NavLink>
              </li>
              <li className="DS-Dropdown">
                <NavLink id="NavLink" to="/data-structures/set-disjoint">Set & Disjoint Data</NavLink>
              </li>
              <li className="DS-Dropdown">
                <NavLink id="NavLink" to="/data-structures/heap-priority">Heap & Priority</NavLink>
              </li>
              <li className="DS-Dropdown">
                <NavLink id="NavLink" to="/data-structures/string">String Data</NavLink>
              </li>
              <li className="DS-Dropdown">
                <NavLink id="NavLink" to="/data-structures/advanced">Advanced / Specialized</NavLink>
              </li>
            </ul>
          </li>

          {/* Algorithms Dropdown */}
          <li className="Nav-Link dropdown-container">
            <span>Algorithms ▾</span>
            <ul className="Algo-Menu">
              {/* Al-Dropdowns are all navlinks to a specific page */}
              <li className="Al-Dropdown">
                <NavLink id="NavLink" to="/algorithms/sorting">
                Sorting</NavLink></li>
              <li className="Al-Dropdown">
                <NavLink id="NavLink" to="/algorithms/searching">
                Searching</NavLink></li>
              <li className="Al-Dropdown">
                <NavLink id="NavLink" to="/algorithms/graph">
                Graph</NavLink></li>
              <li className="Al-Dropdown">
                <NavLink id="NavLink" to="/algorithms/tree">
                Tree</NavLink></li>
              <li className="Al-Dropdown">
                <NavLink id="NavLink" to="/algorithms/dynamic-programming">
                Dynamic Programming</NavLink></li>
              <li className="Al-Dropdown">
                <NavLink id="NavLink" to="/algorithms/greedy">
                Greedy</NavLink></li>
              <li className="Al-Dropdown">
                <NavLink id="NavLink" to="/algorithms/backtracking">
                Backtracking</NavLink></li>
              <li className="Al-Dropdown">
                <NavLink id="NavLink" to="/algorithms/divide-and-conquer">
                Divide and Conquer</NavLink></li>
              <li className="Al-Dropdown">
                <NavLink id="NavLink" to="/algorithms/bit-manipulation">
                Bit Manipulation</NavLink></li>
              <li className="Al-Dropdown">
                <NavLink id="NavLink" to="/algorithms/mathematical">
                Mathematical</NavLink></li>
              <li className="Al-Dropdown">
                <NavLink id="NavLink" to="/algorithms/string">
                String</NavLink></li>
              <li className="Al-Dropdown">
                <NavLink id="NavLink" to="/algorithms/randomized">
                Randomized</NavLink></li>
              <li className="Al-Dropdown">
                <NavLink id="NavLink" to="/algorithms/Optimization & AI">Optimization & AI</NavLink></li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
