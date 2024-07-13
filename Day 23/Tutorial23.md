# Tutorial **23** Notes

## CSS Shadows and Outlines

CSS allows you to add shadows and outlines to elements, providing depth, focus, and visual separation in your designs. Here, we will explore `box-shadow`, `text-shadow`, and `outline` properties.

### 1. Box Shadows (`box-shadow`)

The `box-shadow` property adds shadow effects to an element's frame. It can create single or multiple shadows.

**Syntax:**

```css
box-shadow: [horizontal offset] [vertical offset] [blur radius] [spread radius] [color];
```

**Example:**

```css
div {
    width: 200px;
    height: 200px;
    background-color: lightblue;
    box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
}
```

- **Horizontal offset**: Position of the shadow horizontally (positive values move the shadow to the right, negative to the left).
- **Vertical offset**: Position of the shadow vertically (positive values move the shadow down, negative up).
- **Blur radius**: Amount of blur applied to the shadow (optional, default is 0).
- **Spread radius**: Size of the shadow (optional, positive values increase, negative values decrease).
- **Color**: Color of the shadow (can use any valid CSS color).

**Multiple Shadows:**

```css
div {
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5), -5px -5px 5px rgba(255, 0, 0, 0.5);
}
```

### 2. Text Shadows (`text-shadow`)

The `text-shadow` property adds shadow effects to text.

**Syntax:**

```css
text-shadow: [horizontal offset] [vertical offset] [blur radius] [color];
```

**Example:**

```css
p {
    font-size: 24px;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
}
```

### 3. Outlines (`outline`)

The `outline` property draws a line outside the element's border. It does not take up space and does not affect the layout.

**Syntax:**

```css
outline: [outline-width] [outline-style] [outline-color];
```

**Example:**

```css
button {
    outline: 2px solid red;
}
```

- **Outline width**: Thickness of the outline.
- **Outline style**: Style of the outline (solid, dashed, dotted, etc.).
- **Outline color**: Color of the outline.

**Outline Offset:**

The `outline-offset` property specifies the space between the element and the outline.

```css
button {
    outline: 2px solid red;
    outline-offset: 5px;
}
```

### Practical Example

Here's an example combining `box-shadow`, `text-shadow`, and `outline`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Shadows and Outlines</title>
    <style>
        .box {
            width: 200px;
            height: 200px;
            background-color: lightblue;
            box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.5);
            margin: 20px;
        }

        .text {
            font-size: 24px;
            color: navy;
            text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
        }

        .outlined-button {
            padding: 10px 20px;
            outline: 2px dashed red;
            outline-offset: 5px;
        }
    </style>
</head>
<body>
    <div class="box">Box with Shadow</div>
    <p class="text">Text with Shadow</p>
    <button class="outlined-button">Button with Outline</button>
</body>
</html>
```

### Key Points:

- **`box-shadow`**: Adds shadow to the element’s frame.
  - Syntax: `box-shadow: [horizontal offset] [vertical offset] [blur radius] [spread radius] [color];`
  - Can have multiple shadows separated by commas.
  
- **`text-shadow`**: Adds shadow to text.
  - Syntax: `text-shadow: [horizontal offset] [vertical offset] [blur radius] [color];`
  - Useful for creating text emphasis and depth.

- **`outline`**: Adds a line outside the element's border.
  - Syntax: `outline: [outline-width] [outline-style] [outline-color];`
  - Does not affect layout and does not take up space.
  - `outline-offset` can be used to add space between the outline and the element.

Understanding these properties allows you to create visually appealing and well-defined elements, enhancing the user interface of your web pages.


### Click Here to  learn more about this topic 
 [CSS Shadows and Outlines | CWH ] (https://www.codewithharry.com/tutorial/css-shadows/)