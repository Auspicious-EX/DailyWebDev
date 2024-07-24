console.log("Loops")

let a= 1 
console.log(a)
console.log(a+1)
console.log(a+2)

// there loops come to helps in repetative work

for (let b = 0; b < 100; b++) {
    console.log(b+1)
    
}

let onj = {
    name : "shubham",
    role : "web dev",
    company : "editX"
}

for (const key in onj) {
        const element = onj[key]
        console.log(key,element)
        
    }

    for (const c of "Shubham") {
        console.log(c)
       
    }

let i = 5
while(i <6){
    console.log(i)
    i++
}

i = 7
do {
    console.log(i)
    i++
    
} while (i<6);