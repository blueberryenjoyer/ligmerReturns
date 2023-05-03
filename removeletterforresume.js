function removeletters2() {
    let inputstring = document.getElementById('myText').value
    let outputnumber = []
    let noombers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

    for (let i = 0; i < inputstring.length; i++) {
        let currentCharacter = inputstring[i]
        if (noombers.includes(currentCharacter) == true) {
            outputnumber.push(currentCharacter)
        }
    }
    document.getElementById("ligma").innerHTML = outputnumber.join("")
}
function removenumbers2() {
    let inputstring = document.getElementById('myText').value
    let outputnumber = []
    let noombers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

    for (let i = 0; i < inputstring.length; i++) {
        let currentCharacter = inputstring[i]
        if (noombers.includes(currentCharacter) == false) {
            outputnumber.push(currentCharacter)
        }
    }
    document.getElementById("ligma").innerHTML = outputnumber.join("")
}


let babyisdead = false

function paytaxestothedevil() {
    if (babyisdead === false) {
        let mission = document.getElementById('yodatext').value
        let taxedincome = mission * 0.8
        let surplus = taxedincome - 500
        document.getElementById("yoda").innerHTML = surplus
    }
    else {
        let mission = document.getElementById('yodatext').value
        let taxedincome = mission
        let surplus = taxedincome - 300
        document.getElementById("yoda").innerHTML = surplus
    }
}
function killyoda() {
    babyisdead = true
}