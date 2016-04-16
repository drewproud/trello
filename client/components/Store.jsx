import React from 'react';
import StoreItem from './StoreItem';

const Store = React.createClass({
  propTypes: {
    itemsInStore: React.PropTypes.array.isRequired,
  },

  render: function() {
    const { itemsInStore } = this.props;
    const items = itemsInStore.map(function(item) {
      return <StoreItem item={ item } key={ item.id } />;
    });
    return (
      <div>
        { items }
      </div>
    );
  },
});

export default Store;
