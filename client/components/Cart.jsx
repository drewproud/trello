import React from 'react';
import CartItem from './CartItem';

const Cart = React.createClass({
  propTypes: {
    itemsForCart: React.PropTypes.array.isRequired,
    updateCartItemQuantity: React.PropTypes.func.isRequired,
  },

  render: function() {
    const { itemsForCart, updateCartItemQuantity } = this.props;
    const items = itemsForCart.map(function(item) {
      return <CartItem item={ item } key={ item.id } updateCartItemQuantity={ updateCartItemQuantity } />
    });
    return (
      <div>
        { items }
      </div>
    );
  },
});

export default Cart;
