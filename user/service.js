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

    user.token = user.generateJWT();
    user.save();
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

async function getCurrentUser(ctx) {
  let user;
  try {
    // let { email, password } = ctx.request.body.user;
  } catch (e) {
    ctx.status = 422;

    return {
      errors: {
        body: ["Error in getCurrentUser()"],
      },
    };
  }

  return {
    // user: user.toLoginJSON(),
    user: ctx.state.user.toCurrentUserJSON(),
  };
}

module.exports = { registerUser, login, getCurrentUser };
