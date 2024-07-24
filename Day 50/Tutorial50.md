# Tutorial **50** Notes

## JavaScript Loops

**Definition:**  
Loops in JavaScript are used to execute a block of code repeatedly until a specified condition is met.

**Types of Loops in JavaScript:**

1. **for loop**
   - Used when the number of iterations is known.
   - Syntax: 
     ```javascript
     for (initialization; condition; increment/decrement) {
         // code to be executed
     }
     ```
   - Example:
     ```javascript
     for (let i = 0; i < 5; i++) {
         console.log(i);
     }
     ```

2. **while loop**
   - Executes the code as long as the condition is true.
   - Syntax:
     ```javascript
     while (condition) {
         // code to be executed
     }
     ```
   - Example:
     ```javascript
     let i = 0;
     while (i < 5) {
         console.log(i);
         i++;
     }
     ```

3. **do...while loop**
   - Similar to the while loop, but the code is executed at least once before the condition is tested.
   - Syntax:
     ```javascript
     do {
         // code to be executed
     } while (condition);
     ```
   - Example:
     ```javascript
     let i = 0;
     do {
         console.log(i);
         i++;
     } while (i < 5);
     ```

4. **for...in loop**
   - Used to iterate over the properties of an object.
   - Syntax:
     ```javascript
     for (variable in object) {
         // code to be executed
     }
     ```
   - Example:
     ```javascript
     const person = { name: "John", age: 30, city: "New York" };
     for (let key in person) {
         console.log(key + ": " + person[key]);
     }
     ```

5. **for...of loop**
   - Used to iterate over iterable objects like arrays, strings, etc.
   - Syntax:
     ```javascript
     for (variable of iterable) {
         // code to be executed
     }
     ```
   - Example:
     ```javascript
     const numbers = [1, 2, 3, 4, 5];
     for (let num of numbers) {
         console.log(num);
     }
     ```