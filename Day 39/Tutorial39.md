# Tutorial **39** Notes

## Transition property

The CSS transition property is used to create smooth animations when CSS properties change. It allows for changes in CSS property values to occur over a specified duration, making the transition from one style to another smoother and more visually appealing.

### Definition
The `transition` property is a shorthand for the following four individual properties:
- `transition-property`: Specifies the name of the CSS property the transition effect is for.
- `transition-duration`: Specifies how many seconds or milliseconds the transition effect takes to complete.
- `transition-timing-function`: Specifies the speed curve of the transition effect.
- `transition-delay`: Specifies when the transition effect will start.

### Syntax
```css
element {
  transition: property duration timing-function delay;
}
```
### Example

Here's an example of how to use the `transition` property:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Transition Example</title>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background-color: blue;
            transition: width 2s, background-color 1s, transform 0.5s;
        }

        .box:hover {
            width: 200px;
            background-color: red;
            transform: rotate(45deg);
        }
    </style>
</head>
<body>
    <div class="box"></div>
</body>
</html>
```

### Explanation
- **Initial State**: The `.box` element has an initial width of 100px, height of 100px, and a blue background color.
- **Transition**: The `transition` property is set to change the `width`, `background-color`, and `transform` properties with different durations.
  - `width` will change over 2 seconds.
  - `background-color` will change over 1 second.
  - `transform` will change over 0.5 seconds.
- **Hover State**: When the `.box` is hovered over, it will:
  - Expand to a width of 200px.
  - Change its background color to red.
  - Rotate by 45 degrees.

### Transition-Timing-Function Values
The `transition-timing-function` property can take various values to control the speed curve of the transition:
- `ease`: Starts slow, then fast, then ends slowly.
- `linear`: Constant speed from start to end.
- `ease-in`: Starts slow and accelerates.
- `ease-out`: Starts fast and decelerates.
- `ease-in-out`: Starts slow, speeds up, then slows down.
- `cubic-bezier(n,n,n,n)`: Define your own values in a cubic-bezier function.

### Transition-Delay
The `transition-delay` property specifies a delay before the transition starts. It can be set to:
- `0s` or `0ms` (default): No delay.
- Any other value to delay the start of the transition.

```css
.box {
    transition: width 2s, background-color 1s, transform 0.5s 0.2s;
}
```

In this example, the `transform` property will start transitioning 0.2 seconds after the other transitions start.

### Key Points
- The `transition` property is a powerful tool for creating smooth animations.
- Multiple properties can be transitioned at once, each with its own duration, timing function, and delay.
- Use the `:hover`, `:focus`, or other pseudo-classes to trigger transitions.