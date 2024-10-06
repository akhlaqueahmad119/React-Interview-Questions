import { useState } from "react"
import CreateContext from "./CreateContext"
const ContextProvider = ({children}) => {
const [count,setCount] = useState(0)
  return (
    <>
      <CreateContext.Provider value={{ count, setCount }}>
        {children}
      </CreateContext.Provider>
    </>
  );
}
export default ContextProvider