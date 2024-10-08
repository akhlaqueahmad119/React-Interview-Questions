import React from 'react'

const AutomaticCounter = () => {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    if (count === 10) return;
    const id = setTimeout(() => setCount((pre) => pre + 1), 1000);
    return () => clearTimeout(id);
  }, [count]);
  return (
    <div>
      <h1>Hello Counter</h1>
      <h2>count : {count}</h2>
    </div>
  );
}

export default AutomaticCounter
