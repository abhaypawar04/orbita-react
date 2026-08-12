import { useState } from "react";

function Counter1() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>this is a counter app</h1>
      <h1>count : {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <button onClick={() => setCount((prev) => prev - 1)}>decrement</button>
      <button onClick={() => setCount(0)}>reset</button>
    </>
  );
}

export default Counter1;
