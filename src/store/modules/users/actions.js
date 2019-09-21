export function getUsersRequest(since) {
  return {
    type: '@users/GET_USERS_REQUEST',
    payload: { since },
  };
}

export function getUsersSuccess(list, nextSince) {
  return {
    type: '@users/GET_USERS_SUCCESS',
    payload: { list, nextSince },
  };
}

export function getUserRequest(username) {
  return {
    type: '@users/GET_USER_REQUEST',
    payload: { username },
  };
}

export function getUserSuccess(user) {
  return {
    type: '@users/GET_USER_SUCCESS',
    payload: { user },
  };
}

export function getUsersFailure() {
  return {
    type: '@users/GET_USERS_FAILURE',
  };
}
