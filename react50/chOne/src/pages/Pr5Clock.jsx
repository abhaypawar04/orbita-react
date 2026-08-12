import { useEffect, useState } from "react"; //c

function Pr5Clock() {
  const [time, setTime] = useState(new Date()); //c

  useEffect(() => {
    const t1 = setInterval(() => {
      setTime(new Date());
    }, 1000); //c

    return () => clearInterval(t1);
  }, []);
  return (
    <>
      <h1>clock</h1> <hr />
      <h2>{time.toLocaleTimeString()}</h2>
    </>
  );
}
export default Pr5Clock;

// all clear
// learn to setInterval // clearInterval // useEffect more effectively
// next phase to make a functional stopwatch using this all concepts //
