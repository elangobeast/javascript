let p1 = document.getElementById("p1")

console.log(p1);

let p2 = document.getElementsByTagName("p")

console.log(p2[1]);
console.log(p2);



let cards = document.getElementsByClassName("card")

let thirdpara = document.getElementById("p3")
console.log(thirdpara);

thirdpara.innerText = " I am third para from  js file"

cards[0].innerHTML ="<h1> I am card 3 from js file</h1>"

let italic = document.createElement("i")

italic.innerText = " I am italic tag from js file"

thirdpara.appendChild(italic)
console.log(thirdpara);


