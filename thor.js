// In "Avengers: Infinity War", the supervillain Thanos obtains all 5 Infinity Stones and snaps half of the universe as though they never existed.
//Write a function that accepts an array of superheroes (represented as strings) and returns a new array where half of the superheroes have been "snapped out of existence".
//For convenience, you should remove the latter half of the array's superheroes.
// For example:
// If you were given an array like
// ["Iron Man", "Captain America", "Thor", "Dr. Strange", "Spiderman", "Groot"]
// Your function should return ["Iron Man", "Captain America", "Thor"]
// (the latter half of the array has been removed)

let preSnap = ["iron man", "thor", "hulk", "spider-man", "dr pepper man", "universe-hopping batman"]

function snap(inputArray) {
    let newLength = (inputArray.length / 2)
    let output = inputArray.slice(newLength)
    return output
}

console.log(snap(preSnap))
//and below is the same script but extremely condensed
console.log(preSnap.slice(preSnap.length / 2))