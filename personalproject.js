function removeletters(inputstring) {

    let outputnumber = []
    let noombers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

    for (let i = 0; i < inputstring.length; i++) {
        let currentCharacter = inputstring[i]
        if (noombers.includes(currentCharacter) == true) {
            outputnumber.push(currentCharacter)
        }
    }
    return (outputnumber.join(""))
}

console.log(removeletters("11aaa21Cr51ge3icanseeclearlynowtherainhasgone900142069ligma55"))
// rough description of what happens: each index of the input number is checked through a for loop. if it is a number, it is added to an array
//at the end of the for loop, the array it turned into a string and returned to caller