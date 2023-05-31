const stupidLength = (arr) => {
    for (i = 0; i < arr.length; i++) {
        arr[i] = "AAAAA"
    }
    return arr
}

console.log(stupidLength(['hello', 'ligma']))