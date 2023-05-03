// Declare a function called evenOrOdd that takes in one parameter called numberValue.
// You can expect that your users will always input a number argument for that
// parameter.
// evenOrOdd should return a string that says "Even" if the numberValue is an even
// number, or a string that says "Odd" if the numberValue is an odd number.
// Reminder: Don't forget to invoke your function after you write it to test that
// it works as expected!
// Write your code below:

function evenOrOdd(numberValue) {
    let newint = numberValue / 2
    let newerint = Math.floor(newint)
    if (newerint == newerint) { //how on earth does this check for even/odd?
        console.log(newerint + "even")
    }
}

evenOrOdd(5)