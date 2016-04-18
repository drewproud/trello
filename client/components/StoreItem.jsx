import React from 'react';
import Item from './Item';
import ItemBulkPricing from './ItemBulkPricing';
import AddRemoveItemControl from './AddRemoveItemControl';

const StoreItem = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
    addItemToCart: React.PropTypes.func.isRequired,
    removeItemFromCart: React.PropTypes.func.isRequired,
  },

  render: function() {
    const IMG_SIZE = 100;
    const { item, addItemToCart, removeItemFromCart } = this.props;
    const { price, imageURL, name, bulkPricing, inCart, id } = item;

    return (
      <div className="row store-row">
        <div className="col-xs-4">
          <img className="store-img" src={ imageURL } height={ IMG_SIZE } width={ IMG_SIZE }/>
        </div>
        <div className="col-xs-8 item-info" style={{ height: IMG_SIZE + 'px' }}>
          <div>
            <strong>{ name }</strong>
          </div>
          <div>
          { price } <ItemBulkPricing bulkPricing={ bulkPricing } />
          </div>
          <div className="item-add-remove">
            <AddRemoveItemControl
              addItemToCart={ addItemToCart }
              removeItemFromCart={ removeItemFromCart }
              itemId={ id }
              inCart={ inCart }
            />
          </div>
        </div>
      </div>
    );
  },
});

export default StoreItem;
