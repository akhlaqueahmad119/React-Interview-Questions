import React from 'react';
export default function UseReducer() {
  let initialState = 0;
  const reducer = (state, action) => {
    switch (action.type) {
      case 'increase':
        return  state + 1;

      case 'decrease':
        return state - 1;
      case 'reset':
        return initialState;
      default:
        return state;
    }
  };
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={() => dispatch({ type: 'increase' })}>
        Click Here To Increase
      </button>
      <br></br>
      <button onClick={() => dispatch({ type: 'decrease' })}>
        Click Here To Decrease
      </button>
      <br></br>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}
