import React, {
  Fragment,
  useState,
  useEffect
} from 'react'
import { useDispatch, useMappedState } from 'redux-react-hook'

function HookedCounter () {
  const [count, setCount] = useState(0)
  useEffect(() => {
    document.title = `${count} times clicked !!!`
  })

  return (<Fragment>
    <p className="App-intro">
      Clicked {count} times!!!.
  </p>
    <button onClick={() => setCount(count + 1)}>+</button>
    <button onClick={() => setCount(count - 1)}>-</button>
  </Fragment>)
}

export default HookedCounter
