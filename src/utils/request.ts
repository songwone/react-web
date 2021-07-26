/*
 * @Descripttion: 
 * @version: 
 * @Author: songone
 * @Date: 2021-07-26 16:03:14
 * @LastEditors: songone
 * @LastEditTime: 2021-07-26 17:14:45
 */
import axios from 'axios'

axios.defaults.timeout = 30000;
axios.defaults.baseURL = '/localapi';

axios.interceptors.request.use(
  (config) => {
    config.data = JSON.stringify(config.data);
    config.headers = {
      "Content-Type": "application/json",
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
    if (response.data.errCode === 2) {
      console.log("过期");
    }
    return response;
  },
  (error) => {
    console.log("请求出错：", error);
  }
);

export default axios