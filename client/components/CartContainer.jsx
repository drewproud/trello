import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import CardColumn from './store/CardColumn';
import AddNewCardGroupPanel from './store/AddNewCardGroupPanel';
import { addNewCard } from '../actionCreators';
import { selectAvailableItemsInStore } from '../reducers';

import './Cart.css';

const CartContainer = React.createClass({
  propTypes: {
    addNewCard: React.PropTypes.func.isRequired,
    itemsInStore: React.PropTypes.array.isRequired,
  },

  render() {
    const { itemsInStore } = this.props;
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 text-center">
              <h1>Trello Clone Example</h1>
            </div>
          </div>
        </div>
        <div>
          <CardColumn
            itemsInStore={ itemsInStore }
            addNewCard={ this.props.addNewCard }
          />
          <AddNewCardGroupPanel />
        </div>
      </div>
    );
  },
});

function mapStateToProps(state) {
  return {
    itemsInStore: selectAvailableItemsInStore(state),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addNewCard,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
