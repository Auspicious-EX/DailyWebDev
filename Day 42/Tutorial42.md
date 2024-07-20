# Tutorial **42** Notes

The `object-fit` and `object-cover` properties in CSS are used to control how an image or video should be resized to fit its container.

## `object-fit` Property

The `object-fit` property specifies how the content of a replaced element, such as an `<img>` or `<video>`, should be resized to fit its container.

#### Values
- `fill`: The default value. The content stretches to fill the container, which may distort the image.
- `contain`: The content is scaled to maintain its aspect ratio while fitting within the container. The entire content will be visible, but there may be empty space in the container.
- `cover`: The content is scaled to maintain its aspect ratio while filling the container. The entire container is covered, but some parts of the content may be clipped.
- `none`: The content is not resized, and may overflow the container.
- `scale-down`: The content is scaled down to the smallest size where both `none` and `contain` would fit the content within the container.

### Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Object-Fit Example</title>
    <style>
        .container {
            width: 300px;
            height: 200px;
            border: 2px solid black;
            margin-bottom: 20px;
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
        <img src="https://via.placeholder.com/500x300" alt="Example Image" class="fill">
    </div>
    <div class="container">
        <img src="https://via.placeholder.com/500x300" alt="Example Image" class="contain">
    </div>
    <div class="container">
        <img src="https://via.placeholder.com/500x300" alt="Example Image" class="cover">
    </div>
    <div class="container">
        <img src="https://via.placeholder.com/500x300" alt="Example Image" class="none">
    </div>
    <div class="container">
        <img src="https://via.placeholder.com/500x300" alt="Example Image" class="scale-down">
    </div>
</body>
</html>
```

### Explanation

- **Container**: Each image is placed inside a container of fixed dimensions (300x200 pixels) to demonstrate how `object-fit` affects the image.
- **`object-fit: fill`**: The image stretches to fill the container, which may distort the image.
- **`object-fit: contain`**: The image scales to maintain its aspect ratio while fitting within the container, leaving empty space if necessary.
- **`object-fit: cover`**: The image scales to cover the entire container while maintaining its aspect ratio, potentially clipping some parts of the image.
- **`object-fit: none`**: The image retains its original size and aspect ratio, which may cause it to overflow the container.
- **`object-fit: scale-down`**: The image scales down to the smallest size where both `none` and `contain` would fit the content within the container.

### Practical Usage

The `object-fit: cover` and `object-fit: contain` values are commonly used for responsive design, especially for images and videos that need to adapt to different screen sizes while maintaining a good visual appearance.

By using these properties, you can ensure that media content is displayed correctly, without distortion or overflow, making your web pages more visually appealing and user-friendly.