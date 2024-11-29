import React, { useContext } from 'react'
import MyContext from "./CreateContext";

const TextContext = () => {
  const { count, setCount } = useContext(MyContext);
  console.log(count)
  return (
    <div>
      {count}
      <button onClick={() => setCount(count+1)}>Click Here</button>
    </div>
  )
}

export default TextContext
