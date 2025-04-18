//console.log(a);//! not defined
//let a //! not defined
//let a = 10; //! not defined
//let a = 10; //! not defined
console.log(a);//! undefined
                                         //! 1. VARIABLE HOISTING
//! if we are trying to access an any variable before its declaration and if we have declared the variable by using var keyword
//! --the declaration part will be moving to the top of the code . It is called variable hoisting

console.log(a);//! undefined

var a = 10;//! undefined

console.log(10); //? 10//! undefined
//! 2. FUNCTION HOISTING

function hello(){
    console.log("hello I am one of the function");//! undefined 
}

// hi();   
// let hi = function(){
//     console.log("hello I am one of the function");//! undefined
// }
                                    