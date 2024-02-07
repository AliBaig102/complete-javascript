// objects in javascript
const user={
    id:10,
    name:"Ahmed",
    age:25,
    ["user password"]:"123",
    hobbies:["football","basketball","cricket"],
    address:{
        country:"pakistan",
        city: "Karachi",
        street: "lucky one Road",
        building: 10
    },
    print:function (){
      document.write(`<h1> name is : ${this.name}</h1>`);
    },
};
// document.write(`user id is : ${user.id} <br>`);
// console.log(user.address.city);
// [] , .
// document.write(`user name is : ${user["name"]} <br>`);
// document.write(`<h1> user password is : ${user["user password"]}<h1>`);
// user.print();

//object destructuring
// first way
// const name=user.name;
// const age=user.age;
// const city=user.address.city;
// document.write(`<h1> user name is : ${name} </h1>`);
// document.write(`<h1> user age is : ${age} </h1>`);
// document.write(`<h1> user city is : ${city} </h1>`);
// second way
// const {id,name,age,address:{city}}=user;
// document.write(`<h1> user id is : ${id} </h1>`);
// document.write(`<h1> user name is : ${name} </h1>`);
// document.write(`<h1> user age is : ${age} </h1>`);
// document.write(`<h1> user city is : ${city} </h1>`);

const person={
    id:10,
    name:"Talha",
    age:25,
    password:"1234567890",
    country: "Pakistan",
    city: "Karachi",
    street: "Lucky one Road",
    building: 10,
}
//for in loop
for (let key in person){
    document.write(`<h1> ${key} : ${person[key]} </h1>`);
}
//for of loop
for (let value of Object.keys(person)){
    document.write(`<h1> ${value} : ${person[value]} </h1>`);
}















