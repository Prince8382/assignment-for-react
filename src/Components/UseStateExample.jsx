import { useState } from "react";

export default function UseStateExample() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>useState Counter Example</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
