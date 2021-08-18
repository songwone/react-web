/*
 * @Descripttion:
 * @version:
 * @Author: songone
 * @Date: 2021-07-26 15:36:21
 * @LastEditors: songone
 * @LastEditTime: 2021-08-17 13:55:31
 */
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  if(process.env.NODE_ENV === 'development') {
    app.use(
      createProxyMiddleware("/base", {
        pathRewrite: {
          "^/base": "/", // 重写请求，比如我们源访问的是api/old-path，那么请求会被解析为/api/new-path
        },
        target: "http://10.0.2.32:5002",
        changeOrigin: false,
      })
    );
  }
  
};
