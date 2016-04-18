import React from 'react';

const RemoveAllItemsFromCart = React.createClass({
  propTypes: {
    itemsInCart: React.PropTypes.array.isRequired,
    removeAllItemsFromCart: React.PropTypes.func.isRequired,
  },

  removeAllItemsFromCart: function(event) {
    event.preventDefault();
    this.props.removeAllItemsFromCart();
  },

  render: function() {
    const { itemsInCart } = this.props;

    if (itemsInCart.length) {
      return <a href="#!" className="remove-all-items" onClick={ this.removeAllItemsFromCart }>remove all</a>;
    }

    return <span></span>;
  },
});

export default RemoveAllItemsFromCart;
