import {IProduct} from '../../modals/types';
import {actionTypes} from '../actionTypes';

type CartItem = {
  product: IProduct;
  quantity: number;
};

type CartState = CartItem[];

export const cartItems = (state: CartState = [], action: any): CartState => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART: {
      const existingItemIndex = state.findIndex(
        item => item.product.id === action.payload.product.id,
      );
      if (existingItemIndex >= 0) {
        const updatedItems = [...state];
        updatedItems[existingItemIndex].quantity += action.payload.quantity;
        return updatedItems;
      }

      return [
        ...state,
        {product: action.payload.product, quantity: action.payload.quantity},
      ];
    }

    case actionTypes.DECREASE_QUANTITY:
      return state.map(item =>
        item.product.id === action.payload.id && item.quantity > 1
          ? {...item, quantity: item.quantity - 1}
          : item,
      );

    case actionTypes.INCREASE_QUANTITY:
      return state.map(item =>
        item.product.id === action.payload.id
          ? {...item, quantity: item.quantity + 1}
          : item,
      );

    case actionTypes.REMOVE_FROM_CART: {
      const existingItemIndex = state.findIndex(
        item => item.product.id === action.payload.id,
      );
      if (existingItemIndex >= 0) {
        const existingItem = state[existingItemIndex];
        if (existingItem.quantity > 1) {
          const updatedItems = [...state];
          updatedItems[existingItemIndex].quantity -= 1;
          return updatedItems;
        } else {
          return state.filter(item => item.product.id !== action.payload.id);
        }
      }
      return state;
    }

    case actionTypes.CLEAR_CART:
      return [];

    default:
      return state;
  }
};
