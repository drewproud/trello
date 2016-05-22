import React from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import CardColumn from './store/CardColumn';
import AddNewCardGroupPanel from './store/AddNewCardGroupPanel';

const Board = React.createClass({
  propTypes: {
    addNewCard: React.PropTypes.func.isRequired,
    addNewCardGroup: React.PropTypes.func.isRequired,
    moveGroup: React.PropTypes.func.isRequired,
    cardGroups: React.PropTypes.array.isRequired,
  },

  render: function() {
    const { cardGroups, addNewCard, addNewCardGroup, moveGroup } = this.props;
    const columns = cardGroups.map(function({ groupId, cards, title }, idx) {
      return (
        <CardColumn
          key={ groupId }
          groupId={ groupId }
          groupIndex={ idx }
          title={ title }
          cards={ cards }
          addNewCard={ addNewCard }
          moveGroup={ moveGroup }
        />
      );
    });

    return (
      <div>
        { columns }
        <AddNewCardGroupPanel addNewCardGroup={ addNewCardGroup } />
      </div>
    );
  },
});

export default DragDropContext(HTML5Backend)(Board);
