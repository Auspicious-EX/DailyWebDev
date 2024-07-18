# Tutorial **34** Notes

## CSS Flexbox: Ultimate MasterClass

CSS Flexbox is a layout model that allows you to design complex and flexible web layouts with ease. It provides a more efficient way to align and distribute space among items in a container, even when their size is unknown or dynamic.

### Key Concepts of Flexbox

1. **Flex Container**: The parent element where Flexbox is applied using `display: flex;` or `display: inline-flex;`.
2. **Flex Items**: The direct children of a flex container.

### Basic Properties

#### Flex Container Properties

1. **display**
    ```css
    .container {
        display: flex; /* or inline-flex */
    }
    ```

2. **flex-direction**
    ```css
    .container {
        flex-direction: row; /* default, can be row, row-reverse, column, column-reverse */
    }
    ```

3. **flex-wrap**
    ```css
    .container {
        flex-wrap: nowrap; /* default, can be nowrap, wrap, wrap-reverse */
    }
    ```

4. **justify-content**
    ```css
    .container {
        justify-content: flex-start; /* default, can be flex-start, flex-end, center, space-between, space-around, space-evenly */
    }
    ```

5. **align-items**
    ```css
    .container {
        align-items: stretch; /* default, can be stretch, flex-start, flex-end, center, baseline */
    }
    ```

6. **align-content**
    ```css
    .container {
        align-content: stretch; /* default, can be stretch, flex-start, flex-end, center, space-between, space-around */
    }
    ```

#### Flex Item Properties

1. **order**
    ```css
    .item {
        order: 0; /* default, controls the order in which flex items appear */
    }
    ```

2. **flex-grow**
    ```css
    .item {
        flex-grow: 0; /* default, defines the ability for a flex item to grow if necessary */
    }
    ```

3. **flex-shrink**
    ```css
    .item {
        flex-shrink: 1; /* default, defines the ability for a flex item to shrink if necessary */
    }
    ```

4. **flex-basis**
    ```css
    .item {
        flex-basis: auto; /* default, defines the initial main size of a flex item */
    }
    ```

5. **align-self**
    ```css
    .item {
        align-self: auto; /* default, can be auto, flex-start, flex-end, center, baseline, stretch */
    }
    ```

6. **flex**
    ```css
    .item {
        flex: 0 1 auto; /* shorthand for flex-grow, flex-shrink, and flex-basis */
    }
    ```

### Practical Examples

#### Basic Flexbox Layout

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flexbox Example</title>
    <style>
        .container {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            height: 100vh;
        }
        .item {
            background-color: #3498db;
            padding: 20px;
            margin: 10px;
            color: white;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="item">Item 1</div>
        <div class="item">Item 2</div>
        <div class="item">Item 3</div>
    </div>
</body>
</html>
```

#### Responsive Navbar Using Flexbox

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Navbar</title>
    <style>
        body {
            margin: 0;
            font-family: Arial, sans-serif;
        }
        .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #333;
            padding: 10px 20px;
        }
        .navbar .logo {
            color: white;
            font-size: 24px;
        }
        .navbar ul {
            display: flex;
            list-style: none;
            padding: 0;
            margin: 0;
        }
        .navbar ul li {
            margin: 0 15px;
        }
        .navbar ul li a {
            color: white;
            text-decoration: none;
        }
        .navbar ul li a:hover {
            color: #3498db;
        }
        @media (max-width: 768px) {
            .navbar ul {
                flex-direction: column;
                display: none;
            }
            .navbar ul.active {
                display: flex;
            }
            .navbar .menu-toggle {
                display: block;
                cursor: pointer;
                color: white;
                font-size: 24px;
            }
        }
    </style>
</head>
<body>
    <nav class="navbar">
        <div class="logo">MyLogo</div>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        <div class="menu-toggle" onclick="toggleMenu()">☰</div>
    </nav>

    <script>
        function toggleMenu() {
            const nav = document.querySelector('.navbar ul');
            nav.classList.toggle('active');
        }
    </script>
</body>
</html>
```

### Key Points

- **Flexbox** is ideal for creating responsive layouts without the need for floats or positioning.
- **Flex Container** properties determine how the child elements are positioned and aligned.
- **Flex Items** properties allow individual control over the order, size, and alignment of the items.

Flexbox simplifies the process of creating dynamic and responsive layouts, making it an essential tool for modern web design.