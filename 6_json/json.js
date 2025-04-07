//! JSON (JavaScript Object Notation ) is a lightweighted data-interchange format
//!  that is easyb for human to read and write and easy for machines to parse and generate

//! advantages of JSON
//! 1=> HUMAN READABLE:  JSON'S structure is easy for developers to understand and write

//! 2=> lightweight : JSON'S is a minimal format that reduces the size of the data being transmitted

//! 3=> Language-Independent : JSON can be used with many programming language , 
//! including JavaScript , Python , Ruby , Java ,etc


//! Two methods are using JSON
//TODO 1. JSON.Stringify()
//! It will change JS object into JSON format (String format)
let ob1={
    ob_name : "pen",
    price : 10,
    brand : "camlin"
}

console.log(ob1);

//! JSON.stringify()

//! it will convert any javascript object into json

let jsonData = JSON.stringify(ob1)//! JSON Data is JSON format

console.log(jsonData);

console.log(typeof jsonData); //! string

//! JSON.parse()

//! it will convert the json data into javascript object

let ob2 = JSON.parse(jsonData)
console.log(ob2);
 

