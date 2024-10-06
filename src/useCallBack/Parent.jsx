import React, { useCallback } from 'react'
import Child from './Child';

const Parent = () => {
  const [count, setCount] = React.useState(0);
  const [counter, setCounter] = React.useState(2);
  const fun = useCallback(() => {
   console.log("Akhlaque")
 },[counter])
  return (
    <div>
      <h1>UseCallBack</h1>
      <Child counter={counter} fun={fun} setCounter={setCounter} />
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Count</button>
    </div>
  );
}

export default Parent
