var React = require('react');

var PersonCreator = React.createClass({
  getInitialState: function() {
    return ({
      name: '',
      picture: '',
      location: '',
      number: '',
      needs: '',
    });
  },

  render: function() {
    return (
      <div className="todo_creator">
        <div className="personInput">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            value={this.state.name}
            onChange={this._onChangeName}
          />
        </div>
        <div className="personInput">
          <label htmlFor="picture">Picture:</label>
          <input
            id="picture"
            value={this.state.picture}
            onChange={this._onChangePicture}
          />
        </div>
        <div className="personInput">
          <label htmlFor="location">Location:</label>
          <input
            id="location"
            value={this.state.location}
            onChange={this._onChangeLocation}
          />
        </div>
        <div className="personInput">
          <label htmlFor="phone">Phone:</label>
          <input
            id="phone"
            value={this.state.phone}
            onChange={this._onChangePhone}
          />
        </div>
        <div className="personInput">
          <label htmlFor="needs">Needs:</label>
          <input
            id="needs"
            value={this.state.needs}
            onChange={this._onChangeNeeds}
          />
        </div>
        <a onClick={this._submit} className="todo_submit">Add</a>
      </div>
    );
  },

  _onChangeName: function(e) {
    this.setState({
      name: e.target.value
    });
  },

  _onChangePhone: function(e) {
    this.setState({
      phone: e.target.value
    });
  },

  _onChangePicture: function(e) {
    this.setState({
      picture: e.target.value
    });
  },

  _onChangeLocation: function(e) {
    this.setState({
      location: e.target.value
    });
  },

  _onChangeNeeds: function(e) {
    this.setState({
      needs: e.target.value
    });
  },

  _submit: function() {
    this.props.submit(
      this.state.name,
      this.state.picture,
      this.state.location,
      this.state.phone,
      this.state.needs,
    );
    this.setState({
      name: '',
      picture: '',
      location: '',
      phone: '',
      needs: '',
    });
  }
});

module.exports = PersonCreator;
