import React from "react";
import Hoc from "./Hoc";

const ComponentB = ({ countB, count, setCount }) => {
  return (
    <div>
      <h1>
        {countB}
        {count}
      </h1>
      <button onClick={() => setCount(count + 2)}>Count B</button>
    </div>
  );
};

export default Hoc(ComponentB);
