import React from "react";
export default function UseEffect() {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    const intervalId = setTimeout(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    console.log(intervalId, "intervalId");
    // Cleanup the interval on component unmount
    return () => {
      clearInterval("Akhlaque", intervalId);
    };
  }, []);

  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Click Here</button>
    </>
  );
}
