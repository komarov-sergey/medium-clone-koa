const jwt = require("jsonwebtoken");

const User = require("../user/model");

//check koa-jwt package

module.exports = async function (ctx, next) {
  const token =
    ctx.headers.authorization &&
    ctx.headers.authorization.split(" ")[0] === "Token"
      ? ctx.headers.authorization.split(" ")[1]
      : "";

  if (!token) throw new Error("NOT_AUTHORIZED");

  if (token) {
    try {
      jwt.verify(token, "secret");
      const tokenData = jwt.decode(token);

      const user = await User.findById(tokenData.id);

      if (!user) throw new Error("Invalid token");

      ctx.state.user = user;
    } catch (e) {
      throw new Error("Invalid token");
    }
  }

  await next();
};
