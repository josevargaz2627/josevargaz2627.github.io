let age = 12;
/*
let status;
if (age >= 18) {
    status = "Adult";
} else if (age >= 13) {
    status = "teen";
    } else {
    status = "Child";
}
console.log(status);
*/

console.log((age >= 18) ? "Adult" : (age >= 13) ? "Teen" : "Child");
//(condition ? value_if_true : value_if_false)