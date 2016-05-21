import React from 'react';
import Card from './Card';
import AddNewCardPanel from './AddNewCardPanel';

const CardColumn = React.createClass({
  propTypes: {
    itemsInStore: React.PropTypes.array.isRequired,
    addNewCard: React.PropTypes.func.isRequired,
  },

  render: function() {
    const { itemsInStore, addNewCard } = this.props;
    const items = itemsInStore.map(function(item) {
      return (
        <Card
          item={ item }
          key={ item.id }
        />
      );
    });
    return (
      <div style={{ width: '400px', marginLeft: '20px', display: 'inline-block', float: 'left', backgroundColor: 'aliceblue' }}>
        <div className="col-xs-12" style={{ padding: '20px' }}>
          <div className="col-xs-12" style={{ backgroundColor: '#D2D2D2', borderRadius: '4px' }}>
            { items }
            <AddNewCardPanel
              addNewCard={ addNewCard }
            />
          </div>
        </div>
      </div>
    );
  },
});

export default CardColumn;
