# Tutorial **32** 

## More on CSS Selectors 

#### Un-commented Selectors

1. **`:nth-last-child(2)`**
    ```css
    .boxes:nth-last-child(2){
        background-color: aqua;
    }
    ```
    - This selector applies styles to the second last child of the `.boxes` element. In this case, it changes the background color to aqua.

2. **`::before` and `::after`**
    ```css
    .boxes::before{
        content: "Hello";
    }
    .boxes::after{
        content: "Hello";
    }
    ```
    - These pseudo-elements insert content before and after the content of the `.boxes` element. Both will add the text "Hello" before and after the content of `.boxes`.

3. **`::selection`**
    ```css
    ::selection{
        color: beige;
        background-color: black;
    }
    ```
    - This pseudo-element applies styles to text selected by the user. It changes the color of selected text to beige and the background to black.

4. **`::first-letter`**
    ```css
    .box::first-letter{
        color: purple;
        font-size: medium;
    }
    ```
    - This pseudo-element styles the first letter of the `.box` elements. It changes the color to purple and sets the font size to medium.

5. **`::placeholder`**
    ```css
    input::placeholder{
        color: aqua;
        background-color: blueviolet;
        padding: 0;
        margin: 0;
    }
    ```
    - This pseudo-element styles the placeholder text in the `input` element. It changes the text color to aqua and the background color to blueviolet.

#### Commented Selectors

1. **`:first-child`**
    ```css
    .boxes:first-child{
        background-color: aquamarine;
    }
    ```
    - This selector would apply styles to the first child of the `.boxes` element, changing the background color to aquamarine.

2. **`::first-line`**
    ```css
    .box::first-line{
        background-color: blueviolet;
    }
    ```
    - This pseudo-element would style the first line of text in the `.box` elements, changing the background color to blueviolet.

3. **Universal Selector (`*`)**
    ```css
    .boxes *{
        color: blue;
        border: 2px solid black;
    }
    ```
    - This universal selector applies styles to all elements inside `.boxes`, changing their text color to blue and adding a 2px solid black border.

4. **Group Selector**
    ```css
    p, a, .box, [data-color="Primary"] {
        padding-top: 34px;
    }
    ```
    - This group selector applies styles to all `p` and `a` elements, `.box` class elements, and elements with `data-color="Primary"` attribute, adding a padding-top of 34px.

5. **`:nth-child(odd)`**
    ```css
    .boxes:nth-child(odd){
        background-color: blueviolet;
    }
    ```
    - This selector would apply styles to all odd children of the `.boxes` element, changing their background color to blueviolet.

### Complete HTML and CSS

#### HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Selectors</title>
    <style>
        .boxes:nth-last-child(2){
            background-color: aqua;
        }
        .boxes::before{
            content: "Hello";
        }
        .boxes::after{
            content: "Hello";
        }
        ::selection{
            color: beige;
            background-color: black;
        }
        .box::first-letter{
            color: purple;
            font-size: medium;
        }
        input::placeholder{
            color: aqua;
            background-color: blueviolet;
            padding: 0;
            margin: 0;
        }
    </style>
</head>
<body>
    <div class="boxes">
        <div data-color="Primary" class="box">ok
        </div>
        <div class="box">Heyy i am box</div>
        <div class="box">Heyy i am box</div>
        <input type="text" placeholder="Type name">
    </div>
</body>
</html>
```

This explanation covers the usage of each selector and pseudo-element in the provided CSS code, both commented and un-commented.