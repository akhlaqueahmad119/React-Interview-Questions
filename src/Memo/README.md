
useMemo is a React hook that helps you make your app faster by remembering the result of a calculation. It only redoes the calculation if certain values change.

For example, if you have a function that takes a long time to run, like sorting a big list, useMemo will keep the result from the last time the function ran and only recalculate it if something important changes. This way, your app doesn't waste time doing the same work over and over.



To prevent from unnecessary rerender, unnecessary function call, unwanted function call 
usememo return memoise value and useCallBack return memoise function