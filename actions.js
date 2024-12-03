export const ADD_TO_CART = "cartItems/added"
export const REMOVE_FROM_CART = "cartItems/remove"
export const CALCULATE_TOTAL = "cartItems/calculate"

export const addToCart = (product) => ({
    type: ADD_TO_CART,
    payload: product,
})

export const removeFromCart = (productId) => ({
    type: REMOVE_FROM_CART,
    payload: productId,
})

export const calculateTotal = () => ({
    type: CALCULATE_TOTAL,
})