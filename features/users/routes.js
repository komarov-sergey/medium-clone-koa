const Router = require("koa-router");

module.exports = new Router().use((ctx) => {
  ctx.body = "Hello Koa";
});
