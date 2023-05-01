// Pair One
let confirmationCodeA = "abcdefg";
let confirmationCodeB = "abcdefg";

// Use the "==" operator to compare the two confirmation codes, and then console.log
// the output. 

// Pair Two
let authCodeOne = "987654321";
let authCodeTwo = "98765421";

console.log("confirmationcodes: " + (confirmationCodeA === confirmationCodeB))
console.log("authcodes: " + (authCodeOne === authCodeTwo))

if (confirmationCodeA === confirmationCodeB) {
    console.log("confirmation codes are good")
} else {
    console.log("confirmation codes are bad")
}
if (authCodeOne === authCodeTwo) {
    console.log("auth codes are good")
} else {
    console.log("auth codes are bad")
}