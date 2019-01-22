import React, {
  Fragment,
  useCallback,
  useEffect
} from 'react'
import {
  increment,
  decrement,
  decrementAsync,
  incrementAsync
} from '../../actions'
import { useDispatch, useMappedState } from 'redux-react-hook'

function HookedCounter () {
  const mapState = useCallback((state) => state.counter,[])
  const counter = useMappedState(mapState)
  const dispatch = useDispatch()
  
  useEffect(() => {
    document.title = `${counter} times clicked !!!!`
  })

  return (<Fragment>
    <p className="App-intro">
      Clicked {counter} times!!!.
  </p>
    <button onClick={() => dispatch(increment())}>++</button>
    <button onClick={() => dispatch(decrement())}>--</button>
    <button onClick={() => dispatch(incrementAsync())}>++ (Async)</button>
    <button onClick={() => dispatch(decrementAsync())}>-- (Async)</button>

  </Fragment>)
}

export default HookedCounter
