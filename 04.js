// array in JavaScript
const names=["abul","babul","kabul","habul","nabul"];
const fruits=["apple","banana","mango","orange","grapes","pineapple"];

//array methods in javascript
// const namesLength = names.length;
// console.log("Length of names array:", namesLength);
//
// // 2. push
// fruits.push("strawberry");
// console.log("Fruits array after push:", fruits);
//
// // 3. pop
// const lastFruit = fruits.pop();
// console.log("Last fruit removed:", lastFruit);
//
// // 4. shift
const firstFruit = fruits.shift();
console.log("First fruit removed:", firstFruit);
//
// // 5. unshift
// fruits.unshift("kiwi");
// console.log("Fruits array after unshift:", fruits);
//
// // 6. concat
// const combinedArray = names.concat(fruits);
// console.log("Combined array:", combinedArray);
//
// // 7. slice
// const slicedArray = fruits.slice(1, 3);
// console.log("Sliced array:", slicedArray);
//
// // 8. splice
// fruits.splice(2, 1, "pear");
// console.log("Fruits array after splice:", fruits);
//
// // 9. indexOf
// const index = fruits.indexOf("banana");
// console.log("Index of 'banana':", index);
//
// // 10. includes
// const includes = fruits.includes("apple");
// console.log("Includes 'apple'?", includes);
//
// // 11. join
// const joinedArray = fruits.join(", ");
// console.log("Joined array:", joinedArray);
//
// // 12. reverse
// fruits.reverse();
// console.log("Reversed fruits array:", fruits);
//
// // 13. sort
// fruits.sort();
// console.log("Sorted fruits array:", fruits);
//
// // 14. map
// const upperCaseNames = names.map(name => name.toUpperCase());
// console.log("Upper case names array:", upperCaseNames);
//
// // 15. filter
// const filteredFruits = fruits.filter(fruit => fruit.length > 5);
// console.log("Filtered fruits array:", filteredFruits);
//
// // 16. reduce
// const sum = [1, 2, 3, 4, 5].reduce((accumulator, currentValue) => accumulator + currentValue);
// console.log("Sum of numbers:", sum);