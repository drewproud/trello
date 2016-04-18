import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Cart from './cart/Cart';
import Store from './store/Store';
import initialData from '../data';
import { loadData, updateCartItemQuantity, addItemToCart, removeItemFromCart, removeAllItemsFromCart } from '../actionCreators';
import { selectItemsInCart, selectAvailableItemsInStore } from '../reducers';

import './Cart.css';

const CartContainer = React.createClass({
  propTypes: {
    updateCartItemQuantity: React.PropTypes.func.isRequired,
    loadData: React.PropTypes.func.isRequired,
    addItemToCart: React.PropTypes.func.isRequired,
    removeItemFromCart: React.PropTypes.func.isRequired,
    removeAllItemsFromCart: React.PropTypes.func.isRequired,
    itemsInCart: React.PropTypes.array.isRequired,
    itemsInStore: React.PropTypes.array.isRequired,
  },

  componentDidMount: function() {
    this.props.loadData(initialData);
  },

  render() {
    const { itemsInCart, itemsInStore } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-8">
            <Store
              itemsInStore={ itemsInStore }
              addItemToCart={ this.props.addItemToCart }
              removeItemFromCart={ this.props.removeItemFromCart }
            />
          </div>
          <div className="col-xs-4">
            <Cart
              itemsInCart={ itemsInCart }
              updateCartItemQuantity={ this.props.updateCartItemQuantity }
              removeItemFromCart={ this.props.removeItemFromCart }
              removeAllItemsFromCart={ this.props.removeAllItemsFromCart }
            />
          </div>
        </div>
      </div>
    );
  },
});

function mapStateToProps(state) {
  return {
    itemsInCart: selectItemsInCart(state),
    itemsInStore: selectAvailableItemsInStore(state),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    loadData,
    updateCartItemQuantity,
    addItemToCart,
    removeItemFromCart,
    removeAllItemsFromCart,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
