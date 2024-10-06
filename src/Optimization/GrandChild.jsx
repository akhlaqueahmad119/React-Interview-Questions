import React, { useState } from 'react'
import ParentOne from './ParentOne';
import ChildOne from './ChildOne';

const GrandChild = () => {
  const [countOne, setCountOne] = useState(0)
  return (
    <>
      <button onClick={()=>setCountOne((pre) => pre + 1)}>Click Grand Here</button>
      {countOne}
      <ParentOne countOne={countOne}>
        <ChildOne />
      </ParentOne>
    </>
  );
}

export default GrandChild
