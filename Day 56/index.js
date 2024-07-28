let num = 3
let a = []
for (let index = 1; index <= num; index++) {
    a.push(index)
}

if (a==0) {
    console.log("1")
    
}
else{
    
    console.log(a.reduce((a,b) => a*b))
}