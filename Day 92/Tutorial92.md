# Tutorial **92** Notes

## Conditional Rendering & Rendering Lists in React

### Conditional Rendering in React:
Conditional rendering in React is a way to render different elements or components based on a certain condition. This allows you to control what gets displayed in the UI depending on the application's state.

#### Examples of Conditional Rendering:
1. **Using if-else:**
   ```jsx
   function Greeting({ isLoggedIn }) {
       if (isLoggedIn) {
           return <h1>Welcome back!</h1>;
       } else {
           return <h1>Please sign up.</h1>;
       }
   }
   ```

2. **Using Ternary Operator:**
   ```jsx
   function Greeting({ isLoggedIn }) {
       return isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign up.</h1>;
   }
   ```

3. **Using Logical AND (&&):**
   ```jsx
   function Greeting({ isLoggedIn }) {
       return (
           <div>
               {isLoggedIn && <h1>Welcome back!</h1>}
               {!isLoggedIn && <h1>Please sign up.</h1>}
           </div>
       );
   }
   ```

### Rendering Lists in React:
Rendering lists in React is often done using the `.map()` function. It iterates over an array and returns a list of elements. Each element in the array should have a unique `key` prop for optimal performance.

#### Example of Rendering Lists:
```jsx
function NumberList({ numbers }) {
    const listItems = numbers.map((number) =>
        <li key={number.toString()}>
            {number}
        </li>
    );
    return (
        <ul>{listItems}</ul>
    );
}
```

### Key Points:
- **Key Prop:** When rendering a list, the `key` prop is essential to help React identify which items have changed, added, or removed.
- **Unique Identifier:** The `key` should be unique among the siblings. Usually, an item's ID is used as a key.
- **Conditional Rendering:** Different approaches like if-else, ternary operators, and logical operators can be used for conditional rendering.
  
### Conclusion:
Understanding conditional rendering and rendering lists is crucial for creating dynamic and interactive user interfaces in React. They allow you to display data based on conditions and iteratively render items in an efficient manner.