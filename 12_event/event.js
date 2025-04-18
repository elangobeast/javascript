let display = ()=>{
    console.log("i am display function");
    
}

let changeColor =()=> {

    let header = document.querySelector("header")
    header.style.backgroundColor="red"
    header.style.color="white"
}

let changeColor2 =()=>{
     let header = document.querySelector("header")
    header.style.backgroundColor="black"
    header.style.color="pink"
}
//! EVENT LISTENER  

let btn1 = document.getElementById("btn1")
//! mouse events
btn1.addEventListener("click",()=>{
    console.log(" I am click event");
    
})

let btn2 = document.querySelector("#btn2")

btn2.addEventListener("dbclick",()=>{
    alert("I am dbclick event")
})

let section= document.querySelector("section")
section.addEventListener("mouseover",()=>{
    section.style.backgroundColor="green"
    section.style.color="black"

})

section.addEventListener("mouseleave",()=>{
    section.style.backgroundColor="grey"
    section.style.color="yellow"


})

let box2 = document.getElementById("box2")
box2.addEventListener("click",()=>{
    let box1 = document.getElementById('box1').innerHTML

    box2.innerHTML = box1

    console.log("clicked...");
     
})

