# Tutorial **60** Notes

## JavaScript Events and DOM Properties

JavaScript provides numerous ways to interact with and manipulate the Document Object Model (DOM). Here are some key properties, methods, and concepts related to DOM manipulation:

1. **console.dir**:
   - Displays an interactive list of the properties of the specified JavaScript object.
   - Example:
     ```javascript
     const element = document.getElementById('header');
     console.dir(element);
     ```

2. **tagName/nodeName**:
   - `tagName`: Returns the tag name of an element in uppercase.
   - `nodeName`: Similar to `tagName`, but also works for other node types (e.g., text nodes).
   - Example:
     ```javascript
     const element = document.getElementById('header');
     console.log(element.tagName); // Outputs: DIV
     console.log(element.nodeName); // Outputs: DIV
     ```

3. **innerHTML/outerHTML**:
   - `innerHTML`: Gets or sets the HTML content of an element.
   - `outerHTML`: Gets or sets the HTML content including the element itself.
   - Example:
     ```javascript
     const element = document.getElementById('header');
     console.log(element.innerHTML); // Outputs the inner HTML
     console.log(element.outerHTML); // Outputs the outer HTML
     ```

4. **textContent**:
   - Gets or sets the text content of an element and its descendants.
   - Example:
     ```javascript
     const element = document.getElementById('header');
     console.log(element.textContent); // Outputs the text content
     ```

5. **hidden Property**:
   - Used to hide an element.
   - Example:
     ```javascript
     const element = document.getElementById('header');
     element.hidden = true; // Hides the element
     ```

6. **Attributes Methods**:
   - `getAttribute()`, `setAttribute()`, `removeAttribute()`
   - Example:
     ```javascript
     const element = document.getElementById('header');
     element.setAttribute('data-example', 'value');
     console.log(element.getAttribute('data-example')); // Outputs: value
     element.removeAttribute('data-example');
     ```

7. **Data Attributes**:
   - Special attributes prefixed with `data-`.
   - Example:
     ```javascript
     const element = document.getElementById('header');
     element.dataset.example = 'value';
     console.log(element.dataset.example); // Outputs: value
     ```

8. **Insertion Methods**:
   - Methods to insert elements into the DOM.
   - `appendChild()`, `insertBefore()`, `append()`, `prepend()`
   - Example:
     ```javascript
     const newElement = document.createElement('div');
     newElement.textContent = 'New Element';
     document.body.appendChild(newElement);
     ```

9. **insertAdjacentHTML/Text/Element**:
   - Inserts HTML, text, or elements at specific positions.
   - Example:
     ```javascript
     const element = document.getElementById('header');
     element.insertAdjacentHTML('beforeend', '<p>Inserted HTML</p>');
     ```

10. **Node Removal**:
    - Methods to remove elements.
    - `removeChild()`, `remove()`
    - Example:
      ```javascript
      const element = document.getElementById('header');
      element.remove(); // Removes the element
      ```

11. **ClassName/ClassList**:
    - `className`: Gets or sets the value of the class attribute.
    - `classList`: Methods to manipulate classes (`add()`, `remove()`, `toggle()`, `contains()`)
    - Example:
      ```javascript
      const element = document.getElementById('header');
      element.classList.add('new-class');
      element.classList.remove('old-class');
      ```

12. **setTimeout and setInterval**:
    - `setTimeout()`: Executes a function after a specified delay.
    - `setInterval()`: Repeatedly executes a function at specified intervals.
    - Example:
      ```javascript
      setTimeout(() => {
          console.log('This runs after 2 seconds');
      }, 2000);

      setInterval(() => {
          console.log('This runs every 3 seconds');
      }, 3000);
      ```

### Example Code:

Here's a simple HTML and JavaScript example demonstrating some of these concepts:

#### HTML:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM Manipulation</title>
</head>
<body>
    <div id="header" class="header-class" data-example="header">
        Header
    </div>
    <button id="toggleButton">Toggle Header</button>
    <button id="addElementButton">Add Element</button>
</body>
</html>
```

#### JavaScript:
```javascript
document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    const toggleButton = document.getElementById('toggleButton');
    const addElementButton = document.getElementById('addElementButton');

    // Toggle visibility of header
    toggleButton.addEventListener('click', () => {
        header.hidden = !header.hidden;
    });

    // Add new element
    addElementButton.addEventListener('click', () => {
        const newElement = document.createElement('div');
        newElement.textContent = 'New Element';
        document.body.appendChild(newElement);
    });

    // Log details
    console.dir(header);
    console.log(header.tagName); // DIV
    console.log(header.innerHTML); // Header
    console.log(header.textContent); // Header

    // Manipulate classes
    header.classList.add('new-class');
    header.classList.remove('header-class');

    // Set timeout example
    setTimeout(() => {
        console.log('Timeout executed after 2 seconds');
    }, 2000);

    // Set interval example
    setInterval(() => {
        console.log('Interval executed every 3 seconds');
    }, 3000);
});
```

This example covers selecting elements, toggling visibility, adding new elements, manipulating attributes, and using `setTimeout` and `setInterval`.