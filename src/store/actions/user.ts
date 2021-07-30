/*
 * @Descripttion:
 * @version:
 * @Author: songone
 * @Date: 2021-07-21 15:32:41
 * @LastEditors: songone
 * @LastEditTime: 2021-07-28 14:39:31
 */
import { SET_USERINFO } from "./actionsTypes";
import { Dispatch } from "redux";

import { login } from "@/api/user";
import { setToken } from "@/utils/auth";

export const setUserInfo = (user: any, userInfo: any) => {
  return {
    type: SET_USERINFO,
    userInfo,
  };
};

const fetchUserInfo = (user: any) => {
  return async (dispatch: Dispatch) => {
    return null
  };
};
export const fetchLogin = (user: any) => {
  return async (dispatch: Dispatch) => {
    let data: any = await login(user);
    if (data.code === 0) {
      setToken(data.data);
    }
    return data;
  };
};

export const fetchUserInfoIfNeed = (user: any) => {
  return (dispatch: any, getState: any) => {
    return dispatch(fetchUserInfo(user));
  };
};
