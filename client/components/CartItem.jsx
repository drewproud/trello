import React from 'react';
import { calculatePriceForItem, formatPrice } from '../lib/prices';

const CartItem = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
    updateCartItemQuantity: React.PropTypes.func.isRequired,
    removeItemFromCart: React.PropTypes.func.isRequired,
  },

  changeHandlder: function(event) {
    const newQuantity = Number(event.target.value);
    const { updateCartItemQuantity, item } = this.props;
    updateCartItemQuantity(item.id, newQuantity);
  },

  removeItemFromCart: function(event) {
    event.preventDefault();
    const { removeItemFromCart, item } = this.props;
    removeItemFromCart(item.id);
  },

  render: function() {
    const { item } = this.props;
    const { name, quantityInCart } = item;
    const calculatedPrice = calculatePriceForItem(item);

    return (
      <div className="row cart-item-row">
        <div className="col-xs-3">
          { name }
        </div>
        <div className="col-xs-3">
          <input className="form-control" value={ quantityInCart } type="number" onChange={ this.changeHandlder } />
        </div>
        <div className="col-xs-3">
          { formatPrice(calculatedPrice) }
        </div>
        <div className="col-xs-3">
          <a href="#!" onClick={ this.removeItemFromCart }>remove</a>
        </div>
      </div>
    );
  },
});

export default CartItem;
