import { useState } from 'react';
import Bubble from './BubbleSort/Bubble';
import './Sorting.css'; 

const Sorting = () => {
  const [selectedAlgo, setSelectedAlgo] = useState('bubble');

  const algorithmList = [
    { id: 'bubble', name: 'Bubble Sort' },
    { id: 'selection', name: 'Selection Sort' },
    { id: 'insertion', name: 'Insertion Sort' },
  ];

  return (
    <div className="Dashboard">
      <aside className="Sidebar">
        <h3 className="Sidebar-Title">Sorting</h3>
        <ul>
          {algorithmList.map((algo) => (
            <li 
              key={algo.id} 
              className={selectedAlgo === algo.id ? 'active' : ''}
              onClick={() => setSelectedAlgo(algo.id)}
            >
              {algo.name}
            </li>
          ))}
        </ul>
      </aside>

      <main className="Content">
        <div className="Al-Ds-Viewer">
          {selectedAlgo === 'bubble' && <Bubble />}
          {selectedAlgo === 'selection' && <div>Selection Sort (Coming Soon)</div>}
        </div>
      </main>
    </div>
  );
};

export default Sorting;