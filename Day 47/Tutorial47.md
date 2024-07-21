# Tutorial **47** Notes

## Introduction to JavaScript & Installing Node.js

### Introduction to JavaScript

**JavaScript** is a high-level, dynamic, and interpreted programming language that is widely used for web development. It allows developers to create interactive and dynamic web pages. JavaScript is a versatile language that can be used on the client side (in the browser) as well as the server side (using environments like Node.js).

#### Key Features of JavaScript
- **Interpreted Language**: JavaScript is executed directly by the web browser, allowing for quick and interactive web development.
- **Dynamic Typing**: Variables in JavaScript are not bound to a specific data type, making it flexible.
- **First-Class Functions**: Functions in JavaScript are treated as first-class citizens, meaning they can be assigned to variables, passed as arguments, and returned from other functions.
- **Event-Driven Programming**: JavaScript is well-suited for handling events, making it ideal for creating interactive web applications.
- **Cross-Platform**: JavaScript runs in any modern web browser, regardless of the operating system.

#### Basic Syntax
Here's a simple example of JavaScript code:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Example</title>
    <script>
        // This is a single-line comment

        /* This is a 
           multi-line comment */

        // Defining a variable
        let greeting = "Hello, World!";

        // Defining a function
        function sayHello() {
            alert(greeting);
        }

        // Calling the function
        sayHello();
    </script>
</head>
<body>
</body>
</html>
```

### Installing Node.js

**Node.js** is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows you to run JavaScript code on the server side, enabling you to build scalable network applications.

#### Steps to Install Node.js

1. **Download Node.js**:
   - Go to the [official Node.js website](https://nodejs.org/).
   - Download the installer for your operating system (Windows, macOS, or Linux).

2. **Install Node.js**:
   - Run the downloaded installer.
   - Follow the installation instructions (the default settings are usually sufficient).

3. **Verify Installation**:
   - Open a terminal or command prompt.
   - Type the following command to check the Node.js version:
     ```sh
     node -v
     ```
   - Type the following command to check the npm (Node Package Manager) version:
     ```sh
     npm -v
     ```

#### Writing Your First Node.js Program

1. **Create a new file**:
   - Open your preferred code editor and create a new file named `app.js`.

2. **Write a simple program**:
   - Add the following code to `app.js`:
     ```js
     // Load the http module to create an HTTP server.
     const http = require('http');

     // Configure the HTTP server to respond with "Hello, World!" to all requests.
     const server = http.createServer((req, res) => {
         res.writeHead(200, { 'Content-Type': 'text/plain' });
         res.end('Hello, World!\n');
     });

     // Listen on port 3000, IP defaults to 127.0.0.1
     server.listen(3000, () => {
         console.log('Server running at http://127.0.0.1:3000/');
     });
     ```

3. **Run the program**:
   - Open a terminal or command prompt.
   - Navigate to the directory where `app.js` is located.
   - Run the following command:
     ```sh
     node app.js
     ```
   - Open a web browser and navigate to `http://127.0.0.1:3000/`. You should see "Hello, World!" displayed.

### Summary

- **JavaScript** is a versatile language used for both client-side and server-side development.
- **Node.js** is a runtime environment that allows JavaScript to be executed on the server side.
- Installing Node.js involves downloading and running the installer from the official website, and verifying the installation using terminal commands.
- A basic Node.js program can be created and run to set up a simple HTTP server.

This introduction covers the essentials to get started with JavaScript and Node.js, enabling you to build interactive web applications and server-side programs.