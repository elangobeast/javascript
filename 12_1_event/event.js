//!mouse event
let display=()=>{
    console.log("i am display function");    
}

let changeColor=()=>{
    let header=document.querySelector("header")
    header.style.backgroundColor="rgb(228, 102, 102)"
    header.style.color="white"
}

let changeColor2=()=>{
    let header=document.querySelector("header")
    header.style.backgroundColor="rgb(148, 148, 209)"
    header.style.color="black"
    
}

//! event listner

let btn1=document.getElementById("btn1")
// console.log(btn1);

//!mouse events

btn1.addEventListener("click",()=>{
    console.log("i am click event");
    
})

btn2.addEventListener("dblclick",()=>{
    alert("i am double click event");
    
})

let section = document.querySelector("section")

section.addEventListener("mouseover",()=>{
    section.style.backgroundColor="white"
    section.style.color="black"
})

section.addEventListener("mouseeleave",()=>{
    section.style.backgroundColor="blue"
    section.style.color="white"
})

let inner1= document.getElementById("inner1")
let inner2= document.getElementById("inner2")

inner2.addEventListener("click",()=>{
    inner1=document.getElementById("inner1").innerHTML
    inner2.innerHTML=inner1;
})