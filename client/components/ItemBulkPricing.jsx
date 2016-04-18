import React from 'react';
import { formatPrice } from '../lib/prices';

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
        or { amount } for { formatPrice(totalPrice) }
      </span>
    );
  },
});

export default ItemBulkPricing;
