const Router = require("koa-router");

const users = require("./features/users/routes");

module.exports = new Router({ prefix: "/api" }).use("/users", users.routes());
