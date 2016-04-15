import React from 'react';
import { connect } from 'react-redux';
import styles from './App.css';

const App = connect(state => ({count: state}))(React.createClass({
  propTypes: {
    count: React.PropTypes.object.isRequired,
    dispatch: React.PropTypes.func.isRequired
  },
  render() {
    const { count, dispatch } = this.props;
    return (
      <div>
        <h1>Demo</h1>
        <p>{count.num}</p>
        <button
          className={ styles.increment }
          onClick={ () => dispatch({type: "INC"}) }
        >
          +1
        </button>
        <p>
          <a href="/whoami">Server-only route</a>
        </p>
      </div>
    );
  },
}));

export default App;
