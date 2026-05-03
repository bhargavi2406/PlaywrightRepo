//regular function
/* function add(a, b) {
   return a + b;
}

console.log(add(2, 3));

function greet(name) {
   console.log("Hello " + name);
}

greet("Bhargavi");

//function → keyword
//greet → function name
//name → parameter
//greet("Bhargavi") → function call
*/
//Arrow function
 //const add=(a, b) => {
  // return a + b;
//};

//console.log(add(2, 3));

/* const greet = (name) => {
   console.log("Hello " + name);
};

greet("Bhargavi");

function greet(name = "Guest") {
   console.log("Hello " + name);
}

greet();           // no value passed
greet("Bhargavi"); // value passed


const greet=(name="guest")=>{
    console.log("Hello " + name);
}

greet();           // no value passed
greet("Bhargavi"); // value passed

//Rest parameters
function sum(...numbers) {
   console.log(numbers);
}

sum(1, 2, 3, 4);

//Spread parameters
let nums = [10, 20, 30];

console.log(...nums);

let arr1 = [1, 2];
let arr2 = [3, 4];

let result = [...arr1, ...arr2];

console.log(result);

function demo(...a){
   console.log(a);
}

demo(5,10,15);


let b = [5,10,15];

console.log(...b);

greet();

function greet() {
   console.log("Hello");
}

function multiply(a, b = 2) {
   return a * b;
}

console.log(multiply(5,4));
*/

function total(...nums) {
   let sum = 0;

   for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
   }

   return sum;
}

console.log(total(5, 10, 15));

//Regular function → basic & hoisted
//Arrow function → modern & short
//Default parameters → set default value
//Rest (...) → collect values
//Spread (...) → expand values
//Hoisting → only works with regular functions