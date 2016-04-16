import React from 'react';
import ItemBulkPricing from './ItemBulkPricing.jsx';

const Item = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
    children: React.PropTypes.element.isRequired,
  },

  render: function() {
    const HEIGHT = 32;
    const { item, children } = this.props;
    const { price, imageURL, name, bulkPricing } = item;

    return (
      <div className="item">
        <h5>{ name }</h5>
        <div className="item-data-section">
          <div className="item-image">
            <img src={ imageURL } height={ HEIGHT } width={ HEIGHT } />
          </div>
          <div className="item-data-element">
            { price }
            <div className="item-label">price</div> 
          </div>
          <ItemBulkPricing bulkPricing={ bulkPricing } />
          { children }
        </div>
      </div>
    );
  },
});

export default Item;
