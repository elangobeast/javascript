console.log("I am external JS file");

//!  HOW MANY WAYS WE CAN WRITE INTERNAL JAVASCRIPT
        // 1.INTEERNAL JAVASCRIPT
        // 2.EXTERNAL JAVASCRIPT
//! output methods in javascript


console.log("today is our first javascript class");

document.writeln("hello how are you?");

alert("hello how are you?")

// ! How to declare variable
     //! var, let , const

//! How to declare variable

// for that we need 3 keywords ==> 1.var 1. let 3. const

var a // variable declaration

a= 20 // variable initialization 

console.log (a)

var b = 30
console.log(b)

var a=100           //! in var re declaration is possible
console.log(a)

let subject= "javascript"
console.log(subject)

//let subject   //!  re declaration is not possible 

subject = "java"
console.log(subject)    //! re initialization is possible


//! const
//! it is used to make the value constant . we can not change the value
//! here declaration and initialization are we have to do in the same line.
const pi=3.14  // dont type 3.14 in next line

console.log(pi)

//! datatype in javascript
//! 1. primitive data type 

//!      i> Number
//!      ii> boolean
//!      iii> string 
//!      iv> undefined 
//!       v> null
//!      vi> big int

//!     2.non primitive data type

//!     function,object,array

// ! primitive datatype examples
// ! number

let age=16
let salary=9000.50
console.log(age,salary);
console.log(typeof age);
console.log(typeof salary);

// ! boolean
let isstudent =true
console.log(isstudent);
console.log(typeof isstudent);


// ! string

let msg="Hello how are you"
console.log(msg);
console.log(typeof msg);

let msg2='i am Fine'
console.log(msg2);
console.log(typeof msg2);

let msg3="this is also string"
console.log(msg3);
console.log(typeof msg3);

//!  4  . undefined
//!  when any variable is declared but not initialized that is called undefined
//! the type of undefined is undefined

let x=20

x="hello"

console.log(x);

let phno
console.log(phno);
console.log(typeof phno);

//! 5 . null

//! type of null is object

let sal = null
console.log(sal);
console.log(typeof sal)

//! 6. big int
let bigNum = 2n
console.log(bigNum)
console.log(typeof bigNum)

//! non primitive data type

//! 1.function

function display(){
        console.log("I am display function")
}
display()
display()
display()

//! 2. array

let arr = [10,20,"hello",true,30.50]
console.log(arr)

//! 3.object 

let emp = {
        name:"Ravi",// key and value pair and key is always string and value can be any datatype
        age:22,
        city:"chennai"
}
console.log(emp)
console.log(emp.name)

let num2 = 700 