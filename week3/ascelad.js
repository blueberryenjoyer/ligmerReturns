/*
#2: 
Prompt: Each person in this pairing should create an object that describes the main character of that person's favorite tv show or movie. Each object should contain at least 5
key-value pairs (although please feel free to include more if you like.) Those key-value pairs should have keys called:
    - name (which you can expect will be given a string value)
    - age (which you can expect will be given an integer value)
    - occupations (which you can expect will be given an array of strings, where each string represents an occupation)
    - isHero (which you can expect will be a boolean) 

Lastly, you should write 8 console.log statements. The first 4 should console.log each individual key-value pair using bracket notation, and the latter 4 should console.log
each key-value pair using dot notation. 

At the end of this exercise, each of you should have 2 objects, one for each of you. 
*/

const ascelad = {
    name: 'ascelad',
    age: 50, //im roughly guessing here. could be 40 or 60
    occupations: ['war', 'raid things', 'crimes against humanity', 'make fun of the french language'],
    isHero: false,
    sayCatchphrase: function () {
        return "danish people are barbarians"
    }
}

//console.log(Object.entries(ascelad))

console.log(ascelad.name)
console.log(ascelad.age)
console.log(ascelad.occupations)
console.log(ascelad.isHero)
console.log(ascelad['name'])
console.log(ascelad['age'])
console.log(ascelad['occupations'])
console.log(ascelad['isHero'])

/*
#3:
Prompt: Using the tv show/movie object you made in the previous problem, add a new key-value pair to each of your objects. That key-value pair should have a key called
"sayCatchphrase". The value of that new key should be a function that, when invoked, outputs a string that matches that character's defining catchphrase. 

If the character you chose doesn't really have a catchphrase, just have the function return something that your character might say. 

Once you finish, you should test your function twice, once using dot notation, and again using bracket notation.  
*/

console.log(ascelad.sayCatchphrase())
console.log(ascelad['sayCatchphrase']) //i cannot get this to work