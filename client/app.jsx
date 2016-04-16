/* eslint-env browser */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import Cart from './components/Cart';

const store = configureStore();

ReactDOM.render(
  <Provider store={ store }>
    <Cart />
  </Provider>,
  document.getElementById('root')
);
