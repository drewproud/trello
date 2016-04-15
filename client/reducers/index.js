import { DATA_RECEIVED } from '../actions';

function itemsForCart(state = [], action) {
  switch(action.type) {
    case DATA_RECEIVED:
      return action.payload.data;
    default:
      return state;
  }
}

export function selectItemsForCart(state) {
  return state.treats || [];
}

export default itemsForCart;
