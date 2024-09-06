# Tutorial 107

## Middleware in Next.js

**Middleware** in Next.js is a powerful feature that allows you to execute code before a request is completed. It sits between the client request and the server response, enabling you to run custom logic, modify requests, or redirect users based on conditions.

#### **Why Middleware in Next.js?**
- **Authentication**: Check if a user is logged in before they can access certain pages.
- **Authorization**: Restrict access to users with specific roles or permissions.
- **Redirection**: Dynamically redirect users based on their request (e.g., locales or specific user preferences).
- **Performance**: Handle caching, rate-limiting, or optimizing responses on the fly.

---

### **How to Use Middleware in Next.js**

Next.js 12 introduced middleware functionality with built-in support for edge functions, making it easier to write and deploy.

#### Step 1: Create a Middleware File

To create middleware, you need to add a `middleware.js` file in the root or specific directory of your Next.js project.

Example structure:
```
my-next-app/
  ├── middleware.js
  └── pages/
```

#### Step 2: Define Middleware Logic

Inside the `middleware.js` file, you can define logic to intercept and handle requests.

Example:
```javascript
// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  const url = request.nextUrl;
  
  // Check if user is authenticated
  const isLoggedIn = request.cookies.get('auth_token');
  
  // Redirect to login if not authenticated and trying to access a protected route
  if (!isLoggedIn && url.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect('/login');
  }
  
  // Continue with the request if authenticated
  return NextResponse.next();
}
```

In this example:
- Middleware checks for the presence of an `auth_token` cookie to determine if a user is logged in.
- If the user is trying to access the `/dashboard` route and is not logged in, they are redirected to the login page.
- If the user is authenticated, the request proceeds as normal with `NextResponse.next()`.

---

### **Use Cases for Middleware**

1. **Authentication and Redirection**
   - Middleware is ideal for checking if a user is logged in and redirecting them if needed.
   - Example: Redirect to the login page if the user is unauthenticated.

   ```javascript
   export function middleware(req) {
     const { pathname } = req.nextUrl;
     const token = req.cookies.get('auth_token');

     if (!token && pathname.startsWith('/protected')) {
       return NextResponse.redirect('/login');
     }

     return NextResponse.next();
   }
   ```

2. **Locale-Based Routing**
   - Middleware can be used to dynamically route users to different versions of your site based on their locale or language preference.

   ```javascript
   export function middleware(request) {
     const { pathname } = request.nextUrl;
     const locale = request.headers.get('accept-language')?.split(',')[0] || 'en';
     
     if (!pathname.startsWith(`/${locale}`)) {
       return NextResponse.redirect(`/${locale}${pathname}`);
     }

     return NextResponse.next();
   }
   ```

3. **Handling Custom Headers**
   - You can inspect and modify HTTP headers in the middleware.

   ```javascript
   export function middleware(request) {
     const userAgent = request.headers.get('user-agent');
     
     if (userAgent.includes('bot')) {
       return NextResponse.rewrite(new URL('/bot-detected', request.url));
     }

     return NextResponse.next();
   }
   ```

4. **API Rate Limiting**
   - Middleware can be used to throttle requests and implement rate-limiting logic.

   ```javascript
   export function middleware(request) {
     const ip = request.headers.get('x-forwarded-for') || request.ip;
     
     if (rateLimitExceeded(ip)) {
       return new Response('Too many requests', { status: 429 });
     }

     return NextResponse.next();
   }
   ```

---

### **Middleware Configuration Options**

- **Path Matching**: You can define where your middleware applies using the `matcher` configuration.

   ```javascript
   export const config = {
     matcher: ['/dashboard/:path*', '/settings'],
   };
   ```

   This configuration restricts middleware execution to `/dashboard` and `/settings` paths.

- **Dynamic Route Matching**: You can apply middleware selectively to dynamic routes using wildcards.

---

### **Key Methods and Utilities**

- `NextResponse.next()`: Continue with the request.
- `NextResponse.redirect()`: Redirect to a different page.
- `NextResponse.rewrite()`: Internally rewrite the URL without changing the visible URL in the browser.
- `request.cookies.get()`: Access cookies from the incoming request.
- `request.headers`: Access request headers, useful for parsing information like `User-Agent`, `Accept-Language`, etc.

---

### **Middleware vs API Routes**

- **Middleware**: Runs on the edge, meaning it is designed to execute before requests hit the API or page rendering logic. It is lightweight and runs closer to the user.
- **API Routes**: Handle full server-side logic. While middleware is designed for lightweight tasks (redirection, security, headers), API routes are more suited for processing and returning data.

---

### **Conclusion**

Middleware in Next.js provides a flexible and powerful way to intercept and modify requests before they reach the server or client. It is ideal for tasks like authentication, redirection, handling headers, and routing based on dynamic conditions. This feature helps enhance the user experience by running tasks efficiently at the edge, closer to the user's location.