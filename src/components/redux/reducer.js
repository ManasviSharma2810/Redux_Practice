import {
  ADD_TO_CART,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  REMOVE_FROM_CART,
} from './constants';
const initialState = []; // by default data would be
export const reducer = (state = initialState, actions) => {
  //all data of redux is in this stage
  switch (actions.type) {
    case ADD_TO_CART:
      return [...state, {...actions.data, quantity: 1}];
    case REMOVE_FROM_CART:
      let result = state.filter(item => {
        return item.id != actions.data;
      });
      return [...result];

    case INCREASE_QUANTITY:
      return state.map(item =>
        item.id === actions.data.id
          ? {...item, quantity: item.quantity + 1}
          : item,
      );

    case DECREASE_QUANTITY:
      return state.map(item =>
        item.id === actions.data.id && item.quantity > 1
          ? {...item, quantity: item.quantity - 1}
          : item,
      );
    default:
      return state;
  }
};
