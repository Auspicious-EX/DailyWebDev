# Tutorial **88** Notes

## Vite: What It Is and How to Use It

#### What is Vite?
- **Vite** is a modern build tool for frontend development, designed to provide a faster and more efficient development experience. It is optimized for use with frameworks like React, Vue, and Svelte, among others.

**Key Features of Vite:**
- **Fast Startup**: Vite uses native ES modules in the browser to achieve instant server start times, unlike traditional bundlers.
- **Hot Module Replacement (HMR)**: Vite offers an extremely fast HMR, making it easy to see changes immediately as you develop.
- **Optimized Builds**: For production, Vite bundles your code using Rollup, providing optimal performance.

#### How to Use Vite with React

1. **Install Node.js**: Make sure you have Node.js installed on your system.
   
2. **Create a Vite Project**:
   - Open your terminal and run the following command to create a new Vite project:
     ```bash
     npm create vite@latest my-react-app --template react
     ```
   - `my-react-app` is the name of your project. The `--template react` flag indicates that you want to use React.

3. **Navigate to the Project Folder**:
   ```bash
   cd my-react-app
   ```

4. **Install Dependencies**:
   ```bash
   npm install
   ```

5. **Start the Development Server**:
   ```bash
   npm run dev
   ```
   - This command will start the Vite development server, and you can view your React app in the browser at `http://localhost:3000`.

6. **Build for Production**:
   ```bash
   npm run build
   ```
   - This command will create an optimized production build of your project.

## Components, Props, and JSX in React

#### What are Components in React?
- **Components** are the building blocks of a React application. They are reusable, self-contained units of code that define how a portion of the user interface should appear and behave. Components can be either **functional** or **class-based**.

**Example of a Functional Component**:
```jsx
function Greeting() {
    return <h1>Hello, world!</h1>;
}
```
- This `Greeting` component returns a simple JSX element that renders "Hello, world!".

#### What are Props in React?
- **Props (Properties)** are a mechanism for passing data from a parent component to a child component. Props are used to configure a component and make it dynamic.

**Example of Using Props**:
```jsx
function Greeting(props) {
    return <h1>Hello, {props.name}!</h1>;
}

// Using the Greeting component with props
<Greeting name="Shubham" />
```
- Here, the `name` prop is passed to the `Greeting` component, which renders "Hello, Shubham!".

#### What is JSX?
- **JSX (JavaScript XML)** is a syntax extension for JavaScript that looks similar to HTML. It is used in React to describe the UI. JSX makes it easier to write and visualize the structure of React components.

**Key Points About JSX**:
- **HTML-Like Syntax**: JSX allows you to write HTML-like code within JavaScript.
- **JavaScript Expressions**: You can embed JavaScript expressions inside JSX using curly braces `{}`.
- **JSX Must Have a Single Parent Element**: Each JSX expression must have one root element. For example:
  ```jsx
  return (
      <div>
          <h1>Hello</h1>
          <p>This is a paragraph.</p>
      </div>
  );
  ```

**Example of a Component with Props and JSX**:
```jsx
function UserProfile(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>{props.bio}</p>
        </div>
    );
}

// Usage
<UserProfile name="Shubham Prajapati" bio="A passionate web developer and designer." />
```
- This `UserProfile` component uses `props` to display a user’s name and bio, making the component reusable for different users.

### How to Use Components, Props, and JSX in React
1. **Define Components**: Start by defining your components using either functions or classes.
2. **Use Props**: Pass data to components via props to make them dynamic and reusable.
3. **Write JSX**: Use JSX to structure the layout and content of your components. Remember to follow the syntax rules of JSX, such as wrapping everything in a single root element and using curly braces for JavaScript expressions.

### Summary
- **Vite** is a modern build tool that significantly improves the development experience with React by offering fast startups and hot module replacement.
- **Components** are the core building blocks in React, and they can be made dynamic by using **props** to pass data.
- **JSX** is the syntax extension that makes writing and understanding the structure of React components more intuitive by combining HTML-like syntax with JavaScript. 

Using these concepts, you can build powerful, reusable, and dynamic user interfaces in React.
