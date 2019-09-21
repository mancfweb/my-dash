import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';
import { getRepositoriesSuccess, getRepositoriesFailure } from './actions';

export function* getRepos({ payload }) {
  try {
    const { username } = payload;
    const response = yield call(api.get, `/users/${username}/repos`);

    yield put(getRepositoriesSuccess(response.data));
  } catch (err) {
    yield put(getRepositoriesFailure());
  }
}

export default all([
  takeLatest('@repositories/GET_REPOSITORIES_REQUEST', getRepos),
]);
