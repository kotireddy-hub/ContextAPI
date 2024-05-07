import { useState } from 'react';
import './App.css';
import ComponentA from './components/ComponentA.jsx';
import ComponentB from './components/ComponentB.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <ComponentA />
        <ComponentB />
      </div>
    </>
  );
}

export default App;
