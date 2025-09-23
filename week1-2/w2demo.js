//Example 1
let grade = 35;
if (grade >= 50){
    console.log("Pass");
}
else {
    console.log("Fail");
}
console.log("End of program");


//Example 2
let isStudent = true;
if (isStudent){
    console.log("You are a student");
}
else {
    console.log("You are not a student");
}
console.log("End of program");


//Example 3
grade = 55;
if (grade >= 80){
    console.log("Distinction");
}
else if (grade >= 65) {
    console.log("Credit");
} 
else if (grade >= 55) {
    console.log("Pass");
} else {
    console.log("Fail");
}
console.log("End of program");

//Example 4 - switch function
let day = 1;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break; 
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;     
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
}


