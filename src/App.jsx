import React,{createContext, lazy,Suspense} from "react";
import "./App.css";
import ParentOne from "./Optimization/ParentOne";
import ChildOne from "./Optimization/ChildOne";
import GrandChild from "./Optimization/GrandChild";
import ParentThree from "./Incorrect Optimization/ParentThree";
import ContextProvider from "./useContext/ContextProvider";
import TextContext from "./useContext/TextContext";
import ReduxComponent from "./Redux/ReduxComponent";
import UserList from "./Redux-Thunk/UserList";
import AutomaticCounter from "./CounterInReact/AutomaticCounter";
import CounterButton from "./CounterInReact/CounterButton";
// import Parent from "./Parent Child/Parent";
// import UseEffect from "./useEffect/UseEffect.jsx";
// import Memo from "./Memo/Memo.jsx";
 import UseRef from "./UseRef/UseRef.jsx";
import UserList1 from "./CustomHook/UserList1.jsx";
// import Parent from "./useCallBack/Parent.jsx";
// import CounterComponent from "./CustomHook/CounterComponent.jsx";
// import ObjectUseState from "./Immutable State/ObjectUseState.jsx";
// import LazyLoading from "./LazyLoading/LazyLoading.jsx";
// import Parent from "./Hoc/Parent.jsx";
// const LazyLoading = lazy(() => import('./LazyLoading/LazyLoading'));
// const Parent = lazy(() => import("./Parent Child/Parent"));
// import UseReducers from "./useReducer/UseReducers.jsx";
// import UseReducer from "./useReducer/UseReducer.jsx";

function App() {

  return (
    <>
      <h1>Learning React</h1>
      <UserList1/>
      {/* <UseReducer />
      <UseReducers /> */}

      {/* <UseEffect /> */}
      {/* <Memo /> */}
      {/* <UseRef /> */}
      {/* <Parent/> */}
      {/* <Parent/> */}
      {/* <CounterComponent/> */}
      {/* <UseState/> */}
      {/* <ObjectUseState/> */}
      {/* <Suspense fallback={<p>Loading......</p>}>
        <LazyLoading />
      </Suspense> */}
      {/* <Suspense fallback={<p>Loading..............</p>}>
        <Parent />
      </Suspense> */}
      {/* <GrandChild/> */}
      {/* <ParentThree/> */}
      {/* 
       <ContextProvider>
        <TextContext/>
       </ContextProvider> 
      {/* <ReduxComponent/> */}
      {/* <ContextProvider>
        <TextContext />
      </ContextProvider>
      <UserList /> */}
      {/* <AutomaticCounter/>
      <CounterButton/> */}
    </>
  );
}

// const render = () => {
//   ReactDOM.render(App(), document.getElementById("root"));
// };

export default App;
