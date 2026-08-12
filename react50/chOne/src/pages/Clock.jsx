import { useEffect, useState } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <>
      <h1>clock</h1>
      <p>{time.toLocaleTimeString()}</p>
    </>
  );
}
export default Clock;
