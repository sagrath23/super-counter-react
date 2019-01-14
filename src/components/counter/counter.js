import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const counterComponent = ({
  incrementAction,
  decrementAction,
  incrementAsyncAction,
  decrementAsyncAction,
  count
}) => (
  <Fragment>
    <p className="App-intro">
      Clicked {count} times!!!.
    </p>
    <button onClick={() => incrementAction()}>+</button>
    <button onClick={() => decrementAction()}>-</button>
    <button onClick={() => incrementAsyncAction()}>+ (async)</button>
    <button onClick={() => decrementAsyncAction()}>- (async)</button>
  </Fragment>)

counterComponent.propTypes = {
  incrementAction: PropTypes.func,
  decrementAction: PropTypes.func,
  incrementAsyncAction: PropTypes.func,
  decrementAsyncAction: PropTypes.func,
  count: PropTypes.number
}

counterComponent.defaultProps = {
  incrementAction: () => {},
  decrementAction: () => {},
  incrementAsyncAction: () => {},
  decrementAsyncAction: () => {},
  count: 0
}

export default counterComponent
