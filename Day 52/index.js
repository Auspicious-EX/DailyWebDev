// Create faulty calculatore
// it takes 2 num as Input
//  it perform wrong operations
// 10%  time 

// + ---> -
// * ---> +
// - ---> /
// / ---> **

function faultyOperation(operation, a, b) {
    // Determine if the operation should be faulty (10% chance)
    let isFaulty = Math.random() < 0.1;
    
    if (isFaulty) {
        // Replace the operation with a faulty one
        switch (operation) {
            case "sum":
                return sub(a, b); // + becomes -
            case "sub":
                return div(a, b); // - becomes /
            case "mul":
                return sum(a, b); // * becomes +
            case "div":
                return pow(a, b); // / becomes **
            default:
                return operation(a, b);
        }
    } else {
        // Perform the correct operation
        return operation(a, b);
    }
}

// Operation functions
function sum(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function div(a, b) {
    return a / b;
}

function mul(a, b) {
    return a * b;
}

function pow(a, b) {
    return a ** b;
}

// Generate random numbers for the example
let a = Math.floor(Math.random() * 10);
let b = Math.floor(Math.random() * 10);

// Define the operation to perform
let operation = sum;

// Perform the operation with possible fault
let result = faultyOperation(operation, a, b);

console.log(`a: ${a}, b: ${b}, operation: ${operation.name}, result: ${result}`);
