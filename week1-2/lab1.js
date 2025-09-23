///LAB#1
//Task 1
var UserName = "Jose";
let UserAge = 18;
const UserID = 1014980493; 


//Task 2
var UserName = "Alejandro";
UserAge = 20;
const UserID2 = 1014982222; 


//Task 3
let score = 95;
let courseName = "Fundamentals of JavaScript";
let isEnrolled = true;
let grades = [60, 95, 48, 72];
let student = {name: "Alejandro", age: 18, course:
"CPAN 113"};


//Task 4
UserAge += score
console.log(UserAge);
UserAge -= score
console.log(UserAge);
UserAge *= score
console.log(UserAge);
UserAge /= score
console.log(UserAge);


//Task 5
let OtherAge = 20
let isEqual = (UserAge == OtherAge); 
let isStrictEqual = (UserAge === OtherAge);  
console.log(isEqual);
console.log(isStrictEqual);

let OtherScore = 60
isEnrolled = true;
let isLess = (score < OtherScore); 
let isGreaterOrEqual = (score >= OtherScore); 
console.log(isLess);
console.log(isGreaterOrEqual);
console.log(isEnrolled);


//Task 6
if (UserAge >= 18){
    console.log("The student is not a minor");
}
else if (UserAge < 18){
    console.log("The student is under age");
}
console.log("End of program");


let CourseName = "CPAN";
switch (CourseName) {
    case "CPAN":
        console.log("CPAN start on monday");
        break;
    case "CPAN2":
        console.log("CPAN2 start on tuesday");
        break;
    case "CPAN3":
        console.log("CPAN3 start on wednesday");
        break;
    case "CPAN4":
        console.log("CPAN3 was cancelled");
        break;
}