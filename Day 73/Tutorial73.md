# Tutorial **73** Notes

## Introduction to Express.js

Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications. It simplifies the process of building server-side applications by providing an easy-to-use interface for handling HTTP requests, managing routes, and integrating middleware.

---

#### 1. **Why Should We Use Express?**

- **Simplicity:** Express abstracts much of the complexity involved in setting up a server with Node.js, allowing developers to focus on building the application logic rather than managing low-level details.
  
- **Flexibility:** It provides a simple interface for defining routes, middleware, and handling HTTP methods. This makes it easier to build RESTful APIs and web applications.
  
- **Middleware:** Express has a rich ecosystem of middleware that can handle tasks such as parsing request bodies, managing cookies, and serving static files.
  
- **Scalability:** It’s highly scalable and can handle a large number of requests efficiently, making it suitable for both small and large-scale applications.

---

#### 2. **Why Nodemon?**

- **Automatic Server Restart:** Nodemon is a utility that monitors changes in your Node.js application files and automatically restarts the server when a file is modified. This eliminates the need to manually stop and start the server every time a change is made.
  
- **Development Tool:** It’s particularly useful during development as it speeds up the development process by reducing downtime and allowing you to see changes in real-time.

- **Installation and Usage:**
  - Install Nodemon globally:
    ```bash
    npm install -g nodemon
    ```
  - Use Nodemon to run your app:
    ```bash
    nodemon app.js
    ```

---

#### 3. **Installing Express@4**

To get started with Express, you need to install it in your Node.js project.

- **Step 1: Initialize a Node.js Project**
  ```bash
  npm init -y
  ```

- **Step 2: Install Express**
  ```bash
  npm install express@4
  ```

- **Step 3: Basic Express Server**
  ```javascript
  const express = require('express');
  const app = express();

  app.get('/', (req, res) => {
    res.send('Hello, World!');
  });

  app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });
  ```

---

#### 4. **Request Parameters and Queries**

In Express, you can handle different types of request parameters:

- **Route Parameters:**
  - Used to capture values specified in the URL path.
  ```javascript
  app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ID: ${userId}`);
  });
  ```

- **Query Parameters:**
  - Used to capture values specified in the query string of the URL.
  ```javascript
  app.get('/search', (req, res) => {
    const query = req.query.q;
    res.send(`Search query: ${query}`);
  });
  ```

---

#### 5. **Serving Static Files**

Express makes it easy to serve static files like HTML, CSS, JavaScript, and images.

- **Serving Static Files:**
  - Use `express.static` middleware to serve static files from a directory.
  ```javascript
  app.use(express.static('public'));
  ```

  - This will serve files from the `public` directory. For example, if you have a file `public/index.html`, it can be accessed via `http://localhost:3000/index.html`.

- **Example Directory Structure:**
  ```
  /public
    ├── index.html
    ├── style.css
    └── script.js
  ```

- **Accessing Static Files:**
  ```bash
  http://localhost:3000/index.html
  http://localhost:3000/style.css
  http://localhost:3000/script.js
  ```

---

### Summary:

- **Express.js** simplifies building web applications and APIs with Node.js.
- **Nodemon** is a tool that enhances development efficiency by automatically restarting the server on file changes.
- **Express@4** is installed via npm, and setting up a basic server is straightforward.
- **Request parameters and queries** allow dynamic data handling in routes.
- **Serving static files** in Express is straightforward, making it easy to manage assets like HTML, CSS, and JavaScript.