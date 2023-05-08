// Print all odd numbers less than 100
// - create a function
// - print all odd numbers less than 100

function allOdds() {
    console.log("all odd numbers less than 100")
}
//i technically did it, LOL





function evenOrOddSmaller(numberValue) { //old function
    let newerint = Math.floor(numberValue / 2)
    if (newerint === numberValue / 2) { return false } //this is even
    else { return true } //this is odd
}

function correctOdds(input) {
    if (input == "please") {
        let output = []
        for (let solution = 0; solution <= 100; solution++) {
            if (evenOrOddSmaller(solution) === true) {
                output.push(solution)
            }
        }
        return output
    }
    else { return "you gotta say the magic word!" }
}

console.log(correctOdds("please"))