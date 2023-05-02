// Declare a function, defaultGreet, that has 2 parameters, one called firstName
// and another called lastName. You can expect that both of those parameters
// will always be input by your users as string arguments.
// defaultGreet should return a string greeting that concatenates the two names
// together.
// If the user did not pass in a lastName as an argument, set the lastName as "Doe".
// Reminder: Don't forget to invoke your function after you write it to test that
// it works as expected!
// Write your code below:

function defaultGreet(firstName, lastName) {
    if (lastName === undefined) {
        let lastName = "Doe"
        return firstName.concat(lastName)
    }
    else {
        return firstName.concat(lastName)
    }
}

console.log(defaultGreet("John"))