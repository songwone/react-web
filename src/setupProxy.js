/*
 * @Descripttion:
 * @version:
 * @Author: songone
 * @Date: 2021-07-26 15:36:21
 * @LastEditors: songone
 * @LastEditTime: 2021-07-26 17:19:23
 */
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/localapi", {
      pathRewrite: {
        "^/localapi": "/", // 重写请求，比如我们源访问的是api/old-path，那么请求会被解析为/api/new-path
      },
      target: "http://115.28.105.199:81",
      changeOrigin: true,
    })
  );
};
