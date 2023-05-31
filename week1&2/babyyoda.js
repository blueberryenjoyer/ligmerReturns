// // In the show, "The Mandalorian," the protagonist(The Mandalorian) travels across the galaxy completing bounty missions to protect The Child, aka "Baby Yoda."
// Write a function that helps this bounty hunter figure out how to budget their reward money(after all, Baby Yoda child - care is very expensive!)
// // Consider the following bounty mission difficulty levels and their corresponding reward amounts:
// // Easy: 5, 000 credits
// // Medium: 10, 000 credits
// // Hard: 20, 000 credits
// // Legendary: 50, 000 credits
// // Assume that Baby Yoda's child healthcare premiums cost 20% of your total income, and feeding / clothing both you and Baby Yoda costs another 500 credits per month. 
// // Your function should return the total profit made based upon the difficulty of a given bounty mission that has been completed.
// /// / For example, if your function is given the input argument of "Easy", your function should return 3500, since 20 % of this bounty's income is 1,000 credits,
// // so 5,000 - (1,000 + 500) = 3,500, so the Mandalorian has 3,500 credits left after paying for himself and the baby. (edited)

let missioneasy = 5000
let missionmedium = 10000
let missionhard = 20000
let missionlegendary = 50000
let babyisdead = false

function paytaxestothedevil(mission) {
    if (babyisdead === false) {
        let taxedincome = mission * 0.8
        let surplus = taxedincome - 500
        return surplus
    }
    else {
        return mission - 300
    }
}

console.log(paytaxestothedevil(missionhard))