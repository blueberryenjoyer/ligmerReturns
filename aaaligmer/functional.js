let dogObj = {
    name: 'biscuit',
    legs: 3,
    friendsWithCats: false
}

console.log(dogObj.name)

function dogFunc(param) {
    if (param == 'name') { return 'biscuit' }
    if (param == 'legs') { return 3 }
    if (param == 'friendsWithCats') { return false }
}

console.log(dogFunc('name'))

dogObj.legs++
console.log(dogObj.legs)
console.log(dogFunc('legs') + 1)

//this sort of thing makes me want direct low-level control over memory and stuff
//i want to modify the integer on my function, but i cant. i just cant
//theres no way to modify a function without just redeclaring it
//im forced to use objects for everything