import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
  list: [],
  nextSince: 0,
  profile: {},
  fail: false,
};

export default function users(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@users/GET_USERS_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@users/GET_USERS_SUCCESS': {
        draft.list = action.payload.list;
        draft.nextSince = action.payload.nextSince;
        draft.loading = false;
        break;
      }
      case '@users/GET_USER_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@users/GET_USER_SUCCESS': {
        draft.profile = action.payload.user;
        draft.loading = false;
        break;
      }
      case '@users/GET_USERS_FAILURE': {
        draft.fail = true;
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
