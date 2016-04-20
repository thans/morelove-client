var React = require('react');
var Parse = require('parse');
import { browserHistory, Router, Route, Link, IndexRoute } from 'react-router'

// Insert your app's keys here:
Parse.initialize('APPLICATION_ID', 'JAVASCRIPT_KEY');

Parse.serverURL = 'https://morelove.herokuapp.com/parse';

var NavBar = require('./NavBar.react.js');
var TodoList = require('./TodoList.react.js');
var MoreLoveApp = require('./MoreLoveApp.react.js');
React.render((
	<Router history={browserHistory}>
		<Route component={NavBar}>
			<Route path="/" component={TodoList} />
			<Route path="addMore" component={TodoList} />
			<Route path="seeAll" component={TodoList} />
		</Route>
	</Router>
	),
	document.getElementById('app')
);
