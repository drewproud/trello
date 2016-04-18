import React from 'react';
import CartItem from  './CartItem';

const CartItemRows = React.createClass({
  propTypes: {
    itemsInCart: React.PropTypes.array.isRequired,
    updateCartItemQuantity: React.PropTypes.func.isRequired,
    removeItemFromCart: React.PropTypes.func.isRequired,
  },

  render: function() {
    const { itemsInCart, updateCartItemQuantity, removeItemFromCart } = this.props;
    const items = itemsInCart.map(function(item) {
      return (
        <CartItem
          item={ item }
          key={ item.id }
          updateCartItemQuantity={ updateCartItemQuantity }
          removeItemFromCart={ removeItemFromCart }
        />
      );
    });

    if (!items.length) {
      return (
        <div className="no-items-in-cart">
          No items selected yet
        </div>
      );
    }

    return <div>{ items }</div>;
  },
});

export default CartItemRows;
