import React from 'react';
import Item from './Item';

const CartItem = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
    updateCartItemQuantity: React.PropTypes.func.isRequired,
  },

  changeHandlder: function(event) {
    const newQuantity = Number(event.target.value);
    const { updateCartItemQuantity, item } = this.props;
    updateCartItemQuantity(item.id, newQuantity);
  },

  render: function() {
    const { item } = this.props;

    return (
      <Item item={ item }>
        <div className="item-quantity">
          <input value={ item.quantityInCart } type="number" onChange={ this.changeHandlder } />
        </div>
      </Item>
    );
  },
});

export default CartItem;
