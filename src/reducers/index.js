import { handleActions, combineActions } from 'redux-actions'
import { increment, decrement } from '../actions'

const defaultState = { counter: 0 }

const counterReducer = handleActions(
  {
    [combineActions(increment, decrement)]: (
      state,
      { payload: { amount } }
    ) => {
      return { ...state, counter: state.counter + amount }
    }
  },
  defaultState
)

export default counterReducer;