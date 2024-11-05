import React from "react";
export default function UseEffect() {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount === 9) {
          clearInterval(intervalId);
        }
        return prevCount + 1;
      });
    }, 1000);
    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <h1>Count : {count}</h1>
    </>
  );
}
