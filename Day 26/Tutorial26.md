# Tutorial **26** Notes

**Note:** ***We will use it in Navbars and more fixed element in website***

## CSS Position Property

The `position` property in CSS is used to specify the positioning method for an element. It determines how an element is positioned in the document and how it interacts with other elements.

#### Property Values

1. **`static`**: The default value. The element is positioned according to the normal flow of the document. `top`, `right`, `bottom`, and `left` properties have no effect.

2. **`relative`**: The element is positioned relative to its normal position. The `top`, `right`, `bottom`, and `left` properties will offset it from its normal position.

3. **`absolute`**: The element is positioned relative to its nearest positioned ancestor (an ancestor with a `position` value other than `static`). If no such ancestor exists, it is positioned relative to the initial containing block (usually the viewport).

4. **`fixed`**: The element is positioned relative to the viewport, which means it stays in the same place even if the page is scrolled.

5. **`sticky`**: The element is positioned based on the user's scroll position. It toggles between `relative` and `fixed`, depending on the scroll position.

### Usage Examples

#### 1. `position: static;`

**Example:**

```css
div {
    position: static;
}
```

In this example, the `div` element will follow the normal flow of the document without any offset.

#### 2. `position: relative;`

**Example:**

```css
div {
    position: relative;
    top: 20px;
    left: 30px;
}
```

Here, the `div` element is moved 20px down and 30px to the right from its normal position.

#### 3. `position: absolute;`

**Example:**

```css
.container {
    position: relative;
}

.absolute {
    position: absolute;
    top: 20px;
    left: 30px;
}
```

In this case, the `.absolute` element is positioned 20px from the top and 30px from the left of its nearest positioned ancestor (`.container`).

#### 4. `position: fixed;`

**Example:**

```css
.fixed {
    position: fixed;
    top: 0;
    right: 0;
    width: 100px;
    background-color: yellow;
}
```

The `.fixed` element will always stay at the top-right corner of the viewport, even when the page is scrolled.

#### 5. `position: sticky;`

**Example:**

```css
.sticky {
    position: sticky;
    top: 0;
    background-color: lightblue;
    padding: 10px;
}
```

The `.sticky` element will stick to the top of the viewport when you scroll past it.

### Practical Example

Here is a practical example demonstrating different `position` values:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Position Property</title>
    <style>
        .static {
            position: static;
            background-color: lightcoral;
        }

        .relative {
            position: relative;
            top: 10px;
            left: 20px;
            background-color: lightgreen;
        }

        .absolute {
            position: absolute;
            top: 50px;
            left: 50px;
            background-color: lightblue;
        }

        .fixed {
            position: fixed;
            bottom: 0;
            right: 0;
            width: 100px;
            background-color: yellow;
        }

        .sticky {
            position: sticky;
            top: 0;
            background-color: lightpink;
            padding: 10px;
        }

        .container {
            height: 200px;
            border: 1px solid black;
            margin-bottom: 20px;
            position: relative;
        }

        .content {
            height: 1000px;
        }
    </style>
</head>
<body>
    <h1>CSS Position Property Examples</h1>

    <div class="container static">
        <p>This is a static positioned element.</p>
    </div>

    <div class="container relative">
        <p>This is a relatively positioned element.</p>
    </div>

    <div class="container">
        <p class="absolute">This is an absolutely positioned element.</p>
    </div>

    <div class="content">
        <p class="sticky">This is a sticky positioned element.</p>
        <p>Scroll down to see the fixed positioned element.</p>
    </div>

    <div class="fixed">
        <p>This is a fixed positioned element.</p>
    </div>
</body>
</html>
```

### Key Points

- **`static`**: Default positioning, follows normal document flow.
- **`relative`**: Positioned relative to its normal position.
- **`absolute`**: Positioned relative to the nearest positioned ancestor.
- **`fixed`**: Positioned relative to the viewport, remains fixed during scrolling.
- **`sticky`**: Positioned based on the scroll position, toggles between `relative` and `fixed`.

Understanding the `position` property is crucial for creating complex layouts and ensuring elements are positioned correctly within the document.

<hr>

### CSS Position Property Exceptions

In CSS, certain properties can make an element behave as if it is positioned, even if the `position` property is not set. These properties can affect the stacking context and the rendering order of elements. Below are the exceptions mentioned in your code:

1. **`transform`**
2. **`filter`**
3. **`perspective`**

These properties can create a new stacking context, making the element behave similarly to how a positioned element (e.g., `relative`, `absolute`, `fixed`, or `sticky`) behaves.

#### 1. `transform`

The `transform` property applies a 2D or 3D transformation to an element. When applied, it creates a new local coordinate system for its children, and the element acts as a containing block for its absolutely positioned descendants.

**Example:**

```css
.element {
    transform: translate(10px, 20px);
}
```

In your code:

```css
.perent {
    /* ... */
    transform: translate(0);
}
```

Here, the `transform: translate(0)` property ensures that the `.perent` element acts as a positioned element, even though the `position` property might not explicitly be set to `relative`, `absolute`, `fixed`, or `sticky`.

#### 2. `filter`

The `filter` property applies graphical effects like blur, brightness, or contrast to an element. Similar to `transform`, it creates a new stacking context.

**Example:**

```css
.element {
    filter: blur(5px);
}
```

Although `filter` is not used in your code, applying it to an element would make it behave as if it is positioned, affecting its stacking context.

#### 3. `perspective`

The `perspective` property gives an element a 3D-space perspective view. This property applies a perspective transform to the children of the element.

**Example:**

```css
.container {
    perspective: 1000px;
}
```

Again, while `perspective` is not directly used in your code, it can affect how child elements are rendered and stacked.

### Conclusion

Even if an element does not have its `position` property set to `relative`, `absolute`, `fixed`, or `sticky`, using properties like `transform`, `filter`, or `perspective` can create a new stacking context, affecting how the element and its children are rendered and positioned within the document. In your code, the `transform: translate(0)` property on the `.perent` element makes it behave as if it is positioned, demonstrating one of these exceptions.