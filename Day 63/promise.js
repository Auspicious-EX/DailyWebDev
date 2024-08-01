console.log('this is good');

let prom1 = new Promise((resolve, reject) => {

    let a = Math.random()
    if (a<0.5){
        reject("No random number was not suppoting your number")
    }
    else {
        setTimeout(() => {
            console.log('yes i don');
            resolve("Shubham")
            
        }, 3000);
    }


})
let prom2 = new Promise((resolve, reject) => {

    let a = Math.random()
    if (a<0.5){
        reject("No random number was not suppoting your number")
    }
    else {
        setTimeout(() => {
            console.log('yes i don');
            resolve("Shubham 2")
            
        }, 1000);
    }


})

let p3 = Peomise.allSettled([prom1, prom2])
p3.then((a) => {
    console.log(a)

}).catch((err) => {
    console.log(err)
})