import React from "react";

export const ChildThree = ({children, name}) => {
  console.log("ChildThree");
  return (
    <div>
       {children} : {name}
      <h1>ChildThree Component</h1>
    </div>
  );
};

export const MemoizationChildThree = React.memo(ChildThree)
