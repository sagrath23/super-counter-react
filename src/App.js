import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions';

import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);

    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);

    this.state = {
      count: 0
    };

  }

  handleIncrement() {
    this.setState({count: this.state.count + 1});
  }

  handleDecrement() {
    this.setState({count: this.state.count - 1});
  }

  render() {
    const {count} = this.state;
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
        <button onClick={this.handleIncrement}>+</button>
        <button onClick={this.handleDecrement}>-</button>
        <button>+ (async)</button>
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
