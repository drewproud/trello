//import { createStore } from 'redux';
import test from 'tape';
import { getNewIdBetween } from './';

test('getNewIdBetween', function(assert) {
  const ids = ['Z'];
  ids.push(getNewIdBetween(ids[0]));
  ids.sort();

  assert.equal(ids[0], 'Z', 'Z should be first');
  assert.equal(ids[1], 'Za', 'Za should be last');

  assert.end();
});

test('getNewIdBetween 2', function(assert) {
  const ids = ['a', 'b'];
  ids.push(getNewIdBetween(ids[0], ids[1]));
  ids.sort();
  assert.equal(ids[0], 'a', 'a should be first');
  assert.equal(ids[1], 'aa', 'ab should be in the middle');
  assert.equal(ids[2], 'b', 'b should be last');

  assert.end();
});

test('getNewIdBetween 3', function(assert) {
  const ids = ['a'];
  ids.push(getNewIdBetween(null, 'a'));
  ids.sort();
  assert.equal(ids[0], ' a', 'Should add a space before');

  assert.end();
});

test('getNewIdBetween 4', function(assert) {
  const ids = ['b'];
  ids.push(getNewIdBetween(ids[0]));
  ids.sort();
  assert.equal(ids[0], 'b', 'b should be first');
  assert.equal(ids[1], 'ba', 'ba should be last');

  assert.end();
});

//test('cart test 3', function(assert) {
  //const store = createStore(rootReducer);
  //const { dispatch, getState } = store;

  //dispatch(loadData(data));

  //dispatch(addItemToCart(3));
  //dispatch(addItemToCart(1));
  //dispatch(addItemToCart(2));
  //dispatch(addItemToCart(4));
  //dispatch(addItemToCart(4));

  //const itemsInCart = selectItemsInCart(getState());
  //const totalPrice = calculateTotalPrice(itemsInCart);
  
  //assert.equal(totalPrice, 12.25, 'Total price should be $12.25');

  //assert.end();
//});
