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

    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();
    const hoverMiddleY = (hoverBoundingRect.right - hoverBoundingRect.left) / 2;
    const clientOffset = monitor.getClientOffset();
    const hoverClientY = clientOffset.x - hoverBoundingRect.left;
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
    removeCard: React.PropTypes.func.isRequired,
    connectDragSource: React.PropTypes.func.isRequired,
    connectDropTarget: React.PropTypes.func.isRequired,
    isDragging: React.PropTypes.bool.isRequired,
  },

  render: function() {
    const {
      title,
      cards,
      addNewCard,
      removeCard,
      groupId,
      groupIndex,
      connectDragSource,
      connectDropTarget,
      isDragging,
    } = this.props;
    const items = cards.map(function(item) {
      return (
        <Card
          item={ item }
          groupId={ groupId }
          key={ item.cardId }
          removeCard={ removeCard }
        />
      );
    });

    const style = {
      opacity: isDragging ? 0 : 1,
      width: `${CARD_WIDTH_IN_PIXELS}px`,
      marginLeft: `${GUTTER_WIDTH_IN_PIXELS}px`,
      display: 'inline-block',
      float: 'left',
      backgroundColor: '#E2E4E6',
      borderRadius: '4px',
    };

    return connectDragSource(connectDropTarget(
      <div style={ style }>
        <div className="col-xs-12" style={{ padding: '20px' }}>
          <div className="col-xs-12" style={{ textAlign: 'center' }}>
            <h3 style={{ marginTop: '0', marginBottom: '20px' }}>{ title }</h3>
          </div>
          { items }
          <AddNewCardPanel
            addNewCard={ addNewCard }
            groupId={ groupId }
          />
        </div>
      </div>
    ));
  },
});

export default compose(
  DragSource('CARD', cardSource, (connect, monitor) => ({ connectDragSource: connect.dragSource(), isDragging: monitor.isDragging(), })),
  DropTarget('CARD', cardTarget, (connect) => ({ connectDropTarget: connect.dropTarget() }))
)(CardColumn);
