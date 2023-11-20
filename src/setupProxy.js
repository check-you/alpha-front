const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    "/api/user/login",
    createProxyMiddleware({
      target: "http://52.78.30.240:8080",
      changeOrigin: true,
    })
  );
};
