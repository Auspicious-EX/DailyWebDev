# Tutorial **25** Notes

## CSS Overflow Property

The `overflow` property in CSS controls how content that overflows an element's box is handled. It's useful for managing content that exceeds the size of its container, ensuring that your design remains clean and usable.

#### Property Values

1. **`visible`**: The default value. Content is not clipped and will render outside the element's box.
2. **`hidden`**: Content is clipped and not visible beyond the element's box.
3. **`scroll`**: Content is clipped, but a scrollbar is added to allow users to scroll to see the content.
4. **`auto`**: Similar to `scroll`, but scrollbars are added only when necessary (i.e., when the content overflows).

### Usage Examples

#### 1. `overflow: visible;`

**Example:**

```css
div {
    width: 200px;
    height: 100px;
    overflow: visible;
    background-color: lightblue;
}
```

In this example, if the content inside the `div` exceeds its width or height, it will spill out of the `div` boundaries.

#### 2. `overflow: hidden;`

**Example:**

```css
div {
    width: 200px;
    height: 100px;
    overflow: hidden;
    background-color: lightblue;
}
```

Here, any content that exceeds the boundaries of the `div` will be clipped and not visible.

#### 3. `overflow: scroll;`

**Example:**

```css
div {
    width: 200px;
    height: 100px;
    overflow: scroll;
    background-color: lightblue;
}
```

This will add scrollbars to the `div` regardless of whether the content overflows or not.

#### 4. `overflow: auto;`

**Example:**

```css
div {
    width: 200px;
    height: 100px;
    overflow: auto;
    background-color: lightblue;
}
```

With `auto`, scrollbars are added only if the content overflows the `div`.

### Practical Example

Here is a practical example combining different `overflow` values in an HTML file:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Overflow Property</title>
    <style>
        .container {
            width: 200px;
            height: 100px;
            margin-bottom: 20px;
            background-color: lightblue;
        }

        .visible {
            overflow: visible;
        }

        .hidden {
            overflow: hidden;
        }

        .scroll {
            overflow: scroll;
        }

        .auto {
            overflow: auto;
        }
    </style>
</head>
<body>
    <h1>CSS Overflow Property Examples</h1>

    <div class="container visible">
        <p>This is a visible overflow example. The content will overflow outside of the container.</p>
    </div>

    <div class="container hidden">
        <p>This is a hidden overflow example. The content that exceeds the boundaries will be clipped.</p>
    </div>

    <div class="container scroll">
        <p>This is a scroll overflow example. The content that exceeds the boundaries will cause scrollbars to appear.</p>
    </div>

    <div class="container auto">
        <p>This is an auto overflow example. Scrollbars will appear only if necessary.</p>
    </div>
</body>
</html>
```

### Key Points

- **`visible`**: Content overflows the container, and no clipping occurs.
- **`hidden`**: Content is clipped and invisible beyond the container's bounds.
- **`scroll`**: Content is clipped, but scrollbars are added to access the overflowed content.
- **`auto`**: Scrollbars are added only when necessary based on content overflow.

Understanding the `overflow` property is essential for creating responsive and user-friendly web designs, ensuring that content is always accessible and properly displayed.