// Problem 1: 
// create an object for your favorite pokemon
// the object should have the following properties: name, age, type (fire/water/etc), and an array of possible evolutions.
// then below your object console.log each of these properties with dot notation and bracket notation

const torkoal = {
    name: 'torkoal',
    level: 100,
    gender: 'male',
    shiny: false,
    tera: 'fire',

    move1: 'eruption',
    move2: 'earth_power',
    move3: 'lava_plume',
    move4: 'protect',

    type: 'fire',
    evolutions: null,

    hp: 344,
    attack: 175,
    defense: 317,
    specialAttack: 295,
    specialdefense: 176,
    speed: 40,

    ability: 'drought',
    item: 'charcoal',

    greet: function () {
        console.log(`i am ${this.name}`)
    },
    levelUp: function () {
        this.level++
        console.log(this.level)
    }, //this feels repetitive. maybe thats what typescript is for.
}

const lilligant = {
    name: 'lilligant',
    level: 100,
    gender: 'female',
    shiny: true,
    tera: 'water',

    move1: 'leaf_storm',
    move2: 'sleep_powder',
    move3: 'after_you', //access to this move is the entire reason lilligant is powerful
    move4: 'protect',

    type: 'grass',
    evolutions: null,

    hp: 282,
    attack: 112,
    defense: 186,
    specialAttack: 350,
    specialdefense: 186,
    speed: 279,

    ability: 'chlorophyll',
    item: 'focus_sash',

    greet: function () {
        console.log(`i am ${this.name}`)
    },
    levelUp: function () {
        this.level++
        console.log(this.level)
    },

}


lilligant.levelUp()

// Problem 2:
// create a function that will console.log the sentence: 
// "I am <insert pokemon name>"
// then add the function to your object as a method
// then invoke the function so that you see the console.log in the terminal

// Problem 3:
// create a function that will increase the age of our pokemon by 1 year: 
// then add the function to your object as a method
// then invoke the function so that you increase the age of your pokemon and then console.log the age (after you have invoked the function)