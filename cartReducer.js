import {ADD_TO_CART, REMOVE_FROM_CART, CALCULATE_TOTAL} from "./actions"

const initialState = { cartItems: [], total: 0 };

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const existingItemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
      if (existingItemIndex >= 0) {
        const updatedCartItems = state.cartItems.map((item, index) => {
          if (index === existingItemIndex) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
        return { ...state, cartItems: updatedCartItems };
      } else {
        return { ...state, cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }] };
      }
    }
    case REMOVE_FROM_CART: {
      return { 
        ...state, 
        cartItems: state.cartItems.filter(item => item.id !== action.payload) };
    }
    case CALCULATE_TOTAL: {
      const total = state.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
      return { ...state, total };
    }
    default: {
      return state;
    }
  }
};

export default cartReducer;