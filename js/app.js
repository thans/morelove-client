var React = require('react');
var Parse = require('parse');

// Insert your app's keys here:
Parse.initialize('morelove_parse', '335fbf73-022f-46a6-99a0-2eb7aad9e67a');

Parse.serverURL = 'https://morelove.herokuapp.com/parse';

var TodoList = require('./TodoList.react.js');

var PersonList = require('./PersonList.react.js');

React.render(
	 <PersonList />,
	 document.getElementById('app')
);
