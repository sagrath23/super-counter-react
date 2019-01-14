import { delay } from 'redux-saga'
import { put, takeEvery, all } from 'redux-saga/effects'
import { increment, decrement } from '../actions'

export function* incrementAsyncSaga({ payload: { amount } }) {
  yield delay(3000);
  yield put(increment(amount));
}

export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsyncSaga);
}

export function* decrementAsyncSaga({ payload: { amount } }) {
  yield delay(1000);
  yield put(decrement(amount));
}

export function* watchDecrementAsync() {
  yield takeEvery('DECREMENT_ASYNC', decrementAsyncSaga);
}

export default function* rootSaga() {
  yield all([watchIncrementAsync(), watchDecrementAsync()]);
}