![Banner](https://github.com/Auspicious-EX/DailyWebDev/blob/main/Day%2002/images/banner.gif?raw=true)

# Tutorial **2** Notes

## Connecting CSS and JS Files with HTML

In web development, it's common to use separate CSS (Cascading Style Sheets) and JS (JavaScript) files to keep code organized and maintainable. Here's how you can connect these files with your HTML documents:

### Connecting CSS Files

You can link an external CSS file to your HTML document using the `<link>` tag within the `<head>` section. Here's the syntax:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Your HTML content goes here -->
</body>
</html>
```

### Connecting JS Files
- You can include an external JS file in your HTML document using the < script > tag. Place this tag either in the < head > or at the end of the < body >. Here's how to do it:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="script.js"></script>
</head>
<body>
    <!-- Your HTML content goes here -->
</body>
</html>
```
- In this example: src="script.js" specifies the path to your JavaScript file. Replace script.js with the actual filename and path.

### Internal CSS and JS:
- Alternatively, you can also include CSS and JS directly within your HTML document using < style > and < script > tags respectively. Here's an example:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        /* Your CSS code goes here */
    </style>
</head>
<body>
    <!-- Your HTML content goes here -->
    
    <script>
        // Your JavaScript code goes here
    </script>
</body>
</html>
```
