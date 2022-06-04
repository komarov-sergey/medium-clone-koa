const User = require("./model");

async function registerUser(ctx) {
  let user;
  let body = ctx.request.body.user;
  try {
    user = await User.create({ ...body });
    user.setPassword(body.password);
    user.save();
    // throw new Error("Test err");
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

async function login(ctx) {
  let user;
  let { email, password } = ctx.request.body.user;
  try {
    user = await User.findOne({ email });

    if (!user || !user.validPassword(password)) throw new Error();
    // if (!user) throw new Error();
  } catch (e) {
    ctx.status = 422;

    return {
      errors: {
        body: ["Error in login()"],
      },
    };
  }

  return {
    user: user.toLoginJSON(),
  };
}

module.exports = { registerUser, login };
