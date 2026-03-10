const cartIcon = document.querySelector("#cart-icon")
const cart = document.querySelector(".cart");
const closeCart = document.querySelector(".cart-close");
const addCartButtons = document.querySelectorAll(".add-cart")
cartIcon.addEventListener("click",()=>{
    cart.classList.add("active");
})

closeCart.addEventListener("click",()=>{
    cart.classList.remove("active");
})



addCartButtons.forEach(btn=>{
    
    btn.addEventListener("click",addCart)
})

function addCart(event){
    const product = event.target.closest(".product-box");
    const title = product.querySelector(".product-title").innerText;
    const price = product.querySelector(".price").innerText;
    const img = product.querySelector("img").src;

    addProductCart(title,price,img);
}

function addProductCart(title,price,img){
    console.log(title,price,img);

    const cartItems = document.querySelectorAll(".cart-product-title");

    for(let item of cartItems){
        if(item.innerText === title){
            alert("Product is already in the cart.");
            return
        }
    }

    
    const cartContent = document.querySelector(".cart-content");
    const cartBox = document.createElement("div");
    cartBox.classList.add("cart-box");
    cartBox.innerHTML = `
        <img src="${img}" width="50">
        <div>
            <p class="cart-product-title">${title}</p>
            <span class="cart-price">${price}</span>
        </div>
        <div class="qty-box">
            <button class="minus">-</button>
            <span class="qty">1</span>
            <button class="plus">+</button>
</div>
    `
    cartContent.appendChild(cartBox);

    const plus = cartBox.querySelector(".plus");
    const minus = cartBox.querySelector(".minus");
    const qty = cartBox.querySelector(".qty");

    plus.addEventListener("click",()=>{
        console.log(Number(qty.innerText));
        let qtyValue = Number(qty.innerText)
        qty.innerText = ++qtyValue;
        updateTotalValue()
    });

    minus.addEventListener("click",()=>{
        let qtyValue = Number(qty.innerText)
        if(qtyValue>1){
            qty.innerText = --qtyValue;
            updateTotalValue()
        }
    })

    updateCartCount();
    updateTotalValue();
    
}

function updateCartCount(){
    const items = document.querySelectorAll(".cart-box");
    console.log(items);

    const cartCount = document.querySelector(".cart-count");
    
    cartCount.innerText = items.length;
    console.log(cartCount);
    cartCount.computedStyleMap.visibility = "active";
}

function updateTotalValue() {
    console.log("Hello");
    
    const cartItems = document.querySelectorAll(".cart-box");
    const totalPrice = document.querySelector(".total-price");

    let total = 0;
    console.log(total,cartItems,totalPrice);

    
    cartItems.forEach(item=>{
        const price = item.querySelector(".cart-price").innerText;
        const qty = Number(item.querySelector(".qty").innerText);
        const number = parseInt(price.replace("₹",""));
        total+= qty*number;
        
        
    })
    totalPrice.innerText = "₹"+total;
}
