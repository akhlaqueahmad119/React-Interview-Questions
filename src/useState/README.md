useState :

useState takes an initial state value as an argument and returns an array with two elements: the current state value and a function to update that state.

On first index there is state variable or we can say default value and on second index there function which is used to manupulate the state variable.

-const [state, setState] = useState(initialState);
state: state variable
setState :setter function

- initialState: The initial value of the state variable. It can be any data type (string, number, array, object, etc.).



  <!-- Important Notes -->

  <!-- First time render -->
  after render if we  try to change state variable by using function, If it doesn't change means previous value is equal to current value then it doesn't not rerender.

  <!-- rerender -->

  If we increse the value of state variable from 1 suppose state variable is 5 and  we have another button if we click that button the state variable will be 5. if we click then it  rerender for only one time if we click again it will not rerender.


