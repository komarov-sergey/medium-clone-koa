const Router = require("koa-router");

const auth = require("../middleware/auth");
const controller = require("./controller");

module.exports = new Router()
  .post("/", controller.registerUser)
  .post("/login", controller.login)
  .get("/", auth, controller.getCurrentUser)
  .put("/", auth, controller.updateCurrentUser);
