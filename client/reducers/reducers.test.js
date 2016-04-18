import { createStore } from 'redux';
import test from 'tape';
import rootReducer, { selectItemsInCart } from './';
import { addItemToCart, loadData } from '../actionCreators';
import { calculateTotalPrice } from '../lib/prices';
import data from '../data';

test('cart test 1', function(assert) {
  const store = createStore(rootReducer);
  const { dispatch, getState } = store;

  dispatch(loadData(data));

  dispatch(addItemToCart(3));
  dispatch(addItemToCart(1));
  dispatch(addItemToCart(1));
  dispatch(addItemToCart(1));
  dispatch(addItemToCart(1));
  dispatch(addItemToCart(2));

  const itemsInCart = selectItemsInCart(getState());
  const totalPrice = calculateTotalPrice(itemsInCart);
  
  assert.equal(totalPrice, 16.25, 'Total price should be $16.25');

  assert.end();
});

test('cart test 2', function(assert) {
  const store = createStore(rootReducer);
  const { dispatch, getState } = store;

  dispatch(loadData(data));

  dispatch(addItemToCart(3));
  dispatch(addItemToCart(3));
  dispatch(addItemToCart(3));
  dispatch(addItemToCart(3));
  dispatch(addItemToCart(3));
  dispatch(addItemToCart(3));
  dispatch(addItemToCart(3));
  dispatch(addItemToCart(3));

  const itemsInCart = selectItemsInCart(getState());
  const totalPrice = calculateTotalPrice(itemsInCart);
  
  assert.equal(totalPrice, 8.5, 'Total price should be $8.50');

  assert.end();
});

test('cart test 3', function(assert) {
  const store = createStore(rootReducer);
  const { dispatch, getState } = store;

  dispatch(loadData(data));

  dispatch(addItemToCart(3));
  dispatch(addItemToCart(1));
  dispatch(addItemToCart(2));
  dispatch(addItemToCart(4));
  dispatch(addItemToCart(4));

  const itemsInCart = selectItemsInCart(getState());
  const totalPrice = calculateTotalPrice(itemsInCart);
  
  assert.equal(totalPrice, 12.25, 'Total price should be $12.25');

  assert.end();
});
