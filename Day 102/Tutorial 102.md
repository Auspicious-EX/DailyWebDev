
# Tutorial 102

Write your content here.

### Introduction to Next.js

**What is Next.js?**

Next.js is a popular React framework developed by Vercel that enables developers to build server-rendered or statically generated React applications. It provides a hybrid approach to rendering, allowing you to choose between client-side rendering (CSR), server-side rendering (SSR), static site generation (SSG), and incremental static regeneration (ISR) based on the needs of your application.

**Why Next.js?**

1. **SEO Optimization**: With server-side rendering and static site generation, Next.js improves SEO by pre-rendering pages before they reach the browser, ensuring search engines can index your content more effectively.
  
2. **Performance**: Next.js supports static site generation and code-splitting, which can significantly improve load times and overall performance.

3. **Built-in Routing**: Next.js simplifies routing with its file-based routing system, eliminating the need for additional libraries.

4. **Full Stack Capabilities**: Next.js allows developers to build full-stack applications with API routes, making it possible to integrate backend logic directly into the application.

5. **Zero Configuration**: It provides a great developer experience by requiring minimal configuration, allowing you to focus on building your application rather than setting up build tools and configurations.

### File-based Routing in Next.js

One of the key features of Next.js is its file-based routing system. Instead of defining routes in a router file, you create files and folders inside the `pages` directory, and Next.js automatically maps them to corresponding routes.

**Basic Routing**

- Each file inside the `pages` directory corresponds to a route based on its name.

  ```
  pages/
  ├── index.js         // Route: /
  ├── about.js         // Route: /about
  └── contact.js       // Route: /contact
  ```

- For example, if you create an `about.js` file inside the `pages` directory, Next.js will automatically create a route `/about` that renders the content of `about.js`.

**Dynamic Routing**

- Next.js supports dynamic routing, which allows you to create routes with dynamic parameters by using square brackets `[]` in the filename.

  ```
  pages/
  ├── blog/
  │   ├── [id].js      // Route: /blog/:id
  └── profile/
      ├── [username].js  // Route: /profile/:username
  ```

- For instance, if you create a file named `[id].js` inside the `pages/blog` directory, it will create a route `/blog/:id`, where `:id` is a dynamic segment that can be accessed in the page component.

  ```javascript
  // pages/blog/[id].js

  import { useRouter } from 'next/router';

  const BlogPost = () => {
    const router = useRouter();
    const { id } = router.query;

    return <div>Blog Post ID: {id}</div>;
  };

  export default BlogPost;
  ```

**Nested Routes**

- You can create nested routes by placing files inside folders within the `pages` directory.

  ```
  pages/
  ├── blog/
  │   ├── index.js     // Route: /blog
  │   ├── [id].js      // Route: /blog/:id
  └── users/
      ├── index.js     // Route: /users
      └── [username].js  // Route: /users/:username
  ```

- In this case, the `index.js` file inside the `blog` folder will correspond to the `/blog` route, and `[id].js` will correspond to the `/blog/:id` route.

**Catch-All Routes**

- Catch-all routes allow you to match multiple paths with a single file using square brackets and ellipses (`[...params]`).

  ```
  pages/
  └── docs/
      └── [...slug].js   // Route: /docs/* (matches /docs/a, /docs/a/b, etc.)
  ```

- In this example, the `[...slug].js` file will match any route that starts with `/docs/` and can capture all remaining path segments.

  ```javascript
  // pages/docs/[...slug].js

  import { useRouter } from 'next/router';

  const Docs = () => {
    const router = useRouter();
    const { slug } = router.query;

    return <div>Docs Slug: {slug.join('/')}</div>;
  };

  export default Docs;
  ```

### Summary

Next.js is a powerful framework for building React applications with enhanced performance, SEO, and developer experience. Its file-based routing system makes it easy to create and manage routes by simply organizing files and folders within the `pages` directory. With support for dynamic routing, nested routes, and catch-all routes, Next.js provides a flexible and intuitive approach to managing application routes.