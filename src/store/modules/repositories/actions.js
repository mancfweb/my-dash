export function getRepositoriesRequest(username) {
  return {
    type: `@repositories/GET_REPOSITORIES_REQUEST`,
    payload: { username },
  };
}

export function getRepositoriesSuccess(list) {
  return {
    type: `@repositories/GET_REPOSITORIES_SUCCESS`,
    payload: { list },
  };
}

export function getRepositoriesFailure() {
  return {
    type: '@repositories/GET_REPOSITORIES_FAILURE',
  };
}
