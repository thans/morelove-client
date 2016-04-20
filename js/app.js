var React = require('react');
var Parse = require('parse');
import { browserHistory, Router, Route, Link, IndexRoute } from 'react-router'

// Insert your app's keys here:
Parse.initialize('morelove_parse', '335fbf73-022f-46a6-99a0-2eb7aad9e67a');

Parse.serverURL = 'https://morelove.herokuapp.com/parse';

var AddMore = require('./AddMore.react.js');
var NavBar = require('./NavBar.react.js');
var TodoList = require('./TodoList.react.js');
React.render((
	<Router history={browserHistory}>
		<Route component={NavBar}>
			<Route path="/" component={TodoList} />
			<Route path="addMore" component={AddMore} />
			<Route path="seeAll" component={TodoList} />
		</Route>
	</Router>
	),
	document.getElementById('app')
);
