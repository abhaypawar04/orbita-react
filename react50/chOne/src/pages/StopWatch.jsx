import { useEffect, useRef, useState } from "react";

function StopWatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const t1 = useRef(null);

  useEffect(() => {
    if (isRunning) {
      t1.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(t1.current);
    }

    return () => clearInterval(t1);
  }, [isRunning]);
  return (
    <>
      <h1> stopwatch</h1> <hr />
      <h1>{time} sec</h1>
      <button onClick={() => setIsRunning(true)}>start</button>
      <button onClick={() => setIsRunning(false)}>stop</button>
      <button
        onClick={() => {
          setIsRunning(false);
          setTime(0);
        }}
      >
        reset
      </button>
    </>
  );
}

export default StopWatch;
// learn interval // clear interval // useref //
