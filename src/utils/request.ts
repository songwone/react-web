/*
 * @Descripttion: 
 * @version: 
 * @Author: songone
 * @Date: 2021-07-26 16:03:14
 * @LastEditors: songone
 * @LastEditTime: 2021-07-28 14:42:29
 */
import axios from 'axios'
import { message } from 'antd'
import { getToken } from '@/utils/auth'

axios.defaults.timeout = 30000;
axios.defaults.baseURL = '/localapi';

axios.interceptors.request.use(
  (config) => {
    config.data = JSON.stringify(config.data);
    config.headers = {
      "Content-Type": "application/json",
      "Authorization": getToken()
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * http response 拦截器
 */
axios.interceptors.response.use(
  (response) => {
    const res = response.data
    if (res.code && res.code !== 0) {
      message.error(res.msg)
      return Promise.reject(new Error(res.msg || 'error'))
    } else {
      return res
    }
    
  },
  (error) => {
    console.log("请求出错：", error);
  }
);


export default axios