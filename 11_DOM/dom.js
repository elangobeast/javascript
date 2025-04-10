console.log("DOM Manipulation")

//! 1 . HOW TO TARGET ELEMENTS
//! document .getElementById()

let h2 = document.getElementById("heading2")

console.log(h2);

let h1 = document.getElementById("heading1")

console.log(h1);//! it will return null if the element is not found

//! HOW TO TARGET BY THE CLASS NAME

let cards = document.getElementsByClassName("card");

console.log(cards);

console.log(cards[1]);

//! HOW TO TARGET BY THE TAG NAME

let lists = document.getElementsByTagName("li");//! IT IS A TAG NAME
console.log(lists);

console.log(lists[2]);

//! HOW TO TARGET BY THE QUERY SELECTOR 

let button = document.querySelector("button");//! IT IS A TAG NAME
console.log(button);

let heading2 = document.querySelector("#heading2");//! IT IS A ID NAME
console.log(heading2);

let card = document.querySelector(".card");//! IT IS CLASS NAME
console.log(card);

let li = document.querySelector("li");
console.log(li);

//! HOW TO TARGET BY THE QUERY SELECTOR ALL 
//! TARGETTING BY THE SELECTORS BUT IT WILL RETURN A NODE LIST

let box = document.querySelectorAll(".card");
console.log(box);


//! HOW TO CHANGE THE CONTENT AND KNOW THE CONTENT

let heading3 = document.getElementById("heading2");
console.log(heading3.innerText);

heading3.innerText = "hello world"; //! it will change the content of the element

//! element.innerHTML 

let ul = document.querySelector("ul")
console.log(ul.innerText);

console.log(ul.innerHTML);

ul.innerHTML = "<li> html </li> <li> js </li> <li> css</li><li> js</li>"

console.log(ul.innerHTML);

let cardd = document.getElementsByClassName("card")

cardd[2].innerHTML = "<h1> I am Card 3 from js file</h1>"

//! HOW TO ADD STYLING TO THE ELEMENT

let btn = document.getElementsByTagName("button");

//!console.log(btn);

btn[0].style.backgroundColor="red"

//! HOW TO ADD OR REMOVE CLASS TO THE ELEMENT

let footer = document.querySelector("footer")

console.log(footer.classList);

footer.classList.add("san");

console.log(footer.classList);

footer.classList.remove("hi");
console.log(footer.classList);

let card2 = document.getElementsByClassName("card")

console.log(card2);

// card2[1].classList.add("card2");

// console.log(card.card2[1].classList);

//! 5. HOW TO CREATE AN ELEMENT




let div = document.createElement("div")

div.classList.add("card")

div.innerHTML =`<h1> I AM CARD 4</h1>`

card2[2].before(div)

let p1 = document.createElement("p1")

p1.innerText="I am paragraph from js file"

btn[0].before(p1)

let BTn = document.createElement("button")

BTn.innerText = "read more"

card2 [0].prepend(BTn)
card2 [0].append(BTn)
