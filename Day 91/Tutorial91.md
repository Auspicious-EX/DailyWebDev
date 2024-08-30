# Tutorial **91** Notes

## The `useRef` Hook in React

### What is `useRef`?

The `useRef` hook in React is a powerful tool that allows you to persist values across renders without causing a re-render when the value changes. It can be thought of as a way to directly access and manipulate DOM elements in functional components.

### Key Use Cases of `useRef`:

1. **Accessing DOM Elements:**
   - You can use `useRef` to directly access a DOM element. This is especially useful when you need to interact with the DOM element outside of the typical React data flow (e.g., focusing an input field).

2. **Persisting Mutable Values:**
   - `useRef` can be used to store a mutable value that doesn't cause a re-render when updated. This is useful for storing things like timers, counters, or previous values.

3. **Storing Previous State:**
   - `useRef` can be used to keep track of the previous state of a variable across renders.

### Syntax:

```jsx
const refContainer = useRef(initialValue);
```

- `initialValue` is the initial value you want to store in the `ref`. If no value is provided, it defaults to `null`.
- `useRef` returns a mutable object with a `.current` property.

### Example 1: Accessing DOM Elements

```jsx
import React, { useRef } from 'react';

function TextInputWithFocusButton() {
    const inputRef = useRef(null);

    const focusInput = () => {
        inputRef.current.focus();
    };

    return (
        <div>
            <input ref={inputRef} type="text" />
            <button onClick={focusInput}>Focus the input</button>
        </div>
    );
}

export default TextInputWithFocusButton;
```

### Example 2: Persisting Mutable Values

```jsx
import React, { useRef, useState, useEffect } from 'react';

function Timer() {
    const [count, setCount] = useState(0);
    const countRef = useRef(count);

    useEffect(() => {
        countRef.current = count; // Update the ref each time the count changes
    });

    const handleAlert = () => {
        setTimeout(() => {
            alert(`Count: ${countRef.current}`);
        }, 3000);
    };

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={handleAlert}>Show Alert in 3 seconds</button>
        </div>
    );
}

export default Timer;
```

### Important Points:

- **No Re-rendering:** Updating the `.current` property of a `useRef` object does not trigger a re-render of the component.
  
- **Storing DOM Elements:** `useRef` is perfect for storing references to DOM elements without re-rendering the component when the reference updates.

- **Lifecycle:** The `useRef` persists through the entire lifecycle of the component, even across re-renders, making it ideal for cases where you need a stable reference.

### Conclusion:

The `useRef` hook is a versatile and efficient way to manage direct DOM interactions and mutable values in React. By understanding how and when to use `useRef`, you can optimize your React components for better performance and usability.