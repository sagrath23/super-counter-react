import { createActions } from 'redux-actions'
import { INCREMENT_ASYNC, DECREMENT_ASYNC } from '../constants';

const { increment, decrement } = createActions({
    INCREMENT: (amount = 1) => ({ amount }),
    DECREMENT: (amount = 1) => ({ amount: -amount })
});

export {
    increment,
    decrement
}

export const incrementAsyncAction = () => {
    return { type: INCREMENT_ASYNC };
}

export const decrementAsyncAction = () => {
    return { type: DECREMENT_ASYNC };
}