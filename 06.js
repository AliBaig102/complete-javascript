// introduction to DOM
// Document Object Model
// how to access elements
// how to create elements
// how to append elements
// how to manipulate elements
// how to add event listeners
// how to set attributes
// how to get attributes
//nodeList
// htmlCollection
// parent
// child
// sibling
// next
// previous
// first
// last
// console.log(document.title);
// =
// document.title="Introduction to DOM";
// console.log(document.body);
document.body.style.backgroundColor="gray";

// document.getElementById()
// document.getElementsByClassName()
// document.getElementsByTagName()
// document.querySelector()
// document.querySelectorAll()

const heading=document.getElementById("heading");
// get
// console.log(heading.innerText);
// const previousText=heading.innerText;
// // set
// heading.innerText=previousText+ " Hello World";
// better way
// heading.innerText +=" Hello World";
// console.log(heading.innerHTML);

const divs=document.getElementsByClassName("divClass");
// console.log(divs[0]);
// divs.style.backgroundColor="red";
for (let i=0;i<divs.length;i++){
    divs[i].style.backgroundColor="red";
    divs[i].style.margin="10px";
}