const mongoose = require("mongoose");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "can't be blank"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "can't be blank"],
      match: [/\S+@\S+\.\S+/, "is invalid"],
      index: true,
    },
    bio: String,
    image: String,
    phone: Number,
    organization: String,
    role: String,
    type: String,
    status: String,
    currentCode: { type: String, default: "0000" },
    hash: String,
    salt: String,
    cookie: { type: String, default: null },
    cookieExpires: { type: Date, default: null },
    resetPasswordLink: {
      data: String,
      default: "",
    },
  },
  { timestamps: true }
);

UserSchema.methods.setPassword = function (pass) {
  this.salt = crypto.randomBytes(16).toString("hex");
  this.hash = crypto
    .pbkdf2Sync(pass, this.salt, 10000, 512, "sha512")
    .toString("hex");
};

UserSchema.methods.validPassword = function (pass) {
  const hash = crypto
    .pbkdf2Sync(pass, this.salt, 10000, 512, "sha512")
    .toString("hex");

  return this.hash === hash;
};

UserSchema.methods.generateJWT = function () {
  const today = new Date();
  const exp = new Date(today);

  // 60 days
  exp.setDate(today.getTime() + 60);
  // 5min
  // exp.setMinutes(today.getMinutes() + 15);

  return jwt.sign(
    {
      id: this._id,
      username: this.username,
      exp: parseInt(exp.getTime() / 1000),
    },
    "secret"
  );
};

UserSchema.methods.toRegisterJSON = function () {
  return {
    username: this.username,
    email: this.email,
    phone: this.phone,
    token: this.generateJWT(),
    createdAt: this.createdAt,
  };
};

UserSchema.methods.toLoginJSON = function () {
  return {
    email: this.email,
    token: this.generateJWT(),
    username: this.username,
    bio: this.email,
    image: this.image,
  };
};

module.exports = mongoose.model("User", UserSchema);
