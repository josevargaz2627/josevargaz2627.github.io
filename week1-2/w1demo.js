console.log("Hello World!");

//Exercise 1.1 - var is a function de create variables
var myname = "Alejandro";
console.log(myname);
var myname = "Jose Alejandro";
console.log(myname);

//Exercise 1.2 - let is a function de create variables
let age = 18; // Declare and design
age = 19; //Update value
console.log("Age: " + age);

//Exercise 1.3 - boolean
const isStudent = true; 
console.log(isStudent);

//Exercise 1.4 - arithmetic operations
let x = 15;
let y = 5;
let sum = x + y; 
let difference = x - y; 
let product = x * y; 
let quotient = x / y; 
let remainder = x % y; 
console.log(sum);
console.log(difference);
console.log(product);
console.log(quotient);
console.log(remainder);

//Exercise 1.5 - assignment operations
let z = 20;
console.log (z += 5); 
console.log(z -= 5); 
console.log(z *= 5); 
console.log(z /= 5); 

//Exercise 1.6 - comparison operations
let a = 10;
let b = 5;
let isEqual = (a == b); 
let isStrictEqual = (a === b);  
let isNotEqual = (a != b); 
let isStrictNotEqual = (a !== b); 
let isGreater = (a > b); 
let isLess = (a < b); 
let isGreaterOrEqual = (a >= b); 
let isLessOrEqual = (a <= b);
console.log(isEqual);
console.log(isStrictEqual);
console.log(isNotEqual);
console.log(isStrictNotEqual);
console.log(isGreater);
console.log(isLess);
console.log(isGreaterOrEqual);
console.log(isLessOrEqual);

//Exercise 1.7 - working around a variable
let t = 50;
t += 10;
t -= 5;
let isGreaterOrEqual2 = (t >= 50); 
console.log(isGreaterOrEqual2);
