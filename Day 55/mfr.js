let arr = [1,3,6,11,13];

// let newarr =[]
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newarr.push(element**2);
    
// }



let newarr = arr.map((e, indexx ,arr) => {
    return e**2
    
})
console.log(newarr);

const greterThanSeven = (e)=> {
    if (e>=7) return true;
    return false
}



console.log(arr.filter(greterThanSeven))

let arr2 = [1,2,3,4,5,6]

const red = (a,b)=> {
    return a+b
}

console.log(arr2.reduce(red))

let b = Array.from("Shubham")
console.log(b)