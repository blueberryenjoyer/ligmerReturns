// In Pokemon, you can have a team of 6 pokemon total, and if you ever try to add more than 6 pokemon to your team roster,
// the last one you added is sent to the PokeCenter for storage. Write a function that accepts two parameters: an array of strings
// (where each string is a pokemon's name), and another parameter that will be a string representing a newly caught pokemon's name.
// You can expect that the 1st parameter (the array) will always contain 6 elements or less (and never more).
// Your function should add the pokemon to your team roster array IF there is room for that pokemon (i.e. less than 6). If there's no room for that pokemon,
// remove the last pokemon from the array, and then add the newly caught pokemon.
// Finally, your function should return the newly updated pokemon roster array.
// For example:
// Example #1:
// If you were given these 2 argument values:
// addPokemonToRoster(["pikachu", "squirtle", "charmander"], "bulbasaur")
// Then your function would return:
// ["pikachu", "squirtle", "charmander", "bulbasaur"]
// Example #2:
// If you were given these 2 argument values:
// addPokemonToRoster(["pikachu", "squirtle", "charmander", "bulbasaur", "pidgey", "ratata"], "mewtwo")
// Then your function would return:
// ["pikachu", "squirtle", "charmander", "bulbasaur", "pidgey", "mewtwo"]
// (Note that "ratata", being the last pokemon, was removed and replaced by "mewtwo") (edited)

let team = ["ligma", "charizard", "big rock", "draddgeon", "the rock", "dwayne johnson"]
let newGuy = "green pikachu"

function newPokemon(oldTeam, newPokemon) {
    if (oldTeam.length < 6) {
        oldTeam.push(newPokemon)
        return oldTeam
    }
    else {
        oldTeam.pop()
        oldTeam.push(newPokemon)
        return oldTeam
    }
}
console.log(newPokemon(team, newGuy))