# Tutorial **31** Notes

## CSS Float & Clear

The `float` property in CSS is used to position an element to the left or right of its container, allowing text and inline elements to wrap around it. The `clear` property is used to control the behavior of floating elements, ensuring that elements don't wrap around or appear next to floated elements.

### Float Property

The `float` property can take the following values:
- **left**: The element floats to the left of its container.
- **right**: The element floats to the right of its container.
- **none**: The element does not float (default).
- **inherit**: The element inherits the float value of its parent.

**Example:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Float Example</title>
    <style>
        .container {
            width: 100%;
            background-color: #f0f0f0;
        }
        .box {
            width: 200px;
            height: 100px;
            margin: 10px;
            background-color: #3498db;
            float: left;
        }
        .text {
            margin: 10px;
            background-color: #ecf0f1;
            padding: 10px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="box">Float Left</div>
        <div class="box">Float Left</div>
        <div class="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
    </div>
</body>
</html>
```

In this example, the `.box` elements float to the left, and the text wraps around them.

### Clear Property

The `clear` property can take the following values:
- **left**: No floating elements allowed on the left side.
- **right**: No floating elements allowed on the right side.
- **both**: No floating elements allowed on either side.
- **none**: Allows floating elements on both sides (default).

**Example:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Clear Example</title>
    <style>
        .container {
            width: 100%;
            background-color: #f0f0f0;
        }
        .box {
            width: 200px;
            height: 100px;
            margin: 10px;
            background-color: #3498db;
            float: left;
        }
        .clear {
            clear: both;
        }
        .footer {
            background-color: #2ecc71;
            padding: 10px;
            margin: 10px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="box">Float Left</div>
        <div class="box">Float Left</div>
        <div class="clear"></div>
        <div class="footer">This is the footer, which is cleared from floats.</div>
    </div>
</body>
</html>
```

In this example, the `.clear` element ensures that the `.footer` element does not wrap around or appear next to the floated `.box` elements.

### Key Points

- **Float**: The `float` property is used to position an element to the left or right of its container, allowing other content to wrap around it.
- **Clear**: The `clear` property is used to control the behavior of floating elements, ensuring that elements do not wrap around or appear next to floated elements.
- **Usage**: Floats are often used for creating simple layouts, but they have largely been replaced by more modern techniques like Flexbox and Grid for complex layouts.

### Practical Example

Here is a combined example demonstrating both `float` and `clear` properties:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Float and Clear Example</title>
    <style>
        .container {
            width: 100%;
            background-color: #f0f0f0;
            overflow: hidden; /* To contain the floats */
        }
        .box {
            width: 200px;
            height: 100px;
            margin: 10px;
            background-color: #3498db;
            float: left;
        }
        .text {
            margin: 10px;
            background-color: #ecf0f1;
            padding: 10px;
        }
        .clear {
            clear: both;
        }
        .footer {
            background-color: #2ecc71;
            padding: 10px;
            margin: 10px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="box">Float Left</div>
        <div class="box">Float Left</div>
        <div class="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
        <div class="clear"></div>
        <div class="footer">This is the footer, which is cleared from floats.</div>
    </div>
</body>
</html>
```

In this example, the `.clear` element is used to ensure that the `.footer` element appears below the floated `.box` elements. The `overflow: hidden` property on the `.container` is used to contain the floated elements, preventing overflow issues.