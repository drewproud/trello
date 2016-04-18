import { DATA_RECEIVED, QUANTITY_IN_CART_UPDATED, ADD_ITEM_TO_CART_CLICKED, REMOVE_ITEM_FROM_CART_CLICKED } from './actions';

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
    type: QUANTITY_IN_CART_UPDATED,
    payload: {
      itemId,
      newQuantity,
    },
  };
}

export function addItemToCart(itemId) {
  return {
    type: ADD_ITEM_TO_CART_CLICKED,
    payload: {
      itemId,
    },
  };
}

export function removeItemFromCart(itemId) {
  return {
    type: REMOVE_ITEM_FROM_CART_CLICKED,
    payload: {
      itemId,
    },
  };
}
