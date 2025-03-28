let student={
    sname : "rohit",
    age : 10,
    isStudent : true,
    skills : ["html","js","java"],

    do : ()=>{
        console.log("I can sleep");//! I can sleep
    },

    address : {
        city:"chennai",
        pincode: 600083
    }

}

console.log(student);//! {sname: 'rohit',age: 10,isStudent: true,skills: [ 'html', 'js', 'java' ],do: [Function: do]}

//! how to access object property

console.log(`student name is : ${student.sname}`);
console.log(`student age is : ${student.age}`);
console.log(`student is student : ${student.isStudent}`);
console.log(`student skills are : ${student.skills}`);
console.log(`city : ${student.address.city}`);

student.do()//! I can sleep

//! how to modify the value of object propert

student.phno = 1234567890 

console.log(student);//!{sname: 'rohit',age: 10,isStudent: true,skills: [ 'html', 'js', 'java' ],do: [Function: do],address: { city: 'chennai', pincode: 600083 },
                          //!phno: 1234567890}

//! delete the property of object

delete student.phno

console.log(student)//! phno is deleted from the object of student property

let laptop ={
    brand:"hp",
    color: "black".replace("black","white"),
    price: 45000,
    any : () => {
        console.log("the ram is 16 gb");
    },
    address:{
        loc : ' london',
        owner : 'virat'
    }

}
console.log(laptop);
laptop.ram="8gb"
console.log(laptop);

delete laptop.ram

console.log(laptop);

console.log(`laptop brand is :${laptop.brand}` );




//! Object Methods

//! 1.Object.keys()

//! this method returns one array there it stores all the keys

let keys = Object.keys(student)

console.log(keys);

//! 2. object values()

//! it is used to return all the values of the object in the form of array

let values = Object.values(student)

console.log(values);

//! 3.Object.entries()
//! it will return one array of key value pairs (as array) from the object 
let key_values = Object.entries(student)
console.log(key_values);

//! 4.object.freeze()
//! this method will make the object frozen so that we can not add/modify/delete any keys from the object

let ob1 ={
    obname : "pen",
    price : 10
}
console.log(ob1);
Object.freeze(ob1)
ob1.price=20  //! not possible
delete ob1.obname
ob1.colour="red"
console.log(ob1);

//! 5.Object.isFrozen()

//! it is used to check whether the object is frozen or not
//! if the object is frozen it will return true otherwisw it will return false

console.log(Object.isFrozen(ob1));
console.log(Object.isFrozen(student));

//! 6 .Object.seal()

//! it is also similar to Object.freeze() but in this method we can modify / change

let ob2 ={
    obname:"laptop",
    price :50000
}
console.log(ob2);
Object.seal(ob2)

delete ob2.price //! not possible

ob2.color="green"//! not possible

ob2.price= 49999 //! possible

console.log(ob2);

//! 7 . Object.isSealed()

console.log(Object.isSealed(ob2));

console.log(Object.isSealed(ob1));

console.log(Object.isSealed(student));





















