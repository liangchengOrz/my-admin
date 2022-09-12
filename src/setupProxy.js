const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://admin.raz-kid.cn',
      changeOrigin: true,
    })
  );
};