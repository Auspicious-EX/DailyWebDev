async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45)
        }, 100);
    })
}

function sum(a,b,c) {
    return a + b +c
    
}


(async function main(){
    console.log(a1)
    // let a = await sleep()
    // console.log(45)
    // let b = await sleep()
    // console.log(46)

    // let [x,y, ...rest] = [1,5,7,8,9]
    // console.log(x,y, rest)

    let obj = {
        a : 1,
        b : 2,
        c : 3
    }

    const {a,b} = obj

    console.log(a,b)


    let arr = [1,4,6]
    // console.log(arr[0] +  arr[1] + arr[2] )

    console.log(sum(...arr))
    var a1 = 6

})()