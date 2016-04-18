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
    const { price, imageURL, name, bulkPricing } = item;
    // const IMG_SIZE = 50;

    //TODO: calculate total item price - pull put the single item price calculation
    // from totalcalculator

    return (
      <div className="row">
        <div className="col-xs-4">
          { name }
        </div>
        <div className="col-xs-4">
          <input value={ item.quantityInCart } type="number" onChange={ this.changeHandlder } />
        </div>
        <div className="col-xs-4">
          $$$$
        </div>
      </div>
    );
  },
});

export default CartItem;
