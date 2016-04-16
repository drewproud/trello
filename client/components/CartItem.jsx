import React from 'react';
import ItemBulkPricing from './ItemBulkPricing';

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
    const HEIGHT = 32;
    const { updateCartItemQuantity, item } = this.props;
    const { price, imageURL, name, bulkPricing, quantityInCart } = item;

    return (
      <div className="item">
        <h5>{ name }</h5>
        <div className="item-data-section">
          <div className="item-image">
            <img src={ imageURL } height={ HEIGHT } width={ HEIGHT } />
          </div>
          <div className="item-data-element">
            { price }
            <div className="item-label">price</div> 
          </div>
          <ItemBulkPricing bulkPricing={ bulkPricing } />
          <div className="item-quantity">
            <input value={ quantityInCart } type="number" onChange={ this.changeHandlder } />
          </div>
        </div>
      </div>
    );
  },
});

export default CartItem;
