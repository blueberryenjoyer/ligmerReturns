//1
function yellAtStupidPeople(input) { if (input) { return "ITS TRUTHY" } else { return "ITS FALSY" } }
console.log(yellAtStupidPeople("oooyo"))
//2
function mather(num1, num2) {
    sum = num1 + num2
    if (sum > 100) { console.log(sum + " is greater than 100") }
    else if (sum > 0) { console.log(sum + " is greater than 0") }
    else if (sum == 0) { console.log(sum + " is equal to 0") }
    else if (sum < 0) { console.log(sum + " is a negative number") }
    else console.log("idfk")
}

//these instructions are just so absolutely terrible and unclear

mather(1, 2)
//3
function summer(sum, num) {
    if (sum >= 5 && num >= 5) { return "ya theyre both more an 5" }
    else { return "wallop" }
}

console.log(summer(6, 5))
//4
function canYouHearTheSilence(sum, num, bum, rum) {
    if (sum == num || bum == rum) { return "at least one of the pairs is truthy" }
    else { return "both of em are wallops" }
}

console.log(canYouHearTheSilence(1, 2, 3, 4)) //wallops
console.log(canYouHearTheSilence("ligma", "ligma", 3, 4)) //truthy