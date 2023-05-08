// - create an array
// - create a function that takes one parameter, which will be an array
// - the function should print each element of the array

let aree = [1, 2, 3, 4, 1, 12, 3, 1, 2, 2]
function takeAree(leAree) {
    for (i = 0; i < leAree.length; i++) {
        console.log(leAree[i])
    }
}

takeAree(aree)