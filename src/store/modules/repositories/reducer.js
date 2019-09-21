import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
  list: [],
  fail: false,
};

export default function repositories(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@repositories/GET_REPOSITORIES_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@repositories/GET_REPOSITORIES_SUCCESS': {
        draft.list = action.payload.list;
        draft.loading = false;
        break;
      }
      case '@repositories/GET_REPOSITORIES_FAILURE': {
        draft.fail = true;
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
