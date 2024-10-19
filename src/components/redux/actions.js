import {ADD_TO_CART, DECREASE_QUANTITY, INCREASE_QUANTITY} from './constants';
import {REMOVE_FROM_CART} from './constants';

export function addToCart(item) {
  return {
    type: ADD_TO_CART,
    data: item,
  };
}
export function removeFromCart(id) {
  return {
    type: REMOVE_FROM_CART,
    data: id,
  };
}

export const increaseQuantity = item => {
  console.log(item, 'actionItem');

  return {
    type: INCREASE_QUANTITY,
    data: item,
  };
};

export const decreaseQuantity = item => {
  return {
    type: DECREASE_QUANTITY,
    data: item,
  };
};
