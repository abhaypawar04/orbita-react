import { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + action.payload;

    case "decrement":
      return state - action.payload;

    case "reset":
      return initialState;

    default:
      return state;
  }
};

//-------------------------------------------------------------------
function ReducerPayload() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1>Counter using UseReducer</h1>
      <h2>count : {state}</h2>
      <button onClick={() => dispatch({ type: "increment", payload: 5 })}>
        increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 5 })}>
        decrement
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </>
  );
}
//----------------------------------------------------------------------

export default ReducerPayload;
