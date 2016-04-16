import { DATA_RECEIVED, UPDATE_QUANTITY_IN_CART } from '../actions';
import R from 'ramda';

function getItemDict(items) {
  return items.reduce(function(acc, item) {
    return {
      ...acc,
      [item.id]: {
        quantityInCart: 0,
        ...item,
      },
    };
  }, {});
}

function itemsForCart(state = {}, action) {
  switch(action.type) {
    case DATA_RECEIVED:
      return {
        ...state,
        ...getItemDict(action.payload.data.treats),
      };
    case UPDATE_QUANTITY_IN_CART:
      const { itemId, newQuantity } = action.payload;
      const prevItemState = state[itemId];
      return {
        ...state,
        [itemId]: {
          ...prevItemState,
          quantityInCart: newQuantity,
        },
      };
    default:
      return state;
  }
}


export function selectItemsForCart(state) {
  return R.values(state);
}

export default itemsForCart;
