let productsContainer = document.getElementById('products')
let postsContainer = document.getElementById('posts')

async function getAndConvertToJson() {
    let response = await fetch('https://dummyjson.com/products')
    const json = await response.json()
    addElementToObject(json.products)
}

async function addElementToObject(arr) {
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i].title
        let newElem = document.createElement("div")
        newElem.innerHTML = element
        productsContainer.appendChild(newElem)
    }
}



getAndConvertToJson()