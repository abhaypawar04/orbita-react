import { useState } from "react";

function Pr1Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Counter</h1>
      <hr />
      <div>
        <h1>Count: {count}</h1>
      </div>
      <div>
        <button onClick={() => setCount((prev) => prev + 1)}>INCREMENT</button>
        <button onClick={() => setCount((prev) => prev - 1)}>DECREMENT</button>
        <button onClick={() => setCount(0)}>RESET</button>
        <hr />
      </div>
    </>
  );
}
export default Pr1Counter;
