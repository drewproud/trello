import React from 'react';

const AddNewCardGroupPanel = React.createClass({
  propTypes: {
    addNewCardGroup: React.PropTypes.func.isRequired,
  },

  handleSubmit: function(event) {
    event.preventDefault();
    console.log(event);
  },

  render: function() {
    return (
      <div style={{ width: '400px', marginLeft: '20px', display: 'inline-block', float: 'left', backgroundColor: 'aliceblue' }}>
        <div className="col-xs-12" style={{ padding: '20px' }}>
          <form id="add-group-form">
            <div className="row">
              <div className="col-xs-12">
                <input type="text" className="form-control" />
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

