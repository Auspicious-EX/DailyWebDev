# Tutorial 104

## Script, Link & Image Components in Next.js

Next.js provides optimized components for including scripts, handling navigation, and rendering images. These components are designed to enhance performance, accessibility, and developer experience.

---

### 1. **Script Component**

The `Script` component in Next.js allows you to include external scripts in your application with enhanced loading strategies. This helps you control when and how scripts are loaded, improving page performance.

#### Key Features:
- **`beforeInteractive`**: Loads the script before the page becomes interactive. Useful for scripts that are critical for the initial rendering of the page.
- **`afterInteractive`**: Loads the script after the page becomes interactive. Ideal for non-critical scripts.
- **`lazyOnload`**: Loads the script lazily during idle time, reducing the impact on initial page load.

#### Example:
```javascript
import Script from 'next/script';

export default function Home() {
  return (
    <div>
      <h1>Welcome to My Page</h1>
      {/* Critical script loaded before page becomes interactive */}
      <Script src="https://example.com/critical-script.js" strategy="beforeInteractive" />
      
      {/* Non-critical script loaded after page becomes interactive */}
      <Script src="https://example.com/non-critical-script.js" strategy="afterInteractive" />
    </div>
  );
}
```

### 2. **Link Component**

The `Link` component in Next.js is used for client-side navigation between different pages of your application. It enhances the navigation experience by prefetching pages, reducing the time it takes to navigate between routes.

#### Key Features:
- **Client-side Navigation**: Prevents full page reloads, making the transition between pages smooth and fast.
- **Prefetching**: Automatically prefetches the linked page's code when the link is in the viewport, speeding up navigation.

#### Example:
```javascript
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link href="/"><a>Home</a></Link></li>
        <li><Link href="/about"><a>About</a></Link></li>
        <li><Link href="/contact"><a>Contact</a></Link></li>
      </ul>
    </nav>
  );
}
```

### 3. **Image Component**

The `Image` component in Next.js is designed to optimize the loading of images in your application. It provides features like automatic image resizing, lazy loading, and support for different image formats.

#### Key Features:
- **Automatic Optimization**: Automatically resizes and serves the appropriate image size based on the device's screen size and resolution.
- **Lazy Loading**: Only loads images when they are about to enter the viewport, reducing initial load times.
- **Responsive Images**: Supports serving different image sizes for different screen sizes.

#### Example:
```javascript
import Image from 'next/image';

export default function Profile() {
  return (
    <div>
      <h1>My Profile</h1>
      <Image
        src="/me.jpg"
        alt="Picture of me"
        width={500}
        height={500}
        layout="responsive"
      />
    </div>
  );
}
```

### Summary:

- **Script Component**: Used to include and control external scripts with various loading strategies.
- **Link Component**: Facilitates client-side navigation with prefetching, enhancing the speed and experience of navigating between pages.
- **Image Component**: Optimizes image loading, handling responsive images, lazy loading, and serving the appropriate image size based on the device.

These components are essential for building high-performance, user-friendly Next.js applications.