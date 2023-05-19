// if ("0") { console.log("'0' is truthy'") } else { console.log("'0' is falsey") }
// if ("0" == false) { console.log("'0' is equal to false, and equal to 0") } //WHY? WHYYYYY? I HATE ACINQUAEFNUETN CN CNAT WAGHY
//CAN YOU HEAR THE SILENCE
//CAN YOU SEE THE DARK
//CAN YOU HEAL THE HELPLESS
//WELL IM BEGGING ON MY KNEES

//javascript can you please explain to me why "0" is equal to false, but is not falsey?
//what even in the fuck is going on?
//why are your types fiction and equalities contrived and your booleans decided by the whim of a dead horse's neigh?
//what could possibly determine the choices made by the developer of this language in that  "0" == false == 0 == "0" but apparently "0" is falsey
//WHAT AND WHY

// let arrr = [0, 1, 2, 3, 4]
// console.log(arrr)
// let ar2 = arrr.slice(0, 1)
// console.log(ar2)
// console.log(arrr)
// let ar3 = arrr.splice(0, 1)
// console.log(ar3)
// console.log(arrr)

//splice changes the original array
//slice does not
//thats fucked up because it means you can fuck up another array while just setting up a new one
// let aaa = [1, 2, 3]
// let bbb = [1, 2, 3]
// let arr = [...aaa, ...bbb]
// console.log(arr)

obbj = {
    key1: 'yoho',
    key2: 0
}

if (!obbj.key2) {
    console.log("!0 is truthy") //runs
}
if (obbj.key2 === false) {
    console.log("0 is false") //doesnt run
}

//i was not wrong. these are not the same