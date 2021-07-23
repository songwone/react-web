import { SET_USERINFO } from "../actions/actionsTypes";

const initState = {
  userInfo: {},
};

export default function user(state = initState, action: any) {
  switch (action.type) {
    case SET_USERINFO:
      return { ...state, userInfo: action.data };
    default:
      return state;
  }
}
