// let p = new Promise((resolve, reject)=>{

// })
// console.log(p);//! Promise {<pending>}
// let q = new Promise((resolve, reject)=>{
//     resolve("success work has been done")

// })
// console.log(q);


// q.then((data)=>{
//     console.log(data);
    
// }).catch((error)=>{
//     console.log(error);
    
// })

// let p1= new Promise((resolve, reject)=>{
//     reject("error work has not been done")

// })
// console.log(p1);



// let p2= new Promise((resolve, reject)=>{
//     reject("error work has not been done")

// })
// console.log(p2);                                                

// let p4 = new Promise((resolve,reject)=>{
//     //resolve("success work has been done")
//     reject("hi")
// })
// p4.then((data)=>{
//     console.log(data);
    
// })
// .catch((err)=>{
//     console.log(err);
    
// })
let p1 = new Promise((resolve, reject) => {
    // Pending State
})
console.log(p1);

let p2 = new Promise((resolve, reject) => {
    resolve("Work has been finished")
    // Fulfilled State
})
console.log(p2);

let p3 = new Promise((resolve, reject) => {
    reject("Work has been not finished")
    // Fulfilled State
})

p3.then((message1) => {      // .then is used to handle the resolve
    console.log(message1);
}).catch((message2) => {    // .catch is used to handle the reject
    console.log(message2);
})