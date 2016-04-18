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
      return <span></span>;
    }

    const { amount, totalPrice } = bulkPricing;
    return (
      <span>
        or { amount } for { totalPrice }
      </span>
    );
  },
});

export default ItemBulkPricing;
