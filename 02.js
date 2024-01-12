//operators in javascript
// assignment operators
// + - * / % = += -= *= /= %=

// comparison / conditional / relational operators
// = =, = = =, >, <, > =, < =, ! = ,! = =
// let number = 10;
// let string = 10;
//
// if (number===string){
//     document.write("True");
// }else {
//     document.write("False");
// }


// Logical operators
// &&, ||, ! and ,or ,not

// increment and decrement operators
// ++, --

// template literals ``
// document.write(`<h1> ${i} This is a template literal </h1>`);

// loops in javascript
// forward loop
// backward loop
// while loop
// let i=0;
// while (i<10){
//     document.write(`<h1> ${i} Inside while loop </h1>`);
//     i=i+1;
// }
// for loop
// for (let i=10;i>0;i=i-1){
//     document.write(`<h1> ${i} Inside for loop </h1>`);
// }

// do while loop
// let i = 10;
//
// do {
//     document.write(`<h1> ${i} Inside do while loop </h1>`);
//     i--;
// } while (i >0); // true

const fruits = ["apple", "banana", "orange", "mango", "pineapple", "grapes", "papaya", "kiwi", "strawberry", "watermelon"];
// for (let i=0;i<fruits.length;i++){
//     document.write(`<h1> ${ fruits[i] } </h1>`);
// }
// for...of loop
// for (let fruit of fruits){
//     document.write(`<h1> ${ fruit } </h1>`);
// }
// for (let fruit of fruits){
//     console.log(fruit);
// }
// for... in loop
for (let fruit in fruits){
    document.write(`<h1> index = ${ fruit } => ${ fruits[fruit] } </h1>`);
}
