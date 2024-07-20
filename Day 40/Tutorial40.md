# Tutorial **40** Notes

## Animations

CSS  allow you to create complex sequences of transitions or transformations on HTML elements. Using keyframes, you can define the start, intermediate, and end points of an animation, and control the timing and speed of the animation using various properties.

### Key Properties

1. **@keyframes**
   - Defines the keyframes (frames or stages) of the animation.
   - Each keyframe can specify styles for the element at certain points in the animation sequence.

2. **animation**
   - A shorthand property for setting various animation properties at once.
   - Properties include: `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`, `animation-fill-mode`, and `animation-play-state`.

### Syntax

```css
@keyframes animation-name {
  0% { /* Styles at the start of the animation */ }
  50% { /* Styles at the middle of the animation */ }
  100% { /* Styles at the end of the animation */ }
}

.element {
  animation: animation-name duration timing-function delay iteration-count direction fill-mode play-state;
}
```

### Example

Here's an example of a simple animation:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Animation Example</title>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background-color: blue;
            animation: moveAndChangeColor 5s ease-in-out infinite;
        }

        @keyframes moveAndChangeColor {
            0% {
                transform: translateX(0);
                background-color: blue;
            }
            50% {
                transform: translateX(200px);
                background-color: green;
            }
            100% {
                transform: translateX(0);
                background-color: blue;
            }
        }
    </style>
</head>
<body>
    <div class="box"></div>
</body>
</html>
```

### Explanation

- **@keyframes moveAndChangeColor**: Defines the stages of the animation.
  - At 0%, the box is at the starting position with a blue background.
  - At 50%, the box moves 200px to the right and changes its background color to green.
  - At 100%, the box returns to the starting position with a blue background.
  
- **.box**: The `.box` class applies the animation:
  - `animation: moveAndChangeColor 5s ease-in-out infinite`: 
    - `moveAndChangeColor` is the name of the animation.
    - `5s` is the duration of the animation.
    - `ease-in-out` specifies the timing function.
    - `infinite` means the animation will repeat indefinitely.

### Animation Properties

- **animation-name**: Specifies the name of the keyframe animation.
- **animation-duration**: Specifies the duration of the animation (e.g., `2s`, `500ms`).
- **animation-timing-function**: Specifies the speed curve of the animation (`linear`, `ease`, `ease-in`, `ease-out`, `ease-in-out`, or `cubic-bezier`).
- **animation-delay**: Specifies a delay before the animation starts (e.g., `1s`, `200ms`).
- **animation-iteration-count**: Specifies the number of times the animation should repeat (`1`, `2`, `infinite`).
- **animation-direction**: Specifies whether the animation should play forwards, backwards, or alternate (`normal`, `reverse`, `alternate`, `alternate-reverse`).
- **animation-fill-mode**: Specifies how a CSS animation should apply styles to its target before and after it is executing (`none`, `forwards`, `backwards`, `both`).
- **animation-play-state**: Specifies whether the animation is running or paused (`running`, `paused`).

### Example with Multiple Properties

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Complex CSS Animation Example</title>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background-color: blue;
            animation: moveAndChangeColor 5s ease-in-out 1s infinite alternate both;
        }

        @keyframes moveAndChangeColor {
            0% {
                transform: translateX(0);
                background-color: blue;
            }
            50% {
                transform: translateX(200px);
                background-color: green;
            }
            100% {
                transform: translateX(0);
                background-color: blue;
            }
        }
    </style>
</head>
<body>
    <div class="box"></div>
</body>
</html>
```

### Explanation

- **animation: moveAndChangeColor 5s ease-in-out 1s infinite alternate both**:
  - `moveAndChangeColor`: Name of the keyframe animation.
  - `5s`: Duration of 5 seconds.
  - `ease-in-out`: Timing function for smooth start and end.
  - `1s`: 1-second delay before starting.
  - `infinite`: Repeats indefinitely.
  - `alternate`: Alternates direction on each iteration.
  - `both`: Applies styles defined in the keyframes before and after the animation.

CSS animations allow for creating visually engaging effects that enhance the user experience on a webpage. They provide fine control over how elements transition and transform, making web content more dynamic and interactive.