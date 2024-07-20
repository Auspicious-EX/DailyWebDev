# Tutorial **42** Notes

## CSS Object-fit and Object-cover

The `object-fit` and `object-position` properties in CSS are used to specify how images or videos should be resized to fit their container, while maintaining their aspect ratio.

### Object-fit Property

The `object-fit` property defines how an element, such as an `<img>` or a `<video>`, should be resized to fit its container. This is particularly useful for responsive design, where you need images or videos to adapt to different container sizes.

#### Values

- **`fill`**: This is the default value. The replaced content is resized to fill the element’s content box. The entire object will completely fill the container, which may cause the object to be stretched or squished.

- **`contain`**: The content is scaled to maintain its aspect ratio while fitting within the element’s content box. This ensures that the entire object is visible, but there may be empty space within the container.

- **`cover`**: The content is scaled to maintain its aspect ratio while filling the element’s content box. The object will cover the entire container, but parts of it may be clipped to maintain the aspect ratio.

- **`none`**: The content is not resized.

- **`scale-down`**: The content is scaled down to either `contain` or `none`, whichever results in a smaller size.

#### Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Object-fit Example</title>
    <style>
        .container {
            width: 300px;
            height: 200px;
            border: 2px solid black;
        }
        .fill {
            object-fit: fill;
        }
        .contain {
            object-fit: contain;
        }
        .cover {
            object-fit: cover;
        }
        .none {
            object-fit: none;
        }
        .scale-down {
            object-fit: scale-down;
        }
    </style>
</head>
<body>
    <div class="container">
        <img src="https://via.placeholder.com/400x300" alt="Example Image" class="fill">
    </div>
    <div class="container">
        <img src="https://via.placeholder.com/400x300" alt="Example Image" class="contain">
    </div>
    <div class="container">
        <img src="https://via.placeholder.com/400x300" alt="Example Image" class="cover">
    </div>
    <div class="container">
        <img src="https://via.placeholder.com/400x300" alt="Example Image" class="none">
    </div>
    <div class="container">
        <img src="https://via.placeholder.com/400x300" alt="Example Image" class="scale-down">
    </div>
</body>
</html>
```

### Object-position Property

The `object-position` property specifies the alignment of the content within its container. This property works in conjunction with `object-fit`.

#### Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Object-position Example</title>
    <style>
        .container {
            width: 300px;
            height: 200px;
            border: 2px solid black;
        }
        .positioned {
            object-fit: cover;
            object-position: top left;
        }
    </style>
</head>
<body>
    <div class="container">
        <img src="https://via.placeholder.com/400x300" alt="Example Image" class="positioned">
    </div>
</body>
</html>
```

### Using `object-fit: cover` with Background Images

While `object-fit` is used for elements like `<img>` and `<video>`, similar effects can be achieved for background images using `background-size` and `background-position`.

#### Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Background Image Example</title>
    <style>
        .container {
            width: 300px;
            height: 200px;
            border: 2px solid black;
            background-image: url('https://via.placeholder.com/400x300');
            background-size: cover; /* Similar to object-fit: cover */
            background-position: center; /* Similar to object-position: center */
        }
    </style>
</head>
<body>
    <div class="container"></div>
</body>
</html>
```

### Summary

- **`object-fit`**: Used to control how an image or video fits into its container.
- **`object-position`**: Used to control the position of the content within its container.
- **Background Images**: Use `background-size` and `background-position` to achieve similar effects for background images.

These properties are essential for creating responsive and visually appealing layouts in modern web design.