React Sorting Algorithm Visualizer

An interactive React visualizer designed to help users learn sorting algorithms through animation, code, and educational facts. Currently includes Bubble Sort, with an architecture ready to add more algorithms and data structures.

Features

Random Array Generator – dynamically creates arrays to sort.

Step-by-Step Animation – visualize how sorting algorithms work in real-time.

Code Toggle – view the JavaScript implementation alongside the visualization.

Info Panel – learn key facts about each algorithm, including history, performance, and an easy-to-understand analogy.

Responsive & Themed UI – modern dark theme with smooth animations.

Technologies Used

React (Functional Components & Hooks)

Context API for global state management

CSS custom properties and flexbox for responsive layout

Optional: extendable for additional sorting algorithms and data structures

File Structure
/components
  /Blocks
    Blocks.jsx
    Blocks.css
  /Sorting
    /BubbleSort
      Bubble.jsx
      Bubble.css
/context
  ContextHub.jsx
  Random.jsx
/hooks
  useRandomArray.js
index.css
App.jsx

Getting Started
Prerequisites

Node.js >= 16.x

npm or yarn

Installation

Clone the repo:

git clone https://github.com/Keynb23/DSA.git
cd react-sorting-visualizer


Install dependencies:

npm install
# or
yarn install


Run the development server:

npm start
# or
yarn start


Open http://localhost:3000
 to view it in your browser.

Usage

Click “New Array” to generate a random array.

Click “Sort” to animate the sorting process.

Toggle between Visualization, Code, and Info panels to explore the algorithm in depth.

⚠️ Note: This is a personal project. Fork it and make your own improvements if you like, but this repository will not accept outside contributions.
