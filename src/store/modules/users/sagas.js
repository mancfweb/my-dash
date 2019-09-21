import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';
import { getUsersSuccess, getUserSuccess, getUsersFailure } from './actions';

export function* getUsers({ payload }) {
  try {
    const { since } = payload;
    const response = yield call(api.get, `/users?per_page=10&since=${since}`);

    const nextSince = response.data[response.data.length - 1].id;

    yield put(getUsersSuccess(response.data, nextSince));
  } catch (err) {
    yield put(getUsersFailure());
  }
}

export function* getUser({ payload }) {
  try {
    const { username } = payload;
    const response = yield call(api.get, `/users/${username}`);

    yield put(getUserSuccess(response.data));
  } catch (err) {
    yield put(getUsersFailure());
  }
}

export default all([
  takeLatest('@users/GET_USERS_REQUEST', getUsers),
  takeLatest('@users/GET_USER_REQUEST', getUser),
]);
