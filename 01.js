// Variables in javascript
// what are the ways to create variables in javascript
// variable declaration
// variable initialization
// variable declaration and initialization

// variable declaration
var myVariable;

// Variable initialization
myVariable = 10;

// Variable declaration and initialization
let anotherVariable = 20;

// var ,let and const
// var is to be used when we want to change the value of variable
var myVariable = 10;
// change value
myVariable = 20;

// let is to be used when we want to change the value of variable
let anotherVariable = 20;
// change value
anotherVariable = 30;
// const is to be used when we do not want to change the value of variable
const constantVariable = 30;
// const a=10;
// we can not change value of a constant variable
// a=20;

// difference between var and let
// when we use var we can change the value of variable and also redeclare the variable
// example
// var a=10;
// var a=20;
// console.log(a);
// it will not give error

// when we use let we can change the value of variable but we can not redeclare the variable
// example
// let a=10;
// let a=20;
// console.log(a);
// it will give error


// data types in javascript
// 01)primitives data types
// 7 primitives data types in javascript
// number
// string
// boolean
// null
// undefined
// symbol
// bigint
const number = 10;
const string = "hello";
const boolean = true | false;
const nullValue = null;
const undefinedValue= undefined;
const symbol1 = Symbol(10);
const bigint = 9007199254740991n;

