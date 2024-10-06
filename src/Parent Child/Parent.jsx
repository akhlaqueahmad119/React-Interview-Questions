import React from "react";
import Child from "./Child";
export default function Parent() {
  const [count, setCount] = React.useState(1);
  const handleClick = () => {
    setCount(count + 1);
  };
  console.log("Akhlaque");
  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick={handleClick}>Click Here To Increase</button>
      <button onClick={() => setCount(1)}>Reset</button>
      <button onClick={() => setCount(5)}>Click for 5</button>
      <Child />
    </>
  );
}
