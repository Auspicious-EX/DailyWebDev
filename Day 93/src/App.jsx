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
                        border: '1px solid skyblue',
                        borderRadius: '5px',
                        padding: '20px',
                        margin: '10px',
                        width: '300px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
                    }}>
                        <h3>ID: {post.id}</h3>  
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
