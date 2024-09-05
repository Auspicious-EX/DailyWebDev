# Tutorial 105

### Creating APIs in Next.js

Next.js comes with a built-in API route feature, allowing you to create backend endpoints within the same application as your frontend. These API routes are server-side and can be used to handle requests such as data fetching, form submissions, authentication, and more.

---

### **How API Routes Work in Next.js**

- **File-Based Routing**: API routes in Next.js follow the file-based routing system. Any file inside the `pages/api` directory becomes an API endpoint automatically.
  
- **Serverless Functions**: These routes work as serverless functions, meaning they are executed on-demand and can be scaled easily.

---

### **Creating an API Route**

1. **Basic Setup:**
   - You create an API route by placing a JavaScript (or TypeScript) file inside the `pages/api` folder.
   - Each file exports a default function that handles the request and response.

#### Example:
```javascript
// pages/api/hello.js
export default function handler(req, res) {
  res.status(200).json({ message: 'Hello World!' });
}
```

- **Request**: `req` is the incoming request object that contains the HTTP request data.
- **Response**: `res` is the response object used to send back data.

This creates an API endpoint at `/api/hello`, which responds with a JSON object.

---

### **Handling Different HTTP Methods**

API routes can handle various HTTP methods like `GET`, `POST`, `PUT`, `DELETE`, etc.

#### Example (Handling multiple HTTP methods):
```javascript
// pages/api/user.js
export default function handler(req, res) {
  if (req.method === 'GET') {
    // Handle GET request
    res.status(200).json({ message: 'This is a GET request' });
  } else if (req.method === 'POST') {
    // Handle POST request
    const data = req.body; // Example of receiving request body in a POST
    res.status(201).json({ message: 'Data received', data });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
```

- `req.method`: The HTTP method used for the request.
- You can differentiate and handle logic based on the method (`GET`, `POST`, etc.).

---

### **Using Dynamic API Routes**

Just like dynamic pages, API routes can also have dynamic parameters.

#### Example (Dynamic API route):
```javascript
// pages/api/user/[id].js
export default function handler(req, res) {
  const { id } = req.query;
  res.status(200).json({ message: `User ID is ${id}` });
}
```

- This creates a dynamic API route `/api/user/[id]`, where `[id]` is a dynamic part of the URL.
- You can access the dynamic route parameters using `req.query`.

---

### **Parsing Request Body**

To parse the request body for `POST` or `PUT` requests, Next.js automatically parses JSON bodies by default, so you can access it directly via `req.body`.

#### Example (Handling JSON POST request):
```javascript
// pages/api/add-user.js
export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email } = req.body; // Extract data from request body
    res.status(201).json({ message: 'User added', user: { name, email } });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
```

---

### **Connecting to a Database**

API routes can be used to connect to a database. For example, you can use MongoDB, PostgreSQL, or MySQL within the API route to handle data.

#### Example (Connecting to MongoDB in an API route):
```javascript
import { MongoClient } from 'mongodb';

// Database connection URI
const uri = 'your-mongodb-uri';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email } = req.body;

    const client = new MongoClient(uri);
    await client.connect();
    const db = client.db('users');
    const result = await db.collection('users').insertOne({ name, email });

    res.status(201).json({ message: 'User added', result });
    client.close();
  }
}
```

---

### **Fetching Data from an API Route (Frontend)**

You can consume your Next.js API routes in your frontend by using the `fetch` method.

#### Example (Fetching data from an API route):
```javascript
// Fetching data from /api/hello
useEffect(() => {
  fetch('/api/hello')
    .then(response => response.json())
    .then(data => console.log(data));
}, []);
```

---

### **API Route Features Summary:**
1. **File-based routing**: API routes are automatically created based on files in the `pages/api` directory.
2. **Supports multiple HTTP methods**: Handle different types of requests such as `GET`, `POST`, `PUT`, `DELETE`.
3. **Dynamic routes**: You can create dynamic API routes using the same `[param]` syntax as page routes.
4. **Body parsing**: Automatically parses JSON request bodies, simplifying API handling.
5. **Connecting to databases**: API routes are used to interact with databases or other external services.

---

### **Full API Hosting Example**

1. **Create an API endpoint in `pages/api` folder:**
```javascript
// pages/api/data.js
export default function handler(req, res) {
  res.status(200).json({ id: 1, name: 'Next.js API Example' });
}
```

2. **Fetch the data from the API route in a component:**
```javascript
import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/data')
      .then(response => response.json())
      .then(jsonData => setData(jsonData));
  }, []);

  return (
    <div>
      {data ? <p>{data.name}</p> : <p>Loading...</p>}
    </div>
  );
}
```

With this approach, you can create server-side functionality directly within your Next.js application, eliminating the need for a separate backend.