let grades = [45, 25, 36, 80]; //literal notation
let cities = new Array ("Toronto, London, Miami"); //array construction
let countries = Array.of ("Canada", "Colombia", "Puerto Rico"); // array's of method

let arr1 = new Array(4);
let arr2 = Array.of(4);

// add elements to the array
arr1[0] = 45; //1rd element
arr1[2] = 80; //3rd elemnt 

arr2[0] = 45; //1rd element
arr2[2] = 80; //3rd elemnt 

arr1.push(400); //add element at the end of the array
arr1.unshift(400); //add element in front of the array

//remove elements of the array
let removeItem = arr1.pop(); //remove element at the end of the array
console.log(removeItem);
console.log(arr1);

console.log(arr1.shift()); //remove element in front of the array

console.log(arr1);
console.log(arr2);

//print especific element of an array 
let countries2 = Array.of ("Canada", "Colombia", "Puerto Rico");
let selectedCountries = countries2.slice(0,2);
console.log(selectedCountries);

//Exercise1 - create a list of array an print the max an min value
let numbers = [45, 25, 36, 80]; 
let max = numbers[0]
let min = numbers[0]
for (const element of numbers) {
    console.log(element);
    if (element > max)
        max = element;
    if (element < min)
        min = element;
}
console.log("Max:", max);
console.log("Min:", min);

//Exercise2 - reverse the order of the array
let numarr1 = [22,32,43,54,65];
let numarr2 = [];
for (let index = numarr1.length -1 ; index >= 0; index--) {
    numarr2.push(numarr1[index]);
}
console.log(numarr1);
console.log(numarr2);