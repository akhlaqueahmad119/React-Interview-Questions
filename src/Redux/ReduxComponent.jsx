import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from './Action'
const ReduxComponent = () => {
  const data = useSelector((state) => state)
  const dispatch = useDispatch()
  console.log(data)
  const handleClick = () => {
    dispatch(increment(1))
  }
    const handleClick1 = () => {
      dispatch(decrement(1));
    };
  return (
    <>
      <h1>{data}</h1>
      <button onClick={handleClick}>Click Here to Increment</button>
      <button onClick={handleClick1}>Click Here to Decrement</button>
    </>
  );
}

export default ReduxComponent
