var React = require('react');
var Parse = require('parse');

// Insert your app's keys here:
Parse.initialize('APPLICATION_ID', 'JAVASCRIPT_KEY');

var TodoList = require('./TodoList.react.js');

React.render(
	 <TodoList />,
	 document.getElementById('app')
);