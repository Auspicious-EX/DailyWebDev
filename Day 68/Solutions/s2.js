/* 
2. The Double Trouble:
   You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

. */

const arr = [1, 2, 2, 3, 4, 4, 5];
const doubledArr = arr.reduce((result, num, index) => {
    if (index > 0 && arr[index] === arr[index - 1]) return result;
    result.push(num * 2);
    return result;
}, []);
console.log(doubledArr);
