const URL = "https://fakestoreapi.com/products"

// const res = fetch(URL);
// console.log(res)

// res
// .then((res)=>{
//     const result = res.json();
//     console.log(result)
//     return result
// })
// .then((res)=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.log("Handled");

//     console.log(err)
// })

// Post request 
let newProduct = {
    "id": 89034,
    "title": "LPG GAS",
    "price": 4000.00,
    "description": "This is our INDIAN N0-1 Gas",
    "category": "GAS",
    "image": "http://example.com"
}

let headersData = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newProduct)
}


async function createProduct() {
    try {
        const res = await fetch(URL, headersData);
        const data = await res.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log("Handled.");
        
        console.log(error)
    }
}

let data = createProduct();
console.log("Take another reqest of user.")



