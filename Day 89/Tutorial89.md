# Tutorial **89** Notes

## Hooks & State in React

#### What Are React Hooks?

- **React Hooks** are functions that allow you to use state and other React features in functional components. Introduced in React 16.8, hooks enable you to use state, lifecycle methods, and other features without writing class components.

**Key Advantages of Hooks:**
- Simplifies code by allowing the use of state and lifecycle features in functional components.
- Encourages code reuse by separating logic into custom hooks.
- Reduces the need for class components, making the code easier to read and maintain.

#### Types of React Hooks

1. **Basic Hooks**:
   - **`useState`**: Manages state in a functional component.
   - **`useEffect`**: Performs side effects in functional components (e.g., data fetching, subscriptions).
   - **`useContext`**: Accesses the context API to manage global state.

2. **Additional Hooks**:
   - **`useReducer`**: Manages more complex state logic, similar to `useState` but with a reducer function.
   - **`useCallback`**: Returns a memoized callback function that only changes if dependencies change, useful for optimizing performance.
   - **`useMemo`**: Returns a memoized value that only recalculates if dependencies change, also for performance optimization.
   - **`useRef`**: Returns a mutable ref object, useful for accessing DOM elements or persisting values across renders without causing re-renders.
   - **`useImperativeHandle`**: Customizes the instance value that is exposed when using `ref` in parent components.
   - **`useLayoutEffect`**: Similar to `useEffect`, but runs synchronously after all DOM mutations.
   - **`useDebugValue`**: Provides custom labels for debugging custom hooks.

3. **Custom Hooks**:
   - You can create your own hooks to encapsulate and reuse logic across multiple components. Custom hooks are just regular functions whose names start with "use" and may call other hooks.

#### What Is React State?

- **React State** is an object that determines how a component renders and behaves. State is mutable, meaning it can change over time, triggering a re-render of the component. In functional components, state is managed using the `useState` hook.

**Example of State in a Functional Component**:
```jsx
import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <p>Current count: {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    );
}
```
- In this example, `useState(0)` initializes the `count` state with a value of `0`. The `setCount` function is used to update the state, which triggers a re-render of the component.

#### How to Use React Hooks and State

1. **Using `useState`**:
   - Import `useState` from React.
   - Call `useState` with an initial value to create a piece of state.
   - The hook returns an array with the current state and a function to update it.

   **Example**:
   ```jsx
   const [name, setName] = useState('Shubham');
   ```

2. **Using `useEffect`**:
   - Import `useEffect` from React.
   - Call `useEffect` to perform side effects like data fetching or subscribing to services.

   **Example**:
   ```jsx
   useEffect(() => {
       console.log('Component mounted or updated');
   }, [name]); // Dependency array: the effect runs when `name` changes
   ```

3. **Creating Custom Hooks**:
   - Define a function that encapsulates reusable logic.
   - Inside the function, use other hooks like `useState`, `useEffect`, etc.
   - Return values or functions that other components can use.

   **Example**:
   ```jsx
   function useCounter(initialValue = 0) {
       const [count, setCount] = useState(initialValue);

       const increment = () => setCount(count + 1);
       const decrement = () => setCount(count - 1);

       return { count, increment, decrement };
   }
   ```

4. **Managing Complex State with `useReducer`**:
   - Import `useReducer` from React.
   - Define a reducer function that takes the current state and an action, then returns the new state.
   - Call `useReducer` with the reducer function and an initial state.

   **Example**:
   ```jsx
   const initialState = { count: 0 };

   function reducer(state, action) {
       switch (action.type) {
           case 'increment':
               return { count: state.count + 1 };
           case 'decrement':
               return { count: state.count - 1 };
           default:
               return state;
       }
   }

   const [state, dispatch] = useReducer(reducer, initialState);
   ```

### Summary
- **React Hooks** allow functional components to manage state and perform side effects.
- **Types of Hooks** include basic hooks like `useState` and `useEffect`, additional hooks for performance optimization, and custom hooks for reusable logic.
- **React State** is a way to manage dynamic data within components, triggering re-renders when the state changes.
- Hooks like `useState`, `useEffect`, and `useReducer` are commonly used to handle state and side effects in React applications, making the development process more intuitive and efficient.