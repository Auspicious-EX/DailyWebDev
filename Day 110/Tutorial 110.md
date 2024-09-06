# Tutorial 110

## Layouts in Next.js

Layouts in Next.js help structure your application’s pages by providing a consistent design and organization across multiple pages. They are ideal for including common elements like headers, footers, and navigation bars.

---

#### 1. Basic Layout Implementation

**Create a Layout Component**
Define a layout component to wrap your page components.

*Example:*
```javascript
// components/Layout.js

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>My Next.js App</title>
      </Head>
      <header>
        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <p>&copy; 2024 My Next.js App</p>
      </footer>
    </div>
  );
};

export default Layout;
```

**Use the Layout Component in Your Pages**
Wrap your page content with the Layout component.

*Example:*
```javascript
// pages/index.js

import Layout from '../components/Layout';

const Home = () => {
  return (
    <Layout>
      <h1>Welcome to My Next.js App</h1>
      <p>This is the home page.</p>
    </Layout>
  );
};

export default Home;
```

```javascript
// pages/about.js

import Layout from '../components/Layout';

const About = () => {
  return (
    <Layout>
      <h1>About Us</h1>
      <p>This is the about page.</p>
    </Layout>
  );
};

export default About;
```

---

#### 2. Using Layouts with Custom `_app.js`

For scalable layout management, especially with multiple layouts or global styles, use the custom App component.

**Create Layout Components** (Same as Above)

**Use Layouts in Custom `_app.js`**
Modify `_app.js` to handle layout logic.

*Example:*
```javascript
// pages/_app.js

import '../styles/globals.css';
import DefaultLayout from '../components/DefaultLayout';
import AdminLayout from '../components/AdminLayout';

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => <DefaultLayout>{page}</DefaultLayout>);

  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
```

In this setup, if a page needs a different layout, it can specify it using the `getLayout` method.

---

#### 3. Layouts for Specific Pages

For pages with unique layout requirements, such as admin pages, you can use specific layouts.

**Create a Custom Layout Component**
*Example:*
```javascript
// components/AdminLayout.js

import React from 'react';

const AdminLayout = ({ children }) => {
  return (
    <div>
      <header>Admin Header</header>
      <main>{children}</main>
      <footer>Admin Footer</footer>
    </div>
  );
};

export default AdminLayout;
```

**Apply Custom Layout in Pages**
*Example:*
```javascript
// pages/admin/dashboard.js

import AdminLayout from '../../components/AdminLayout';

const Dashboard = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Welcome to the admin dashboard.</p>
    </div>
  );
};

Dashboard.getLayout = (page) => <AdminLayout>{page}</AdminLayout>;

export default Dashboard;
```

---

#### 4. Advanced Layouts

For more complex structures, such as layouts for authenticated users versus public users, you can create nested or specialized layouts.

**Create Advanced Layout Components**
*Example:*
```javascript
// components/AuthenticatedLayout.js

import React from 'react';

const AuthenticatedLayout = ({ children }) => {
  return (
    <div>
      <header>Authenticated Header</header>
      <aside>Sidebar</aside>
      <main>{children}</main>
      <footer>Authenticated Footer</footer>
    </div>
  );
};

export default AuthenticatedLayout;
```

**Use Advanced Layout in Pages**
*Example:*
```javascript
// pages/profile.js

import AuthenticatedLayout from '../components/AuthenticatedLayout';

const Profile = () => {
  return (
    <div>
      <h1>Profile Page</h1>
      <p>Welcome to your profile.</p>
    </div>
  );
};

Profile.getLayout = (page) => <AuthenticatedLayout>{page}</AuthenticatedLayout>;

export default Profile;
```

---

### Conclusion

Layouts in Next.js enable you to maintain a consistent look and feel across your application. By defining layout components and integrating them into your pages, you can efficiently manage common UI elements and ensure a cohesive user experience throughout your application.