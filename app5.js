console.log('hi')
console.log('hi')
console.log('hi')

let p1 = new Promise((resolve,reject)=>{
    
    setTimeout(()=>{
        console.log('db call successful')
        resolve(25)
    },2000)

})

let p2 = new Promise((resolve,reject)=>{
    
    setTimeout(()=>{
        console.log('db call not successful')
        reject(new Error("DB Backend Failure"))
    },4000)

})

console.log('hi')
console.log(p1)

async function dbCall(){
    let response = await p1
    console.log(response)
}

dbCall()
console.log('hi')
