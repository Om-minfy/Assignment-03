import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Classic Counter</h2>
      <h1>{count}</h1>
      <button onClick={decrement} style={{ marginRight: "10px" }}>
        - Decrement
      </button>
      <button onClick={increment}>+ Increment</button>
    </div>
  );
}

export default Counter;
