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