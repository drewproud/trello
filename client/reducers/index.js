import { combineReducers } from 'redux';
import {
  DATA_RECEIVED,
  QUANTITY_IN_CART_UPDATED,
  ADD_ITEM_TO_CART_CLICKED,
  REMOVE_ITEM_FROM_CART_CLICKED,
  REMOVE_ALL_ITEMS_FROM_CART_CLICKED,
} from '../actions';
import R from 'ramda';

function getItemDict(items) {
  return items.reduce(function(acc, item) {
    return {
      ...acc,
      [item.id]: {
        ...item,
        inCart: false,
      },
    };
  }, {});
}

function setItemRemovedFromCart(item) {
  return {
    ...item,
    inCart: false,
    quantityInCart: 0,
  };
}

function items(state = {}, action) {
  switch(action.type) {
    case DATA_RECEIVED:
      return {
        ...state,
        ...getItemDict(action.payload.data.treats),
      };
    case ADD_ITEM_TO_CART_CLICKED:
      return {
        ...state,
        [action.payload.itemId]: {
          ...state[action.payload.itemId],
          inCart: true,
          quantityInCart: 1,
        },
      };
    case REMOVE_ITEM_FROM_CART_CLICKED:
      return {
        ...state,
        [action.payload.itemId]: setItemRemovedFromCart(state[action.payload.itemId]),
      };
    case REMOVE_ALL_ITEMS_FROM_CART_CLICKED:
      return R.map(setItemRemovedFromCart, state);
    case QUANTITY_IN_CART_UPDATED:
      return {
        ...state,
        [action.payload.itemId]: {
          ...state[action.payload.itemId],
          quantityInCart: action.payload.newQuantity,
        },
      };
    default:
      return state;
  }
}

export function selectAvailableItemsInStore(state) {
  return R.values(state);
}

export function selectItemsInCart(state) {
  return R.compose(
    R.values,
    R.filter(R.prop('inCart'))
  )(state);
}

export default items;
