const Router = require("koa-router");

const controller = require("./controller");

module.exports = new Router()
  .get("/", controller.getTags)
  .post("/", controller.postTags);
