import React from 'react';
import EditRemoveCardControl from './EditRemoveCardControl';

const Card = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
    removeCard: React.PropTypes.func.isRequired,
  },

  removeCard: function() {
    this.props.removeCard(this.props.item.cardId);
  },

  render: function() {
    const { item } = this.props;
    const { name, text } = item;

    return (
      <div className="row store-row">
        <div className="col-xs-12 item-info">
          <div>
            <strong>{ name }</strong>
          </div>
          <div>
            { text }
            <a
              href="#!"
              className="glyphicon glyphicon-remove"
              style={{ textDecoration: 'none', color: 'black', float: 'right '}}
              onClick={ this.removeCard }
            ></a>
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
