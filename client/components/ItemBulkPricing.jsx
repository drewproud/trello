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

export default ItemBulkPricing;
