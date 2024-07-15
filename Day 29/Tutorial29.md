# Tutorial **29** Notes

### CSS Media Queries

CSS media queries are a powerful tool used in responsive web design to apply different styles based on the characteristics of the user's device, such as screen size, resolution, orientation, and more. They allow you to create flexible layouts that adapt to various screen sizes and devices.

#### Basic Syntax

A media query is composed of a media type and one or more expressions that check for the conditions of the media.

**Example:**

```css
@media (max-width: 600px) {
    body {
        background-color: lightblue;
    }
}
```

In this example, the background color of the `body` element will change to light blue when the viewport width is 600 pixels or less.

### Media Types

Common media types include:

- **`all`**: Suitable for all devices (default).
- **`print`**: Intended for paged, printed material and documents viewed on a screen in print preview mode.
- **`screen`**: Intended primarily for screens.

### Media Features

Media features describe specific characteristics of the user agent environment, such as width, height, orientation, resolution, and aspect ratio.

#### Common Media Features

1. **Width and Height**

   - **`max-width`**: Maximum width of the viewport.
   - **`min-width`**: Minimum width of the viewport.
   - **`max-height`**: Maximum height of the viewport.
   - **`min-height`**: Minimum height of the viewport.

   **Example:**

   ```css
   @media (min-width: 768px) {
       body {
           font-size: 18px;
       }
   }
   ```

2. **Orientation**

   - **`orientation: landscape`**: Width is greater than height.
   - **`orientation: portrait`**: Height is greater than width.

   **Example:**

   ```css
   @media (orientation: landscape) {
       body {
           background-color: lightgreen;
       }
   }
   ```

3. **Resolution**

   - **`min-resolution`**: Minimum display resolution.
   - **`max-resolution`**: Maximum display resolution.

   **Example:**

   ```css
   @media (min-resolution: 2dppx) {
       img {
           width: 50%;
       }
   }
   ```

### Combining Media Queries

Media queries can be combined using logical operators such as `and`, `not`, and `only`.

1. **`and`**

   **Example:**

   ```css
   @media (min-width: 600px) and (max-width: 1200px) {
       body {
           background-color: lightcoral;
       }
   }
   ```

2. **`not`**

   **Example:**

   ```css
   @media not (min-width: 600px) {
       body {
           background-color: lightgray;
       }
   }
   ```

3. **`only`**

   **Example:**

   ```css
   @media only screen and (max-width: 600px) {
       body {
           background-color: lightyellow;
       }
   }
   ```

### Practical Example

Here is a complete example demonstrating various media queries in an HTML document:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Media Queries</title>
    <style>
        body {
            font-size: 16px;
            background-color: white;
        }

        /* Change font size for larger screens */
        @media (min-width: 768px) {
            body {
                font-size: 18px;
            }
        }

        /* Change background color for smaller screens */
        @media (max-width: 600px) {
            body {
                background-color: lightblue;
            }
        }

        /* Change background color for landscape orientation */
        @media (orientation: landscape) {
            body {
                background-color: lightgreen;
            }
        }

        /* Change image size for high-resolution displays */
        @media (min-resolution: 2dppx) {
            img {
                width: 50%;
            }
        }
    </style>
</head>
<body>
    <h1>Responsive Design with CSS Media Queries</h1>
    <p>Resize the browser window to see the effects of the media queries.</p>
    <img src="https://via.placeholder.com/300" alt="Placeholder Image">
</body>
</html>
```

### Key Points

- **Flexibility**: Media queries allow you to apply styles based on device characteristics.
- **Responsiveness**: They are essential for creating responsive designs that adapt to different screen sizes and orientations.
- **Logical Operators**: Combine media queries using `and`, `not`, and `only` for more complex conditions.

CSS media queries are a foundational tool in responsive web design, enabling you to create adaptable and user-friendly interfaces for various devices and screen sizes.