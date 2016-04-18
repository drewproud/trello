import React from 'react';
import CartItemHeader from './CartItemHeader';
import CartItemRows from './CartItemRows';
import CartTotal from './CartTotal';
import RemoveAllItemsFromCart from './RemoveAllItemsFromCart';

const Cart = React.createClass({
  propTypes: {
    itemsInCart: React.PropTypes.array.isRequired,
    updateCartItemQuantity: React.PropTypes.func.isRequired,
    removeItemFromCart: React.PropTypes.func.isRequired,
    removeAllItemsFromCart: React.PropTypes.func.isRequired,
  },

  render: function() {
    const { itemsInCart, updateCartItemQuantity, removeItemFromCart, removeAllItemsFromCart } = this.props;
    return (
      <div className="shopping-cart">
        <h5 className="cart-header">
          Shopping Cart
          <RemoveAllItemsFromCart itemsInCart={ itemsInCart } removeAllItemsFromCart={ removeAllItemsFromCart } />
        </h5>
        <div className="cart-body">
          <CartItemHeader />
          <CartItemRows
            itemsInCart={ itemsInCart }
            updateCartItemQuantity={ updateCartItemQuantity }
            removeItemFromCart={ removeItemFromCart }
          />
          <CartTotal itemsInCart={ itemsInCart } />
        </div>
      </div>
    );
  },
});

export default Cart;
