const fs = require("fs")


console.log("starting")
// fs.writeFileSync("shubha.txt", "Shubham is nice")
fs.writeFile("shubham2.txt", "Shubham loves playing crecket ",()=>{
    console.log("done")
    fs.readFile("shubham2.txt", (error,data)=>{
        console.log(error,data.toString())
    })
})

console.log("ending")

fs.appendFile("shubham.txt","Living",(e,d)=>{
    console.log(d)
})