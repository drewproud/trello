import React from 'react';
import EditRemoveCardControl from './EditRemoveCardControl';

const Card = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
    addNewCard: React.PropTypes.func.isRequired,
  },

  render: function() {
    const { item, addNewCard, removeItemFromCart } = this.props;
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
          </div>
        </div>
      </div>
    );
  },
});


            //<EditRemoveCardControl
              //removeCard={  }
              //itemId={ id }
            ///>

export default Card;
