import { delay } from 'redux-saga'
import { put, takeEvery, all } from 'redux-saga/effects'
import { increment, decrement } from '../actions'
import { INCREMENT_ASYNC, DECREMENT_ASYNC } from "../constants/index"



export function* counterSaga(){
    yield console.log('counterSaga');
}

export function* incrementAsyncSaga(){
    yield delay(3000);
    yield put(increment(1));
}

export function* watchIncrementAsync() {
    yield takeEvery(INCREMENT_ASYNC, incrementAsyncSaga);
}

export function* decrementAsyncSaga(){
    console.log('decrementAsync Saga!!!');
    yield delay(1000);
    yield put(decrement(1));
}

export function* watchDecrementAsync() {
    yield takeEvery(DECREMENT_ASYNC, decrementAsyncSaga);
}

export default function* rootSaga() {
    yield all([counterSaga(), watchIncrementAsync(), watchDecrementAsync()]);
}