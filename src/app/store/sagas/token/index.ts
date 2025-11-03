import { put, select, takeEvery, takeLatest } from 'redux-saga/effects';
import { storage } from 'src/utils/localstorage';
import { TOKEN_KEY, tokenActions, tokenSelectors } from '../../slices/token';
import { TokenChannel } from './channel';

const tokenChannel = new TokenChannel('token-saver-channel');

export function* setToken(): Generator {
  const token = (yield select(tokenSelectors.get)) as string;
  tokenChannel.setToken(token);
  if (token) storage.set(TOKEN_KEY, token);
}
export function* clearToken(): Generator {
  storage.remove([TOKEN_KEY]);
  tokenChannel.logout();
  yield put(tokenActions.set(null));
}

export function* getToken() {
  const token = storage.get(TOKEN_KEY);
  yield put(tokenActions.set(token));
  tokenChannel.requestToken();
}

export function* tokenSaga() {
  yield takeEvery(tokenActions.logout, clearToken);
  yield takeLatest(tokenActions.set, setToken);
}
