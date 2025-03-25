// ! HOW TO CREATE FUNCTION

// ? 1 . Named Function
function display()
{
  console.log("I am display Function");
}

display()

// ? 2. Parameterized Funtion
function student(sname,age){
  console.log(`Student name is ${sname} and Age is ${age}`);
}

student("SibiVarshaan",22)

// TODO Example
function add(a,b){
  console.log(`Sum of ${a} and ${b} is ${a+b}`)
}

function sub(a,b){
  console.log(`Minus of ${a} and ${b} is ${a-b}`)
}

add(10,5)
sub(10,5)

function isPrime(a){
  if(a==0||a==1){
    console.log("Not Prime")
    
  }
  for(let i=2;i<a;i++){
    if(a%2==0){
      console.log("Not Prime")
      return
    }
  }
  console.log("Prime")
}

isPrime(6)

// ! FUNCTION WITH RETURN STATEMENT

function mul(num1, num2){
    return num1 * num2
}

console.log(mul(30,20))

// ? 3. Anonymous Function
// * Function does not have any name that is anonymous function 
// * Function with expression here we need operand (let variableName) operator (=)

let anonymous = function (){
  console.log("I am anonymous function...")
}

anonymous()


// TODO EXAMPLE

let power = function (a,b){
  let pow = 1;
  for(let i=0;i<b;i++){
    pow = a * pow
  }
  return pow
}

console.log(power(2,5))


let recursionPower = function(a,b){
  if(b==0){
    return 1
  }
  return recursionPower(a,b-1)*a
}

console.log(recursionPower(2,5))

// ? 4. Arrow Function

let division = (a,b)=>{
  try{
  return a/b;
  }catch(Exception){
    console.log("cannot divide by 0");
  }
}

console.log(division(10,0))


// TODO Example

let palindrome = (str)=>{
  for(let i=0;i<str.length;i++){
    let start = str.charAt(i)
    let end = str.charAt(str.length-1-i)
    if(start!=end){
      return false
    }
  }
  return true
}

console.log(palindrome("level")?"Palindrome":"Not Palindrome")

// TODO INTERVIEW
// ? Nested Function

let parent = ()=>{
  console.log("I am parent function")
  let child = ()=>{
    console.log("I am child function")
  }
  child()
}

parent()
//! 4 . lEXICAL SCOPPING
// TODO *** LEXICAL SCOPPING ***

// * When we have nested function , the inner function can have all the properties of outer function but outer function can not take the properties of inner function. sIt is called Scopping

let outer =()=>{
  let a = 10;
  let inner =()=>{
    let b = 20;
    console.log(a)
  }
  //console.log(b) // ! Error b is not defined in outer
  inner()
}

outer()

//! 5 . HIGHER ORDER FUMNCTION 
//! 6 . CALL BACK FUNCTION

//! higher order function //!
//! the function which takes another functiob as a parameter that is called 
//! higher order funtion
//! the function we are sending as a parameter to the higher 
//! order function is called call back function

let hello =(a)=>{

    console.log(" I am hello function , I am higher order function")

    a()
}

hello (()=>{
    console.log("I am callback function");
    
})

//! ASSIGNMENT

let addition=(a,b)=>{
    console.log(a+b)//! callback function
}
let multiplication = ( a,b)=>{
    console.log(a*b)
}
let subtraction =(a,b)=>{
    console.log(a-b);
    
}

let operate = (myFunction,a,b)=>{
    myFunction(a,b)//! parameterized function
}
operate(addition,20,30)//! higher oder function
operate(multiplication,20,10)//
operate(subtraction, 100, 30);//! semicolon is mandotory future iife function

//! 7 . IIFE (IMMEDIATELY INVOKED FUNCTION EXPRESSION)

(function  (){
    console.log("I am IIFE function")
    
})()















