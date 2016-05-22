import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import R from 'ramda';

import Board from './Board';
import { addNewCard, addNewCardGroup, moveGroup } from '../actionCreators';
import { selectCardGroups } from '../reducers';

import './Cart.css';

function getScreenWidth(numberOfCards) {
  return (numberOfCards + 1) * 420 + 20;
}

const CartContainer = React.createClass({
  propTypes: {
    addNewCard: React.PropTypes.func.isRequired,
    addNewCardGroup: React.PropTypes.func.isRequired,
    moveGroup: React.PropTypes.func.isRequired,
    cardGroups: React.PropTypes.array.isRequired,
  },

  render: function() {
    const { cardGroups, addNewCard, addNewCardGroup, moveGroup } = this.props;
    const screenWidth = getScreenWidth(cardGroups.length);

    return (
      <div style={{ overflowX: 'scroll' }}>
        <div style={{ width: `${screenWidth}px`, height: '100%' }}>
          <div className="text-center" style={{ width: '100vw' }}>
            <h1>Trello Clone Example</h1>
          </div>
          <Board
            addNewCard={ addNewCard }
            addNewCardGroup={ addNewCardGroup }
            cardGroups={ cardGroups }
            moveGroup={ moveGroup }
          />
        </div>
      </div>
    );
  },
});

function mapStateToProps(state) {
  return {
    cardGroups: selectCardGroups(state),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addNewCard,
    addNewCardGroup,
    moveGroup,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
