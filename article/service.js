const Article = require("./model");

async function createArticle(ctx) {
  // let user;
  // let body = ctx.request.body.user;
  try {
    // user = await User.create({ ...body });
    // user.setPassword(body.password);
    // user.save();
  } catch (e) {
    ctx.status = 422;

    return {
      errors: {
        body: ["Error in registerUser()"],
      },
    };
  }

  return {
    user: user.toRegisterJSON(),
  };
}

module.exports = { createArticle };
