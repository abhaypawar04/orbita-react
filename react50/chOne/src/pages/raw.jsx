import { useReducer } from "react"; //cc

const initialState = {
  step: 1,
  name: "",
  email: "",
  city: "",
  country: "",
};
//cc

const formReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };

    case "NEXT_STEP":
      return {
        ...state,
        step: state.step + 1,
      };

    case "PREV_STEP":
      return {
        ...state,
        step: state.step - 1,
      };

    case "RESET":
      return initialState;

    default:
      return state;
  }
};

function MultiStepForm() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleSubmit = () => {
    alert("Form Submitted!");

    console.log(state);

    dispatch({ type: "RESET" });
  };

  return (
    <div
      style={{
        width: "400px",
        margin: "30px auto",
        padding: "20px",
        border: "1px solid black",
        borderRadius: "10px",
      }}
    >
      <h2>Multi-Step Form</h2>

      <h3>Step {state.step} of 3</h3>

      {/* Step 1 */}
      {state.step === 1 && (
        <>
          <div>
            <label>Name</label>
            <br />
            <input
              type="text"
              value={state.name}
              onChange={(e) =>
                dispatch({
                  type: "UPDATE_FIELD",
                  field: "name",
                  value: e.target.value,
                })
              }
            />
          </div>

          <br />

          <div>
            <label>Email</label>
            <br />
            <input
              type="email"
              value={state.email}
              onChange={(e) =>
                dispatch({
                  type: "UPDATE_FIELD",
                  field: "email",
                  value: e.target.value,
                })
              }
            />
          </div>

          <br />

          <button
            onClick={() => dispatch({ type: "NEXT_STEP" })}
            disabled={!state.name || !state.email}
          >
            Next
          </button>
        </>
      )}

      {/* Step 2 */}
      {state.step === 2 && (
        <>
          <div>
            <label>City</label>
            <br />
            <input
              type="text"
              value={state.city}
              onChange={(e) =>
                dispatch({
                  type: "UPDATE_FIELD",
                  field: "city",
                  value: e.target.value,
                })
              }
            />
          </div>

          <br />

          <div>
            <label>Country</label>
            <br />
            <input
              type="text"
              value={state.country}
              onChange={(e) =>
                dispatch({
                  type: "UPDATE_FIELD",
                  field: "country",
                  value: e.target.value,
                })
              }
            />
          </div>

          <br />

          <button onClick={() => dispatch({ type: "PREV_STEP" })}>Back</button>

          <button
            onClick={() => dispatch({ type: "NEXT_STEP" })}
            disabled={!state.city || !state.country}
            style={{ marginLeft: "10px" }}
          >
            Next
          </button>
        </>
      )}

      {/* Step 3 */}
      {state.step === 3 && (
        <>
          <h3>Review Your Details</h3>

          <p>
            <strong>Name:</strong> {state.name}
          </p>

          <p>
            <strong>Email:</strong> {state.email}
          </p>

          <p>
            <strong>City:</strong> {state.city}
          </p>

          <p>
            <strong>Country:</strong> {state.country}
          </p>

          <button onClick={() => dispatch({ type: "PREV_STEP" })}>Back</button>

          <button onClick={handleSubmit} style={{ marginLeft: "10px" }}>
            Submit
          </button>
        </>
      )}
    </div>
  );
}

export default MultiStepForm;
