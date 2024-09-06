# Tutorial 108

## Authentication in Next.js with Auth.js
Authentication in Next.js can be done using a variety of strategies depending on your app’s requirements. A common approach for handling authentication is by leveraging JWT (JSON Web Token), OAuth, or session-based methods. Here we’ll explore Auth.js as a solution for handling authentication in Next.js.

### What is Auth.js?
Auth.js (formerly NextAuth.js) is an easy-to-use authentication library for Next.js that supports different authentication providers (OAuth, JWT, Email, etc.) and integrates seamlessly with both Next.js API routes and server-side rendering. It simplifies adding secure user login to Next.js apps.

### Why Use Auth.js for Authentication in Next.js?
Support for OAuth Providers: Google, GitHub, Facebook, Twitter, and more.
Email Authentication: You can send magic links via email for passwordless login.
JWT Support: Easily integrate JSON Web Token-based authentication.
Session Management: Session-based authentication with support for client-side and server-side access.
Secure and Scalable: Provides secure handling of authentication flows and can scale well for production use.
Serverless-Friendly: Works seamlessly with serverless functions in Next.js.
How to Set Up Auth.js in a Next.js Project
Step 1: Install Dependencies
To get started, you need to install next-auth and the necessary providers.

```

npm install next-auth
Step 2: Create an API Route for Authentication
Next.js uses API routes to handle authentication. Create a file under /pages/api/auth/[...nextauth].js.
```

```

// pages/api/auth/[...nextauth].js
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // Add more providers here, e.g. GitHub, Facebook
  ],
  // Enable JWT
  session: {
    jwt: true,
  },
  // Customize callbacks
  callbacks: {
    async jwt(token, user) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session(session, token) {
      session.user.id = token.id;
      return session;
    },
  },
});

``` 
This file configures Auth.js to work with Google as an authentication provider. You can add other providers, such as GitHub or Facebook, following the same structure.

Step 3: Configure Environment Variables
In your .env.local file, add your authentication provider keys:

```

GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```
Replace the values with the credentials from your OAuth provider (e.g., Google).

Step 4: Protecting Routes with Session-Based Authentication
Now, you can protect pages by ensuring the user is authenticated before accessing them. Use getSession from next-auth to get the user's session in both client-side and server-side components.

For server-side:

javascript
```
// pages/dashboard.js
import { getSession } from 'next-auth/react';

export async function getServerSideProps(context) {
  const session = await getSession(context);
  
  if (!session) {
    return {
      redirect: {
        destination: '/api/auth/signin',
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}

export default function Dashboard({ session }) {
  return <div>Welcome, {session.user.name}!</div>;
}
For client-side:
```

javascript
Copy code
```
// components/Navbar.js
import { signIn, signOut, useSession } from 'next-auth/react';

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav>
      {session ? (
        <>
          <p>Signed in as {session.user.name}</p>
          <button onClick={() => signOut()}>Sign Out</button>
        </>
      ) : (
        <button onClick={() => signIn()}>Sign In</button>
      )}
    </nav>
  );
}
```
Step 5: Customize Sign-In Page
By default, Next.js provides a basic sign-in page. You can customize it by creating a signIn page under /pages/auth/signin.js.

```
// pages/auth/signin.js
import { signIn } from 'next-auth/react';

export default function SignIn() {
  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={() => signIn('google')}>Sign in with Google</button>
    </div>
  );
}
```
### Key Features of Auth.js
- Session Management: Easy handling of user sessions via cookies or JWT.
- Secure Callbacks: You can define secure custom logic using callback functions like jwt, session, redirect.
- OAuth Integration: Ready-to-use authentication with multiple providers (Google, Facebook, GitHub, etc.).
- Customizable UI: You can customize the sign-in/sign-out UI.
API-Route Protection: Secure API routes with authentication checks.
Example Workflow for Google OAuth
User clicks "Sign in with Google".
Auth.js redirects the user to the Google OAuth flow.
After the user grants permissions, they are redirected back to your site.
Auth.js creates a session and stores it using a secure cookie or JWT.
Protected routes are now accessible to the user with an active session.
Conclusion
Auth.js makes handling authentication in Next.js seamless, supporting a wide range of use cases from OAuth providers to session management. It offers an easy-to-use API, flexibility with callbacks, and built-in security features, making it a great choice for secure authentication in Next.js applications.