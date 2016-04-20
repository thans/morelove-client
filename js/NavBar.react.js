import React from 'react'
import { Link } from 'react-router'

var NavBar = React.createClass({
  onClickPeople() {
    this.props.history.replace('/seeAll')
    this.setState({
      selected: 'seeAll',
    });
  },

  onClickAddMore() {
    this.props.history.replace('/addMore');
    this.setState({
      selected: 'addMore',
    });
  },

  getInitialState() {
    return {
      selected: 'seeAll',
    }
  },

  render() {
    return (
      <div>
        <div id='navbar'>
          {this._renderPeople()}
          {this._renderAddMore()}
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  },

  _renderPeople() {
    return (
      <Link
        to='/seeAll'
        onClick={this.onClickPeople}
        style={this.state.selected === 'seeAll' ? {backgroundColor: 'blue', color: 'white'} : {}}>
        See All
      </Link>
    )
  },

  _renderAddMore() {
    return (
      <Link
        to='/addMore'
        onClick={this.onClickAddMore}
        style={this.state.selected === 'addMore' ? {backgroundColor: 'blue', color: 'white'} : {}}>
        Add More
      </Link>
    )
  },
});

module.exports = NavBar;
