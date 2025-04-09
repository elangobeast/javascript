// ! how to create promise and handle the resolve and reject
let p = new Promise((resolve,reject)=>{
resolve("hello everyone")
reject("hiiiiiiiii")
})
p.then((data)=>{
console.log(data)
}).catch((err)=>{
console.log(err)
})
console.log('----------------------------------------------------')
let p1 = new Promise((resolve,reject)=>{
resolve("resolve 1")
reject("reject 1")
})
let p2 = new Promise((resolve,reject)=>{
// resolve("resolve 2")
reject("reject 2")
})
let p3 = new Promise((resolve,reject)=>{
resolve("resolve 3")
reject("reject 3")
})
let p4 = new Promise((resolve,reject)=>{
resolve("resolve 4")
reject("reject 4")
})
// ! Promise.any()
Promise.any([p4,p2,p3,p1])
.then((data)=>{
console.log(data)
})
.catch((err)=>{
console.log(err)
})
// ! Promise.all()
Promise.all([p4,p2,p3,p1])
.then((data)=>{
console.log(data)
})
.catch((err)=>{
console.log(err)
})
// ! Promise.allSettled
Promise.allSettled([p4,p2,p3,p1])
.then((data)=>{
console.log(data)
})
.catch((err)=>{
console.log(err)
})
// ! Promise.race()
Promise.race([p2,p3,p1,p4])
.then((data)=>{
console.log(data)
})
.catch((err)=>{
console.log(err)
})