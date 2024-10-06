import React, { useState } from 'react'

const ObjectUseState = () => {
  const initialState = {
    firstName: "Akhlaque",
    lastName : "Ahmad"
  }
  const [obj, setObj] = useState(initialState);

  const handleClick = () => {
    // obj.firstName = "Aftab"
    // obj.lastName = "Alam"
    // setObj(obj)
    let newObj = { ...obj }
    newObj.firstName = "Aftab"
    newObj.lastName = "Alam"
    setObj(newObj)
  }
  return (
    <div>
      <button onClick={handleClick}> {obj.firstName} {obj.lastName }</button>
    </div>
  )
}

export default ObjectUseState
