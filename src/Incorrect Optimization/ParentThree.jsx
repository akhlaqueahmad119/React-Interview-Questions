import React from "react";
import { MemoizationChildThree } from "./ChildThree";
import ChildFour from "./ChildFour";
export default function ParentThree() {
  const [count, setCount] = React.useState(1);
  const [name, setName] = React.useState("Akhlaque");

  const handleClick = () => {
    setCount(count + 1);
  };
  console.log("Akhlaque");
  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick={handleClick}>Click Here To Increase</button>
      <button onClick={() => setName("Ahmad")}>Change Name</button>
      {/* <MemoizationChildThree name={name}>
        <strong>hello</strong>
      </MemoizationChildThree> */}
      <ChildFour name={name} />
    </>
  );
}
