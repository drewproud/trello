import React from 'react';
import { connect } from 'react-redux';
import styles from './Cart.css';
import { loadData } from '../actionCreators';
import { bindActionCreators } from 'redux';
import initialData from '../data';
import { selectItemsForCart } from '../reducers';
import CartItem from './CartItem';

const Cart = React.createClass({
  propTypes: {
    loadData: React.PropTypes.func.isRequired,
    itemsForCart: React.PropTypes.array.isRequired
  },

  componentDidMount: function() {
      this.props.loadData(initialData);
  },

  render() {
    const { itemsForCart } = this.props;
    const items = itemsForCart.map(function(item) {
      return <CartItem item={ item } key={ item.id } />
    });
    return (
      <div>
        { items }
      </div>
    );
  },
});

function mapStateToProps(state) {
  return {
    itemsForCart: selectItemsForCart(state),
  };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        loadData,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
