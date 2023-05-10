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
    defend: function (attacker) {
        this.hp -= ((2 * attacker.level / 5 + 2) * 80 * (attacker.attack / this.defense) / 50) + 2
        console.log(this.hp)
    }, //i made a simplified version of the actual pokemon damage formula
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
    defend: function (attacker) {
        this.hp -= ((2 * attacker.level / 5 + 2) * 80 * (attacker.attack / this.defense) / 50) + 2
        console.log(this.hp)
    },
}


lilligant.defend(torkoal)


// Problem 2:
// create a function that will console.log the sentence: 
// "I am <insert pokemon name>"
// then add the function to your object as a method
// then invoke the function so that you see the console.log in the terminal

// Problem 3:
// create a function that will increase the age of our pokemon by 1 year: 
// then add the function to your object as a method
// then invoke the function so that you increase the age of your pokemon and then console.log the age (after you have invoked the function)

// Problem 4:
// It is time for our pokemon to start dueling, but first they need health and defense stats
// add a health property to our pokemon and set it equal to 50
// add a defense property to our pokemon and set it equal to 20
// next, create a function called 'defend' that will take a single parameter, which is a number. 
// the function will compare the parameter to the defense property of our pokemon.  If the parameter is higher than, or equal to our defense then we will take damage. 
//Subtract from our health stat the difference between the parameter and our defense stat. (for example if the parameter was 30, we would subtract 10 from our health points. )
// if the parameter was lower than our defense, console.log the following sentence:  'The attack was successfully avoided!'
// then add the function to your object as a method
// then invoke the function, passing in the number 10 and then console.log the health property (after you have invoked the function)