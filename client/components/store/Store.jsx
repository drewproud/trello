import React from 'react';
import StoreItem from './StoreItem';

const Store = React.createClass({
  propTypes: {
    itemsInStore: React.PropTypes.array.isRequired,
    addItemToCart: React.PropTypes.func.isRequired,
  },

  render: function() {
    const { itemsInStore, addItemToCart, removeItemFromCart } = this.props;
    const items = itemsInStore.map(function(item) {
      return (
        <StoreItem
          item={ item }
          key={ item.id }
          addItemToCart={ addItemToCart }
        />
      );
    });
    return (
      <div>
        { items }
      </div>
    );
  },
});

export default Store;
