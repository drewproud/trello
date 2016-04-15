import React from 'react';
import { connect } from 'react-redux';
import styles from './App.css';
import { loadData } from '../actionCreators';
import { bindActionCreators } from 'redux';
import initialData from '../data';
import { selectItemsForCart } from '../reducers';

const App = React.createClass({
  propTypes: {
    loadData: React.PropTypes.func.isRequired,
    itemsForCart: React.PropTypes.array.isRequired
  },

  componentDidMount: function() {
      this.props.loadData(initialData);
  },

  render() {
    const { itemsForCart } = this.props;
    return (
      <div>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
