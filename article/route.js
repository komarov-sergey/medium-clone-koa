const Router = require("koa-router");

const auth = require("../middleware/auth");
const controller = require("./controller");

module.exports = new Router().post("/", auth, controller.createArticle);
