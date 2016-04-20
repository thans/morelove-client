var Parse = require('parse').Parse;
// ParseReact sits on top of your Parse singleton
var ParseReact = require('parse-react');
var React = require('react');
var ParseComponent = ParseReact.Component(React);

var Person = require('./Person.react.js');
var PersonCreator = require('./PersonCreator.react.js');

// Top-Level component that binds to Parse using the ParseReact Mixin.
// This should help demonstrate the "It's Just That Easy" potential here.
export default class TodoList extends ParseComponent {

  observe(props, state) {
    return {
      items: (new Parse.Query('Person')).ascending('createdAt')
    };
  }

  render() {
    // If a query is outstanding, this.props.queryPending will be true
    // We can use this to display a loading indicator
    if (this.data.items) {
      var body = this.data.items.map(function(i) {
        // Loop over the objects returned by the items query, rendering them
        // with Person components.
        return (
          <Person key={i.id} item={i} update={this._updateItem} destroy={this._destroyItem} />
        );
      }, this)
    }

    return (
      <div className={this.pendingQueries().length ? 'todo_list loading' : 'todo_list'}>
        <a onClick={this._refresh} className="refresh">Refresh</a>
          {body}
        <PersonCreator submit={this._createItem} />
      </div>
    );
  }

  _refresh() {
    this.refreshQueries('items');
  }

  // A Create mutation takes a className and a set of new attributes
  _createItem(text) {
    ParseReact.Mutation.Create('Person', {
      needs: text
    }).dispatch();
  }

  // A Set mutation takes an Id object and a set of attribute changes
  _updateItem(id, text) {
    ParseReact.Mutation.Set(id, {
      needs: text
    }).dispatch();
  }

  // A Destroy mutation simply takes an Id object
  _destroyItem(id) {
    ParseReact.Mutation.Destroy(id).dispatch();
  }
}
