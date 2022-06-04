const Router = require("koa-router");

const tag = require("./tag/route");
const user = require("./user/route");

module.exports = new Router({ prefix: "/api" })
  .use("/tags", tag.routes())
  .use("/users", user.routes());
