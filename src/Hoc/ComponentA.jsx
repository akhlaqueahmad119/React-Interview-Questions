import React from 'react'
import Hoc from './Hoc';

const ComponentA = ({title,count,setCount }) => {
  return (
    <div>
      <h1>{title}{count}</h1>
      <button onClick={() => setCount(count+1)}>Count A</button>
    </div>
  );
}

export default Hoc(ComponentA);
