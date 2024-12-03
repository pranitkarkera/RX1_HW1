import { createStore} from "redux";
import cartReducer from "./cartReducer";
import {addToCart, removeFromCart, calculateTotal} from "./actions"

export const store = createStore(cartReducer)

store.subscribe(()=> {
    console.log(store.getState())
    updateCart()
})

const productList = document.querySelector("#productList");
const cartList = document.querySelector("#cartList");
const totalAmount = document.querySelector("#totalAmount");
// console.log(totalAmount)

export const products = [  
    { id: 1, name: "Product A", price: 10 },  
    { id: 2, name: "Product B", price: 20 },  
    { id: 3, name: "Product C", price: 15 }, 
];

window.addToCartHandler = (product) => { 
    store.dispatch(addToCart(product))
}

window.removeFromCartHandler = (productId) => {
    store.dispatch(removeFromCart(productId))
}

window.calculateTotalHandler = () => {
    store.dispatch(calculateTotal())
}

const renderProducts = () => {
    productList.innerHTML = products
        .map((product)=> {
            return `<li id="cart-${product.id}">
            ${product.name} - Rs.${product.price} 
            <button onClick='addToCartHandler(${JSON.stringify(product)}); calculateTotalHandler();'>
            Add to Cart</button></li>`
    })
    .join("");
}
renderProducts()

const updateCart = () => {
    const state = store.getState()
    // console.log(store.cartItems)
    cartList.innerHTML = state.cartItems
        .map((cartItem) => {
            return `<li id="cart-${cartItem.id}">
            ${cartItem.name} - Rs.${cartItem.price} - Quantity: ${cartItem.quantity} 
            <button onClick='removeFromCartHandler(${cartItem.id}); calculateTotalHandler();'>Remove</button></li>`
        })
        .join("")
        
    totalAmount.textContent = `Total: Rs.${state.total}`
    
}
updateCart()


