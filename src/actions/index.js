import {INCREMENT, DECREMENT, INCREMENT_ASYNC, DECREMENT_ASYNC} from '../constants';

export const incrementAction = () => {
    return {type: INCREMENT};
}

export const decrementAction = () => {
    return {type: DECREMENT};  
}

export const incrementAsyncAction = () => {
    return {type: INCREMENT_ASYNC};  
}

export const decrementAsyncAction = () => {
    return {type: DECREMENT_ASYNC};  
}