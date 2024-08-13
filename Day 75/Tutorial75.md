# Tutorial **75** Notes

## Middlewares in Express.js

Middlewares in Express.js are functions that execute during the lifecycle of an HTTP request to the server. They can modify the request object (`req`), the response object (`res`), and even end the request-response cycle. Middleware functions can perform a wide range of tasks, from logging to authentication, error handling, and serving static files.

---

#### 1. **Types of Middleware**

Express.js supports several types of middleware:

- **Application-Level Middleware**: Defined using `app.use()` or `app.METHOD()` (like `app.get()`, `app.post()`).
- **Router-Level Middleware**: Attached to an instance of `express.Router()`.
- **Error-Handling Middleware**: Defined with four parameters: `(err, req, res, next)`.
- **Built-In Middleware**: Provided by Express, like `express.json()`, `express.urlencoded()`, and `express.static()`.
- **Third-Party Middleware**: Provided by the community, such as `morgan` for logging, `cors` for enabling Cross-Origin Resource Sharing, etc.

---

#### 2. **Application-Level Middleware**

Application-level middleware is bound to an instance of `app` using `app.use()` or `app.METHOD()`.

- **Example: Logging Middleware**
  ```javascript
  const express = require('express');
  const app = express();

  // A simple logging middleware
  app.use((req, res, next) => {
    console.log(`${req.method} request for '${req.url}'`);
    next(); // Pass control to the next middleware function
  });

  app.get('/', (req, res) => {
    res.send('Home Page');
  });

  app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });
  ```

- **Multiple Middleware Functions**
  - Middleware can be chained by passing control to the next function using `next()`.
  ```javascript
  app.use((req, res, next) => {
    console.log('First middleware');
    next(); // Pass control to the next middleware
  });

  app.use((req, res, next) => {
    console.log('Second middleware');
    next();
  });
  ```

---

#### 3. **Router-Level Middleware**

Router-level middleware works in the same way as application-level middleware, except it is bound to an instance of `express.Router()`.

- **Example:**
  ```javascript
  const express = require('express');
  const app = express();
  const router = express.Router();

  // Router-level middleware
  router.use((req, res, next) => {
    console.log('Router-level middleware');
    next();
  });

  router.get('/user/:id', (req, res) => {
    res.send(`User ID: ${req.params.id}`);
  });

  app.use('/api', router);

  app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });
  ```

---

#### 4. **Error-Handling Middleware**

Error-handling middleware is defined with four arguments: `(err, req, res, next)`. This type of middleware is used to catch and handle errors in the application.

- **Example:**
  ```javascript
  const express = require('express');
  const app = express();

  app.get('/', (req, res) => {
    throw new Error('An error occurred!'); // This will be caught by the error-handling middleware
  });

  // Error-handling middleware
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });

  app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });
  ```

---

#### 5. **Built-In Middleware**

Express.js comes with several built-in middleware functions:

- **`express.json()`**: Parses incoming requests with JSON payloads.
  ```javascript
  app.use(express.json());
  ```

- **`express.urlencoded()`**: Parses incoming requests with URL-encoded payloads.
  ```javascript
  app.use(express.urlencoded({ extended: true }));
  ```

- **`express.static()`**: Serves static files such as HTML, CSS, JavaScript, and images.
  ```javascript
  app.use(express.static('public'));
  ```

---

#### 6. **Third-Party Middleware**

You can also use third-party middleware to add functionality to your Express.js application:

- **Example: Using `morgan` for Logging**
  ```javascript
  const morgan = require('morgan');

  // Use morgan to log requests
  app.use(morgan('dev'));
  ```

- **Example: Using `cors` to Enable CORS**
  ```javascript
  const cors = require('cors');

  // Use CORS to allow cross-origin requests
  app.use(cors());
  ```

---

### Summary:

- **Application-Level Middleware**: Used globally across the application and defined using `app.use()` or `app.METHOD()`.
- **Router-Level Middleware**: Attached to specific routers, allowing modular organization of middleware.
- **Error-Handling Middleware**: Specifically designed to handle errors that occur in the application.
- **Built-In Middleware**: Comes with Express for common tasks like parsing JSON, serving static files, etc.
- **Third-Party Middleware**: Adds additional functionality such as logging, CORS support, session management, etc. 

Express.js middleware provides a powerful mechanism to extend and customize the behavior of your web server, making it an essential concept for any Node.js developer.