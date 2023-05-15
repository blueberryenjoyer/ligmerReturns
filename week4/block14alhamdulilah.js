//make a function that takes an array as input
//for loop every index of the array
//if the number is even remove it
//when the for loop is done, add all the numbers
//return

function oddAdd(input) {
    let oddsOnlyArray = []
    let sum = 0
    input.forEach(i => { //foreach supremacy! preach it from the hills!
        if (i % 2 !== 0) { oddsOnlyArray.push(i) }
    })
    oddsOnlyArray.forEach(i => {
        sum = sum + i
    })

    return sum
}

//console.log(oddAdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]))

function vowelchecker(inputstring) {
    let vowels = ["a", "e", "i", "o", "u"]
    let totalVowels = 0
    let totalConsonants = 0
    for (let i = 0; i < inputstring.length; i++) {
        if (vowels.includes(inputstring[i]) == true) { totalVowels++ }
        else { totalConsonants++ }
    }
    return (`total vowels: ${totalVowels} total consonants: ${totalConsonants}`)
}

//console.log(vowelchecker('abcdefghijklmnopqrstuvwxyz'))

function reverseArray(array1) { return array1.reverse() }
//console.log(reverseArray([1, 2, 3]))

function fizzBuzz(maxNum) {
    let bigAssList = []
    for (let i = 0; i < maxNum; i++) {
        if (i % 3 === 0 && i % 5 === 0) { bigAssList.push('fizzbuzz') }
        else if (i % 3 === 0) { bigAssList.push('fizz') }
        else if (i % 5 === 0) { bigAssList.push('buzz') }
        else { bigAssList.push(i) }
    }
    return bigAssList
} //i made it like this to avoid filling up my terminal with 100 lines

//console.log(fizzBuzz(100))