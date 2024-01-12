// function  in javascript

// function declaration
// myFunctionDeclaration();
function myFunctionDeclaration(){
    document.write("<h1>Inside function declaration</h1>");
}
// call a function

// myFunctionDeclaration();

// function expression
const myFunctionExpression=function (){
    document.write("<h1>Inside function expression</h1>");
}
// call a function
// myFunctionExpression();

// parameterized function
function add(num1,num2){
    document.write(`add value is : ${num1} + ${num2} = ${num1+num2} <br>`);
}
// add(40,50);
// add(24657890, 24567890);
// rest parameter
// const sub = function(num1=10,num2=20,...otherValues){
//     document.write(`sub value is : ${num1} - ${num2} = ${num1-num2} <br>`);
// }
// sub(50,60,100,200,300,400,500,600,700,800,900,1000);
// add();
// arrow function
// ()= > {}
const calculate =(type="add",num1=10,num2=20)=>{
    if (type==="add"){
        document.write(`add value is : ${num1} + ${num2} = ${num1+num2} <br>`);
    }else if (type==="sub"){
        document.write(`sub value is : ${num1} - ${num2} = ${num1-num2} <br>`);
    }else if(type==="multiply"){
        document.write(`multiply value is : ${num1} * ${num2} = ${num1*num2} <br>`);
    }else if(type==="divide"){
        document.write(`divide value is : ${num1} / ${num2} = ${num1/num2} <br>`);
    }
}
// calculate("divide",100,200);
// call back function
const callBackFunction = (a,b,c)=>{
    let add = a+b;
    c(add);
}
function print(val){
    document.write(val);
}
// callBackFunction(50,40,print);

//function with return value
const addition=(a,b)=>{
    return a+b+100;
}
// document.write(addition(70,90));
// console.log(addition(50,40));
// IIFE function
// immediately invoked function expression

( ()=>{
    document.write("<h1>IIFE function</h1>");
})();
const addOrSub=(type,num1,num2)=>{
    type==="add"? document.write(`add value is : ${num1} + ${num2} = ${num1+num2} <br>`): document.write(`sub value is : ${num1} - ${num2} = ${num1-num2} <br>`);
}
addOrSub("add",100,50);
// condition ? true : false; 
