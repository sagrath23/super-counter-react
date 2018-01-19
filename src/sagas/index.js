import { delay } from 'redux-saga';
import { put, takeEvery, all } from 'redux-saga/effects';
import { INCREMENT, INCREMENT_ASYNC, DECREMENT, DECREMENT_ASYNC } from "../constants/index";



export function* counterSaga(){
    console.log('counterSaga');
}

export function* incrementAsyncSaga(){
    console.log('incrementAsync Saga!!!');
    yield delay(3000);
    yield put({type: INCREMENT});
}

export function* watchIncrementAsync() {
    console.log('increment watched!!!');
    yield takeEvery(INCREMENT_ASYNC, incrementAsyncSaga);
}

export function* decrementAsyncSaga(){
    console.log('decrementAsync Saga!!!');
    yield delay(1000);
    yield put({type: DECREMENT});
}

export function* watchDecrementAsync() {
    console.log('decrement watched!!!');
    yield takeEvery(DECREMENT_ASYNC, decrementAsyncSaga);
}

export default function* rootSaga() {
    yield all([counterSaga(), watchIncrementAsync(), watchDecrementAsync()]);
}