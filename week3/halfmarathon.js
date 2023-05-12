//0th index of array = 10000$+
//the rest, for array.length =tshirt+

let usainBolt = { speed: 9001 }
let loser1 = { speed: 2345 }
let loser2 = { speed: 31 }
let loser3 = { speed: 500 }
let loser4 = { speed: 75 }

let runners = [usainBolt, loser1, loser2, loser3, loser4]


function race(raceArray) {
    raceArray.sort(compare)

    raceArray[0].money = 10000
    for (i = 1; i < raceArray.length; i++) {
        raceArray[i].tshirt = true
    }
    return runners
}

//got this little sorting gizmo from stackoverflow, i have no idea why it works
function compare(a, b) {
    if (a.speed < b.speed) {
        return 1
    }
    if (a.speed > b.speed) {
        return -1
    }
    return 0
}
console.log(runners)
console.log(race(runners))