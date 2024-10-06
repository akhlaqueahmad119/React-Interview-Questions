import React, { Fragment } from 'react'
import UseCounter from './UseCounter'
const CounterComponent = () => {
const { count, increment, decrement, reset } = UseCounter()
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
