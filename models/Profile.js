const { model, Schema } = require("mongoose");

const ProfileSchema = Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  bio: { type: String, default: "Welcome to my profile!" },
  image: { type: String, default: "Hello" },
  /* bio: { type: String },
  //   owner: { type: Schema.Types.ObjectId, ref: "User" },
   */
});

module.exports = model("Profile", ProfileSchema);
