class AuthError extends Error {
  constructor(data) {
    super(data.description);
    this.code = data.code || "UNAUTHORIZED_ERROR";
    this.status = 401;
  }
}

module.exports = {
  AuthError,
};
