import produce from 'immer';

const INITIAL_STATE = {
  profile: null,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@user/UPDATE_PROFILE_SUCCESS': {
        draft.user = action.payload.profile;
        break;
      }
      case '@auth/SIGN_IN_SUCCESS': {
        draft.user = action.payload.user;
        break;
      }
      default:
        break;
    }
  });
}