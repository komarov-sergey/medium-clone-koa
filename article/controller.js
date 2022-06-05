const service = require("./service");

async function createArticle(ctx) {
  ctx.body = await service.createArticle(ctx);
}

module.exports = {
  createArticle,
};
