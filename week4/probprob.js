// Prompt #1: In the tv show, "Stranger Things", the monsters in the Upside Down regularly attack the town of Hawkins, Indiana. Only a small group of people know how to properly
// fight these monsters: a group of kids, a dumb sheriff, and a mom having a not very fun time. Usually, these groups are off doing things by themselves, but they tend to hav
// the most success when all working together. 

// Write a function called joinGroups that takes in two parameters: groupOne and groupTwo, which you can expect will both be arrays of strings (where each string represents
//a name). 

// Your function should join the two groups together into one array and return the newly combined array. 

// For example: 

// If you were given the following argument values, 
// let kidsGroup = ["Will", "Eleven", "Mike", "Lucas"] 
// let adultGroup = ["Sheriff Hopper", "Joyce"] 
// joinGroups(kidsGroup, adultGroup) // would return: 
// // ["Will", "Eleven", "Mike", "Lucas", "Sheriff Hopper", "Joyce"] 

// Note: Be sure that you're not accidentally returning an array that is multidimensional! (i.e. contains nested sub-arrays)
let kidsGroup = ["Will", "Eleven", "Mike", "Lucas"]
let adultGroup = ["Sheriff Hopper", "Joyce"]
function joingroups(param, param2) {
    let newArray = []
    newArray.push(...param)
    newArray.push(...param2)
    return newArray
}

console.log(joingroups(kidsGroup, adultGroup))