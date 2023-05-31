function janken(input) {

    function aithink() {
        if (Math.random() >= 0.6) { return "rock" }
        else if (Math.random() <= 0.3) { return "paper" }
        else { return "scissors" }
    }
    let aichoice = aithink()


    if (input == "rock") {
        if (aichoice == "rock") { final = (aichoice + " equals " + input + ", we tie") }
        if (aichoice == "paper") { final = (aichoice + " beats " + input + ", i win") }
        if (aichoice == "scissors") { final = (aichoice + " loses to " + input + ", you win") }
    }
    else if (input == "paper") {
        if (aichoice == "rock") { final = (aichoice + " loses to " + input + ", you win") }
        if (aichoice == "paper") { final = (aichoice + " equals " + input + ", we tie") }
        if (aichoice == "scissors") { final = (aichoice + " beats " + input + ", i win") }
    }
    else if (input == "scissors") {
        if (aichoice == "rock") { final = (aichoice + " beats " + input + ", i win") }
        if (aichoice == "paper") { final = (aichoice + " loses to " + input + ", you win") }
        if (aichoice == "scissors") { final = (aichoice + " equals " + input + ", we tie") }
    }
    else { return "bad input" }
    return "you played " + input + ", i played " + aichoice + ". " + final
}

console.log(janken("paper")) //this part must be customized by the player