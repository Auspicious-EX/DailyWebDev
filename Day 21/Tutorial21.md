# Tutorial **21** Notes

## CSS Sizing Units: px, rem, em, vh, vw, %, and More

CSS offers a variety of units for specifying sizes of elements. These units help control the dimensions of elements in a flexible and responsive manner. Here is a breakdown of the most commonly used CSS sizing units:

#### Absolute Units

**1. px (Pixels)**
- Fixed unit representing a dot on the screen.
- Example: 
  ```css
  div {
    width: 200px;
  }
  ```

**2. in, cm, mm (Inches, Centimeters, Millimeters)**
- Typically used for print styles.
- Example:
  ```css
  div {
    width: 1in; /* 1 inch */
  }
  ```

**3. pt, pc (Points, Picas)**
- Points and picas are used in print media.
- Example:
  ```css
  div {
    font-size: 12pt; /* 1 point = 1/72 inch */
  }
  ```

#### Relative Units

**1. % (Percentage)**
- Relative to the parent element’s size.
- Example:
  ```css
  div {
    width: 50%; /* 50% of the parent element's width */
  }
  ```

**2. em**
- Relative to the font-size of the element itself or its parent.
- Example:
  ```css
  div {
    font-size: 2em; /* 2 times the font-size of the parent */
  }
  ```

**3. rem (Root em)**
- Relative to the root element's (html) font-size.
- Example:
  ```css
  html {
    font-size: 16px;
  }
  div {
    font-size: 2rem; /* 2 times the root font-size (32px) */
  }
  ```

**4. vh (Viewport Height)**
- Relative to 1% of the viewport height.
- Example:
  ```css
  div {
    height: 50vh; /* 50% of the viewport height */
  }
  ```

**5. vw (Viewport Width)**
- Relative to 1% of the viewport width.
- Example:
  ```css
  div {
    width: 50vw; /* 50% of the viewport width */
  }
  ```

**6. vmin, vmax**
- Relative to the smaller (vmin) or larger (vmax) of viewport height or width.
- Example:
  ```css
  div {
    width: 50vmin; /* 50% of the smaller dimension (height or width) */
  }
  ```

### Practical Examples

Here's an HTML and CSS example demonstrating different sizing units:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sizing Units</title>
    <style>
        body {
            font-size: 16px; /* Base font-size */
        }

        .pixel-box {
            width: 200px;
            height: 200px;
            background-color: lightcoral;
        }

        .percent-box {
            width: 50%;
            height: 100px;
            background-color: lightblue;
        }

        .em-box {
            font-size: 1.5em;
            width: 10em;
            height: 2em;
            background-color: lightgreen;
        }

        .rem-box {
            font-size: 2rem;
            width: 10rem;
            height: 2rem;
            background-color: lightgoldenrodyellow;
        }

        .vh-box {
            height: 50vh;
            background-color: lightpink;
        }

        .vw-box {
            width: 50vw;
            background-color: lightgray;
        }

        .vmin-box {
            width: 50vmin;
            height: 50vmin;
            background-color: lightsalmon;
        }

        .vmax-box {
            width: 50vmax;
            height: 50vmax;
            background-color: lightseagreen;
        }
    </style>
</head>
<body>
    <div class="pixel-box">200px Box</div>
    <div class="percent-box">50% Width Box</div>
    <div class="em-box">10em Width Box</div>
    <div class="rem-box">10rem Width Box</div>
    <div class="vh-box">50vh Height Box</div>
    <div class="vw-box">50vw Width Box</div>
    <div class="vmin-box">50vmin Box</div>
    <div class="vmax-box">50vmax Box</div>
</body>
</html>
```

### Key Points:

- **px (Pixels)**: Fixed size, not responsive to screen size changes.
- **% (Percentage)**: Relative to the parent element’s size.
- **em**: Relative to the font-size of the parent element.
- **rem**: Relative to the font-size of the root element.
- **vh (Viewport Height)**: Relative to 1% of the viewport height.
- **vw (Viewport Width)**: Relative to 1% of the viewport width.
- **vmin**: Relative to 1% of the smaller dimension (viewport height or width).
- **vmax**: Relative to 1% of the larger dimension (viewport height or width).

Understanding these units helps create responsive designs that adapt to different screen sizes and resolutions.

<hr>

## CSS `max-width` and `min-width`

The `max-width` and `min-width` properties in CSS are used to set the maximum and minimum widths of an element, respectively. These properties help in creating responsive designs by restricting the element's width within a specified range.

#### `max-width`

- The `max-width` property sets the maximum width of an element.
- It prevents the element from growing larger than the specified value, even if the content is larger.

**Example:**

```css
div {
    width: 100%;
    max-width: 600px;
    background-color: lightblue;
}
```

In this example, the `div` will have a width of 100% of its container, but it will not exceed 600px even if the container is larger.

#### `min-width`

- The `min-width` property sets the minimum width of an element.
- It ensures that the element is at least as wide as the specified value, even if the content is smaller.

**Example:**

```css
div {
    width: 50%;
    min-width: 300px;
    background-color: lightgreen;
}
```

In this example, the `div` will have a width of 50% of its container, but it will not be smaller than 300px even if the container is narrower.

### Combining `max-width` and `min-width`

You can combine both `max-width` and `min-width` to ensure that an element's width stays within a specified range.

**Example:**

```css
div {
    width: 80%;
    max-width: 800px;
    min-width: 400px;
    background-color: lightcoral;
}
```

In this example, the `div` will:
- Have a width of 80% of its container.
- Not grow larger than 800px.
- Not shrink smaller than 400px.

### Practical Example

Here’s a practical example demonstrating the use of `max-width` and `min-width`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Max-Width and Min-Width Example</title>
    <style>
        .container {
            width: 100%;
            padding: 20px;
            background-color: #f4f4f4;
        }

        .box {
            width: 100%;
            max-width: 600px;
            min-width: 300px;
            padding: 20px;
            background-color: #d1e7dd;
            margin: auto;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="box">
            This box will not be wider than 600px or narrower than 300px.
        </div>
    </div>
</body>
</html>
```

In this example:
- The `box` has a flexible width of 100% within its container.
- It will not grow wider than 600px or shrink narrower than 300px, ensuring it maintains a responsive size.

### Key Points:

- **`max-width`**: Sets the maximum width of an element, preventing it from exceeding a specified size.
- **`min-width`**: Sets the minimum width of an element, ensuring it does not shrink below a specified size.
- Combining `max-width` and `min-width` helps create responsive elements that adapt to various screen sizes while staying within a specified range.