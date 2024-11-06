import React from "react";

function UseRef() {
  // const ref = React.useRef();
  const inputRef = React.useRef(null);
  const [count, setCount] = React.useState(0);
  const prevCountRef = React.useRef(0);
  console.log(prevCountRef, "n");
  React.useEffect(() => {
    // Store the previous count value
      console.log("Previous count: ", prevCountRef.current);
      prevCountRef.current = count;
      console.log("Current count: ", count);
  }, [count]);

  React.useEffect(() => {
    // Focus the input element when the component mounts
    inputRef.current.focus();
  }, []);

  return (
    <>
      <input ref={inputRef} type="text" placeholder="Focus on mount" />
      <p>Current count: {count}</p>
      <p>Previous count: {prevCountRef.current}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>;
    </>
  );
}

export default UseRef;
