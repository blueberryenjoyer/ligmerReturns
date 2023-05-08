// - create a function
// - it should take one parameter, which represents a number
// - return the factorial of the parameter

function factoror(num) {
    let output = num
    for (i = (num - 1); i > 0; i--) {
        output *= i
    }
    return output
}

console.log(factoror(9))