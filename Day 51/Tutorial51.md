# Tutorial **51** Notes

### JavaScript Functions

**Definition:**  
Functions in JavaScript are blocks of code designed to perform a particular task, executed when invoked (called).

**Types of Functions in JavaScript:**

1. **Function Declaration**
   - Defined with the `function` keyword, followed by a name, parentheses, and a block of code.
   - Syntax:
     ```javascript
     function functionName(parameters) {
         // code to be executed
     }
     ```
   - Example:
     ```javascript
     function greet(name) {
         return "Hello, " + name;
     }
     console.log(greet("Alice")); // Output: Hello, Alice
     ```

2. **Function Expression**
   - A function can also be defined using an expression.
   - Syntax:
     ```javascript
     const functionName = function(parameters) {
         // code to be executed
     };
     ```
   - Example:
     ```javascript
     const add = function(a, b) {
         return a + b;
     };
     console.log(add(2, 3)); // Output: 5
     ```

3. **Arrow Function**
   - A shorter syntax for writing function expressions, introduced in ES6.
   - Syntax:
     ```javascript
     const functionName = (parameters) => {
         // code to be executed
     };
     ```
   - Example:
     ```javascript
     const multiply = (a, b) => a * b;
     console.log(multiply(2, 3)); // Output: 6
     ```

4. **Anonymous Function**
   - A function without a name, often used as a callback.
   - Example:
     ```javascript
     setTimeout(function() {
         console.log("This is an anonymous function.");
     }, 1000);
     ```

5. **Immediately Invoked Function Expression (IIFE)**
   - A function that runs as soon as it is defined.
   - Syntax:
     ```javascript
     (function() {
         // code to be executed
     })();
     ```
   - Example:
     ```javascript
     (function() {
         console.log("This is an IIFE.");
     })();
     ```

6. **Constructor Function**
   - Used to create objects.
   - Syntax:
     ```javascript
     function ConstructorFunction(parameters) {
         // code to initialize the object
         this.property = value;
     }
     ```
   - Example:
     ```javascript
     function Person(name, age) {
         this.name = name;
         this.age = age;
     }
     const person1 = new Person("Alice", 30);
     console.log(person1.name); // Output: Alice
     ```

**Key Points:**
- **Parameters and Arguments:** Parameters are variables listed in the function's definition. Arguments are the values passed to the function.
- **Return Statement:** Functions can return a value using the `return` statement.
- **Hoisting:** Function declarations are hoisted to the top of their scope, meaning they can be called before they are defined. Function expressions are not hoisted.
