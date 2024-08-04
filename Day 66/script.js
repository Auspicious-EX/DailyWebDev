let a = parseInt(prompt("Enter first num"))
let b = parseInt(prompt("Enter sec num"))

if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry this is not a number")
}

let sum = a + b

function main() {

    let x = 2

    try {
        console.log("the sum is ", sum * x)
        return true

    } catch (error) {
        console.log("Error aavi gai")
        return false

    }
    finally {
        console.log("Files are close")
    }

    
}

let be = main()