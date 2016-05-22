import React from 'react';

const AddNewCardGroupPanel = React.createClass({
  propTypes: {
    addNewCardGroup: React.PropTypes.func.isRequired,
  },

  getInitialState: function() {
    return { value: '' };
  },

  handleSubmit: function(event) {
    event.preventDefault();
    const { value } = this.state;
    this.props.addNewCardGroup(value);
    this.setState({ value: '' });
  },

  handleChange: function(event) {
    this.setState({ value: event.target.value });
  },

  render: function() {
    return (
      <div style={{ width: '400px', marginLeft: '20px', display: 'inline-block', float: 'left', backgroundColor: 'aliceblue' }}>
        <div className="col-xs-12" style={{ padding: '20px' }}>
          <form id="add-group-form" onSubmit={ this.handleSubmit }>
            <div className="row">
              <div className="col-xs-12">
                <input type="text" className="form-control" onChange={ this.handleChange } value={ this.state.value } />
              </div>
            </div>
            <div className="row" style={{ marginTop: '10px' }}>
              <div className="col-xs-4 pull-right">
                <button type="submit" className="btn btn-info btn-block">Add</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  },
});

export default AddNewCardGroupPanel;

