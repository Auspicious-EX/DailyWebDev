# Tutorial **77** Notes

## EJS Template Engine in Express

EJS (Embedded JavaScript) is a simple templating language that lets you generate HTML markup with plain JavaScript. It's one of the most popular templating engines for Node.js and integrates seamlessly with Express.js.

### Why Use EJS with Express?

- **Separation of Concerns**: EJS allows you to separate your application's logic from its presentation. This makes your code cleaner and easier to maintain.
- **Dynamic Content**: EJS allows you to inject dynamic content into your HTML templates using JavaScript variables, loops, and conditions.
- **Reusable Components**: You can create reusable components (like headers, footers, and navigation menus) that can be included in multiple pages.
- **Integration with Express**: EJS integrates easily with Express.js, allowing you to render views and pass data to the client.

### Setting Up EJS in an Express.js Project

1. **Install EJS**:
   - You can install EJS using npm.
   ```bash
   npm install ejs
   ```

2. **Set Up the View Engine**:
   - In your Express app, set EJS as the view engine.
   ```javascript
   const express = require('express');
   const app = express();

   // Set 'views' directory for any views being rendered res.render()
   app.set('views', './views');

   // Set EJS as the templating engine
   app.set('view engine', 'ejs');
   ```

3. **Creating EJS Templates**:
   - Create `.ejs` files in the `views` directory. These files are your templates.
   - Example of an `index.ejs` template:
   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Home</title>
   </head>
   <body>
       <h1>Welcome, <%= name %>!</h1>
       <p>Your favorite color is <%= color %>.</p>
   </body>
   </html>
   ```

4. **Rendering EJS Templates**:
   - Use `res.render()` to render an EJS template and send it as an HTTP response.
   ```javascript
   app.get('/', (req, res) => {
       const userData = {
           name: 'Shubham',
           color: 'blue'
       };
       res.render('index', userData);
   });

   app.listen(3000, () => {
       console.log('Server is running on http://localhost:3000');
   });
   ```
   - In the above example, when a user visits the root route (`/`), the server will render the `index.ejs` template, replacing `<%= name %>` and `<%= color %>` with the values from the `userData` object.

### Passing Data to EJS Templates

You can pass data to an EJS template using an object. This data can be accessed in the template using EJS syntax.

- **Example with Loops and Conditions**:
  ```javascript
  app.get('/profile', (req, res) => {
      const userProfile = {
          name: 'Shubham',
          age: 22,
          hobbies: ['Chess', 'Traveling', 'Coding']
      };
      res.render('profile', { user: userProfile });
  });
  ```

  - `profile.ejs`:
    ```html
    <h1><%= user.name %>'s Profile</h1>
    <p>Age: <%= user.age %></p>
    <h2>Hobbies</h2>
    <ul>
      <% user.hobbies.forEach(hobby => { %>
        <li><%= hobby %></li>
      <% }); %>
    </ul>
    ```

### Including Partials in EJS

Partials are reusable chunks of EJS code that can be included in other templates. This is useful for things like headers, footers, and navigation bars that appear on multiple pages.

- **Example of Using Partials**:
  - Create a partial file, e.g., `header.ejs`:
    ```html
    <header>
      <h1>My Website</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/profile">Profile</a></li>
        </ul>
      </nav>
    </header>
    ```

  - Include the partial in another EJS file using `<%- include('partial') %>`:
    ```html
    <%- include('header') %>
    <div>
      <p>This is the content of the page.</p>
    </div>
    ```

### Summary

- **EJS (Embedded JavaScript)** is a templating engine that allows you to generate dynamic HTML using JavaScript.
- **Integration with Express** is straightforward, requiring minimal setup.
- **Dynamic Content** can be injected into your templates using variables, loops, and conditions.
- **Partials** allow for reusable components across different pages, making your templates more modular and easier to maintain.
- **Rendering** is done using `res.render()` in Express, and data is passed to the templates as objects.