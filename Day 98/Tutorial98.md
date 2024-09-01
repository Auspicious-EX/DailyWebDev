# Tutorial **98** Notes

## The `useMemo` Hook in React

The `useMemo` hook is a React hook that allows you to optimize the performance of your application by memoizing expensive computations. It returns a memoized value that is recalculated only when its dependencies change, thereby avoiding unnecessary re-computations.

#### **1. What is `useMemo`?**
`useMemo` is used to cache the result of a computation between renders. If you have a calculation or function that is computationally expensive and the result of which doesn't need to change on every render, `useMemo` can help by storing the result and only recalculating it when necessary.

```jsx
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

In this example, `computeExpensiveValue(a, b)` is only recalculated when either `a` or `b` changes. Otherwise, the previous result is returned.

#### **2. When to Use `useMemo`?**
You should use `useMemo` when:
- **Expensive Computations**: If you have a calculation or function that is costly in terms of performance.
- **Referential Equality**: When you need to preserve the referential equality of objects or arrays between renders.
- **Optimization**: When you want to optimize performance by avoiding unnecessary re-renders or re-calculations.

However, you should not overuse `useMemo` as it can add complexity to your code. It should be used in situations where performance is actually a concern.

#### **3. Example Usage**

**Example 1: Caching Expensive Calculations**
```jsx
import React, { useMemo } from 'react';

function ExpensiveComponent({ num }) {
  const expensiveCalculation = (num) => {
    console.log('Calculating...');
    return num * 2;
  };

  const memoizedValue = useMemo(() => expensiveCalculation(num), [num]);

  return (
    <div>
      <p>Calculated Value: {memoizedValue}</p>
    </div>
  );
}
```

In this example, the `expensiveCalculation` function will only be called when the `num` prop changes. The `useMemo` hook ensures that the calculation is cached between renders, improving performance.

**Example 2: Avoiding Re-rendering of Child Components**
```jsx
import React, { useMemo } from 'react';

function ChildComponent({ items }) {
  console.log('ChildComponent Rendered');
  return <ul>{items.map(item => <li key={item}>{item}</li>)}</ul>;
}

function ParentComponent({ data }) {
  const memoizedItems = useMemo(() => data.filter(item => item.includes('React')), [data]);

  return (
    <div>
      <ChildComponent items={memoizedItems} />
    </div>
  );
}
```

Here, `memoizedItems` will only change when the `data` prop changes, which can prevent unnecessary re-renders of the `ChildComponent`.

#### **4. Common Pitfalls**
- **Overuse**: Using `useMemo` everywhere can actually harm performance by adding unnecessary complexity. Only use it for genuinely expensive operations.
- **Incorrect Dependencies**: Ensure that you list all dependencies in the dependency array. Omitting necessary dependencies can lead to stale or incorrect results.
- **Referential Equality**: If `useMemo` is used to avoid creating new objects or arrays on every render, make sure that you're managing dependencies correctly to prevent unnecessary renders.

#### **5. Comparison with `useCallback`**
`useMemo` is similar to `useCallback`. However, while `useMemo` returns a memoized value, `useCallback` returns a memoized function. `useCallback` is typically used when you want to prevent a function from being recreated on every render.

```jsx
const memoizedFunction = useCallback(() => {
  // Your function logic here
}, [dependencies]);
```

### **Summary**
The `useMemo` hook is a powerful tool for optimizing performance in React applications. It allows you to memoize expensive computations and ensure that they are only recalculated when necessary. When used appropriately, `useMemo` can significantly reduce the workload of your components and enhance the user experience.

**Key Points:**
- `useMemo` memoizes the result of a computation to avoid recalculating it on every render.
- Useful for expensive calculations and preventing unnecessary re-renders.
- Should be used selectively to avoid over-complicating the code.
- Ensures referential equality for objects and arrays between renders.