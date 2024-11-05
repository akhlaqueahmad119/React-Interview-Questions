<!-- UseEffect Definition -->

UseEffect is a hook in react which is used to perform side Effect in functional Component.
eg :- data fatching,manually changing the DOM,
timer, subscription.

It takes two argument : a callback function containing the side effect code and an optional dependency ([])
that determine when the effect should re-run.

<!-- cleanup function  -->

the cleanup function call when the component will unmount or the useEffect re-run.

Note : 
Cleanup function call at the time of rerender and at the time of unmounting.
It calls only two time

eg :-
 function ExampleComponent() {
  const [count, setCount] = useState(0);

  // useEffect with an empty dependency array - runs once after initial render
  useEffect(() => {
    console.log('Component mounted');

    // Cleanup function - runs on unmount
    return () => {
      console.log('Component will unmount');
    };
  }, []); 


