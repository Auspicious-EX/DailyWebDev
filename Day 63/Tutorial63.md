# Tutorial **63** Notes

## JavaScript Asynchronous, Callbacks, and Promises

#### Asynchronous JavaScript
JavaScript is a single-threaded language, meaning it executes one command at a time in a sequence. However, many operations, such as fetching data from a server or reading a file, can take a long time to complete. Asynchronous JavaScript allows these operations to be executed without blocking the main thread, enabling the browser to remain responsive and improving the user experience.

#### Callbacks
A callback is a function passed as an argument to another function. This technique allows a function to be executed after another function has finished executing, providing a way to handle asynchronous operations.

##### Important Points:
- Callbacks are the foundation of asynchronous programming in JavaScript.
- They can lead to "callback hell" or "pyramid of doom" if not managed properly.

##### Example of a Callback
```javascript
function fetchData(callback) {
  setTimeout(() => {
    const data = 'Hello, world!';
    callback(data);
  }, 2000);
}

function displayData(data) {
  console.log(data);
}

fetchData(displayData); // After 2 seconds, "Hello, world!" is logged
```

#### Promises
Promises provide a cleaner, more powerful way to handle asynchronous operations. A promise represents an operation that hasn't completed yet but is expected in the future. They help manage asynchronous code by avoiding callback hell.

##### States of a Promise
- **Pending**: Initial state, neither fulfilled nor rejected.
- **Fulfilled**: The operation completed successfully.
- **Rejected**: The operation failed.

##### Important Points:
- Promises have `then`, `catch`, and `finally` methods for handling fulfilled, rejected, and completed states, respectively.
- Promises improve code readability and error handling.

##### Example of a Promise
```javascript
const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true; // Change to false to see rejection
    if (success) {
      resolve('Hello, world!');
    } else {
      reject('Error fetching data');
    }
  }, 2000);
});

fetchData
  .then(data => {
    console.log(data); // If resolved, "Hello, world!" is logged
  })
  .catch(error => {
    console.error(error); // If rejected, "Error fetching data" is logged
  });
```

#### Using Promises with `fetch`
The `fetch` API is commonly used to make network requests and returns a promise.

##### Example with `fetch`
```javascript
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json()) // Parse JSON response
  .then(data => {
    console.log(data); // Log the fetched data
  })
  .catch(error => {
    console.error('Error:', error); // Handle any errors
  });
```

#### Async/Await
Async/await is syntactic sugar built on top of promises, providing a cleaner and more readable way to write asynchronous code. It makes asynchronous code look synchronous, improving readability.

##### Important Points:
- `async` functions always return a promise.
- `await` can only be used inside `async` functions.
- Error handling is simplified using `try...catch` blocks.

##### Example with Async/Await
```javascript
async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchData();
```

### Explanation
- **Callbacks**: Functions passed into another function to be executed after the first function completes.
- **Promises**: Objects representing the eventual completion or failure of an asynchronous operation.
- **Async/Await**: Syntactic sugar for working with promises, allowing for cleaner and more readable code.

### Practical Example Combining Concepts
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Async JavaScript</title>
</head>
<body>
    <script>
        // Callback example
        function fetchDataCallback(callback) {
            setTimeout(() => {
                const data = 'Data fetched via callback';
                callback(data);
            }, 2000);
        }

        fetchDataCallback((data) => {
            console.log(data); // Logs: Data fetched via callback
        });

        // Promise example
        function fetchDataPromise() {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    const success = true;
                    if (success) {
                        resolve('Data fetched via promise');
                    } else {
                        reject('Failed to fetch data');
                    }
                }, 2000);
            });
        }

        fetchDataPromise()
            .then(data => console.log(data)) // Logs: Data fetched via promise
            .catch(error => console.error(error));

        // Async/Await example
        async function fetchDataAsync() {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
                const data = await response.json();
                console.log('Data fetched via async/await:', data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchDataAsync();
    </script>
</body>
</html>
```

### Summary
- **Asynchronous JavaScript** allows for non-blocking operations, essential for a responsive user experience.
- **Callbacks** are the foundational approach but can lead to complex, hard-to-read code.
- **Promises** provide a more manageable way to handle asynchronous operations, improving code readability and error handling.
- **Async/Await** offers a cleaner, more intuitive way to work with promises, making asynchronous code look synchronous and easier to read.

Understanding and using these concepts effectively will enable you to handle asynchronous operations in JavaScript more efficiently, leading to better performance and user experience in your applications.