import React from "react";

function UseRef() {
  // const ref = React.useRef();
  const inputRef = React.useRef(null);
  const [count, setCount] = React.useState(0);
  const prevCountRef = React.useRef({});
  console.log(prevCountRef, "n");
  React.useEffect(() => {
    // Store the previous count value
    console.log(count);
    prevCountRef.current = count;
    console.log("Akhlaque");
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
