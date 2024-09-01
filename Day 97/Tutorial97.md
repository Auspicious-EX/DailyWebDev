# Tutorial **97** 

## The `useContext` Hook in React

The `useContext` hook is a powerful feature in React that allows components to subscribe to context changes. Context provides a way to pass data through the component tree without having to pass props down manually at every level.

#### **1. What is Context?**
Context is designed to share data that can be considered "global" for a tree of React components, such as the current authenticated user, theme, or preferred language.

Context is typically used when many components need access to the same piece of state or when a deeply nested component needs data without prop drilling (passing props through intermediate components).

#### **2. Creating a Context**
You create a context using the `React.createContext` function. It returns a context object that can be provided and consumed.

```jsx
import React, { createContext } from 'react';

// Create a Context with a default value
const ThemeContext = createContext('light');
```

#### **3. Providing Context**
To allow components to consume the context, you need to wrap them in a context provider. The provider component accepts a `value` prop to pass the context's value to its children.

```jsx
import React from 'react';
import { ThemeContext } from './ThemeContext';

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}
```

In this example, the `App` component provides the "dark" theme to all components within the `ThemeContext.Provider`.

#### **4. Consuming Context with `useContext`**
The `useContext` hook allows you to consume the context value directly without needing a context consumer wrapper.

```jsx
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function Toolbar() {
  const theme = useContext(ThemeContext);

  return (
    <div style={{ background: theme === 'dark' ? '#333' : '#fff', color: theme === 'dark' ? '#fff' : '#000' }}>
      <h1>{theme} Theme</h1>
    </div>
  );
}
```

Here, the `Toolbar` component consumes the `ThemeContext` value using `useContext`. It dynamically adjusts its styles based on the current theme.

#### **5. Multiple Contexts**
You can use multiple contexts in a component by calling `useContext` multiple times.

```jsx
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { UserContext } from './UserContext';

function UserProfile() {
  const theme = useContext(ThemeContext);
  const user = useContext(UserContext);

  return (
    <div style={{ background: theme === 'dark' ? '#333' : '#fff', color: theme === 'dark' ? '#fff' : '#000' }}>
      <h1>{user.name}'s Profile</h1>
      <p>Email: {user.email}</p>
    </div>
  );
}
```

In this example, `UserProfile` consumes both `ThemeContext` and `UserContext`, adjusting its styles and displaying the user's information accordingly.

#### **6. Benefits of `useContext`**
- **Avoid Prop Drilling**: Simplifies passing data through many levels of components.
- **Reusability**: Context values can be easily consumed by any component in the tree.
- **Readability**: The `useContext` hook makes the code easier to read and maintain compared to older methods like context consumers.

#### **7. Considerations**
- **Avoid Overuse**: While context is powerful, overusing it can make your app's state management complex. It's typically better to use it for truly global state.
- **Performance**: Frequent context value changes can trigger re-renders in all components consuming that context. Optimize with techniques like memoization if necessary.

### **Summary**
The `useContext` hook in React simplifies the process of consuming context, allowing you to avoid prop drilling and manage global data more effectively. It is particularly useful for managing state that needs to be accessed by multiple components at different levels in the component tree.

**Key Points:**
- Context is created using `React.createContext`.
- Providers pass down the context value to children.
- `useContext` allows direct access to the context value.
- Handle multiple contexts by calling `useContext` multiple times.
- Use context judiciously to manage global state without overcomplicating your application.