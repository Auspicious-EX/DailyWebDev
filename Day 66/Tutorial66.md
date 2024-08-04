# Tutorial **66** Notes

## JavaScript `try`, `catch`, `finally` & Error Handling

#### Introduction
Error handling in JavaScript is crucial for building robust applications. The `try...catch...finally` statement provides a way to handle errors gracefully.

#### Key Points
- **`try` block**: Contains code that may throw an error.
- **`catch` block**: Contains code that handles the error if one is thrown in the `try` block.
- **`finally` block**: Contains code that will always run, regardless of whether an error was thrown or not.
- **Omitting `finally`**: If you don't use the `finally` block, the code will still execute normally, but you won't have a guaranteed block of code that runs after `try` and `catch` regardless of the outcome.

#### Structure of `try...catch...finally`
```javascript
try {
  // Code that may throw an error
} catch (error) {
  // Code to handle the error
} finally {
  // Code that runs regardless of an error
}
```

### Examples

#### Basic Example
Here's a simple example demonstrating the `try...catch...finally` statement.

```javascript
try {
  let result = riskyOperation();
  console.log('Operation successful:', result);
} catch (error) {
  console.error('An error occurred:', error.message);
} finally {
  console.log('Execution complete.');
}
```

#### Example without `finally`
If we omit the `finally` block, the error handling still works, but there's no guaranteed cleanup or follow-up action.

```javascript
try {
  let result = riskyOperation();
  console.log('Operation successful:', result);
} catch (error) {
  console.error('An error occurred:', error.message);
}
console.log('Execution complete.');
```

#### Function Example
A more practical example using a function:

```javascript
function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error('Cannot divide by zero');
    }
    return a / b;
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    console.log('Division operation attempted.');
  }
}

console.log(divide(10, 2)); // 5
console.log(divide(10, 0)); // Error: Cannot divide by zero
```

#### Handling Different Error Types
You can handle different types of errors in the `catch` block:

```javascript
try {
  let obj = JSON.parse('invalid JSON string');
} catch (error) {
  if (error instanceof SyntaxError) {
    console.error('JSON Syntax Error:', error.message);
  } else {
    console.error('Unknown Error:', error.message);
  }
} finally {
  console.log('Parsing attempt complete.');
}
```

#### What Happens If We Don't Use `finally`
- **Without `finally`**: Only `try` and `catch` blocks are executed. Cleanup or follow-up actions have to be explicitly written after the `catch` block.
- **With `finally`**: Cleanup or follow-up actions are guaranteed to run, ensuring that resources are freed or states are reset regardless of whether an error occurred or not.

### Summary
- **`try` block**: Contains code that may throw an error.
- **`catch` block**: Handles the error if one is thrown in the `try` block.
- **`finally` block**: Contains code that always runs, regardless of whether an error was thrown.
- **Error Handling**: Helps in managing runtime errors and maintaining application stability.
- **Omitting `finally`**: Works but misses the guaranteed execution of cleanup or follow-up actions.

Understanding and using `try...catch...finally` effectively ensures robust error handling in your JavaScript code, leading to more resilient and maintainable applications.