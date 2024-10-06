import React from 'react'

const ChildFour = ({ name }) => {
  console.log("childFour Render")
  const date = new Date()
  return <div>Hi : {name}. It is {date.getHours()}: {date.getMinutes()} : {date.getSeconds() }</div>;
}

export default React.memo(ChildFour);
