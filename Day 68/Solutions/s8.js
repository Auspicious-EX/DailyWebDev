
// 8. Async Array Mapping:
// Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.

const arr = [1, 2, 3];
Promise.all(arr.map(num =>
    new Promise(resolve =>
        setTimeout(() => resolve(num * 2), 500)
    )
)).then(result => console.log(result));
