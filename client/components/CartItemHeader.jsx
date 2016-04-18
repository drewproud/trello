import React from 'react';

const CartItemHeader = React.createClass({
  render: function() {
    return (
      <div className="row cart-item-header">
        <div className="col-xs-3">
          Product
        </div>
        <div className="col-xs-3">
          Amount
        </div>
        <div className="col-xs-3">
          Price
        </div>
      </div>
    );
  },
});

export default CartItemHeader;
