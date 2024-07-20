# Tutorial **43** Notes

CSS filters are powerful tools that allow you to manipulate the appearance of elements (such as images, backgrounds, and more) by applying visual effects. They can be used to apply blur, brightness, contrast, and other effects to elements on your webpage.

## CSS Filters

CSS filters can be applied using the `filter` property, which supports various filter functions. Multiple filter functions can be applied to a single element by listing them with space-separated values.

### Filter Functions

1. **blur()**: Applies a Gaussian blur to the element.
   ```css
   filter: blur(5px);
   ```

2. **brightness()**: Adjusts the brightness of the element. Values greater than 1 increase brightness, and values less than 1 decrease it.
   ```css
   filter: brightness(1.5);
   ```

3. **contrast()**: Adjusts the contrast of the element. Values greater than 1 increase contrast, and values less than 1 decrease it.
   ```css
   filter: contrast(200%);
   ```

4. **drop-shadow()**: Applies a drop shadow effect to the element.
   ```css
   filter: drop-shadow(10px 10px 5px black);
   ```

5. **grayscale()**: Converts the element to grayscale. A value of 100% fully desaturates the element.
   ```css
   filter: grayscale(100%);
   ```

6. **hue-rotate()**: Rotates the hue of the element by the specified angle (in degrees).
   ```css
   filter: hue-rotate(90deg);
   ```

7. **invert()**: Inverts the colors of the element. A value of 100% fully inverts the colors.
   ```css
   filter: invert(100%);
   ```

8. **opacity()**: Adjusts the opacity of the element.
   ```css
   filter: opacity(50%);
   ```

9. **saturate()**: Adjusts the color saturation of the element. Values greater than 1 increase saturation, and values less than 1 decrease it.
   ```css
   filter: saturate(200%);
   ```

10. **sepia()**: Converts the element to sepia tone.
    ```css
    filter: sepia(100%);
    ```

### Applying Multiple Filters

You can apply multiple filters by separating them with spaces.
```css
filter: blur(2px) brightness(1.2) contrast(150%);
```

### Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Filters Example</title>
    <style>
        .filtered-image {
            width: 300px;
            height: 200px;
            filter: brightness(1.5) contrast(200%) grayscale(50%);
        }
    </style>
</head>
<body>
    <img src="https://via.placeholder.com/400x300" alt="Example Image" class="filtered-image">
</body>
</html>
```

### Summary

- **CSS filters** are used to apply visual effects to elements.
- **Filter functions** include blur, brightness, contrast, drop-shadow, grayscale, hue-rotate, invert, opacity, saturate, and sepia.
- **Multiple filters** can be applied simultaneously by listing them with space-separated values.

CSS filters provide a straightforward way to enhance the visual appeal of your web elements without needing external image editing tools.