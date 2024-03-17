![Banner](https://github.com/Auspicious-EX/DailyWebDev/blob/main/Day%2012/images/banner.gif?raw=true)

# Tutorial **12** Notes


## Exercise 1 - Media Gallery Website

## Task Description

Design a website using HTML only to showcase 12 media files: 6 audio files (1.mp3 to 6.mp3) and 6 video files (1.mp4 to 6.mp4).

## Solution

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

    <h2>Audio Files</h2>
    <div>
        <h3>Audio 1</h3>
        <audio controls>
            <source src="1.mp3" type="audio/mpeg">
            Your browser does not support the audio tag.
        </audio>
    </div>
    <div>
        <h3>Audio 2</h3>
        <audio controls>
            <source src="2.mp3" type="audio/mpeg">
            Your browser does not support the audio tag.
        </audio>
    </div>
    <!-- Repeat the above pattern for all 6 audio files -->

    <h2>Video Files</h2>
    <div>
        <h3>Video 1</h3>
        <video width="400" controls>
            <source src="1.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    </div>
    <div>
        <h3>Video 2</h3>
        <video width="400" controls>
            <source src="2.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    </div>
    <!-- Repeat the above pattern for all 6 video files -->
</body>
</html>
```