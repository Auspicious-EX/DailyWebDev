# Tutorial 109

## Dynamic Routes in Next.js

Dynamic routing in Next.js enables the creation of pages based on dynamic URL segments, such as user IDs or product slugs. Here’s a structured guide on how to implement and use dynamic routes in Next.js:

---

#### 1. Creating Dynamic Routes
Dynamic routes are defined using file names with square brackets. The content inside the brackets represents the dynamic segment.

**Example:**
To create a dynamic route for user profiles:
```plaintext
/pages/users/[id].js
```
Here, `id` is the dynamic segment that will match any user ID.

---

#### 2. Accessing Dynamic Parameters

**Using `useRouter` Hook**
Access the dynamic parameter directly in your component:
```javascript
// pages/users/[id].js

import { useRouter } from 'next/router';

const UserProfile = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>User Profile</h1>
      <p>User ID: {id}</p>
    </div>
  );
};

export default UserProfile;
```

**Using `getServerSideProps` (Server-side Rendering)**
Fetch data based on the dynamic parameter:
```javascript
// pages/users/[id].js

export async function getServerSideProps(context) {
  const { id } = context.params;

  // Fetch user data based on id
  const res = await fetch(`https://api.example.com/users/${id}`);
  const user = await res.json();

  return {
    props: {
      user,
    },
  };
}

const UserProfile = ({ user }) => {
  return (
    <div>
      <h1>User Profile</h1>
      <p>User Name: {user.name}</p>
    </div>
  );
};

export default UserProfile;
```

**Using `getStaticProps` and `getStaticPaths` (Static Generation)**
Generate static pages at build time:
```javascript
// pages/users/[id].js

import { useRouter } from 'next/router';

export async function getStaticPaths() {
  // Fetch list of user IDs
  const res = await fetch('https://api.example.com/users');
  const users = await res.json();

  // Create paths with user IDs
  const paths = users.map(user => ({
    params: { id: user.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const { id } = context.params;

  // Fetch user data based on id
  const res = await fetch(`https://api.example.com/users/${id}`);
  const user = await res.json();

  return {
    props: {
      user,
    },
  };
}

const UserProfile = ({ user }) => {
  return (
    <div>
      <h1>User Profile</h1>
      <p>User Name: {user.name}</p>
    </div>
  );
};

export default UserProfile;
```

---

#### 3. Nested Dynamic Routes
Create nested dynamic routes with multiple dynamic segments:

**Example:**
For a blog with categories and posts:
```plaintext
/pages/blog/[category]/[post].js
```
Access the dynamic segments in your component:
```javascript
// pages/blog/[category]/[post].js

import { useRouter } from 'next/router';

const BlogPost = () => {
  const router = useRouter();
  const { category, post } = router.query;

  return (
    <div>
      <h1>Blog Post</h1>
      <p>Category: {category}</p>
      <p>Post: {post}</p>
    </div>
  );
};

export default BlogPost;
```

---

#### 4. Catch-All Routes
For routes with variable numbers of segments, use catch-all routes:

**Example:**
For a route that accepts any number of segments:
```plaintext
/pages/[...slug].js
```
Access the segments in an array:
```javascript
// pages/[...slug].js

import { useRouter } from 'next/router';

const CatchAll = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h1>Catch-All Route</h1>
      <p>Slug: {slug ? slug.join('/') : 'No slug'}</p>
    </div>
  );
};

export default CatchAll;
```

---

### Conclusion
Dynamic routing in Next.js is a powerful feature that allows for the creation of dynamic, parameterized pages. By leveraging file-based routing with dynamic segments, you can handle various URL patterns and build data-driven pages efficiently in your Next.js application.