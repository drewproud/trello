import React from 'react';
import CartItem from './CartItem';

const Cart = React.createClass({
  propTypes: {
    itemsInCart: React.PropTypes.array.isRequired,
    updateCartItemQuantity: React.PropTypes.func.isRequired,
  },

  render: function() {
    const { itemsInCart, updateCartItemQuantity } = this.props;
    const items = itemsInCart.map(function(item) {
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
