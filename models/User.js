const { model, Schema } = require("mongoose");

const UserSchema = Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
});

module.exports = model("User", UserSchema);
