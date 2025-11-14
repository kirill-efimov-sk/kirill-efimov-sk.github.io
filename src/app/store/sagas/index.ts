import { all, call } from 'redux-saga/effects';
import { getToken, tokenSaga } from './token';
import { getProfile, profileSaga } from './profile';
import { initializerSaga } from './initializer';

function* appStartup() {
  yield call(getToken); // Загружаем токен при старте
  yield call(getProfile); // Загружаем профиль при старте
}

export default function* rootSaga() {
  yield all([call(appStartup), tokenSaga(), profileSaga(), initializerSaga()]);
}
