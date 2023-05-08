// Multiplication tables
// - create a function 
// - it should take one parameter, which represents a number
// - print the multiplication of that number from 1 to 10

function teeburu(num) {
    let output = []
    for (i = 1; i <= 10; i++) {
        output.push(num * i)
    }
    return output
}

console.log(teeburu(5))