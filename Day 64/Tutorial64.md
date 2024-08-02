# Tutorial **64** Notes

## Async/Await & Fetch API in JavaScript with Examples

#### Introduction to Async/Await
Async/Await is a modern syntax in JavaScript that allows you to work with promises in a more synchronous-like manner. It makes your asynchronous code easier to read and write.

#### Key Points
- **Async Functions**: Declared with the `async` keyword and always return a promise.
- **Await Keyword**: Used to pause the execution of an async function until a promise is settled (fulfilled or rejected).

#### Fetch API
The Fetch API provides a way to make network requests and handle responses. It returns a promise that resolves to the response to the request.

### Using Async/Await with Fetch API

#### Basic Example
Here's a simple example demonstrating how to fetch data using async/await and the Fetch API.

```javascript
async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();
```

### Example with Error Handling
Handling errors is crucial when working with asynchronous code. Here's how you can handle errors using `try...catch`.

```javascript
async function fetchUserData(userId) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const userData = await response.json();
    console.log(userData);
  } catch (error) {
    console.error('Error fetching user data:', error);
  }
}

fetchUserData(1);
```

### Posting Data
You can also use the Fetch API to send data to a server. Here’s how to make a POST request using async/await.

```javascript
async function postData(url = '', data = {}) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const result = await response.json();
    console.log('Success:', result);
  } catch (error) {
    console.error('Error posting data:', error);
  }
}

postData('https://jsonplaceholder.typicode.com/posts', { title: 'foo', body: 'bar', userId: 1 });
```

### Sequential and Parallel Fetching
You can use async/await to handle multiple fetch requests either sequentially or in parallel.

#### Sequential Fetching
```javascript
async function fetchSequential() {
  const response1 = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const post1 = await response1.json();
  console.log('Post 1:', post1);

  const response2 = await fetch('https://jsonplaceholder.typicode.com/posts/2');
  const post2 = await response2.json();
  console.log('Post 2:', post2);
}

fetchSequential();
```

#### Parallel Fetching
```javascript
async function fetchParallel() {
  const [response1, response2] = await Promise.all([
    fetch('https://jsonplaceholder.typicode.com/posts/1'),
    fetch('https://jsonplaceholder.typicode.com/posts/2')
  ]);

  const post1 = await response1.json();
  const post2 = await response2.json();

  console.log('Post 1:', post1);
  console.log('Post 2:', post2);
}

fetchParallel();
```

### Practical Example
Here’s a practical example that demonstrates fetching data and updating the DOM.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Async/Await Fetch Example</title>
</head>
<body>
  <div id="post"></div>

  <script>
    async function fetchPost() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const post = await response.json();
        document.getElementById('post').innerHTML = `
          <h2>${post.title}</h2>
          <p>${post.body}</p>
        `;
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    }

    fetchPost();
  </script>
</body>
</html>
```

### Summary
- **Async/Await**: Makes asynchronous code look and behave like synchronous code. It simplifies error handling and improves readability.
- **Fetch API**: Provides a modern way to make HTTP requests in JavaScript.
- **Combining Async/Await with Fetch**: Enhances the ability to handle asynchronous operations like fetching data, posting data, and handling multiple requests either sequentially or in parallel.

Understanding and effectively using async/await with the Fetch API will greatly improve your ability to handle asynchronous operations in JavaScript, leading to cleaner, more readable, and maintainable code.