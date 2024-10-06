import React from 'react'

const UseCounter = (inititalVal = 0) => {
  console.log(React)
  const [count, setCount] = React.useState(0)
  
  const increment = () => {
    setCount(count+1)
  }
  const decrement = () => {
    setCount(count-1)
  }
  const reset = () => {
    setCount(inititalVal)
  }
  return {count, decrement, increment,reset}
}

export default UseCounter
