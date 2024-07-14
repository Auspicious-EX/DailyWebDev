# Tutorial **24** Notes

## Styling Lists using CSS

CSS provides various ways to style HTML lists (`<ul>`, `<ol>`, and `<li>` elements). You can customize the appearance of list markers, spacing, alignment, and more.

#### Basic List Types
- **Unordered List (`<ul>`)**: Uses bullet points.
- **Ordered List (`<ol>`)**: Uses numbers or letters.

### Customizing List Markers

**1. List Style Type (`list-style-type`)**
- Defines the type of marker for list items.
- Common values: `disc`, `circle`, `square`, `decimal`, `lower-alpha`, `upper-roman`, etc.

**Example:**

```css
ul {
    list-style-type: square;
}

ol {
    list-style-type: upper-roman;
}
```

### Customizing Marker Position

**2. List Style Position (`list-style-position`)**
- Defines whether the marker is inside or outside the list item’s content.
- Values: `inside`, `outside`.

**Example:**

```css
ul {
    list-style-position: inside;
}

ol {
    list-style-position: outside;
}
```

### Using Custom Images as Markers

**3. List Style Image (`list-style-image`)**
- Replaces the default marker with an image.
- Value: URL of the image.

**Example:**

```css
ul {
    list-style-image: url('path/to/image.png');
}
```

### Combining List Style Properties

**4. List Style (`list-style`)**
- Shorthand for `list-style-type`, `list-style-position`, and `list-style-image`.

**Example:**

```css
ul {
    list-style: square inside url('path/to/image.png');
}
```

### Removing List Markers

**5. Removing Default List Styling**
- Use `list-style: none` to remove markers.
- Helpful when you want to create custom list styles.

**Example:**

```css
ul {
    list-style: none;
    padding: 0;
    margin: 0;
}
```

### Customizing List Item Appearance

**6. Customizing List Item (`<li>`) Styles**
- Apply padding, margins, borders, and other styles to `<li>` elements.

**Example:**

```css
li {
    padding: 10px;
    margin-bottom: 5px;
    border: 1px solid #ccc;
}
```

### Custom Bullet Points

**7. Custom Bullets with Pseudo-elements**
- Use `::before` pseudo-element to create custom bullets.

**Example:**

```css
ul {
    list-style: none;
}

ul li::before {
    content: '•';
    color: red;
    font-size: 20px;
    margin-right: 10px;
}
```

### Practical Example

Here's a practical example demonstrating various list styling techniques:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Styled Lists</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }

        /* Unordered list with custom markers */
        ul.custom-bullets {
            list-style: none;
            padding: 0;
        }

        ul.custom-bullets li::before {
            content: '✔';
            color: green;
            margin-right: 10px;
        }

        /* Ordered list with custom styling */
        ol.custom-ordered {
            list-style-type: lower-alpha;
            padding-left: 20px;
        }

        ol.custom-ordered li {
            margin-bottom: 10px;
        }

        /* List with image markers */
        ul.image-bullets {
            list-style-image: url('https://via.placeholder.com/15');
        }

        /* Remove default styling */
        ul.no-style, ol.no-style {
            list-style: none;
            padding: 0;
        }

        /* Custom styles for list items */
        li.custom-item {
            padding: 10px;
            margin: 5px 0;
            background-color: #f0f0f0;
            border: 1px solid #ddd;
        }
    </style>
</head>
<body>
    <h2>Custom Bullets</h2>
    <ul class="custom-bullets">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>

    <h2>Custom Ordered List</h2>
    <ol class="custom-ordered">
        <li>First item</li>
        <li>Second item</li>
        <li>Third item</li>
    </ol>

    <h2>Image Bullets</h2>
    <ul class="image-bullets">
        <li>Item A</li>
        <li>Item B</li>
        <li>Item C</li>
    </ul>

    <h2>No Style List</h2>
    <ul class="no-style">
        <li class="custom-item">Custom styled item 1</li>
        <li class="custom-item">Custom styled item 2</li>
        <li class="custom-item">Custom styled item 3</li>
    </ul>
</body>
</html>
```

### Key Points:

- **`list-style-type`**: Sets the type of marker (bullet, number, letter, etc.).
- **`list-style-position`**: Defines the position of the marker (inside or outside the list item).
- **`list-style-image`**: Uses an image as the list marker.
- **`list-style`**: Shorthand for setting `list-style-type`, `list-style-position`, and `list-style-image`.
- **Custom bullets**: Use pseudo-elements like `::before` to create custom list markers.
- **Removing default styles**: Use `list-style: none` to remove default list markers for custom styling.

By combining these properties and techniques, you can create visually appealing and unique lists to enhance the design of your web pages.

<hr>



#### `list-style`
- **`list-style: none;`**: Removes the default list marker.
- **`list-style: devanagari;`**: Sets the list marker style to Devanagari numerals (specific to certain browsers and not commonly supported).
- **`list-style: inside;`**: Positions the list marker inside the content box of the `<li>` element.
- **`list-style: url();`**: Replaces the list marker with an image from the specified URL.
- **`list-style: "💖";`**: Attempts to set the list marker type to a custom character (invalid usage here as list-style-type does not support arbitrary characters).

