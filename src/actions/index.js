import { createActions } from 'redux-actions'

const {
  increment,
  decrement,
  incrementAsync,
  decrementAsync
} = createActions({
  INCREMENT: (amount = 1) => ({ amount }),
  DECREMENT: (amount = 1) => ({ amount: -amount }),
  INCREMENT_ASYNC: (amount = 1) => ({ amount }),
  DECREMENT_ASYNC: (amount = 1) => ({ amount })
});

export {
  increment,
  decrement,
  incrementAsync,
  decrementAsync
}
