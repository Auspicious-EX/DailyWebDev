import fs from "fs/promises"

let a = await fs.readFile("shubham.txt")

let b = await fs.appendFile("shubham.txt",
"\n\n\n\n\n\n this is amezing promis")
console.log(a.toString(),b)