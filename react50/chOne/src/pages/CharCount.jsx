import { useEffect, useRef, useState } from "react";

function CharCount() {
  const [text, setText] = useState("");
  const lastcount = useRef(0);
  const nowCount = text.length;

  useEffect(() => {
    lastcount.current = nowCount;
  }, [nowCount]);
  return (
    <>
      <h1>CharCount</h1>

      <input
        type="text"
        value={text}
        placeholder="enter text"
        name="text"
        onChange={(e) => setText(e.target.value)}
      />

      <h2>now count: {nowCount}</h2>
      <h2>prev count : {lastcount.current}</h2>
    </>
  );
}

export default CharCount;
