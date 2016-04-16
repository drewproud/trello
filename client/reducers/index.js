import { combineReducers } from 'redux';
import { DATA_RECEIVED, UPDATE_QUANTITY_IN_CART } from '../actions';
import R from 'ramda';

function getItemDict(items) {
  return items.reduce(function(acc, item) {
    return {
      ...acc,
      [item.id]: item,
    };
  }, {});
}

function itemsInCart(state = {}, action) {
  switch(action.type) {
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

function items(state = {}, action) {
  switch(action.type) {
    case DATA_RECEIVED:
      return {
        ...state,
        ...getItemDict(action.payload.data.treats),
      };
    default:
      return state;
  }
}

export function selectAvailableItemsInStore(state) {
  return R.values(state.items);
}

const joinItemsAndCartItems = R.curry(function(items, itemsInCart) {
  return R.mapObjIndexed(function(val, id) {
    return {
      ...items[id],
      ...val
    };
  });
});

export function selectItemsInCart(state) {
  const { items, itemsInCart } = state;
  return R.compose(
    R.values,
    joinItemsAndCartItems(items)
  )(itemsInCart);
}

export default combineReducers({
  items,
  itemsInCart,
});
