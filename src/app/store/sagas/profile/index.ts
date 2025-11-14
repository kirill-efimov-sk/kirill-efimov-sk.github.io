import { put, select, takeEvery, takeLatest } from 'redux-saga/effects';
import { storage } from 'src/utils/localstorage';
import { PROFILE_KEY, profileActions, profileSelectors } from '../../slices/profile';
import { ProfileChannel } from './channel';
import { ProfileFormValues } from 'src/features/forms/profileForm/types';

const profileChannel = new ProfileChannel('profile-saver-channel');

export function* setProfile(): Generator {
  const profile = (yield select(profileSelectors.get)) as ProfileFormValues;
  profileChannel.setProfile(profile);
  if (profile) storage.set(PROFILE_KEY, JSON.stringify(profile));
}

export function* clearProfile(): Generator {
  storage.remove([PROFILE_KEY]);
  profileChannel.clearProfile();
  yield put(profileActions.set(null));
}

export function* getProfile() {
  const profileStr = storage.get(PROFILE_KEY);
  const profile = profileStr ? JSON.parse(profileStr) : null;
  yield put(profileActions.set(profile));
  profileChannel.requestProfile();
}

export function* profileSaga() {
  yield takeEvery(profileActions.clear, clearProfile);
  yield takeLatest(profileActions.set, setProfile);
}
