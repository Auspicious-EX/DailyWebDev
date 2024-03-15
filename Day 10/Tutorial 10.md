![Banner](https://github.com/Auspicious-EX/DailyWebDev/blob/main/Day%2010/images/banner.gif?raw=true)

# Tutorial **10** Notes

In this tutorial, we'll explore various media elements in HTML, including the `<video>`, `<audio>`, `<svg>`, and `<iframe>` tags, along with their attributes and usage.

## Video Tag

The `<video>` tag is used to embed video content in HTML documents. Here are some common attributes:

- **src**: Specifies the URL of the video file.
- **width**: Sets the width of the video player.
- **controls**: Displays video controls (play, pause, volume, etc.).
- **muted**: Specifies whether the audio should be muted by default.
- **loop**: Specifies whether the video should loop when it reaches the end.
- **poster**: Specifies an image to display as the video thumbnail before playback.

### Example:
```html
<video src="video.mp4" width="400" controls loop muted poster="thumbnail.jpg">
    Your browser does not support the video tag.
</video>
```

## Audio Tag
The `<audio>` tag is used to embed audio content in HTML documents. Here are some common attributes:

- **src** : Specifies the URL of the audio file.
- **controls**: Displays audio controls (play, pause, volume, etc.).
- **loop**: Specifies whether the audio should loop when it reaches the end.
- **autoplay**: Specifies whether the audio should start playing automatically.
- **preload**: Specifies whether the audio should be preloaded when the page loads.

### Example:

```html
<audio src="audio.mp3" controls loop autoplay preload>
    Your browser does not support the audio tag.
</audio>
```

## SVG in HTML
SVG (Scalable Vector Graphics) is a markup language for describing two-dimensional graphics in XML. SVG can be embedded directly into HTML documents using the `<svg>` tag.

### Example:
```html
<svg width="100" height="100">
    <circle cx="50" cy="50" r="40" fill="red" />
</svg>
```

## IFRAME in HTML
The `<iframe>` tag is used to embed another HTML document within the current HTML document. It's commonly used for embedding external content like maps, videos, or entire web pages.

### Attributes of iFrame
- Several attributes can enhance the functionality of an iFrame:
    - **src**: Specifies the URL of the page to embed.
    - **height and width**: Define the dimensions.
    - **frameborder**: Indicates whether to display a border.
    - **scrolling**: Controls the scrollbars.
    - **name**: For targeting the iFrame in JavaScript.

### Example:
```html
<iframe src="https://www.example.com" width="600" height="400" frameborder="0" allowfullscreen></iframe>
```

### Why Use iFrames?
- Embedding external content.
- Isolating content from the rest of the page.
- Loading content asynchronously without - affecting the main document.


## Quick Quiz :
#### Create a website which shows videos of different category and audios of different categories.You can use YouTube videos in an iframe using YouTube's embedding feature

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Media Gallery</title>
</head>
<body>
    <h1>Media Gallery</h1>

    <h2>Videos</h2>
    <div>
        <h3>Category 1</h3>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID_1" frameborder="0" allowfullscreen></iframe>
    </div>
    <div>
        <h3>Category 2</h3>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID_2" frameborder="0" allowfullscreen></iframe>
    </div>

    <h2>Audios</h2>
    <div>
        <h3>Category A</h3>
        <audio controls>
            <source src="audio1.mp3" type="audio/mpeg">
            Your browser does not support the audio tag.
        </audio>
    </div>
    <div>
        <h3>Category B</h3>
        <audio controls>
            <source src="audio2.mp3" type="audio/mpeg">
            Your browser does not support the audio tag.
        </audio>
    </div>
</body>
</html>
```
