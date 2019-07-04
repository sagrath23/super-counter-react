import { put, takeEvery, all } from 'redux-saga/effects'
import * as actions from '../actions'

const delay = (ms) => new Promise(res => setTimeout(res, ms))

export function* incrementAsyncSaga({ payload: { amount } }) {
  yield delay(3000);
  yield put(actions.increment(amount));
}

export function* watchIncrementAsync() {
  yield takeEvery(actions.incrementAsync, incrementAsyncSaga);
}

export function* decrementAsyncSaga({ payload: { amount } }) {
  yield delay(1000);
  yield put(actions.decrement(amount));
}

export function* watchDecrementAsync() {
  yield takeEvery(actions.decrementAsync, decrementAsyncSaga);
}

export default function* rootSaga() {
  yield all([watchIncrementAsync(), watchDecrementAsync()]);
}