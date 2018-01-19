import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions';

import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    console.log(this.props, 'props');
    const {
      incrementAction, 
      decrementAction, 
      incrementAsyncAction,
      decrementAsyncAction, 
      count } = this.props;
    console.log(count, 'count');
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Clicked {count} times!!!.
        </p>
        <button onClick={(event) => incrementAction()}>+</button>
        <button onClick={(event) => decrementAction()}>-</button>
        <button onClick={(event) => incrementAsyncAction()}>+ (async)</button>
        <button onClick={(event) => decrementAsyncAction()}>- (async)</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {count: state};
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
