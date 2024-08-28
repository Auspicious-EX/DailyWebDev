# Tutorial **90** Notes

## The `useEffect` Hook in React

#### What Is `useEffect`?

- The `useEffect` hook in React allows you to perform side effects in functional components. Side effects are operations that occur outside the normal flow of data to UI, such as data fetching, updating the DOM, or setting up subscriptions.

#### Why Use `useEffect`?

- React components can re-render many times, and certain operations should be performed at specific points in a component's lifecycle. The `useEffect` hook provides a way to manage these operations, similar to lifecycle methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` in class components.

#### How `useEffect` Works

- **Basic Usage**: 
  The `useEffect` hook takes two arguments:
  1. A function where you can perform side effects.
  2. An optional dependency array that determines when the effect should re-run.

  **Example**:
  ```jsx
  import React, { useState, useEffect } from 'react';

  function ExampleComponent() {
      const [count, setCount] = useState(0);

      useEffect(() => {
          document.title = `You clicked ${count} times`;
      }, [count]); // Dependency array

      return (
          <div>
              <p>You clicked {count} times</p>
              <button onClick={() => setCount(count + 1)}>Click me</button>
          </div>
      );
  }
  ```

- **Dependency Array**:
  - The second argument to `useEffect` is an array of dependencies. The effect runs only when one of these dependencies changes.
  - If the dependency array is empty (`[]`), the effect runs only once after the initial render, similar to `componentDidMount`.
  - If no dependency array is provided, the effect runs after every render.

  **Example**:
  ```jsx
  // This effect runs only once after the initial render
  useEffect(() => {
      console.log('Component mounted');
  }, []);
  ```

- **Cleaning Up Side Effects**:
  - You can return a function from the `useEffect` hook to clean up side effects. This is useful for tasks like clearing timers, cancelling network requests, or unsubscribing from events.

  **Example**:
  ```jsx
  useEffect(() => {
      const timer = setTimeout(() => {
          console.log('Timer triggered');
      }, 3000);

      return () => clearTimeout(timer); // Cleanup function
  }, []);
  ```

#### Common Use Cases for `useEffect`

1. **Data Fetching**:
   - Fetch data from an API when the component mounts.

   ```jsx
   useEffect(() => {
       fetch('https://api.example.com/data')
           .then(response => response.json())
           .then(data => setData(data));
   }, []); // Empty array ensures this runs only once
   ```

2. **Event Listeners**:
   - Add an event listener on mount and remove it on unmount.

   ```jsx
   useEffect(() => {
       const handleResize = () => console.log('Window resized');

       window.addEventListener('resize', handleResize);

       return () => window.removeEventListener('resize', handleResize); // Cleanup on unmount
   }, []);
   ```

3. **Subscriptions**:
   - Subscribe to a data source when the component mounts and unsubscribe when it unmounts.

   ```jsx
   useEffect(() => {
       const subscription = subscribeToData((data) => setData(data));

       return () => subscription.unsubscribe(); // Cleanup on unmount
   }, []);
   ```

#### Key Points to Remember

- **Avoid infinite loops**: Be careful when updating state within `useEffect`, as this can cause infinite loops if not handled properly.
- **Multiple effects**: You can use multiple `useEffect` hooks in a single component, each handling different side effects.
- **Performance considerations**: The dependency array helps optimize performance by preventing unnecessary effect re-runs.

#### Summary
- The `useEffect` hook is essential for managing side effects in functional React components.
- It offers a way to perform actions at specific points in the component lifecycle, such as after rendering or when dependencies change.
- By understanding how to use the dependency array and cleanup functions, you can effectively manage complex side effects like data fetching, event listeners, and subscriptions in your React applications.