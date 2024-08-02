// async function getData(){
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             resolve(455)
            
//         }, 3500);
//     })

// }

async function getData(){

    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.json()
    console.log(x)
      return data
    

}

async function main(){

    console.log('Loading modulr');
    console.log('do something else');
    console.log('Load data');
    
    let data = await getData()
    
    console.log(data)
        
    console.log('Process data');
        
    console.log('TAsk 2');
}

main()



// data.then((v) => {

//     console.log(data)
    
    
//     console.log('Process data');
    
//     console.log('TAsk 2');
// })

