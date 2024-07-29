# Tutorial **58** Notes

## JavaScript - Selecting by Ids, Classes, and More

JavaScript provides various methods to select and manipulate HTML elements. Selecting elements is the first step in making changes to the DOM.

### Key Methods for Selecting Elements:

1. **Selecting by ID**:
   - Use `document.getElementById()` to select an element by its ID.
   - Example:
     ```javascript
     const element = document.getElementById('myId');
     console.log(element); // <div id="myId"></div>
     ```

2. **Selecting by Class Name**:
   - Use `document.getElementsByClassName()` to select elements by their class name. This returns a live HTMLCollection.
   - Example:
     ```javascript
     const elements = document.getElementsByClassName('myClass');
     console.log(elements); // HTMLCollection of elements with class 'myClass'
     ```

3. **Selecting by Tag Name**:
   - Use `document.getElementsByTagName()` to select elements by their tag name. This returns a live HTMLCollection.
   - Example:
     ```javascript
     const elements = document.getElementsByTagName('p');
     console.log(elements); // HTMLCollection of <p> elements
     ```

4. **Selecting by CSS Selectors**:
   - Use `document.querySelector()` to select the first element that matches a CSS selector.
   - Example:
     ```javascript
     const element = document.querySelector('.myClass');
     console.log(element); // First element with class 'myClass'
     ```
   - Use `document.querySelectorAll()` to select all elements that match a CSS selector. This returns a static NodeList.
   - Example:
     ```javascript
     const elements = document.querySelectorAll('.myClass');
     console.log(elements); // NodeList of elements with class 'myClass'
     ```

### Examples:

#### HTML Structure:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="header">Header</div>
    <div class="container">
        <p class="text">Paragraph 1</p>
        <p class="text">Paragraph 2</p>
        <p class="text">Paragraph 3</p>
    </div>
    <button class="btn">Click Me</button>
</body>
</html>
```

#### JavaScript Code:
```javascript
// Selecting by ID
const header = document.getElementById('header');
console.log(header.textContent); // Outputs: Header

// Selecting by Class Name
const paragraphs = document.getElementsByClassName('text');
console.log(paragraphs.length); // Outputs: 3
for (let i = 0; i < paragraphs.length; i++) {
    console.log(paragraphs[i].textContent); // Outputs: Paragraph 1, Paragraph 2, Paragraph 3
}

// Selecting by Tag Name
const divs = document.getElementsByTagName('div');
console.log(divs.length); // Outputs: 2
for (let i = 0; i < divs.length; i++) {
    console.log(divs[i].textContent); // Outputs: Header, Paragraph 1 Paragraph 2 Paragraph 3
}

// Selecting by CSS Selector
const firstParagraph = document.querySelector('.text');
console.log(firstParagraph.textContent); // Outputs: Paragraph 1

// Selecting All by CSS Selector
const allParagraphs = document.querySelectorAll('.text');
console.log(allParagraphs.length); // Outputs: 3
allParagraphs.forEach(paragraph => {
    console.log(paragraph.textContent); // Outputs: Paragraph 1, Paragraph 2, Paragraph 3
});

// Selecting by attribute
const button = document.querySelector('[class="btn"]');
console.log(button.textContent); // Outputs: Click Me
```

### Summary:

- Use `getElementById()` to quickly select an element by its unique ID.
- Use `getElementsByClassName()` and `getElementsByTagName()` to select elements by class name or tag name, respectively.
- Use `querySelector()` and `querySelectorAll()` for more complex selections using CSS selectors.
- Understanding these methods is crucial for DOM manipulation and creating dynamic web pages.