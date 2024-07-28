let arr = [1,2,3,4,5,8]
        //0,1,2,3,4,5
console.log(arr, typeof arr)
console.log(arr.length)

arr[0] = 566
console.log(arr[0])


console.log(arr.toString())

console.log(arr.join(" And "))

let arr1 = [1,2,3,4,5,6]

console.log(arr1.pop())

arr1.push(5)
console.log(arr1)

console.log(arr1.unshift())

delete arr1[5]
console.log(arr1)

console.log(arr1.length)

let a1 = [1,2,3]
let a2 = [4,5,6]
let a3 = [9,8,7]

console.log(a1.concat(a2,a3))
console.log(a3.sort())

let num = [1,2,3,4,5]

console.log(num.splice(1,3,222,333))
console.log(num)

let num1 = [1,2,3,4,5]
console.log(num1.slice(2))

