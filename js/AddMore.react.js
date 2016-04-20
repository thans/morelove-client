var Parse = require('parse').Parse;
// ParseReact sits on top of your Parse singleton
var ParseReact = require('parse-react');
var React = require('react');

var PersonCreator = require('./PersonCreator.react.js');

var AddMore = React.createClass({

  render() {
    return (
      <div className={'todo_list'}>
          <PersonCreator submit={this._createItem} />
      </div>
    );
  },

  // A Create mutation takes a className and a set of new attributes
  _createItem(name, pictureUrl, location, phone, needs) {
    ParseReact.Mutation.Create('Person', {
      name: name,
      photoUrl: pictureUrl,
      phoneNumber: phone,
      needs: needs,
      // curentLocation: location,
    }).dispatch();
  },
});

module.exports = AddMore;
