function multiplication(par1, par2) {
    let sum = par1 * par2
    return sum
}
test('multiplies numbers', () => {
    expect(multiplication(5, 12)).toBe(60);
});



function oddCheck(par) { if (par % 2 === 0) { return false } else { return true } }
function compare(a, b) {
    if (a > b) { return 1 }
    if (a < b) { return -1 }
    return 0
}

function concatOdds(arr1, arr2, fakeparameter) {
    if (fakeparameter) { return "pls ONLY two arrays" }
    if (!arr1 || !arr2) { return "pls two arrays" }
    if (typeof arr1 !== 'object' || typeof arr2 !== 'object') { return "pls array" }

    let finalArr = []
    arr1.forEach(i => { if (oddCheck(i) === true) { finalArr.push(i) } })
    arr2.forEach(i => { if (oddCheck(i) === true) { finalArr.push(i) } })
    finalArr.sort(compare)
    return finalArr
}

test('collect odd numbers from two arrays', () => {
    expect(concatOdds([1, 2, 3], [1, 2, 3])).toStrictEqual([1, 1, 3, 3]);
});
test('dont give me non-arrays', () => {
    expect(concatOdds(4, "aaaaaaa")).toBe("pls array");
});
test('dont give me 1 array', () => {
    expect(concatOdds([1, 2, 3])).toBe("pls two arrays");
});
test('dont give me nothing', () => {
    expect(concatOdds()).toBe("pls two arrays");
});
test('dont give me 3+ arrays', () => {
    expect(concatOdds([1], [1], [1])).toBe("pls ONLY two arrays");
});

let user1 = {
    accountExists: true,
    premium: true,
    money: 100,
}
let user2 = {
    accountExists: false,
    premium: false,
    money: 10,
}

function spendMoney(user) {
    user.money = user.money - 5
}
function createAccount(user) {
    user.accountExists = true
}

function checkout(user) {
    if (!user) { return "pls enable cookie or something" }
    if (user.hasOwnProperty('accountExists') === false) { return "dont send random data please and thanks" }
    if (user.accountExists === false) {
        createAccount(user)
        return "no account, creating account"
    }
    else if (user.accountExists === true) {
        spendMoney(user)
        return "thank u for shopping"
    }
    else { return "something went wrong, really wrong, lmao. its bad." }
}

test('let user1 checkout', () => {
    expect(checkout(user1)).toBe("thank u for shopping");
});
test('let user2 create account', () => {
    expect(checkout(user2)).toBe("no account, creating account");
});
test('dont let random shit work', () => {
    expect(checkout("aaaaa")).toBe("dont send random data please and thanks");
});
test('no arguments, doesnt work', () => {
    expect(checkout()).toBe("pls enable cookie or something");
});

//im proud of this