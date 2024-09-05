# Tutorial 106

### Server Actions in Next.js

**Server Actions** are a powerful feature in Next.js that allow you to define server-side logic directly in your components without the need to write complex API endpoints. These server-side actions enable developers to perform tasks like data fetching, form submissions, authentication, and more, all while keeping the logic within the component file itself.

#### **Why Server Actions?**

1. **Simplified Workflow**: Instead of writing separate API routes, server actions allow you to write backend logic directly in your React components.
2. **Less Boilerplate**: You don't need to create API endpoints and manually manage request and response objects.
3. **Better Developer Experience**: Server actions streamline communication between frontend and backend, making it easier to perform tasks like form handling, database updates, or running server-side code.

---

### **How to Use Server Actions in Next.js**

1. **Define a Server Action**: You create server actions directly in your components using Next.js features like the `async` function. These actions are executed on the server side.

#### **Example:**

```javascript
import { useState } from 'react';

export default function Page() {
  const [data, setData] = useState(null);

  // Server Action defined inside the component
  async function fetchData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const jsonData = await res.json();
    setData(jsonData);
  }

  return (
    <div>
      <button onClick={fetchData}>Fetch Posts</button>
      {data && data.map(post => <p key={post.id}>{post.title}</p>)}
    </div>
  );
}
```

In this example:
- `fetchData` is the server action responsible for fetching data from an API.
- It fetches the data on the server and sends it to the client, where it is rendered in the component.

---

### **When to Use Server Actions**

1. **Database Interaction**: If you need to interact with a database (e.g., MongoDB, MySQL, PostgreSQL), server actions allow you to handle that logic directly within the component.
  
   #### Example: Fetching from a MongoDB Database
   ```javascript
   import { MongoClient } from 'mongodb';

   export default async function getData() {
     const client = new MongoClient(process.env.MONGODB_URI);
     await client.connect();
     const db = client.db('myDatabase');
     const posts = await db.collection('posts').find().toArray();
     return posts;
   }
   ```

2. **Form Handling**: Server actions are great for handling form submissions and performing tasks like sending emails or writing to a database.

   #### Example: Handling a Form Submission
   ```javascript
   export default function FormPage() {
     async function handleSubmit(event) {
       event.preventDefault();
       const formData = new FormData(event.target);
       const res = await fetch('/api/submit', {
         method: 'POST',
         body: formData,
       });
       const result = await res.json();
       console.log(result);
     }

     return (
       <form onSubmit={handleSubmit}>
         <input name="name" type="text" placeholder="Enter name" />
         <button type="submit">Submit</button>
       </form>
     );
   }
   ```

3. **Fetching Data on the Server**: Instead of using `useEffect` or client-side fetching, you can perform data fetching server-side and pass the data directly to the component.

---

### **Server Actions vs API Routes**

- **Server Actions** are embedded directly in components, while **API Routes** are standalone endpoints under the `pages/api` directory.
- **Server Actions** reduce the complexity of API handling by eliminating the need for separate routes, making them ideal for smaller tasks.
- **API Routes** are better suited for reusable, centralized API logic that might be consumed by different parts of an application.

---

### **Example Use Case: Form Submission with Server Actions**

#### Step 1: Create the Form

```javascript
export default function SubmitForm() {
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = {
      name: event.target.name.value,
      email: event.target.email.value,
    };

    // Server action to send data
    const res = await fetch('/api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await res.json();
    console.log(result.message);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" type="text" placeholder="Name" />
      <input name="email" type="email" placeholder="Email" />
      <button type="submit">Submit</button>
    </form>
  );
}
```

#### Step 2: Create the API Route (Optional)

```javascript
// pages/api/submit.js
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email } = req.body;
    // Handle form submission logic, e.g., save to database
    res.status(200).json({ message: `Form submitted for ${name} with email ${email}` });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
```

In this example:
- The form is submitted, and data is sent to the `/api/submit` route.
- The API route processes the data and returns a response to the client.

---

### **When Not to Use Server Actions**

1. **For Long-Running Tasks**: For processes like file uploads, heavy computations, or long-running operations, server actions might not be ideal. In such cases, background jobs or worker queues are better suited.
  
2. **For Public APIs**: If your server action is intended to be used as a public API, it's better to create a dedicated API route. Server actions are generally designed for use within the same application.

---

### **Key Benefits of Server Actions**

- **Efficiency**: You avoid unnecessary API calls and can handle everything within the server-side scope of your Next.js app.
- **Code Simplification**: Server actions simplify workflows by keeping related code (UI and logic) together.
- **Scalability**: Server actions are great for small-scale applications or features but can scale with larger apps when used alongside dedicated API routes.

---

### **Conclusion**

Server actions in Next.js offer a powerful way to handle server-side logic directly within your components. They streamline common tasks like fetching data, handling forms, and interacting with databases, making your codebase more efficient and easier to maintain. By combining server actions with other Next.js features like API routes, you can create robust and scalable web applications.