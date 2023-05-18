const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}

const rocky = { //i knew a guy named rocky. a better friend than i will ever be
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}

//pass the customer as a paramater
//make a cost variable that multiplies the refills with the price of refills
//i think commenting code is stupid. comments lie. the code is honest
//if the customer has a subscription, lower cost
//if the customer has a coupon, lower the cost again
//return the cost

function spendMoney(customer) {
    let cost = customer.pricePerRefill * customer.refills
    if (customer.subscription === true) { cost = cost * 0.75 }
    if (customer.coupon === true) { cost = cost - 10 }
    return cost
}

console.log(spendMoney(timmy))
console.log(spendMoney(sarah))
console.log(spendMoney(rocky))