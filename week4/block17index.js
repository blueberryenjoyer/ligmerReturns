let awooga = require("./block17coffee")

for (let i in awooga) { console.log(awooga[i].name) }
for (let i in awooga) {
    if (awooga[i].price <= 5) { console.log(awooga[i].name) }
}
for (let i in awooga) {
    if (awooga[i].price % 2 === 0) { console.log(awooga[i].name) }
}
sum = 0
for (let i in awooga) {
    sum = sum + awooga[i].price
}
console.log(sum)
for (let i in awooga) {
    if (awooga[i].seasonal === true) { console.log(awooga[i].name) }
}
for (let i in awooga) {
    if (awooga[i].seasonal === true) { console.log(`${awooga[i].name}  with imported beans`) }
}