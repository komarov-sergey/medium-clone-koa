const service = require("./service");

async function createArticle(ctx) {
  ctx.body = await service.createArticle(ctx);
}

async function getArticle(ctx) {
  ctx.body = await service.getArticle(ctx);
}

module.exports = {
  createArticle,
  getArticle,
};
