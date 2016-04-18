import React from 'react';

const AddRemoveItemControl = React.createClass({
  propTypes: {
    itemId: React.PropTypes.number.isRequired,
    addItemToCart: React.PropTypes.func.isRequired,
  },

  render: function() {
    const { addItemToCart, itemId } = this.props;

    return (
      <button className="btn btn-info" type="button" onClick={ addItemToCart.bind(null, itemId) }>
        Add Item
      </button>
    );
  },
});

export default AddRemoveItemControl;
