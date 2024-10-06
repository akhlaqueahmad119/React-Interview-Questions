import React from 'react'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'

const Parent = () => {
  let title = "CountA :"
      let countB = "CountB :";

  return (
    <>
      <ComponentA title={title} />
      <ComponentB countB={countB} />
    </>
  );
}

export default Parent
