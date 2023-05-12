//need to make even or odd
//the plan is to copy my older evenorodd function
//thats literally it, i already made one


function evenOrOdd(numberValue) {
    console.log("does my formula return integer? " + Number.isInteger(numberValue / 2))
    console.log("does it equal true? " + (Number.isInteger(numberValue / 2) === true))
    if (Number.isInteger(numberValue / 2) === true) { return "even" }
    else { return "odd" }
}

function death(num) { return (num % 2 === 0 ? "even" : "odd") }

console.log(death(45352.111))