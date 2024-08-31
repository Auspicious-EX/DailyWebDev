# Tutorial **94** Notes

Handling events in React is similar to handling events in plain JavaScript but with some key differences due to the way React handles the virtual DOM and event delegation. Here's an overview of how to handle events in React:

### **1. Basic Event Handling**

In React, events are named using camelCase instead of lowercase. For example, `onclick` becomes `onClick`, and `onmouseover` becomes `onMouseOver`. You pass a function as the event handler rather than a string.

**Example: Handling a Button Click**
```jsx
import React from 'react';

function App() {
  const handleClick = () => {
    alert('Button was clicked!');
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
```
In this example, the `handleClick` function will be called whenever the button is clicked.

### **2. Passing Arguments to Event Handlers**

You can pass arguments to the event handler by using an arrow function or the `bind` method.

**Example: Passing Arguments**
```jsx
import React from 'react';

function App() {
  const handleClick = (message) => {
    alert(message);
  };

  return (
    <div>
      <button onClick={() => handleClick('Hello, World!')}>Click Me</button>
    </div>
  );
}

export default App;
```
Here, the `handleClick` function receives a `message` argument when the button is clicked.

### **3. Synthetic Events**

React uses a concept called **Synthetic Events** to wrap the browser's native event system. This provides consistent behavior across different browsers.

**Example: Accessing Event Properties**
```jsx
import React from 'react';

function App() {
  const handleClick = (event) => {
    console.log('Button clicked:', event);
    console.log('Button text:', event.target.textContent);
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
```
The `event` object here is a synthetic event in React, which works the same way as a native event but with some additional features.

### **4. Handling Form Events**

Form elements like `<input>`, `<textarea>`, and `<select>` can also trigger events. Handling input in React often involves updating the component's state.

**Example: Handling Input Change**
```jsx
import React, { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <p>You typed: {inputValue}</p>
    </div>
  );
}

export default App;
```
In this example, the `handleChange` function updates the component's state with the value of the input field.

### **5. Handling Multiple Inputs**

You can handle multiple form inputs by using a single handler function and setting the state dynamically.

**Example: Handling Multiple Inputs**
```jsx
import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    username: '',
    email: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Username"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <p>Username: {formData.username}</p>
      <p>Email: {formData.email}</p>
    </div>
  );
}

export default App;
```
Here, `handleChange` dynamically updates the state depending on which input field is being changed.

### **6. Event Pooling**

React's synthetic event system pools events for efficiency. This means the event object is reused and cannot be accessed asynchronously. To work around this, you can use `event.persist()`.

**Example: Event Pooling**
```jsx
import React from 'react';

function App() {
  const handleClick = (event) => {
    event.persist();
    setTimeout(() => {
      console.log('Event:', event);
      console.log('Event type:', event.type);
    }, 1000);
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
```
By calling `event.persist()`, you prevent React from reusing the event object, allowing you to access it later.

### **7. Default Behavior and Event Bubbling**

You can prevent the default behavior of an event or stop the event from bubbling up the DOM tree using `event.preventDefault()` and `event.stopPropagation()` respectively.

**Example: Preventing Default Behavior**
```jsx
import React from 'react';

function App() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted!');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
```
In this case, the form will not refresh the page when submitted.

### **Summary**

React provides a powerful and efficient way to handle events, offering a consistent API across different browsers. By understanding how React's event system works, you can create interactive and responsive web applications.

Key points to remember:
- Events in React are named using camelCase.
- You pass functions as event handlers, not strings.
- React's synthetic events work consistently across browsers.
- Use `event.persist()` to access the event asynchronously.
- Manage form inputs effectively with controlled components.