console.log("looping in js");
//! 
//! difference between for loop and while loop

//! for in loop
//! if we traverse any array or onject by using for in loop it will take index or key of the array or object 

let even = [2,,4,6,8,10,12,14,16]

for(let i in even)
{
    console.log(i,even[i]);
    
}

let student = {
    sname:"san",
    age:10,
    phno:1234567890
}

for (let key in student)
{
    console.log(key,student[key]);
    //! key is used to access the key of the object and student[key] will access the value of that key
    
}

//! for of loop
//! for of loop will give the value of the array or iterable objects
//! if we traverse any array by using for of loop it will take the element of the array
//! if we traverse object then it will throw error

for(let ele of even)
{
   console.log(ele);
   
}
for(let i of student){
    console.log(i);
    
}