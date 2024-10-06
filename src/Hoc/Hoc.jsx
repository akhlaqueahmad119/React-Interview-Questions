import React from 'react'

const Hoc = (Component) => {
  console.log(Component,"Component")
  
  const data = (props) => {
  const [count, setCount] = React.useState(0);
    return <Component count={count} setCount={setCount}{...props} />
  }
  return data
}

export default Hoc
