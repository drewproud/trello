import React from 'react';
import Card from './Card';
import AddNewCardPanel from './AddNewCardPanel';

const CardColumn = React.createClass({
  propTypes: {
    itemsInStore: React.PropTypes.array.isRequired,
    addCardButtonClicked: React.PropTypes.func.isRequired,
  },

  render: function() {
    const { itemsInStore, addCardButtonClicked } = this.props;
    const items = itemsInStore.map(function(item) {
      return (
        <Card
          item={ item }
          key={ item.id }
        />
      );
    });
    return (
      <div className="col-xs-4">
        <div className="col-xs-12" style={{ backgroundColor: '#D2D2D2', borderRadius: '4px' }}>
          { items }
          <AddNewCardPanel
            addCardButtonClicked={ addCardButtonClicked }
          />
        </div>
      </div>
    );
  },
});

export default CardColumn;
