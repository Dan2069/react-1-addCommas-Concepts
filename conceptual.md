### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
React is a javascript framework that uses components to build applications. We would use this whenever we have complex projects that we need to simplify for readability.

- What is Babel?
Babel is a tool that converts the EMCAScript backwards to compatible versions of JS in current or older browsers.

- What is JSX?
JSX is an acryonym that means JASON Syntax, Allows us to revert to regular JS while writing in React

- How is a Component created in React?
Components are created with separte js files and can be used as modules to be implemented in the main app that's rendered.

- What are some difference between state and props?
Props are the properties given to a component that will be inherited and possibly sent down to the child component.
States are stored values of a component that doesn't transfer anywhere and is updated/rendered frequently

- What does "downward data flow" refer to in React?
The downward data flow is passing in values or functions of the parent components to the child components through its props.
- What is a controlled component?
Controlled Components are components that React is able to keep track of it's states and stored values.
- What is an uncontrolled component?
Uncontrolled components are components that React can't interfere with and store in it's framework. It usually messed with the DOM itself rather than entrusting the stored values to React.
- What is the purpose of the `key` prop when rendering a list of components?
The purpose of the key prop is the give us the ability to control teh component instances if the props were somehow to change overtime.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
Using an array index for a key prop is a poor choice because the array may not be in the order you want. The indexes may not give you the exact reference you want, but with key it is more controlled and we're able to reference the correct one without worrying about problematic outcomes.

- Describe useEffect.  What use cases is it used for in React components?
useEffect allows us to render the state given the function, and allows us to only render it once to update the page unless a listed dependecy attached to it changes. If the dependency changes, then the rerender function will re render.
- What does useRef do?  Does a change to a ref value cause a rerender of a component?
useRef allows values to persist between renders

- When would you use a ref? When wouldn't you use one?
You would usually use a ref whenever there are elements that React cant store values such as a video or or DOM elements.

- What is a custom hook in React? When would you want to write one?
Custom hooks are a mechanism to reuse stateful logic. You'd want to write one whenever you have repeated logic within components that you'd want to reuse instead of rewritting and lowering readability.
