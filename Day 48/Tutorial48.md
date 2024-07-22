# Tutorial **48** Notes

## JavaScript Variables, Data Types & Objects

## Variables
Variables in JavaScript are containers for storing data values. You can declare variables using `var`, `let`, or `const`.

- **`var`**: Function-scoped, can be re-declared and updated.
- **`let`**: Block-scoped, can be updated but not re-declared in the same scope.
- **`const`**: Block-scoped, cannot be updated or re-declared.

### Difference Between `var`, `let`, and `const` in JavaScript

#### `var`
- **Scope**: Function-scoped.
- **Hoisting**: Variables declared with `var` are hoisted to the top of their scope and initialized with `undefined`.
- **Re-declaration**: Can be re-declared and updated within the same scope.
- **Example**:
  ```javascript
  function exampleVar() {
    var x = 1;
    if (true) {
      var x = 2; // same variable
      console.log(x); // 2
    }
    console.log(x); // 2
  }
  ```

#### `let`
- **Scope**: Block-scoped.
- **Hoisting**: Variables declared with `let` are hoisted to the top of their block but are not initialized.
- **Re-declaration**: Cannot be re-declared in the same scope but can be updated.
- **Example**:
  ```javascript
  function exampleLet() {
    let x = 1;
    if (true) {
      let x = 2; // different variable
      console.log(x); // 2
    }
    console.log(x); // 1
  }
  ```

#### `const`
- **Scope**: Block-scoped.
- **Hoisting**: Variables declared with `const` are hoisted to the top of their block but are not initialized.
- **Re-declaration**: Cannot be re-declared or updated.
- **Initialization**: Must be initialized at the time of declaration.
- **Example**:
  ```javascript
  function exampleConst() {
    const x = 1;
    if (true) {
      const x = 2; // different variable
      console.log(x); // 2
    }
    console.log(x); // 1
  }
  ```

### Summary

1. **Scope**:
   - `var`: Function-scoped.
   - `let` and `const`: Block-scoped.
   
2. **Hoisting**:
   - `var`: Hoisted and initialized with `undefined`.
   - `let` and `const`: Hoisted but not initialized.

3. **Re-declaration and Updating**:
   - `var`: Can be re-declared and updated.
   - `let`: Cannot be re-declared but can be updated.
   - `const`: Cannot be re-declared or updated.

4. **Initialization**:
   - `const`: Must be initialized at the time of declaration.

Understanding these differences helps in choosing the appropriate type of variable declaration based on the needs of the code.

## Data Types
JavaScript has different data types, which can be categorized into primitive and non-primitive types.

1. **Primitive Data Types**:
   - **Number**: Represents both integer and floating-point numbers.
     - Example: `let age = 25;`
   - **String**: Represents sequences of characters.
     - Example: `let name = "John";`
   - **Boolean**: Represents logical values, `true` or `false`.
     - Example: `let isStudent = true;`
   - **Undefined**: A variable that has been declared but not assigned a value.
     - Example: `let x;`
   - **Null**: Represents the intentional absence of any object value.
     - Example: `let y = null;`
   - **Symbol**: Represents a unique identifier.
     - Example: `let sym = Symbol();`
   - **BigInt**: Represents integers with arbitrary precision.
     - Example: `let bigIntNum = 123n;`

2. **Non-Primitive Data Types**:
   - **Object**: Used to store collections of data and more complex entities.
     - Example: `let person = { name: "John", age: 25 };`
   - **Array**: A special type of object used to store ordered lists of values.
     - Example: `let fruits = ["apple", "banana", "mango"];`
   - **Function**: Represents a block of code designed to perform a particular task.
     - Example: `function greet() { console.log("Hello!"); }`

## Objects
Objects in JavaScript are collections of key-value pairs, where the keys are strings (or Symbols) and the values can be any data type.

- **Creating an Object**:
  ```javascript
  let car = {
    make: "Toyota",
    model: "Camry",
    year: 2020
  };
  ```

- **Accessing Object Properties**:
  - Dot Notation: `car.make`
  - Bracket Notation: `car["model"]`

- **Adding/Updating Properties**:
  ```javascript
  car.color = "blue";
  car["mileage"] = 15000;
  ```

- **Deleting Properties**:
  ```javascript
  delete car.year;
  ```

### Summary
- Variables store data values and can be declared using `var`, `let`, or `const`.
- JavaScript data types include primitive types (e.g., Number, String, Boolean) and non-primitive types (e.g., Object, Array).
- Objects are collections of key-value pairs, used to store complex data.

Understanding these fundamentals is essential for working with JavaScript effectively.