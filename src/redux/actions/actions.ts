import {IProduct} from '../../modals/types';
import {actionTypes} from '../actionTypes';

export const addToCart = (product: IProduct, quantity: number) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {product, quantity},
  };
};

export const removeFromCart = (productId: string) => {
  return {type: actionTypes.REMOVE_FROM_CART, payload: {id: productId}};
};

export const clearCart = () => {
  return {type: actionTypes.CLEAR_CART};
};

export const decreaseQuantity = (productId: string) => {
  return {
    type: actionTypes.DECREASE_QUANTITY,
    payload: {id: productId},
  };
};
export const increaseQuantity = (productId: string) => {
  return {
    type: actionTypes.INCREASE_QUANTITY,
    payload: {id: productId},
  };
};
