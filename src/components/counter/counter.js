import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const counterComponent = ({
  increment,
  decrement,
  incrementAsync,
  decrementAsync,
  count
}) => (
    <Fragment>
      <p className="App-intro">
        Clicked {count} times!!!.
    </p>
      <button onClick={() => increment()}>+</button>
      <button onClick={() => decrement()}>-</button>
      <button onClick={() => incrementAsync()}>+ (async)</button>
      <button onClick={() => decrementAsync()}>- (async)</button>
    </Fragment>)

counterComponent.propTypes = {
  increment: PropTypes.func,
  decrement: PropTypes.func,
  incrementAsync: PropTypes.func,
  decrementAsync: PropTypes.func,
  count: PropTypes.number
}

counterComponent.defaultProps = {
  increment: () => { },
  decrement: () => { },
  incrementAsync: () => { },
  decrementAsync: () => { },
  count: 0
}

export default counterComponent
