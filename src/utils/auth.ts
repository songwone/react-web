/*
 * @Descripttion: 
 * @version: 
 * @Author: songone
 * @Date: 2021-07-27 16:35:35
 * @LastEditors: songone
 * @LastEditTime: 2021-07-28 14:39:20
 */
import Cookies from "js-cookie";

const TOKEN = 'Auth_token'

export const setToken = (token: string) => {
  Cookies.set(TOKEN, token);
}

export const getToken = () => Cookies.get(TOKEN) || null;

export const removeToken = () => Cookies.remove(TOKEN);