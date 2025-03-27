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

//! 10. Slice()
//! It is used to extract the element from the array and it will return one new array 
//! It will take two parameters (startIndex, endIndex  ) but it will not  tske the endIndex value
//! it will not modify the original array

let marks=[85,86,87,80,95]
let slicedArr = marks.slice(1,3)
console.log(slicedArr);
console.log(marks);

//! 11.splice()
//! it is used to add , delete and replace element in the array
//! it can take 3 parameters, (starIndex , delete count , replacemen value)
//! it will return one array with removed elements
//? blue line

//todo : it will modify the original array

let numbers =[66,65,44,33,22,11,77,88]

numbers.splice(2,3,"hello")

console.log(numbers);

let a =numbers.splice(2,0,'hello')

console.log(a);

//! 1.map()

//! it is one higher order array method
//! it will take one callback function and this is callback function can be take 3 parameters .
//!(element , index, array)
//! it is used to traverse the array and if we want to do any operation with all elements of the array
//! --we can do and it will return one array

let arr2 = [10,20,30,40,50]

arr2.map((ele, index , array)=> {
  console.log(ele , index, array);
  
 }
)

let mappedArr = arr2.map((ele)=>{

        return ele
})

console.log(mappedArr);

// arr2.map((ele)=> {

//   console.log(ele+100)
//   add100.push(ele+100)
//   console.log(add100);
  
// })
let maparr2=arr2.map((ele)=>{
  return ele+100
})
console.log(maparr2)

let sub=['html','css','js']

let upper = sub.map((ele)=>{
  return ele.toUpperCase()
})
console.log(upper);

let message=['hi', 'how ', 'are', 'you']

let correct = message.map((text)=>{
  return text.toUpperCase()
})
console.log(correct);

// let numberr=[10,20,30,40,50]
// let arrr=[]
// let b=m2.map((ele)=>{
//   if(ele>30){
//     msg3.push(ele)
//   }
// })
// console.log(m3);
//! filter()
//! it is one higherorder array method
//! it is used to check the condition andf if the condition is matching the it will return
//!  the elemnt
//! is can take 3 parameters (element, index, array)

let evenNumbers = [2,4,6,8,10,12,14]

//! op ;[2,4,6,8]

let lessthan10= evenNumbers.filter((ele)=>{
        return ele < 10
})
console.log(lessthan10);

let number=[1,2,3,4,5,6]
let sum=0
// op : all all the number
let add=number.map((ele)=>{
    return sum=sum+ele
})
console.log(add);

//! reduce()
//! it is one higher order array method
//! it is used to reduce the array line one single value
//! it wil take a patameter ( accumulator , element)
//! it will return one single value
//! it will take 4 parameter {accumulator,element,index,array}

let summ = evenNumbers.reduce((acc,ele) =>{
  return acc+ele 
})

console.log(summ);

let multiplication = evenNumbers.reduce((acc,ele)=>{
  return acc*ele
})

console.log(multiplication);

//! sort()
//! it is used to sort the array
//! it will return the sorted array
//! it will take one callback function
//! it will take two parameters (a,b)

let arr11=[4,11,22,1,3,44,2,9,3,2]
let asc=arr11.sort((a,b)=>{
  return a-b
})
console.log(asc);

let desc=arr11.sort((a,b)=>{
  return b-a
})

console.log(desc);































