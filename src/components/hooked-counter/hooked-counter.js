import React, {
  Fragment,
  useState,
  useEffect
} from 'react'
import { createAction, createActions } from 'redux-actions'

function HookedCounter () {
  const [count, setCount] = useState(0)
  useEffect(() => {
    document.title = `${count} times clicked !!!`
  })

  const actionFromCreateAction = createAction('My Test action')
  const { actionFromCreateActions } = createActions({
    ACTION_FROM_CREATE_ACTIONS: () => {}
  })

  console.log(actionFromCreateAction(), 'createAction without arguments')
  console.log(actionFromCreateAction(1234), 'createAction with arguments')

  console.log(actionFromCreateActions(), 'createActions without arguments')
  console.log(actionFromCreateActions(1234), 'createActions with arguments')


  return (<Fragment>
    <p className="App-intro">
      Clicked {count} times!!!.
  </p>
    <button onClick={() => setCount(count + 1)}>+</button>
    <button onClick={() => setCount(count - 1)}>-</button>
  </Fragment>)
}

export default HookedCounter
