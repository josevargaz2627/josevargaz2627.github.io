//LAB#2
//Task 1
let n = 8;
console.log((n > 0) ? "The number is positive" : (n < 0) ? "The number is negative" : "The number is zero");

let grade = "A"; 
switch (grade) {
    case "A":
        console.log("Excellent");
        break;
    case "B":
        console.log("Good");
        break;
    case "C'":
        console.log("Enough to pass");
        break;
    case "D":
        console.log("Low, need practice");
        break;
    case "F":
        console.log("Failed, must repeat course");
        break;
}


//Task 2
let i = 0
while (i <= 10) {
    console.log(i);
    i++;
}

let a = 1;
do {
  console.log(a * 3);
  a++;
} while (a <= 5);

let colors = ["red", "blue", "green", "yellow", "orange"];
for (let j = 0; j < colors.length; j++) {
  console.log(colors[j]);
}


//Task 3
let Cellphone = {Branch: "Iphone", Model: 17, year: 2025};
for (let key in Cellphone) {
    console.log(key + " : " + Cellphone[key]);
}

let grades = ["95", "50", "15"];
for (let grade of grades) {
    console.log(grade);
}


//Task 4
for (let i = 1; i <= 10; i++) {
    if (i == 5) break;
    console.log(i);
}
 
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) continue; 
    console.log(numbers[i]);
}
