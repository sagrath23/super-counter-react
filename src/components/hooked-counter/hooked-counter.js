import React, { Fragment, useState } from 'react'

function HookedCounter () {
  const [count, setCount] = useState(0)

  return (<Fragment>
    <p className="App-intro">
      Clicked {count} times!!!.
  </p>
    <button onClick={() => setCount(count + 1)}>+</button>
    <button onClick={() => setCount(count - 1)}>-</button>
  </Fragment>)
}

export default HookedCounter
