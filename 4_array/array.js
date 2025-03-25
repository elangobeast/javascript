let arr=[10,"hello",true,[30,40]]
console.log(arr)//! [ 10, 'hello', true, [ 30, 40 ] ]

// ! how to know the length of the array

let snames=["rohit","virat","rahul"]

console.log(`the length of the array is ${snames.length}`);//!  the length of the array is 3

//! array methods

//! 1.push

//! it ia used to add the element at the end of the array
//! it will return the length of the array

let arr1=[10,20,30,40]

console.log(arr1);//!  [ 10, 20, 30, 40 ]

 arr1.push(50)

console.log(arr1);//! [ 10, 20, 30, 40, 50 ]

//! 2.pop
//! THIS method is used to remove the last element from the array
//! it will return the removed element

let even=[2,4,6,8,10]

  even.pop()
console.log(even); //![ 2, 4, 6, 8 ]

//! 3.shift 
//! It is used to remove the element from the starting of the array
//! It will return the removed element

let odd = [1,3,5,7,9]

odd.shift()

console.log(odd);//! [ 3, 5, 7, 9 ]

//! 4.unshift
//! It is used to add the element at the starting of the array
//! It will return the length of the array

let prime = [3,5,7,11]
prime.unshift(2)
console.log(prime);//! [2,3,5,7,11]

//! 5.includes()

//! It is used to check the element is present in the array or not
//! It will return true if element is present otherwi

console.log(prime.includes(7));//! true
console.log(prime.includes(13));//! false

//! 6.indexOf()

let subjects=["html","css","js","react","node"]

console.log(subjects.indexOf("js"));//! 2

//! 7.concat()

let frontend=["html","css","js"]
let backend=["node","express","mongodb"]

//frontend.concat(backend)
let fullstack= frontend.concat(backend,["react","angular"])

console.log(fullstack);//! ['html',    'css', 'js',      'node',  'express', 'mongodb', 'react',   'angular']

//! 8.reverse()

let num =[8,18,28,38,48]

let rev = num.reverse()

console.log(num)//! [48,38,28,18,8]

console.log(rev)//! [48,38,28,18,8]

//! 9.join

let msg = ["hello","how","are","you"]

console.log(msg.join("       "));//! hello     how    are    ypu

//! reverse the string using built in methods

let str="hello"

let charArr= str.split("")

let revarr = charArr.reverse()

let revstr = revarr.join("")

console.log(revstr);//! olleh

//! In one line (method chaining)

let x= str.split("").reverse().join("")

console.log(x);//! olleh















