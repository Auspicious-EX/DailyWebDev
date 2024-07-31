# Tutorial **62** Notes

## Events, Event Bubbling, `setInterval`, and `setTimeout` in JavaScript

#### Events
Events in JavaScript are actions or occurrences that happen in the browser, which the browser can respond to. Events can be triggered by user actions such as clicks, typing, and mouse movements, or by browser actions like loading a page.

##### Examples of Common Events
- `click`: Triggered when an element is clicked.
- `mouseover`: Triggered when the mouse pointer moves over an element.
- `keydown`: Triggered when a key is pressed.
- `load`: Triggered when the entire page or an image is fully loaded.

#### Event Bubbling
Event bubbling is a type of event propagation in the DOM. When an event is triggered on an element, it first runs the handlers on the target element, then on its parent, then on its parent’s parent, and so on, until it reaches the `document` object. This can be stopped using the `stopPropagation()` method.

```html
<div id="parent">
  <button id="child">Click me</button>
</div>

<script>
document.getElementById('parent').addEventListener('click', () => {
  alert('Parent clicked');
});

document.getElementById('child').addEventListener('click', (event) => {
  alert('Child clicked');
  event.stopPropagation(); // This stops the event from bubbling up to the parent
});
</script>
```

#### `setTimeout`
`setTimeout` is used to execute a function once after a specified delay (in milliseconds).

```javascript
function sayHello() {
  console.log('Hello, world!');
}

setTimeout(sayHello, 2000); // Will log "Hello, world!" after 2 seconds
```

#### `setInterval`
`setInterval` is used to execute a function repeatedly, with a fixed time delay between each call.

```javascript
function sayHello() {
  console.log('Hello, world!');
}

setInterval(sayHello, 2000); // Will log "Hello, world!" every 2 seconds
```

#### Example Combining All Concepts

Here's an example that demonstrates event handling, event bubbling, and using `setTimeout` and `setInterval`.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Events</title>
</head>
<body>
    <div id="parent" style="padding: 20px; border: 1px solid black;">
        Parent
        <button id="child">Click me</button>
    </div>

    <script>
        // Event bubbling example
        document.getElementById('parent').addEventListener('click', () => {
            alert('Parent clicked');
        });

        document.getElementById('child').addEventListener('click', (event) => {
            alert('Child clicked');
            event.stopPropagation(); // Stops the event from bubbling up
        });

        // setTimeout example
        setTimeout(() => {
            console.log('This message appears after 3 seconds');
        }, 3000);

        // setInterval example
        const intervalId = setInterval(() => {
            console.log('This message appears every 2 seconds');
        }, 2000);

        // Stop the interval after 10 seconds
        setTimeout(() => {
            clearInterval(intervalId);
            console.log('Interval cleared');
        }, 10000);
    </script>
</body>
</html>
```

### Explanation
1. **Event Handling and Bubbling**: 
   - Clicking the button will trigger the child's click event and show "Child clicked". Because of `stopPropagation`, it prevents the parent click event from firing.
   - Clicking outside the button but within the parent div will trigger the parent's click event and show "Parent clicked".

2. **`setTimeout`**: 
   - Logs a message to the console after 3 seconds.

3. **`setInterval`**: 
   - Logs a message to the console every 2 seconds.
   - Clears the interval after 10 seconds, stopping the repeated logging.

This example combines the core concepts of JavaScript events, including event bubbling and time-based functions like `setTimeout` and `setInterval`, demonstrating how they can be used to create dynamic and responsive web applications.



<hr>

Here are the links to detailed documentation on various JavaScript concepts from Mozilla's MDN Web Docs:

### Events
Events are actions or occurrences that happen in the browser, such as a user clicking a button or submitting a form. JavaScript can be used to detect and handle these events.
- [Introduction to Events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)
- [UI Events](https://developer.mozilla.org/en-US/docs/Web/API/UI_Events)
- [Event Bubbling and Capturing](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_bubbling_and_capture)

### Event Bubbling
Event bubbling is a type of event propagation where an event starts from the deepest target element and then bubbles up to the least specific element.
- [Event Bubbling](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_bubbling_and_capture)

### setInterval and setTimeout
- [setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout): Calls a function or executes code after a specified delay.
- [setInterval](https://developer.mozilla.org/en-US/docs/Web/API/setInterval): Repeatedly calls a function or executes code with a fixed time delay between each call.

These resources provide a comprehensive guide to understanding and implementing events, event bubbling, and timing functions in JavaScript.