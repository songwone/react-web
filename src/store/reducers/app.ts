import { SET_USERINFO } from "../actions/actionsTypes";

const initState = {
  collage: true,
};

export default function app(state = initState, action: any) {
  switch (action.type) {
    case SET_USERINFO:
      return {};
    default:
      return state;
  }
}
