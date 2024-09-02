# Tutorial 101

## What is Redux?

**Redux** is a state management library commonly used with React applications, although it can be used with any JavaScript framework or library. It helps manage the state of an application in a predictable way by centralizing the state in a single store and using specific patterns to modify that state. Redux is particularly useful in larger applications where state management can become complex.

### Key Concepts in Redux

1. **Store**:
   - The single source of truth in a Redux application.
   - The store holds the entire state of the application.
   - You can access the state by using `store.getState()`.

2. **Action**:
   - A plain JavaScript object that describes what happened.
   - Every action must have a `type` property, which indicates the type of action being performed.
   - Actions can also include additional data (payload) that is needed to update the state.

   **Example of an Action:**
   ```javascript
   const incrementAction = {
     type: 'INCREMENT',
     payload: 1
   };
   ```

3. **Reducer**:
   - A function that takes the current state and an action as arguments and returns a new state.
   - Reducers specify how the state changes in response to an action.

   **Example of a Reducer:**
   ```javascript
   const counterReducer = (state = 0, action) => {
     switch (action.type) {
       case 'INCREMENT':
         return state + action.payload;
       case 'DECREMENT':
         return state - action.payload;
       default:
         return state;
     }
   };
   ```

4. **Dispatch**:
   - The `dispatch` function sends an action to the store to trigger a state change.
   - The store then passes the action to the reducer to determine the new state.

   **Example of Dispatching an Action:**
   ```javascript
   store.dispatch({ type: 'INCREMENT', payload: 1 });
   ```

5. **Selectors**:
   - Functions that extract specific pieces of data from the state.
   - They help in keeping your components clean by encapsulating the logic for extracting data from the state.

   **Example of a Selector:**
   ```javascript
   const selectCounterValue = (state) => state.counter;
   ```

### Setting Up Redux with React

1. **Install Redux and React-Redux**:
   First, you need to install `redux` and `react-redux`, which provides bindings to use Redux with React.

   ```bash
   npm install redux react-redux
   ```

2. **Create the Redux Store**:
   The store is created using the `createStore` function from Redux. You pass your root reducer (which can be a combination of multiple reducers) to `createStore`.

   **Example:**
   ```javascript
   import { createStore } from 'redux';
   import rootReducer from './reducers';

   const store = createStore(rootReducer);
   ```

3. **Create a Root Reducer**:
   If you have multiple reducers, you can combine them using `combineReducers`.

   **Example:**
   ```javascript
   import { combineReducers } from 'redux';
   import counterReducer from './counterReducer';
   import anotherReducer from './anotherReducer';

   const rootReducer = combineReducers({
     counter: counterReducer,
     anotherState: anotherReducer
   });

   export default rootReducer;
   ```

4. **Provide the Store to React**:
   Wrap your root component with the `Provider` component from `react-redux` and pass the store as a prop. This allows any component within the app to access the Redux store.

   **Example:**
   ```javascript
   import React from 'react';
   import ReactDOM from 'react-dom';
   import { Provider } from 'react-redux';
   import App from './App';
   import store from './store';

   ReactDOM.render(
     <Provider store={store}>
       <App />
     </Provider>,
     document.getElementById('root')
   );
   ```

5. **Connect React Components to the Redux Store**:
   Use the `connect` function from `react-redux` to connect your React components to the Redux store.

   **Example:**
   ```javascript
   import React from 'react';
   import { connect } from 'react-redux';

   const Counter = ({ count, increment, decrement }) => {
     return (
       <div>
         <h1>{count}</h1>
         <button onClick={increment}>Increment</button>
         <button onClick={decrement}>Decrement</button>
       </div>
     );
   };

   const mapStateToProps = (state) => ({
     count: state.counter
   });

   const mapDispatchToProps = (dispatch) => ({
     increment: () => dispatch({ type: 'INCREMENT', payload: 1 }),
     decrement: () => dispatch({ type: 'DECREMENT', payload: 1 })
   });

   export default connect(mapStateToProps, mapDispatchToProps)(Counter);
   ```

### Conclusion

Redux simplifies state management in complex applications by providing a single source of truth and a predictable state transition mechanism. Setting up Redux involves installing the necessary libraries, creating a store, defining actions and reducers, and connecting React components to the Redux store using `react-redux`.

### Additional Tools and Libraries

