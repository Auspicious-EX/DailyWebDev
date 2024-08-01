console.log("Shubham is good")
console.log("Shubham is Nice")


setTimeout(() => {
    console.log("i am in time")
    
}, 0);

setTimeout(() => {
    console.log("i am in time2 ")
    
}, 0);

console.log("The end")


const fn = () => {
    console.log("nothing")
  
}

const callback= (arg, fn) => {
    console.log(arg)
    fn()
  
}


const loadScript = (src,callback) => {
    let sc = document.createElement("script")
    sc.src = src
    sc.onload = callback("Shubham",fn)
    document.head.append(sc)

  
}

loadScript("https://cdnjs.cloudflare.js",callback)

