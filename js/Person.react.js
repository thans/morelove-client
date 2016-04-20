
var React = require('react');

var PrettyDate = require('./PrettyDate.react.js');

var Person = React.createClass({
  getInitialState: function() {
    return ({
      editing: false,
      editText: ''
    });
  },

  render: function() {
    if (this.state.editing) {
      return (
        <div className="todo_item editing">
          <input
            ref="edit_input"
            onChange={this._onChange}
            onKeyDown={this._onKeyDown}
            value={this.state.editText}
          />
          <a className="save" onClick={this._stopEdit}>
            <i className="icon_submit" />
          </a>
        </div>
      );
    }
    return (
      <div className="todo_item">
        <div className="item_text">
          <div className="person_photo_container">
            <img className="person_photo" src={this.props.item.photoUrl}/>
          </div>
          <div className="main_information">
            <div className="person_name">
            {this.props.item.name}
            </div>
            <div className="person_phone">
            {this.props.item.phoneNumber}
            </div>
            <div className="person_needs">
            Needs: 
            {this.props.item.needs}
            </div>
          </div>
        </div>
      </div>
    );
  },

  _startEdit: function() {
    this.setState({
      editText: this.props.item.needs,
      editing: true
    }, function() {
      // Set the cursor to the end of the input
      var node = this.refs.edit_input.getDOMNode();
      node.focus();
      var len = this.state.editText.length;
      node.setSelectionRange(len, len);
    });
  },

  _onChange: function(e) {
    this.setState({
      editText: e.target.value
    });
  },

  _onKeyDown: function(e) {
    if (e.keyCode === 13) {
      this._stopEdit();
    }
  },

  _stopEdit: function() {
    if (this.state.editText) {
      this.props.update(this.props.item.id, this.state.editText);
      this.setState({
        editing: false
      });
    } else {
      this.props.destroy(this.props.item.id);
    }
  },

  _removeItem: function() {
    this.props.destroy(this.props.item.id);
  }
});

module.exports = Person;
