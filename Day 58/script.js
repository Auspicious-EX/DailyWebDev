console.log("Hello")

// let shubham = document.getElementsByClassName("box")
// console.log(shubham)

// shubham[2].style.backgroundColor ="Blue"

// document.getElementById("red").style.backgroundColor = "red"

// document.querySelector(".box").style.backgroundColor = "blue"
document.querySelectorAll(".box").forEach(e => {
    e.style.backgroundColor= "green"

    
});


let a = document.getElementsByTagName("div")
console.log(a)
// a[2].matches("#red")
console.log(a[2].closest("#red"))
console.log(a[2].closest("html"))

console.log(document.querySelector(".container").contains(a[0]))

console.log(document.querySelector("body").contains(document.querySelector((".container"))))