import React from "react";
import ChildOne from "./ChildOne";
export default function ParentOne({ children }) {
  const [count, setCount] = React.useState(1);
  const handleClick = () => {
    setCount(count + 1);
  };
  console.log("Akhlaque");
  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick={handleClick}>Click Here To Increase</button>
      {children}
    </>
  );
}
