console.log("String File");

// ! how to declare the String


let msg="Tomorrow you have to give the mock"
console.log(msg);
console.log(typeof msg);

let reply='we will not give mock sir'
console.log(reply);
console.log(typeof reply);

let msg2=`Then today will be your last webtech class`
console.log(msg2);
console.log(typeof msg2);

// !  how to know the length of the string

let greet="Hello"
let len=greet.length
console.log(len);


// ! String interpolation


// the length of the the string is
console.log(`The length of the string is ${len}`);

let a=2
let b=3

// the add of 2 and 3 is 5

console.log(`addtion of ${a} and ${b} is ${a+b}`) 



// ! String Methods :


// !  1.toUpperCase() :

//   This method used to convert the string into uppercase and it will return one new string

let sname="rohit"
let upper=sname.toUpperCase()
console.log(upper)
console.log(sname)

// ! 2.toLowerCase()

//    this method is used to convert the string into lowercase and it will return one new String

let lastName="SHARMA"

let lower=lastName.toLowerCase()

console.log(lower)


// ! 3.includes()  

// it is used to given string is prsent or not 
//  if it is present it will return true otherwise it will return false


console.log(lastName.includes("a"))
console.log(lastName.includes("A"))



// ! 4.charAt()

//   it is used to know the character of the given position

console.log(lastName.charAt(3))

// !  5.indexof()

     //  it is used to know the index of the given string
     
     // always it will take the first occurace of that specified string

     // ! if the given string is not present then this method will return -1

console.log(lastName.indexOf("A"))
console.log(lastName.indexOf("e"))


// ! 6.lastIndexOf()

// It is used to know the index of the given string

// Always it will take the last occurace of the specified string

//If the given string is not present then this meyhod will return -1.


console.log(lastName.lastIndexOf("A"))   //5
console.log(lastName.lastIndexOf("e"))   //-1

// ! 7.concat()

// this method is used to combine a two or maore than two strings together and it will return one new string

let fullname=sname.concat(" ",lastName)
console.log(fullname)


// ! 8.trim()


// it is used to to romove the space from the the start and the end of the string

  let str="  Hello   "
  console.log(str)
  console.log(str.length)// 10
  console.log(str.trim())

  console.log(str.trim().length)// 5


  // ! split():

  //   it is ued to covert string into array

let str2="Hello you are you"
let str2Arr=str2.split(" ")
console.log(str2Arr)

// ! slice()

// it is used to extract one string to unother string 

// it will take take two parameter (startingindex and endIndex)

//it will not include the endIndex Value

// we can give negative value also


let str3="hello everyone"
console.log(str3.slice(0,9))
console.log(str3.slice(2))
console.log(str3.slice(-5,-1))
console.log(str3.slice(-3))
console.log(str3.slice(-1,-3))
console.log(str3.slice(5,-1))

