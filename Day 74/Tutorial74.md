# Tutorial **74** Notes

### Response, Request, and Routers in Express.js

In Express.js, handling HTTP requests and responses is core to building any web application or API. Let's dive into how Express.js handles these concepts and explore some advanced topics.

---

#### 1. **Handling POST & Other Requests**

- **GET Request:** Used to retrieve data from the server. It's the most common request type.
  ```javascript
  app.get('/get-example', (req, res) => {
    res.send('This is a GET request');
  });
  ```

- **POST Request:** Used to send data to the server, typically for creating new resources.
  ```javascript
  app.post('/post-example', (req, res) => {
    const data = req.body; // Make sure to use middleware like express.json() to parse JSON data.
    res.send(`Received data: ${JSON.stringify(data)}`);
  });
  ```

- **PUT Request:** Used to update existing resources on the server.
  ```javascript
  app.put('/put-example/:id', (req, res) => {
    const id = req.params.id;
    const newData = req.body;
    res.send(`Updating resource with ID ${id} with data: ${JSON.stringify(newData)}`);
  });
  ```

- **DELETE Request:** Used to delete resources from the server.
  ```javascript
  app.delete('/delete-example/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Deleting resource with ID ${id}`);
  });
  ```

- **Middleware for Parsing Data:** Before handling POST, PUT, or PATCH requests, use middleware to parse the request body.
  ```javascript
  app.use(express.json()); // For JSON data
  app.use(express.urlencoded({ extended: true })); // For form data
  ```

---

#### 2. **Chaining of Requests**

In Express.js, you can chain multiple middleware functions to handle a single request. Each middleware function can perform some operations and pass control to the next middleware using `next()`.

- **Example:**
  ```javascript
  app.get('/chained-route', (req, res, next) => {
    console.log('First middleware');
    next(); // Passes control to the next middleware
  }, (req, res) => {
    res.send('Final response from the chained route');
  });
  ```

- **Multiple Middleware Example:**
  ```javascript
  const middleware1 = (req, res, next) => {
    console.log('Middleware 1');
    next();
  };

  const middleware2 = (req, res, next) => {
    console.log('Middleware 2');
    next();
  };

  app.get('/multiple-middleware', [middleware1, middleware2], (req, res) => {
    res.send('Final response after multiple middleware');
  });
  ```

---

#### 3. **Serving HTML Files**

Express makes it easy to serve HTML files directly.

- **Using `res.sendFile`:**
  - You can use `res.sendFile` to send an HTML file as the response.
  ```javascript
  const path = require('path');

  app.get('/serve-html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });
  ```

  - Ensure the HTML files are stored in the correct directory, like `public`.

- **Serving Multiple Files with Static Middleware:**
  - If you want to serve multiple HTML files or other static assets like CSS, JavaScript, images, etc., use `express.static`.
  ```javascript
  app.use(express.static('public'));
  ```

---

#### 4. **Installing Postman**

- **Postman** is a popular API client that allows you to test and interact with your APIs by making HTTP requests.

- **Steps to Install:**
  1. Go to the [Postman website](https://www.postman.com/downloads/).
  2. Download the installer for your operating system.
  3. Run the installer and follow the instructions.

- **Using Postman:**
  - Create requests (GET, POST, PUT, DELETE, etc.) and test your Express.js routes.
  - You can easily manage headers, body content, query parameters, and even handle authentication.

---

#### 5. **Express Router**

As your application grows, managing all your routes in a single file can become cumbersome. Express Router allows you to modularize your routes.

- **Setting Up a Router:**
  ```javascript
  const express = require('express');
  const router = express.Router();

  // Define routes within the router
  router.get('/example', (req, res) => {
    res.send('This is an example route in the router');
  });

  module.exports = router;
  ```

- **Using the Router in Your App:**
  ```javascript
  const express = require('express');
  const app = express();
  const exampleRouter = require('./exampleRouter'); // Import the router

  app.use('/api', exampleRouter); // Use the router with a base path

  app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
  });
  ```

- **Modularizing Routes:**
  - Each router can handle different parts of your application, e.g., `userRouter`, `productRouter`, etc.
  - This keeps your code organized and manageable.

---

### Summary:

- **Handling POST & Other Requests**: Express provides built-in methods to handle various HTTP methods like GET, POST, PUT, DELETE, etc.
- **Chaining Requests**: Multiple middleware functions can be chained to handle complex requests.
- **Serving HTML Files**: Express can serve static HTML files directly or via middleware.
- **Installing Postman**: A crucial tool for testing APIs.
- **Express Router**: A powerful way to modularize your routes, keeping your code organized and maintainable.