import {INCREMENT, DECREMENT} from '../constants';

export const incrementAction = () => {
    return {type: INCREMENT};
}

export const decrementAction = () => {
    return {type: DECREMENT};  
}