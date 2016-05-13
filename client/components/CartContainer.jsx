import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import CardColumn from './store/CardColumn';
import { addCardButtonClicked } from '../actionCreators';
import { selectAvailableItemsInStore } from '../reducers';

import './Cart.css';

const CartContainer = React.createClass({
  propTypes: {
    updateCartItemQuantity: React.PropTypes.func.isRequired,
    loadData: React.PropTypes.func.isRequired,
    addItemToCart: React.PropTypes.func.isRequired,
    removeItemFromCart: React.PropTypes.func.isRequired,
    removeAllItemsFromCart: React.PropTypes.func.isRequired,
    itemsInStore: React.PropTypes.array.isRequired,
  },

  render() {
    const { itemsInStore } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 text-center">
            <h1>Trello Clone Example</h1>
          </div>
        </div>
        <div className="row">
          <CardColumn
            itemsInStore={ itemsInStore }
            addCardButtonClicked={ this.props.addCardButtonClicked }
          />
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
    addCardButtonClicked,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
