import React from 'react';
import EditRemoveCardControl from './EditRemoveCardControl';

const Card = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
    addCardButtonClicked: React.PropTypes.func.isRequired,
  },

  render: function() {
    const { item, addCardButtonClicked, removeItemFromCart } = this.props;
    const { name, id } = item;
    const text = 'test';

    return (
      <div className="row store-row">
        <div className="col-xs-12 item-info">
          <div>
            <strong>{ name }</strong>
          </div>
          <div>
            { text }
          </div>
          <div className="item-add-remove">
            <EditRemoveCardControl
              removeCard={ addCardButtonClicked }
              itemId={ id }
            />
          </div>
        </div>
      </div>
    );
  },
});

export default Card;
