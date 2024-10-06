
// import { useCallback, useMemo, useState } from "react";

// const Memo = () => {
//     const [count, setCount] = useState(0)
//     const [newCount,setNewCount] = useState(0)
//     const handleClick1 = () => {
//       setCount(count+1)
//     }
//     const handleClick2 = () => {
//       setNewCount(newCount + 1);

//     };
//     const data = useMemo(() => {
//       console.log("Akhlaque");
//       let i = 0;
//       while (i < 1000000000) i++;
//       return count % 2 === 0 ? "even" : "odd";
//     },[count]);

//     return (
//       <div>
//         <h1>
//           {data} : {count}
//         </h1>
//         <button onClick={handleClick1}>Button1</button>
//         <button onClick={handleClick2}>Button2</button>
//         <h1>Newcount : {newCount}</h1>
//       </div>
//     );
//   };
 
// export default Memo;

import React, { useMemo } from "react";

const Memo = () => {
  const [count, setCount] = React.useState(0);
  const [counter, setCounter] = React.useState(0);

  const handleClick = useMemo( () => {
    console.log("object")
    let i=0;
    while (i < 1000000000) i++;
    return counter % 2 === 0 ? "even" : "odd";
  },[counter])

  return (
    <div>
      <h1>Use Memo</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Count</button>
      <h2>
        {handleClick}:
         {counter}
      </h2>
      <button onClick={() => setCounter(counter + 1)}>Counter</button>
    </div>
  );
};

export default Memo;

