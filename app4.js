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

p1
.then((response)=>{
    console.log(p1)
    console.log("Bye")
})
.catch((error)=>{
    console.log(error)
})

p2
.then((response)=>{
    console.log("Bye")
})
.catch((error)=>{
    console.log(error)
})

console.log('hi')
