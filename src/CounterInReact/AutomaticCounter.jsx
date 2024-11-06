import React from 'react'

const AutomaticCounter = () => {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    if (count === 10) return;
    const id = setInterval(() => setCount((pre) =>
    {
      if (pre === 9) {
         clearInterval(id)
      }
    return pre+1
    }
    ), 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <div>
      <h1>Hello Counter</h1>
      <h2>count : {count}</h2>
    </div>
  );
}

export default AutomaticCounter
