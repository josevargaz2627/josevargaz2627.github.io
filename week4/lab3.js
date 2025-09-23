//Lab3
//Task 1
let colors = new Array ("red", "blue", "green");
let sizes = ["large", "medium", "small"];
let numbers = Array.of (95, 5, 15);

//Task 2
colors.push("purple"); 
sizes.pop(); 
console.log([95, 5, 150].splice(1,1));

//Task 3
let filteredNumbers = numbers.filter(num => num > 10);
console.log(filteredNumbers);
let squaredNumbers = numbers.map(num => num ** 2);
console.log(squaredNumbers);
colors.forEach(color => console.log(color));

//Task 4
for (const element of numbers) {
    console.log(element);
}
for (let i = 0; i < sizes.length; i++) {
    const element = sizes[i];
}
for (let [i, color] of colors.entries()) {
  console.log(`Index ${i}: ${color}`);
}