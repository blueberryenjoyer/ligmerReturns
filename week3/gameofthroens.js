// // PROMPT #1: In the tv show "Game of Thrones", many of the main characters fight for control of "the Iron Throne". In all the fighting, kings and queens are regularly deposed,
// and replaced by a new ruler. Write a function that replicates this. 

// // Your function should accept two parameters: 1. An array of strings called currentRulers, where each string represents the royal lineage of the current Iron Thrones ruler.
// The string at index position 0 represents the current ruler, the string at index position 1 represents the next immediate in line for the throne, the string at index position
// 2 represents the 2nd in line for the throne, and so on. 2. A string called newRuler that represents the name of a new Iron Throne ruler. 

// // Your function should remove the current ruler from the beginning of the currentRulers array argument and replace it with the name of the newRuler string argument. 

// // Your function should return the newly updated currentRulers array. 

// // For example, if you were given the following parameters: replaceTheRuler(["Cersei Lannister", "Tommen Lannister"], "Daenerys Targaryen) Your function should return:
// ["Daenerys Targaryen", "Tommen Lannister"]

function depose(currentRulers, newRuler) {
    currentRulers.shift()
    currentRulers.unshift(newRuler)
    return currentRulers
}

console.log(depose(['lol', 'xd', 'lmao even'], 'usupereroroeoeroroeror'))