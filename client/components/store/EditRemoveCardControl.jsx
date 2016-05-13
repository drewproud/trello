import React from 'react';

const EditRemoveCardControl = React.createClass({
  propTypes: {
    itemId: React.PropTypes.number.isRequired,
    removeCard: React.PropTypes.func.isRequired,
    editCard: React.PropTypes.func.isRequired,
  },

  render: function() {
    const { removeCard, editCard, itemId } = this.props;

    return (
      <div>
        <button className="btn btn-info" type="button" onClick={ removeCard.bind(null, itemId) }>
          Edit Card
        </button>
        <button className="btn btn-info" type="button" onClick={ removeCard.bind(null, itemId) }>
          Delete Card
        </button>
      </div>
    );
  },
});

export default EditRemoveCardControl;
