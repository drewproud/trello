import React from 'react';
import { calculateTotalPrice, formatPrice } from '../../lib/prices';

const CartTotal = React.createClass({
  propTypes: {
    itemsInCart: React.PropTypes.array.isRequired,
  },

  render: function() {
    const { itemsInCart } = this.props;
    const totalPrice = calculateTotalPrice(itemsInCart);
    return (
      <div className="cart-total">
        Total: { formatPrice(totalPrice) }
      </div>
    );
  },
});

export default CartTotal;
