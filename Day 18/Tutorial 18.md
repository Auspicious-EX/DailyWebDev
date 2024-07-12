# Tutorial 18
### CSS Fonts, Text, and Color Properties

CSS provides a wide range of properties to style text and control typography on web pages. Below is a breakdown of these properties with explanations and examples.

### Fonts

#### 1. Font Family
- Specifies the font for an element.
- Example:
  ```css
  h1 {
    font-family: "Poppins", sans-serif;
  }
  ```

#### 2. Font Size
- Sets the size of the font.
- Example:
  ```css
  h1 {
    font-size: 20px;
  }
  ```

#### 3. Font Style
- Defines the style of the font (normal, italic, oblique).
- Example:
  ```css
  p {
    font-style: italic;
  }
  ```

#### 4. Font Weight
- Specifies the weight (or boldness) of the font.
- Example:
  ```css
  p {
    font-weight: 100;
  }
  ```

#### 5. Font Variant
- Controls the usage of alternate glyphs.
- Example:
  ```css
  p {
    font-variant: small-caps;
  }
  ```

### Text Properties

#### 1. Color
- Sets the color of the text.
- Example:
  ```css
  p {
    color: navy;
  }
  ```

#### 2. Line Height
- Sets the amount of space between lines of text.
- Example:
  ```css
  p {
    line-height: 12px;
  }
  ```

#### 3. Text Transform
- Controls the capitalization of text.
- Example:
  ```css
  h2 {
    text-transform: lowercase;
  }
  ```

#### 4. Text Decoration
- Adds decorations to text (underline, overline, line-through).
- Example:
  ```css
  h2 {
    text-decoration: underline;
    text-decoration-color: blueviolet;
    text-decoration-style: dotted;
    text-decoration-thickness: 8px;
  }
  ```

#### 5. Text Indent
- Indents the first line of text.
- Example:
  ```css
  h2 {
    text-indent: 45px;
  }
  ```

#### 6. Text Overflow
- Specifies how overflowed content that is not displayed should be signaled to the user.
- Example:
  ```css
  p {
    text-overflow: ellipsis;
  }
  ```

#### 7. Letter Spacing
- Sets the space between characters.
- Example:
  ```css
  h1 {
    letter-spacing: 10px;
  }
  ```

### Example HTML and CSS Code

Below is an example using the provided HTML and CSS, incorporating the discussed properties.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Baloo+Tammudu+2:wght@400..800&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Baloo+Tammudu+2:wght@400..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

        h1 {
            font-family: "Poppins", sans-serif;
            font-size: 20px;
            letter-spacing: 10px;
        }
        p {
            font-family: "Baloo Tammudu 2", system-ui;
            font-style: italic;
            font-weight: 100;
            font-size: 10px;
            color: navy;
            line-height: 12px;
            text-overflow: ellipsis;
        }
        h2 {
            text-transform: lowercase;
            text-decoration: underline;
            text-decoration-color: blueviolet;
            text-decoration-style: dotted;
            text-decoration-thickness: 8px;
            text-indent: 45px;
        }
        h3 {
            color: rgb(23, 6, 82);
        }
    </style>
</head>
<body>
    <div>
        <h1>Hello I am Shubham</h1>
        <h2>I am a good boy</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit...</p>
        <h3>OOOOOOJJJJJKKKKK</h3>
    </div>
</body>
</html>
```

### Key Points:

- **Font Properties**:
  - `font-family`: Specifies the font to be used.
  - `font-size`: Sets the size of the text.
  - `font-style`: Defines the style of the font (e.g., italic).
  - `font-weight`: Specifies the thickness of the font.
  - `font-variant`: Controls the usage of alternate glyphs (e.g., small-caps).

- **Text Properties**:
  - `color`: Sets the text color.
  - `line-height`: Specifies the height of each line of text.
  - `text-transform`: Controls the capitalization of text (e.g., uppercase, lowercase).
  - `text-decoration`: Adds decorations to the text (e.g., underline).
  - `text-indent`: Indents the first line of text.
  - `text-overflow`: Handles overflowed content.
  - `letter-spacing`: Sets the space between characters.

Understanding and effectively using these properties will enable you to create well-styled, readable, and visually appealing text on your web pages.

<hr>
### Importing Fonts in CSS

Importing fonts in CSS can be done using the `@font-face` rule or by linking to external font libraries like Google Fonts. Here’s how you can import and use fonts in your CSS.

#### Method 1: Using `@font-face`

The `@font-face` rule allows you to define custom fonts by specifying the font files directly. This method is useful when you have the font files available and want to host them on your server.

1. **Download the Font Files:**
   - Download the font files (e.g., `.woff`, `.woff2`, `.ttf`, `.eot`) that you want to use.

2. **Define the Font with `@font-face`:**
   - Specify the font name and the paths to the font files.

```css
@font-face {
    font-family: 'MyCustomFont';
    src: url('fonts/MyCustomFont.woff2') format('woff2'),
         url('fonts/MyCustomFont.woff') format('woff'),
         url('fonts/MyCustomFont.ttf') format('truetype');
}
```

3. **Use the Custom Font:**
   - Apply the custom font to elements using the `font-family` property.

```css
body {
    font-family: 'MyCustomFont', sans-serif;
}
```

#### Method 2: Using Google Fonts

Google Fonts is a popular service that hosts a wide variety of fonts that you can use for free. You can import fonts from Google Fonts directly into your CSS.

1. **Select Fonts from Google Fonts:**
   - Go to [Google Fonts](https://fonts.google.com/), select the fonts you want to use, and copy the provided link.

2. **Include the Google Fonts Link in Your HTML:**
   - Add the link to the `<head>` section of your HTML.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100..900&display=swap" rel="stylesheet">
</head>
<body>
    <div>
        <h1>Hello I am Shubham</h1>
        <h2>I am a good boy</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit...</p>
        <h3>OOOOOOJJJJJKKKKK</h3>
    </div>
</body>
</html>
```

3. **Use the Imported Fonts in Your CSS:**
   - Apply the fonts to elements using the `font-family` property.

```css
h1 {
    font-family: 'Poppins', sans-serif;
}
p {
    font-family: 'Baloo Tammudu 2', system-ui;
}
```

### Example Code Using Google Fonts

Here is the complete example integrating Google Fonts with the provided HTML and CSS:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Baloo+Tammudu+2:wght@400..800&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Baloo+Tammudu+2:wght@400..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&display=swap');

        h1 {
            font-family: "Poppins", sans-serif;
            font-size: 20px;
            letter-spacing: 10px;
        }
        p {
            font-family: "Baloo Tammudu 2", system-ui;
            font-style: italic;
            font-weight: 100;
            font-size: 10px;
            color: navy;
            line-height: 12px;
            text-overflow: ellipsis;
        }
        h2 {
            text-transform: lowercase;
            text-decoration: underline;
            text-decoration-color: blueviolet;
            text-decoration-style: dotted;
            text-decoration-thickness: 8px;
            text-indent: 45px;
        }
        h3 {
            color: rgb(23, 6, 82);
        }
    </style>
</head>
<body>
    <div>
        <h1>Hello I am Shubham</h1>
        <h2>I am a good boy</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit...</p>
        <h3>OOOOOOJJJJJKKKKK</h3>
    </div>
</body>
</html>
```

### Key Points:
- **@font-face**: Allows you to define and use custom fonts by specifying the font files.
- **Google Fonts**: A convenient service to use a wide variety of fonts by including a link in your HTML and applying the font in your CSS.
- **font-family**: Specifies the font to be used for an element.