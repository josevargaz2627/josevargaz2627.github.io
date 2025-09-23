//For
for (let i = 0; i <= 10; i++){
    console.log(i + " Hello");
}

//while
let j = 0
while (j <= 10) {
    console.log(j + " Hello");
}

//Do while
let i = 0
do {
    console.log(i + " Hello");
    i+=2;
} while (i < 0);

//EXERCISE 3 - Multiplication Table For 5
// For
for (let i = 1; i <= 10; i++) {
    console.log(i + " x 5 = " + (i*5));
}
//Another Way
let n = 5
for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n*i}`);
}

//EXERCISE 4 - While Loop for Countdown
//while
let countdown = 10;

while (countdown >= 1) {
  console.log(countdown);
  countdown--;
}

console.log("Happy New Year!");

