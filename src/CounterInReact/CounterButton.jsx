import React from "react";
const CounterButton = () => {
  const [count, setCount] = React.useState(0);
  function handleClick() {
    const id = setInterval(() =>
      setCount((pre) => {
        if (pre === 9) {
          console.log(pre)
          clearInterval(id);
        }
        return pre+1
      }), 1000);
  }
  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleClick}>Click Here</button>
    </>
  );
};

export default CounterButton;
