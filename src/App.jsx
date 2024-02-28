import { useState } from 'react';

import './App.css';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>New App Template</h1>
      <div className="card">
        <button onClick={() => setCount((prev) => prev + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}
