import React from 'react';
import { findDOMNode } from 'react-dom';
import { compose } from 'ramda';
import { DragSource, DropTarget } from 'react-dnd';

import Card from './Card';
import AddNewCardPanel from './AddNewCardPanel';

const GUTTER_WIDTH_IN_PIXELS = 20;
const CARD_WIDTH_IN_PIXELS = 400;

const cardSource = {
  beginDrag: function({ groupId, groupIndex }) {
    return { groupId, groupIndex };
  },
};

const cardTarget = {
  hover: function(props, monitor, component) {
    const dragItem = monitor.getItem();
    const dragId = dragItem.groupId;
    const dropId = props.groupId;

    if (dragId === dropId) {
      return;
    }

    const dragIndex = dragItem.groupIndex;
    const dropIndex = props.groupIndex;

    // Determine rectangle on screen
    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();

    // Get vertical middle
    const hoverMiddleY = (hoverBoundingRect.right - hoverBoundingRect.left) / 2;

    // Determine mouse position
    const clientOffset = monitor.getClientOffset();

    // Get pixels to the right
    const hoverClientY = clientOffset.x - hoverBoundingRect.left;

    // Only perform the move when the mouse has crossed half of the items height
    // When dragging downwards, only move when the cursor is below 50%
    // When dragging upwards, only move when the cursor is above 50%

    const onLeft = hoverClientY < hoverMiddleY;

    // Dragging right
    if (dragIndex < dropIndex && onLeft) {
      return;
    }

    // Dragging left
    if (dragIndex > dropIndex && !onLeft) {
      return;
    }

    props.moveGroup(dragId, dropId, onLeft);
  },
};

const CardColumn = React.createClass({
  propTypes: {
    cards: React.PropTypes.array.isRequired,
    groupId: React.PropTypes.string.isRequired,
    groupIndex: React.PropTypes.number.isRequired,
    title: React.PropTypes.string.isRequired,
    addNewCard: React.PropTypes.func.isRequired,
    moveGroup: React.PropTypes.func.isRequired,
    connectDragSource: React.PropTypes.func.isRequired,
    connectDropTarget: React.PropTypes.func.isRequired,
    isOver: React.PropTypes.bool.isRequired,
    isDragging: React.PropTypes.bool.isRequired,
  },

  render: function() {
    const { title, cards, addNewCard, groupId, groupIndex, connectDragSource, connectDropTarget, isOver, isDragging } = this.props;
    const items = cards.map(function(item) {
      return (
        <Card
          item={ item }
          groupId={ groupId }
          key={ item.cardId }
        />
      );
    });

    const style = {
      opacity: isDragging ? 0 : 1,
      width: `${CARD_WIDTH_IN_PIXELS}px`,
      marginLeft: `${GUTTER_WIDTH_IN_PIXELS}px`,
      display: 'inline-block',
      float: 'left',
      backgroundColor: 'aliceblue',
    };

    return connectDragSource(connectDropTarget(
      <div style={ style }>
        <div className="col-xs-12" style={{ padding: '20px' }}>
          <div className="col-xs-12" style={{ backgroundColor: 'transparent' }}>
            { title }
          </div>
          <div className="col-xs-12" style={{ backgroundColor: '#D2D2D2', borderRadius: '4px' }}>
            { items }
            <AddNewCardPanel
              addNewCard={ addNewCard }
              groupId={ groupId }
            />
          </div>
        </div>
      </div>
    ));
  },
});

export default compose(
  DragSource('CARD', cardSource, (connect, monitor) => ({ connectDragSource: connect.dragSource(), isDragging: monitor.isDragging(), })),
  DropTarget('CARD', cardTarget, (connect, monitor) => ({ connectDropTarget: connect.dropTarget(), isOver: monitor.isOver() }))
)(CardColumn);
