function nice(name) {
    console.log("heyy " + name + " you are nice")
    console.log("heyy " + name + " you are good")
    console.log("heyy " + name + " you are bad")
    
}
// console.log("Shubham you are best")
// console.log("Shubham your are good")
// console.log("Shubham your t shirt is good")
// console.log("Shubham your goood man")
nice("Rohan")
nice("Shubham")


function sum(a,b) {
    // console.log(a + b)
    return a + b
    
}
r1 = sum(3,5)
r2 = sum(9,5)
r3 = sum(3,12)
console.log("The sum of these is ", r1)
console.log("The sum of these is ", r2)
console.log("The sum of these is ", r3)

function sum1(a,b, c = 5) {
    // console.log(a + b)
    return a + b + c
    
}
r1 = sum1(3,5)
r2 = sum1(9,5)
r3 = sum1(3,12,1)
console.log("The sum of these is ", r1)
console.log("The sum of these is ", r2)
console.log("The sum of these is ", r3)


const func1 = (x) => {
    console.log("i am arrow function",x)
}
func1(34)
func1(64)
func1(37)