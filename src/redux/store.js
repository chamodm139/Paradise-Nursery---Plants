import { createStore } from 'redux';

const initialState = {
  cart: {
    items: [],
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: {
          ...state.cart,
          items: [...state.cart.items, { ...action.payload, quantity: 1 }],
        },
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: {
          ...state.cart,
          items: state.cart.items.filter(item => item.id !== action.payload.id),
        },
      };
    case 'INCREMENT_QUANTITY':
      return {
        ...state,
        cart: {
          ...state.cart,
          items: state.cart.items.map(item =>
            item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        },
      };
    case 'DECREMENT_QUANTITY':
      return {
        ...state,
        cart: {
          ...state.cart,
          items: state.cart.items.map(item =>
            item.id === action.payload.id && item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        },
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
