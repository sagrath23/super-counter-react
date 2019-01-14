import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const counterComponent = ({
  increment,
  decrement,
  incrementAsyncAction,
  decrementAsyncAction,
  count
}) => (
  <Fragment>
    <p className="App-intro">
      Clicked {count} times!!!.
    </p>
    <button onClick={() => increment()}>+</button>
    <button onClick={() => decrement()}>-</button>
    <button onClick={() => incrementAsyncAction()}>+ (async)</button>
    <button onClick={() => decrementAsyncAction()}>- (async)</button>
  </Fragment>)

counterComponent.propTypes = {
  increment: PropTypes.func,
  decrement: PropTypes.func,
  incrementAsyncAction: PropTypes.func,
  decrementAsyncAction: PropTypes.func,
  count: PropTypes.number
}

counterComponent.defaultProps = {
  increment: () => {},
  decrement: () => {},
  incrementAsyncAction: () => {},
  decrementAsyncAction: () => {},
  count: 0
}

export default counterComponent
