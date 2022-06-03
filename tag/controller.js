const service = require("./service");

async function getTags(ctx) {
  ctx.body = await service.getTag();
}

async function postTags(ctx) {
  ctx.body = await service.postTags();
}

module.exports = {
  getTags,
  postTags,
};
