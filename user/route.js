const Router = require("koa-router");

const controller = require("./controller");

module.exports = new Router()
  .post("/", controller.registerUser)
  .post("/login", controller.login);
