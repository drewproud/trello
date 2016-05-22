import React from 'react';

const AddNewCardPanel = React.createClass({
  propTypes: {
    groupId: React.PropTypes.string.isRequired,
    addNewCard: React.PropTypes.func.isRequired,
  },

  getInitialState: function() {
    return {
      text: '',
      addCardOpen: false,
    };
  },

  handleSubmit: function(event) {
    const { text } = this.state;
    event.preventDefault();
    this.props.addNewCard(this.props.groupId, text);
    this.setState({ text: '', addCardOpen: false });
  },

  cancelAddCard: function(event) {
    event.preventDefault();
    this.setState({ text: '', addCardOpen: false });
  },

  setText: function(event) {
    this.setState({ text: event.target.value });
  },

  openAddCard: function(event) {
    event.preventDefault();
    this.setState({ addCardOpen: true });
  },

  render: function() {
    const { text, addCardOpen } = this.state;
    if (!addCardOpen) {
      return (
        <div style={{ textAlign: 'left' }}><a href="#!" style={{ color: 'grey' }} onClick={ this.openAddCard }>Add card</a></div>
      );
    }

    return (
      <div>
        <form onSubmit={ this.handleSubmit } style={{ marginBottom: '0' }}>
          <div className="row" style={{ marginTop: '20px' }}>
            <div className="col-xs-12">
              <textarea value={ text } name="text" className="form-control" rows="2" onChange={ this.setText }></textarea>
            </div>
          </div>
          <div className="row" style={{ marginTop: '20px' }}>
            <div className="col-xs-12 text-right">
              <button
                type="button"
                className="btn btn-primary"
                onClick={ this.cancelAddCard }
                style={{ backgroundColor: '#A9A8AF' }}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={ !this.state.text }
                style={{ marginLeft: '10px', backgroundColor: '#A9A8AF' }}
              >
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  },
});

export default AddNewCardPanel;
