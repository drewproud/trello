import React from 'react';
import Item from './Item';

const StoreItem = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
  },

  addItemToCart: function() {
  },

  render: function() {
    const { item } = this.props;

    return (
      <Item item={ item }>
        <div className="item-add-to-cart">
          <button className="btn btn-block" type="button" onClick={ this.addItemToCart }>
            Add Item
          </button>
        </div>
      </Item>
    );
  },
});

export default StoreItem;
