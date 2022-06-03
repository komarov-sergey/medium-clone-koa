const Router = require("koa-router");

const tag = require("./tag/route");

module.exports = new Router({ prefix: "/api" }).use("/tags", tag.routes());
