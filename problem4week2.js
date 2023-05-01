let aiHealthStat = 100;
let aiAttackStat = 56;
let aiDefenseStat = 60;
let aiSpecialAttack = "Laser Beam";

let yourHealth = 100;
let yourAttackStat = 45;
let yourDefenseStat = 55;
let yourSpecialAttack = "Logic Bomb"


if (yourHealth > 0 && aiHealthStat <= 0) {
    console.log("you win")
} else if (yourHealth <= 0 && aiHealthStat > 0) {
    console.log("you lose")
} else {
    console.log("the game continues")
}
function dealdamage() {
    if (aiAttackStat > yourDefenseStat) {
        damage = aiAttackStat - yourDefenseStat
        yourHealth = yourHealth - damage
        console.log("_______________________________________")
        console.log("you took this much damage:" + damage)
        console.log("you have this much health:" + yourHealth)
    }
    else { console.log("no damage") }
}
dealdamage()
dealdamage()
dealdamage()
dealdamage()
dealdamage()