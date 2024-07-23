# Tutorial **49** Notes

## Types of Operators in JavaScript

1. **Arithmetic Operators**: Perform mathematical operations.
   - Addition (`+`)
   - Subtraction (`-`)
   - Multiplication (`*`)
   - Division (`/`)
   - Modulus (`%`)
   - Exponentiation (`**`)
   - Increment (`++`)
   - Decrement (`--`)
   - Example:
     ```javascript
     let a = 5;
     let b = 2;
     console.log(a + b); // 7
     console.log(a ** b); // 25
     ```

2. **Assignment Operators**: Assign values to variables.
   - Assignment (`=`)
   - Addition assignment (`+=`)
   - Subtraction assignment (`-=`)
   - Multiplication assignment (`*=`)
   - Division assignment (`/=`)
   - Modulus assignment (`%=`)
   - Example:
     ```javascript
     let x = 10;
     x += 5; // x is now 15
     ```

3. **Comparison Operators**: Compare two values and return a Boolean result.
   - Equal to (`==`)
   - Not equal to (`!=`)
   - Strict equal to (`===`)
   - Strict not equal to (`!==`)
   - Greater than (`>`)
   - Less than (`<`)
   - Greater than or equal to (`>=`)
   - Less than or equal to (`<=`)
   - Example:
     ```javascript
     let a = 5;
     let b = 10;
     console.log(a < b); // true
     ```

4. **Logical Operators**: Perform logical operations and return a Boolean result.
   - AND (`&&`)
   - OR (`||`)
   - NOT (`!`)
   - Example:
     ```javascript
     let a = true;
     let b = false;
     console.log(a && b); // false
     ```

5. **Bitwise Operators**: Perform bit-level operations.
   - AND (`&`)
   - OR (`|`)
   - XOR (`^`)
   - NOT (`~`)
   - Left shift (`<<`)
   - Right shift (`>>`)
   - Zero-fill right shift (`>>>`)
   - Example:
     ```javascript
     let a = 5; // 0101 in binary
     let b = 1; // 0001 in binary
     console.log(a & b); // 0001 in binary, or 1 in decimal
     ```

6. **String Operators**: Perform operations on strings.
   - Concatenation (`+`)
   - Concatenation assignment (`+=`)
   - Example:
     ```javascript
     let greeting = "Hello";
     let name = "World";
     console.log(greeting + " " + name); // "Hello World"
     ```

7. **Conditional (Ternary) Operator**: Assigns a value based on a condition.
   - Syntax: `condition ? expr1 : expr2`
   - Example:
     ```javascript
     let age = 18;
     let canVote = (age >= 18) ? "Yes" : "No";
     console.log(canVote); // "Yes"
     ```

## JavaScript Conditionals: if, else if, else Ladder

#### `if` Statement
Executes a block of code if a specified condition is true.
- **Syntax**:
  ```javascript
  if (condition) {
    // code to be executed if condition is true
  }
  ```
- **Example**:
  ```javascript
  let age = 18;
  if (age >= 18) {
    console.log("You are an adult.");
  }
  ```

#### `else` Statement
Executes a block of code if the `if` condition is false.
- **Syntax**:
  ```javascript
  if (condition) {
    // code to be executed if condition is true
  } else {
    // code to be executed if condition is false
  }
  ```
- **Example**:
  ```javascript
  let age = 16;
  if (age >= 18) {
    console.log("You are an adult.");
  } else {
    console.log("You are a minor.");
  }
  ```

#### `else if` Statement
Specifies a new condition to test if the previous condition was false.
- **Syntax**:
  ```javascript
  if (condition1) {
    // code to be executed if condition1 is true
  } else if (condition2) {
    // code to be executed if condition2 is true
  } else {
    // code to be executed if both condition1 and condition2 are false
  }
  ```
- **Example**:
  ```javascript
  let score = 85;
  if (score >= 90) {
    console.log("Grade: A");
  } else if (score >= 80) {
    console.log("Grade: B");
  } else if (score >= 70) {
    console.log("Grade: C");
  } else {
    console.log("Grade: F");
  }
  ```

### Summary
- **Operators**: Arithmetic, Assignment, Comparison, Logical, Bitwise, String, and Conditional operators are used to perform various operations in JavaScript.
- **Conditionals**: `if`, `else if`, and `else` statements control the flow of the program based on specified conditions.