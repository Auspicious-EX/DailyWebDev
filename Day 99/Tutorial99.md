# Tutorial **99** Notes

## The `useCallback` Hook in React

The `useCallback` hook is used to memoize functions in React. This is particularly useful when passing functions as props to child components that rely on reference equality to prevent unnecessary re-renders.

#### **1. What is `useCallback`?**
`useCallback` returns a memoized version of the callback function that only changes if one of the dependencies has changed. It’s similar to `useMemo`, but instead of caching the result of a computation, it caches the function itself.

```jsx
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
```

In this example, `memoizedCallback` will only be recreated if `a` or `b` changes.

#### **2. When to Use `useCallback`?**
`useCallback` is useful when:
- **Preventing Unnecessary Re-renders**: If you pass functions to child components that rely on reference equality (`React.memo`), `useCallback` ensures that the same function reference is passed between renders, preventing the child from re-rendering.
- **Performance Optimization**: In components where performance is critical, `useCallback` can prevent the recreation of functions that are expensive to create.

#### **3. Example Usage**

**Example 1: Memoizing Event Handlers**
```jsx
import React, { useState, useCallback } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <p>{count}</p>
    </div>
  );
}
```

Here, `increment` is memoized and will only change if `count` changes. This prevents the `increment` function from being recreated on every render.

**Example 2: Passing Memoized Functions to Child Components**
```jsx
import React, { useState, useCallback } from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <ChildComponent onClick={handleClick} />
      <p>{count}</p>
    </div>
  );
}
```

If `ChildComponent` is memoized using `React.memo`, it will only re-render if the `handleClick` function changes, which will only happen if `count` changes.

#### **4. Common Pitfalls**
- **Overuse**: Similar to `useMemo`, overusing `useCallback` can lead to unnecessary complexity without significant performance gains. Use it only when you have identified performance issues.
- **Incorrect Dependencies**: Failing to include all necessary dependencies can lead to bugs. Ensure all variables that are used inside the callback are listed in the dependency array.

#### **5. Comparison with `useMemo`**
While `useCallback` is used to memoize functions, `useMemo` is used to memoize values. Use `useCallback` when you want to prevent a function from being recreated on every render, and use `useMemo` when you want to prevent a value from being recomputed.

### **Summary**
The `useCallback` hook is a valuable tool in React for optimizing performance by memoizing functions. It helps prevent unnecessary re-renders in child components that rely on stable function references. However, it should be used judiciously to avoid overcomplicating your code.

**Key Points:**
- `useCallback` memoizes functions to avoid recreating them on every render.
- Useful for preventing unnecessary re-renders in child components that depend on function references.
- Ensure correct dependencies are provided to avoid bugs.
- Best used when passing callbacks to memoized child components.