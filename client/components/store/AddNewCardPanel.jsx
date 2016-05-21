import React from 'react';

const AddNewCardPanel = React.createClass({
  getInitialState: function() {
    return {
      text: '',
    };
  },

  handleClick: function(event) {
    event.preventDefault();
    const { text } = this.state;
    this.props.addNewCard('test', text);
  },

  setText: function(event) {
    this.setState({ text: event.target.value });
  },

  render: function() {
    const testId = '1';
    return (
      <div>
        <form id={ testId }>
          <div className="row" style={{ marginTop: '20px' }}>
            <div className="col-xs-12">
              <textarea name="text" className="form-control" rows="2" onChange={ this.setText }></textarea>
            </div>
          </div>
          <div className="row" style={{ marginTop: '20px' }}>
            <div className="col-xs-12">
              <button
                type="submit"
                className="btn btn-primary btn-block"
                onClick={ this.handleClick }
              >
                Add Card
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  },
});

export default AddNewCardPanel;
