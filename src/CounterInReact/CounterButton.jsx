import React from "react";
const CounterButton = () => {
  const [count, setCount] = React.useState(0);
  const [id, setId] = React.useState(null);
  function handleClick() {
    const id = setInterval(() => setCount((pre) => pre + 1), 1000);
    setId(id)
  }
  if (count === 20) clearInterval(id);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleClick}>Click Here</button>
    </>
  );
};

export default CounterButton;
