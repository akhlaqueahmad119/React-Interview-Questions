import React from "react";
// import ReactDOM from "react-dom/client";
// let count = 1;
// function setCount(newSet) {
//   count = newSet;
//   // render();
// }
function App1() {
  const [count, setCount] = React.useState(1);
  const handleClick = () => {
    setCount(count + 1);
  };
  console.log("Akhlaque")
  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick={handleClick}>Click Here To Increase</button>
      <button onClick={() => setCount(1)}>Reset</button>
      <button onClick={() => setCount(5)}>Click for 5</button>
    </>
  );
}

export default App1;

// function render() {
//   ReactDOM.createRoot(document.getElementById("root")).render(<App1 />);
// }
