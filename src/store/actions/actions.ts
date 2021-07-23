import { SET_USERINFO } from "./actionsTypes";

export const setUserInfo = (userInfo: any) => {
  return {
    type: SET_USERINFO,
    userInfo,
  };
};
