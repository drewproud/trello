import { DATA_RECEIVED, UPDATE_QUANTITY_IN_CART } from './actions';

export function loadData(data) {
  return {
    type: DATA_RECEIVED,
    payload: {
      data,
    },
  };
}

export function updateCartItemQuantity(itemId, newQuantity) {
  return {
    type: UPDATE_QUANTITY_IN_CART,
    payload: {
      itemId,
      newQuantity,
    },
  };
}
