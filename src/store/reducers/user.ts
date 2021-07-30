/*
 * @Descripttion: 
 * @version: 
 * @Author: songone
 * @Date: 2021-07-21 16:23:30
 * @LastEditors: songone
 * @LastEditTime: 2021-07-28 15:39:43
 */
import { SET_USERINFO } from "../actions/actionsTypes";

const initState = {
  userInfo: {
    name: 'Super Admin',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    introduction: 'I am a super administrator',
    email: 'admin@test.com',
    roles: ['admin']
  },
};

export default function user(state = initState, action: any) {
  switch (action.type) {
    case SET_USERINFO:
      return { ...state, userInfo: action.data };
    default:
      return state;
  }
}
