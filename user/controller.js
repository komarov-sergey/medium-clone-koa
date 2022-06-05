const service = require("./service");

async function registerUser(ctx) {
  ctx.body = await service.registerUser(ctx);
}

async function login(ctx) {
  ctx.body = await service.login(ctx);
}

async function getCurrentUser(ctx) {
  ctx.body = await service.getCurrentUser(ctx);
}

async function updateCurrentUser(ctx) {
  ctx.body = await service.updateCurrentUser(ctx);
}

module.exports = {
  registerUser,
  login,
  getCurrentUser,
  updateCurrentUser,
};
