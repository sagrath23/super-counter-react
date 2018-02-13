import React from 'react'

import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './actions'

import logo from './logo.svg'
import './App.css'

const CounterComponent = ({incrementAction, decrementAction, incrementAsyncAction, decrementAsyncAction, count}) => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to Super Counter</h1>
    </header>
    <p className="App-intro">
      Clicked {count} times!!!.
    </p>
    <button onClick={() => incrementAction()}>+</button>
    <button onClick={() => decrementAction()}>-</button>
    <button onClick={() => incrementAsyncAction()}>+ (async)</button>
    <button onClick={() => decrementAsyncAction()}>- (async)</button>
  </div>
)

CounterComponent.propTypes = {
  incrementAction: PropTypes.func.isRequired,
  incrementAsyncAction: PropTypes.func.isRequired,
  decrementAction: PropTypes.func.isRequired,
  decrementAsyncAction: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired
}

const mapStateToProps = (state) => {
  return {count: state}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent)
