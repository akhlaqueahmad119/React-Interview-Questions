import React from "react";
export default function UseReducers() {
  const initialVal = {
    count: 0,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "increase":
        return { count: state.count + 1 };

      case "decrease":
        return { count: state.count - 1 };
      case "reset":
        return initialVal;
      default:
        return state;
    }
  };
  const [state, dispatch] = React.useReducer(reducer, initialVal);
  return (
    <div>
      <h1>{state?.count}</h1>
      <button onClick={() => dispatch({ type: "increase" })}>
        Click Here To Increase
      </button>
      <br></br>
      <button onClick={() => dispatch({ type: "decrease" })}>
        Click Here To Decrease
      </button>
      <br></br>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}
