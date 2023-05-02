// Declare a function called myMnemonic that has 4 parameters: stringA, stringB
// and so on. You can expect that your users will always input string arguments
// for each of those parameters.
// myMnemonic should return the total sum of each length of each string argument,
// added all together.
// For example, if the length of stringA is 1, stringB 2, stringC 3, and stringD 4,
// then your function should return 10 (4 + 3 + 2 + 1).
// // Reminder: Don't forget to invoke your function after you write it to test that
// it works as expected!
// Write your code below:

function myMnemonic(stringA, stringB, stringC, stringD) {
    return stringA.length + stringB.length + stringC.length + stringD.length
}
console.log(myMnemonic(
    "gyakuten saiban",
    "                                      ",
    "the industrial revoltuion and its comesequcens ahve beena  dsiastretr for the human arace",
    "birds are GOVENRMTNENT DRONES SENT TO SPY ON YOU"
))