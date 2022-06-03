const Koa = require("koa");
mongoose = require("mongoose");
const koaBody = require("koa-body");

const api = require("./routes");

const app = new Koa();

mongoose.connect("mongodb://localhost/mediumclone");
mongoose.set("debug", true);

require("./tag/model");

app.use(koaBody()).use(api.routes()).listen(3000);
