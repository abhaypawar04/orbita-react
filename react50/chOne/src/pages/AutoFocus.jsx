import { useRef } from "react";

function AutoFocus() {
  const ref1 = useRef();

  const handleFocus = () => {
    ref1.current.focus();
  };
  return (
    <>
      <h1>focus here app</h1>
      <hr />
      <input
        type="text"
        name="ref"
        ref={ref1}
        placeholder="click button to focus"
      />
      <button onClick={() => handleFocus()}>click me</button>
    </>
  );
}

export default AutoFocus;
