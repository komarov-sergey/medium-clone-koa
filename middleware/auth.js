const jwt = require("jsonwebtoken");

const User = require("../user/model");
const { AuthError } = require("../error");

module.exports = async function (ctx, next) {
  const token =
    ctx.headers.authorization &&
    ctx.headers.authorization.split(" ")[0] === "Token"
      ? ctx.headers.authorization.split(" ")[1]
      : "";

  if (!token) throw new AuthError("Invalid token");

  if (token) {
    try {
      jwt.verify(token, "secret");
      const tokenData = jwt.decode(token);

      const user = await User.findById(tokenData.id);

      if (!user) throw new AuthError("Invalid token");

      ctx.state.user = user;
    } catch (e) {
      throw new AuthError("Invalid token");
    }
  }

  await next();
};
