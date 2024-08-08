# Tutorial **70** Notes

# Backend, Node.js & npm: Overview and Essentials

#### Backend Development:
- **Backend** refers to the server-side part of a web application. It is responsible for managing data, business logic, and the application’s core functionalities.
- **Key Components**:
  1. **Server**: The machine or environment where your application runs.
  2. **Database**: Stores and manages data.
  3. **API**: Interfaces that allow different software to communicate.
  4. **Authentication & Authorization**: Ensures secure access to resources.
  
#### Node.js:
- **Node.js** is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to use JavaScript on the server-side.
- **Asynchronous and Event-Driven**: Node.js is non-blocking, meaning it can handle multiple operations simultaneously without waiting for each to complete.
- **Single-threaded**: Despite being single-threaded, Node.js can manage multiple operations through its event loop.

#### npm (Node Package Manager):
- **npm** is the default package manager for Node.js. It helps manage libraries and packages that you can include in your Node.js project.
- **Key npm Commands**:
  1. **`npm init`**: Initializes a new Node.js project, creating a `package.json` file.
  2. **`npm install <package_name>`**: Installs a package and adds it to your project’s dependencies.
  3. **`npm start`**: Runs the startup script defined in `package.json`.
  4. **`npm run <script_name>`**: Runs a custom script defined in `package.json`.

### Summary:
Backend development is a crucial part of web applications, focusing on server-side logic, database management, and security. Node.js allows developers to write server-side code in JavaScript, making it easier to use one language across the stack. npm is essential for managing the vast ecosystem of Node.js libraries, simplifying the development process.