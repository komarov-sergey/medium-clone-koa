const Router = require("koa-router");

const errorHandler = require("./middleware/err");
const tag = require("./tag/route");
const user = require("./user/route");
const article = require("./article/route");

module.exports = new Router({ prefix: "/api" })
  .use(errorHandler)
  .use("/tags", tag.routes())
  .use(["/user", "/users"], user.routes())
  .use("/articles", article.routes());
