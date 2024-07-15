# Tutorial **30** Notes

## Exersice 4:

example of a responsive navbar that adapts to both mobile and laptop screens using HTML and CSS. This example includes media queries, hover effects, and a logo.

### HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Navbar</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <nav class="navbar">
        <div class="logo">MyLogo</div>
        <ul class="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        <div class="burger">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
        </div>
    </nav>
    <script src="script.js"></script>
</body>
</html>
```

### CSS (styles.css)

```css
:root {
    --primary-color: #3498db;
    --secondary-color: #2ecc71;
    --font-color: #fff;
    --hover-color: #2980b9;
    --nav-height: 60px;
}

body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    background-color: var(--primary-color);
    height: var(--nav-height);
}

.logo {
    font-size: 1.5em;
    color: var(--font-color);
}

.nav-links {
    display: flex;
    list-style: none;
}

.nav-links li {
    margin: 0 15px;
}

.nav-links a {
    color: var(--font-color);
    text-decoration: none;
    font-size: 1em;
    transition: color 0.3s ease;
}

.nav-links a:hover {
    color: var(--hover-color);
}

.burger {
    display: none;
    cursor: pointer;
}

.burger div {
    width: 25px;
    height: 3px;
    background-color: var(--font-color);
    margin: 5px;
    transition: all 0.3s ease;
}

/* Responsive CSS */

@media (max-width: 768px) {
    .nav-links {
        display: none;
        flex-direction: column;
        width: 100%;
        position: absolute;
        top: var(--nav-height);
        left: -100%;
        background-color: var(--primary-color);
        transition: left 0.3s ease;
    }

    .nav-links.active {
        left: 0;
    }

    .nav-links li {
        margin: 15px 0;
    }

    .burger {
        display: block;
    }
}

@media (min-width: 769px) {
    .nav-links {
        display: flex;
    }
}
```

### JavaScript (script.js)

```javascript
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
```

### Explanation

1. **HTML Structure**:
    - The `nav` element contains a logo, navigation links (`ul.nav-links`), and a burger menu for mobile view.
  
2. **CSS**:
    - **Variables**: Defined colors and sizes using CSS variables for easy customization.
    - **Flexbox**: Used flexbox for the navbar layout to distribute space between the logo and navigation links.
    - **Hover Effects**: Added a color change effect on hover for the navigation links.
    - **Media Queries**: 
        - **Max-width 768px**: For mobile view, the navigation links are hidden and displayed as a column when the burger menu is clicked.
        - **Min-width 769px**: For desktop/laptop view, the navigation links are displayed as a row.

3. **JavaScript**:
    - Toggles the `active` class on the navigation links to show/hide them when the burger menu is clicked.

This example creates a responsive navbar that adjusts to different screen sizes and includes hover effects for an enhanced user experience.