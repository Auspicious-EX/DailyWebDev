let button = document.getElementById("btn")

button.addEventListener("dblclick", ()=>{
        alert("Mujhe dabaya gaya hai")
        document.querySelector(".box").innerHTML = "<b>To enjoy kar lo</b>"
})

// button.addEventListener("contextmenu", ()=>{
//         alert("Kabhi Ahh kabhi oho")
// })



document.addEventListener("keydown", ()=>{
    // alert("Mujhe dabaya gaya hai")
    document.querySelector(".box").innerHTML = "<b>To enjoy kar lo</b>"
})

