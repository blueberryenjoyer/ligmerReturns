// Declare a function called evenOrOdd that takes in one parameter called numberValue.
// You can expect that your users will always input a number argument for that
// parameter.
// evenOrOdd should return a string that says "Even" if the numberValue is an even
// number, or a string that says "Odd" if the numberValue is an odd number.
// Reminder: Don't forget to invoke your function after you write it to test that
// it works as expected!
// Write your code below:

function evenOrOdd(numberValue) {
    if (Number.isInteger(numberValue / 2) === true) { return "even" }
    else { return "odd" }
}

console.log(evenOrOdd(17237))
console.log(evenOrOdd(666))
console.log(evenOrOdd(1.4))