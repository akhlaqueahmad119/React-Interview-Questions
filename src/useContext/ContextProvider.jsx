import { useState } from "react"
import MyContext from "./CreateContext";
const ContextProvider = ({children}) => {
const [count,setCount] = useState(0)
  return (
    <>
      <MyContext.Provider value={{ count, setCount }}>
        {children}
      </MyContext.Provider>
    </>
  );
}
export default ContextProvider