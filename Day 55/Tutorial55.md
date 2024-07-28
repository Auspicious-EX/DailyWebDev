# Tutorial **55** Notes

## JavaScript Arrays

Arrays in JavaScript are used to store multiple values in a single variable. They are versatile and come with various methods to perform operations like adding, removing, and transforming elements.

#### Key Concepts of JavaScript Arrays

1. **Array Declaration**:
   - Arrays can be declared using square brackets (`[]`).
   - Example:

   ```javascript
   let fruits = ['Apple', 'Banana', 'Cherry'];
   ```

2. **Accessing Array Elements**:
   - Elements in an array are accessed using their index, starting from 0.
   - Example:

   ```javascript
   let firstFruit = fruits[0]; // 'Apple'
   ```

3. **Array Methods**:
   - Arrays come with a variety of methods to manipulate their elements.
   - Example:

   ```javascript
   let fruits = ['Apple', 'Banana', 'Cherry'];

   // Adding elements
   fruits.push('Date'); // Adds 'Date' at the end
   fruits.unshift('Apricot'); // Adds 'Apricot' at the beginning

   // Removing elements
   fruits.pop(); // Removes the last element
   fruits.shift(); // Removes the first element

   // Finding elements
   let index = fruits.indexOf('Banana'); // 1
   let exists = fruits.includes('Cherry'); // true

   // Slicing and Splicing
   let someFruits = fruits.slice(1, 3); // ['Banana', 'Cherry']
   fruits.splice(1, 1, 'Blueberry'); // ['Apple', 'Blueberry', 'Cherry']
   ```

4. **Iterating Over Arrays**:
   - Arrays can be iterated using loops.
   - Example:

   ```javascript
   let fruits = ['Apple', 'Banana', 'Cherry'];

   // Using a for loop
   for (let i = 0; i < fruits.length; i++) {
       console.log(fruits[i]);
   }

   // Using a for...of loop
   for (let fruit of fruits) {
       console.log(fruit);
   }

   // Using forEach method
   fruits.forEach(fruit => console.log(fruit));
   ```

5. **Higher-Order Functions**:
   - Arrays provide several higher-order functions for transformation and filtering.
   - Example:

   ```javascript
   let numbers = [1, 2, 3, 4, 5];

   // map
   let squares = numbers.map(num => num * num); // [1, 4, 9, 16, 25]

   // filter
   let evens = numbers.filter(num => num % 2 === 0); // [2, 4]

   // reduce
   let sum = numbers.reduce((total, num) => total + num, 0); // 15
   ```

6. **Array.from()**:
   - Creates a new array instance from an array-like or iterable object.
   - Example:

   ```javascript
   let str = 'hello';
   let chars = Array.from(str); // ['h', 'e', 'l', 'l', 'o']
   ```

#### Example: Combining Array Methods and Higher-Order Functions

Here's an example that combines several array methods and higher-order functions:

```javascript
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter out even numbers
let evens = numbers.filter(num => num % 2 === 0);

// Map to squares
let squares = evens.map(num => num * num);

// Reduce to sum of squares
let sumOfSquares = squares.reduce((total, num) => total + num, 0);

console.log(evens); // [2, 4, 6, 8, 10]
console.log(squares); // [4, 16, 36, 64, 100]
console.log(sumOfSquares); // 220
```

### Summary

- **Arrays** in JavaScript are used to store multiple values and provide various methods for manipulation.
- Common **methods** include `push`, `pop`, `shift`, `unshift`, `slice`, and `splice`.
- **Higher-order functions** such as `map`, `filter`, and `reduce` are powerful tools for transforming and processing array data.
- The `Array.from()` method allows for creating arrays from array-like or iterable objects.
- Understanding array manipulation is crucial for effective JavaScript programming, as arrays are used extensively in data processing and application logic.