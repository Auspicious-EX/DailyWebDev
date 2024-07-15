# Tutorial **28** Notes

## CSS Variables

CSS variables, also known as custom properties, allow you to store values that you can reuse throughout your CSS. They help keep your CSS DRY (Don't Repeat Yourself), making it easier to maintain and update.

#### Defining CSS Variables

CSS variables are defined using the `--` prefix and are typically declared within a `:root` selector to make them globally accessible.

**Example:**

```css
:root {
    --primary-color: #3498db;
    --secondary-color: #2ecc71;
    --font-size: 16px;
}
```

#### Using CSS Variables

To use a CSS variable, you use the `var()` function.

**Example:**

```css
body {
    color: var(--primary-color);
    font-size: var(--font-size);
}

h1 {
    background-color: var(--secondary-color);
}
```

### Practical Example

Here is a complete example demonstrating how to define and use CSS variables in an HTML document:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Variables Example</title>
    <style>
        :root {
            --primary-color: #3498db;
            --secondary-color: #2ecc71;
            --font-size: 16px;
            --padding: 10px;
            --margin: 20px;
        }

        body {
            color: var(--primary-color);
            font-size: var(--font-size);
            margin: var(--margin);
        }

        h1 {
            background-color: var(--secondary-color);
            padding: var(--padding);
        }

        .box {
            border: 2px solid var(--primary-color);
            padding: var(--padding);
            margin: var(--margin);
        }
    </style>
</head>
<body>
    <h1>Using CSS Variables</h1>
    <div class="box">This is a box with padding and margin set using CSS variables.</div>
</body>
</html>
```

### Key Points

- **Defining Variables**: Use the `--` prefix and typically declare within `:root` for global scope.
- **Using Variables**: Use the `var()` function to insert the variable's value.
- **Advantages**: Makes your CSS easier to maintain and update by avoiding repetition.

### Additional Features

#### Fallback Values

You can provide a fallback value for a CSS variable in case it is not defined.

**Example:**

```css
p {
    color: var(--non-existent-variable, black);
}
```

In this example, if `--non-existent-variable` is not defined, the text color will default to `black`.

#### Local Scope

CSS variables can also be defined within specific selectors to limit their scope.

**Example:**

```css
.container {
    --container-padding: 20px;
}

.container p {
    padding: var(--container-padding);
}
```

In this example, `--container-padding` is only available within elements that are descendants of `.container`.

### Conclusion

CSS variables provide a powerful way to manage and reuse values throughout your stylesheets. They improve code maintainability, reduce repetition, and allow for more flexible and dynamic styling.