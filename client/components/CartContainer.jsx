import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import R from 'ramda';

import Cart from './Cart';
import Store from './Store';
import styles from './Cart.css';
import initialData from '../data';
import { loadData, updateCartItemQuantity, addItemToCart, removeItemFromCart } from '../actionCreators';
import { selectItemsInCart, selectAvailableItemsInStore } from '../reducers';

function getBulkPricingComponentForItem(item) {
  const { bulkPricing, quantityInCart } = item;
  if (!bulkPricing) {
    return {
      quantity: 0,
      price: 0,
    };
  }

  const bulkAmount = Math.floor(quantityInCart / bulkPricing.amount);
  const equivalentIndividualAmount = bulkAmount * bulkPricing.amount;
  const priceForBulkItems = bulkAmount * bulkPricing.totalPrice;
  return {
    quantity: equivalentIndividualAmount,
    price: priceForBulkItems,

  };
}

export function getIndividualPricingComponenetForItem(item, bulkPricingComponent) {
  const quantity = item.quantityInCart - bulkPricingComponent.quantity;
  return item.price * quantity;
}

export function calculatePriceForItem(item) {
  const bulkPricingComponent = getBulkPricingComponentForItem(item);
  const individualPricingComponenet = getIndividualPricingComponenetForItem(item, bulkPricingComponent);
  return bulkPricingComponent.price + individualPricingComponenet;
}

export function calculateTotalPrice(itemsInCart) {
  return R.compose(
    R.sum,
    R.map(calculatePriceForItem)
  )(itemsInCart);
}

const CartContainer = React.createClass({
  propTypes: {
    updateCartItemQuantity: React.PropTypes.func.isRequired,
    loadData: React.PropTypes.func.isRequired,
    addItemToCart: React.PropTypes.func.isRequired,
    removeItemFromCart: React.PropTypes.func.isRequired,
    itemsInCart: React.PropTypes.array.isRequired,
    itemsInStore: React.PropTypes.array.isRequired,
  },

  componentDidMount: function() {
    this.props.loadData(initialData);
  },

  render() {
    const { itemsInCart, itemsInStore } = this.props;
    console.log(calculateTotalPrice(itemsInCart));
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
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
