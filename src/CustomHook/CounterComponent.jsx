import React, { Fragment } from 'react'
import useCounter from './useCounter'
const CounterComponent = () => {
const { count, increment, decrement, reset } = useCounter()
  return (
    <Fragment>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </Fragment>
  );
}

export default CounterComponent
