// MyPush
// - create a function
// - it should take two parameters, the first is an array and the second is an element to be added to the array
// - add the element to the end of the original array
// - return the new length of the array

function twoParams(a, b) {
    let newArray = a
    newArray.push(b)
    return newArray.length
}

console.log(twoParams([0, 1, 2, 3, 4], "heavyweaponsguy"))

//this was done way too lazily

function twoAgain(a, b) {
    a[a.length] = b
    return a.length
}

console.log(twoAgain([0, 1, 2, 3, 4, 5, 6, 7], "heavyweaponsguy"))

//this is much better