// Pair One
let yourMove = "attack";
let moveOfAI = "defend";

// Pair Two
let your2ndMove = "defend";
let opponents2ndMove = "attack";


if (yourMove == "attack") {
    console.log("You attacked your opponent!")
} else if (yourMove != "attack") {
    console.log("You failed to beat the opponent's defense.")
}
if (your2ndMove == "defend") {
    console.log("You defended against your opponent's attack!")
} else if (your2ndMove != "defend") {
    console.log("You took damage from your opponent's attack!")
}