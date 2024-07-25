# Tutorial **53** Notes

## JavaScript Strings

Strings in JavaScript are used to represent and manipulate sequences of characters. They are one of the most commonly used data types and offer a wide range of methods and properties for working with textual data.

#### Key Concepts of JavaScript Strings

1. **String Declaration**:
   - Strings can be declared using single quotes (`'`), double quotes (`"`), or backticks (`` ` ``).

   ```javascript
   let singleQuoteString = 'Hello, world!';
   let doubleQuoteString = "Hello, world!";
   let templateString = `Hello, world!`;
   ```

2. **String Concatenation**:
   - The `+` operator or template literals can be used to concatenate strings.

   ```javascript
   let greeting = 'Hello, ';
   let name = 'Shubham';
   let message = greeting + name + '!';
   console.log(message); // Output: Hello, Shubham!

   // Using template literals
   let messageTemplate = `${greeting}${name}!`;
   console.log(messageTemplate); // Output: Hello, Shubham!
   ```

3. **String Length**:
   - The `length` property returns the number of characters in a string.

   ```javascript
   let str = 'Hello';
   console.log(str.length); // Output: 5
   ```

4. **Accessing Characters**:
   - Characters in a string can be accessed using bracket notation or the `charAt` method.

   ```javascript
   let str = 'Hello';
   console.log(str[0]); // Output: H
   console.log(str.charAt(0)); // Output: H
   ```

5. **String Methods**:
   - **`toUpperCase` and `toLowerCase`**: Convert the string to uppercase or lowercase.

     ```javascript
     let str = 'Hello';
     console.log(str.toUpperCase()); // Output: HELLO
     console.log(str.toLowerCase()); // Output: hello
     ```

   - **`indexOf` and `lastIndexOf`**: Find the position of a substring.

     ```javascript
     let str = 'Hello, world!';
     console.log(str.indexOf('world')); // Output: 7
     console.log(str.lastIndexOf('o')); // Output: 8
     ```

   - **`includes`**: Check if a substring is present.

     ```javascript
     let str = 'Hello, world!';
     console.log(str.includes('world')); // Output: true
     ```

   - **`startsWith` and `endsWith`**: Check if the string starts or ends with a specified substring.

     ```javascript
     let str = 'Hello, world!';
     console.log(str.startsWith('Hello')); // Output: true
     console.log(str.endsWith('!')); // Output: true
     ```

   - **`slice`, `substring`, and `substr`**: Extract parts of a string.

     ```javascript
     let str = 'Hello, world!';
     console.log(str.slice(0, 5)); // Output: Hello
     console.log(str.substring(0, 5)); // Output: Hello
     console.log(str.substr(0, 5)); // Output: Hello
     ```

   - **`replace`**: Replace a substring with another substring.

     ```javascript
     let str = 'Hello, world!';
     let newStr = str.replace('world', 'JavaScript');
     console.log(newStr); // Output: Hello, JavaScript!
     ```

   - **`split`**: Split a string into an array of substrings.

     ```javascript
     let str = 'Hello, world!';
     let arr = str.split(', ');
     console.log(arr); // Output: ['Hello', 'world!']
     ```

6. **Template Literals**:
   - Introduced in ES6, template literals allow for embedded expressions and multi-line strings.

   ```javascript
   let name = 'Shubham';
   let greeting = `Hello, ${name}!
   How are you?`;
   console.log(greeting);
   ```

#### Example: Combining Different String Concepts

Here's an example that combines several of the concepts above:

```javascript
// String declaration
let greeting = 'Hello, ';
let name = 'Shubham';

// String concatenation
let message = greeting + name + '!';
console.log(message); // Output: Hello, Shubham!

// Template literals
let messageTemplate = `${greeting}${name}! How are you?`;
console.log(messageTemplate); // Output: Hello, Shubham! How are you?

// String length
console.log(message.length); // Output: 14

// Accessing characters
console.log(message[0]); // Output: H
console.log(message.charAt(0)); // Output: H

// String methods
console.log(message.toUpperCase()); // Output: HELLO, SHUBHAM!
console.log(message.toLowerCase()); // Output: hello, shubham!
console.log(message.indexOf('Shubham')); // Output: 7
console.log(message.includes('world')); // Output: false
console.log(message.startsWith('Hello')); // Output: true
console.log(message.endsWith('?')); // Output: false
console.log(message.slice(0, 5)); // Output: Hello
console.log(message.replace('Shubham', 'JavaScript')); // Output: Hello, JavaScript!

// Splitting a string
let arr = message.split(' ');
console.log(arr); // Output: ['Hello,', 'Shubham!']
```

### Summary

- **Strings** are a crucial data type in JavaScript for representing and manipulating text.
- Various methods and properties allow for string manipulation, including concatenation, slicing, replacing, and more.
- **Template literals** provide a convenient way to embed expressions and create multi-line strings.
- Understanding string manipulation is essential for effective JavaScript programming, as strings are used in many areas, including user input, output, and data processing.