- **Redux DevTools**: A browser extension that helps with debugging Redux state changes.
- **Redux Thunk**: Middleware for handling asynchronous actions in Redux.
- **Redux Toolkit**: A recommended way to set up and write Redux logic with less boilerplate and more powerful abstractions.

### Example Project Setup

Here's a simple outline to set up a project with Redux:

1. Install dependencies:
   ```bash
   npx create-react-app my-redux-app
   cd my-redux-app
   npm install redux react-redux
   ```

2. Create a `store.js` file to configure the store:
   ```javascript
   import { createStore } from 'redux';
   import rootReducer from './reducers';

   const store = createStore(rootReducer);

   export default store;
   ```

3. Wrap your `App` component in `index.js` with `Provider`:
   ```javascript
   import React from 'react';
   import ReactDOM from 'react-dom';
   import { Provider } from 'react-redux';
   import App from './App';
   import store from './store';

   ReactDOM.render(
     <Provider store={store}>
       <App />
     </Provider>,
     document.getElementById('root')
   );
   ```

4. Implement reducers, actions, and connect them to your React components.

Redux is a powerful tool, and while it adds some complexity, it can make managing state in large applications much more predictable and maintainable.\\### Setting Up Redux with Middleware (Redux Thunk)

For handling asynchronous logic like API calls, you typically need middleware. Redux Thunk is a popular middleware that allows you to write action creators that return a function instead of an action. This function can then perform side effects, such as dispatching actions after fetching data from an API.

#### Step 1: Install Redux Thunk
Install Redux Thunk along with Redux and React-Redux.

```bash
npm install redux-thunk
```

#### Step 2: Configure Redux Thunk in the Store
When creating the Redux store, apply the `thunk` middleware using `applyMiddleware`.

```javascript
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
```

#### Step 3: Create Async Action Creators
Now, you can create action creators that perform asynchronous operations.

```javascript
export const fetchPosts = () => {
  return (dispatch) => {
    dispatch({ type: 'FETCH_POSTS_REQUEST' });

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        dispatch({ type: 'FETCH_POSTS_SUCCESS', payload: data });
      })
      .catch(error => {
        dispatch({ type: 'FETCH_POSTS_FAILURE', error });
      });
  };
};
```

#### Step 4: Use the Async Action in a React Component
You can dispatch this async action from a React component, typically inside `useEffect`.

```javascript
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from './actions';

const Posts = ({ posts, fetchPosts }) => {
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <div>
      <h1>Posts</h1>
      {posts.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  posts: state.posts.data,
  loading: state.posts.loading,
  error: state.posts.error
});

export default connect(mapStateToProps, { fetchPosts })(Posts);
```

### Testing Redux Logic

Testing Redux logic involves writing unit tests for reducers, action creators, and components connected to the Redux store.

#### Testing Reducers
Reducers should be pure functions, so they are easy to test by passing different states and actions.

```javascript
import counterReducer from './counterReducer';

test('should increment counter', () => {
  const state = 0;
  const action = { type: 'INCREMENT', payload: 1 };
  const newState = counterReducer(state, action);

  expect(newState).toBe(1);
});
```

#### Testing Action Creators
For async action creators using Redux Thunk, you might want to use a library like `redux-mock-store` to simulate the store behavior.

```bash
npm install redux-mock-store
```

```javascript
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fetchPosts } from './actions';
import { FETCH_POSTS_SUCCESS } from './actionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

test('creates FETCH_POSTS_SUCCESS when fetching posts has been done', () => {
  const store = mockStore({ posts: [] });

  return store.dispatch(fetchPosts()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({ type: 'FETCH_POSTS_SUCCESS', payload: /* expected data */ });
  });
});
```

### Conclusion

Redux provides a robust framework for managing state in complex applications. By understanding its core principles—store, actions, reducers, and middleware—you can maintain predictable and scalable state across your application. With tools like Redux Thunk, you can handle asynchronous operations seamlessly. Testing is also straightforward, thanks to the predictable nature of Redux’s pure functions.

### Additional Resources

- [Redux Official Documentation](https://redux.js.org/)
- [React-Redux Official Documentation](https://react-redux.js.org/)
- [Redux Thunk Documentation](https://github.com/reduxjs/redux-thunk)

These resources can help deepen your understanding and offer guidance on more advanced topics like middleware, side effects, and optimizing performance in Redux applications.