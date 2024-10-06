import React, { memo } from 'react'

const Child = ({counter,fun,setCounter}) => {
  console.log("Child Component Rerendering !!")
  return (
    <div>
      <h3>Child Component {fun()}</h3>
      <h2>{counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>Counter</button>
    </div>
  );
}

export default memo(Child)
