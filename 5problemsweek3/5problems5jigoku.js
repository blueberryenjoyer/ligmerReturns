/*
#4: 
Prompt: 
/*
It's been a few years since the world ended, and over all that time you've found better ways to improve your JARVIS bot. Now he's able to make longer journeys, sometimes ones
that even last a few days. You're about to finish a new program that can send your JARVIS bot out on multi-day trips and report back not only all the supplies it has found, but
also categorize them for you. 

Write a function called multiDayTripProgram that takes in 2 parameters: The first parameter should be called baggy, which you can expect will always be an array argument value 
and which will always be first given to you as an empty array. (You'll store all the good supplies you've found in this "bag".) 

The second parameter should be called logOfDailyTrips, which you can expect will always be an array argument value, and where each element in that array is ALSO an array.
 Each "nested" array will represent a given day. The elements in those nested arrays will be strings representing the supplies found on a day's journey. 
 
Note: You can also expect that sometimes "zombie" or "raider" strings will appear as targets on JARVIS's journey. 

Your function should do 3 things:
First, your function should add each "good" food or supply (i.e. anything that isn't a zombie or a raider) to the baggy argument value. (for safekeeping!!)
Second, your function should alert you by logging to the console whenever it has found supplies or a dangerous target (the same string format from the previous problem 
    apply.)
Lastly, your function should return the baggy argument value, all filled up with the fruits of JARVIS's labor.

For example, consider the following argument value:
multiDayTripProgram(
    [], [["fresh fruit", "raider"], ["zombie", "morphine"], ["bandages", "painkillers"]]
    // Note that the first argument value above is an empty array. That's your baggy argument value! 
    // The second argument value above is your array of arrays, where each nested array represents a day's journey. 
)

After running the above function, the following should happen: 
    "JARVIS has found some fresh fruit!"
    "JARVIS has found a raider! ENGAGING AVOIDANCE ACTION PLAN!!"
    "JARVIS has found a zombie! ENGAGING AVOIDANCE ACTION PLAN!!"
    "JARVIS has found some morphine!"
    "JARVIS has found some bandages!"
    "JARVIS has found some painkillers!"
    ["fresh fruit", "morphine", "bandages", "painkillers"]
*/

function bagIt(baggy, stuff) {

    for (let i = 0; i < stuff.length; i++) {
        if (stuff[i] === 'zombie' || stuff[i] === 'raider') {
            console.log(`JARVIS has found a ${stuff[i]}! run away!!`)
        }
        else if (Array.isArray(stuff[i]) === false) {
            console.log(`JARVIS has found some ${stuff[i]}!`)
            baggy.push(stuff[i])
        }
        else if (Array.isArray(stuff[i]) === true) {
            for (let a = 0; a < stuff[i].length; a++) {
                console.log(`JARVIS has found some ${stuff[i][a]}!`)
                baggy.push(stuff[i][a])
            }
        }
    }
    return baggy
}

console.log(bagIt([], [4, 5, [6, 7, 8, 9], 4545, 2345, [635634, 5365634, 99], 2222, 321]))