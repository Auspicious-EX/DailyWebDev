
// 5. The Sum Selector:
// Write a function that should sum all numbers in an array until it encounters a negative number.

const arr = [1, 2, 3, -1, 4, 5];
let sum = 0;
for (const num of arr) {
    if (num < 0) break;
    sum += num;
}
console.log(sum);
