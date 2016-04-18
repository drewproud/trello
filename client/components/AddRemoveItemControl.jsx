import React from 'react';

const AddRemoveItemControl = React.createClass({
  propTypes: {
    itemId: React.PropTypes.number.isRequired,
    inCart: React.PropTypes.bool.isRequired,
    addItemToCart: React.PropTypes.func.isRequired,
    removeItemFromCart: React.PropTypes.func.isRequired,
  },

  addItemToCart: function() {
    const { itemId } = this.props;
    this.props.addItemToCart(itemId);
  },

  render: function() {
    const { inCart, addItemToCart, removeItemFromCart, itemId } = this.props;

    if (inCart) {
      return (
        <button className="btn btn-warning" type="button" onClick={ removeItemFromCart.bind(null, itemId) }>
          Remove Item
        </button>
      );
    }

    return (
      <button className="btn btn-info" type="button" onClick={ addItemToCart.bind(null, itemId) }>
        Add Item
      </button>
    );
  },
});

export default AddRemoveItemControl;
