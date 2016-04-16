import React from 'react';

const ItemBulkPricing = React.createClass({
  propTypes: {
    bulkPricing: React.PropTypes.shape({
      amount: React.PropTypes.number.isRequired,
      totalPrice: React.PropTypes.number.isRequired,
    }),
  },

  render: function() {
    const { bulkPricing } = this.props;
    if (!bulkPricing) {
      return <div></div>;
    }

    const { amount, totalPrice } = bulkPricing;
    return (
      <div className="item-data-element">
        { amount } for { totalPrice }
        <div className="item-label">bulk price</div> 
      </div>
    );
  },
});

const CartItem = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
  },

  render: function() {
    const HEIGHT = 32;
    const { price, imageURL, name, bulkPricing } = this.props.item;
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
        </div>
      </div>
    );
  },
});

export default CartItem;
