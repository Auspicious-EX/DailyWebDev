# Tutorial **93** Notes

## Exercise: 18

### Overview

In this exercise, we will build a simple React application that fetches data from an API and displays it in the form of cards. We will use the JSONPlaceholder API for this purpose, which provides a set of mock data in JSON format. Specifically, we will use the posts endpoint of this API: [https://jsonplaceholder.typicode.com/posts](https://jsonplaceholder.typicode.com/posts).

### Steps to Complete the Exercise

1. **Create a Navbar**
   - The navbar will be the top section of our app. You can keep it simple with a title like "Post Cards".

2. **Create a Container**
   - The container will hold all the cards fetched from the API. You can use CSS to style it properly, ensuring the cards are well-aligned and responsive.

3. **Display Cards in the Container**
   - Each post from the API will be displayed as a card. The card should contain the post title and body.

### Implementation Guide

#### 1. Create a Navbar

```jsx
import React from 'react';

function Navbar() {
    return (
        <nav style={{ padding: '10px', backgroundColor: '#333', color: 'white' }}>
            <h1>Post Cards</h1>
        </nav>
    );
}

export default Navbar;
```

#### 2. Create the Main Container and Fetch Data

```jsx
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

function App() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // Fetch data from the API
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <Navbar />
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '20px' }}>
                {posts.map(post => (
                    <div key={post.id} style={{
                        border: '1px solid #ccc',
                        borderRadius: '5px',
                        padding: '20px',
                        margin: '10px',
                        width: '300px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
                    }}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
```

### Explanation

1. **Navbar Component:**
   - This is a simple navigation bar component with a title.

2. **App Component:**
   - **State (`posts`):** We create a state variable `posts` to store the data fetched from the API.
   - **useEffect:** We use the `useEffect` hook to fetch the data when the component mounts. This ensures that the data is loaded as soon as the app is launched.
   - **fetch API:** We use the `fetch` function to retrieve data from the API. The data is then converted to JSON format and stored in the `posts` state.
   - **Rendering Cards:** We use the `map` function to iterate over the `posts` array and create a card for each post. The card contains the post's title and body.

3. **Styling:**
   - The cards are styled using inline CSS for simplicity. You can customize the styling as needed.

### Final Notes

- **Error Handling:** It's good practice to handle errors that might occur during data fetching. In this example, we're logging the errors to the console.
- **Responsiveness:** The container is styled to be responsive, with cards wrapping based on the available space.
- **Customization:** You can enhance the design of the cards by adding more styles or even integrating a CSS framework like Bootstrap or Tailwind CSS.