the state hooks set function is called which flags the parent component needing a update during the render phase react will first go through the component tree and indentify the flagged component it see the parent component is the only component that needs an update
react use createElement to convert the components jsx into a react element


JSX is the syntax used in React to write UI components (e.g., <div>Hello</div>).
During the rendering process, React uses an internal method called createElement. This method takes the JSX you wrote (e.g., <div>Hello</div>) and converts it into a React element, which is an internal representation of the component.
React elements are not actual DOM elements; they are lightweight objects that describe what the DOM should look like. React uses these elements to efficiently compare changes in the UI (this process is called reconciliation).


When the setState function is called, React marks the component as needing an update.
React traverses the component tree and identifies which components should re-render.
It only updates the necessary components (in this case, the parent).
React uses createElement to transform the JSX into React elements, which describe what the UI should look like after the state change.


The createElement function returns a React element (a lightweight JavaScript object) that represents the structure of the UI.
