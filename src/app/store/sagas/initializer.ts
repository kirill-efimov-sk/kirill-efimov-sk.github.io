import { takeEvery } from 'redux-saga/effects';
import { initializedActions } from '../slices/initialized';
import { getToken } from './token';

export function* initializerSaga() {
  yield takeEvery(initializedActions.init, getToken);
}
