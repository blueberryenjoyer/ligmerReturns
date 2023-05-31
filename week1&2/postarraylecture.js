// Write a function to check whether an `input` is an array or not.
// - write a function
// - it takes one parameter
// - the function should return true if the input is an array, and false if it is not an array
//   - Test data: console.log(is_array('w3resource')); //false
//   - Test data: console.log(is_array([1, 2, 4, 0]));  //true



function arrayChecker(input) {
    if (Array.isArray(input) === true) {
        return true
    }
    else { return false }
}

console.log(arrayChecker([1289038, 12383]))

// Write a function to get a specific element of an array. 
// - write a function
// - it will take two parameters, the first is an array, the second is the index that you are looking for
// - the function should return the element of the array at the specified index
// - do not mutate the original array


function getElement(input, input2) {
    return input[input2]
}

console.log(getElement([1, 2, 3, 4], 1))
console.log(['asdfaf', '3444444', 3, "i hate the antichrist"][1]) //lmao its the same

// Write a function that will add the first and last numbers in an array
// - write a function
// - it will take one parameter that is an array of numbers
// - return the sum of the first and last numbers of the array 

function brok(arr) {
    return (arr[0] + arr[arr.length - 1])
}

console.log(brok([0, 1, 2, 3]))

// Correct Length? 
// - Write a function 
// - it takes two parameters, an array and a number
// - returns true if the  length of the array matches the provided number and false if it does not. 


function wack(arr, int) {
    if (arr.length === int) { return true }
    else { return false }
}

console.log(wack([2, 1, 3, 1, 1, 2], 6))