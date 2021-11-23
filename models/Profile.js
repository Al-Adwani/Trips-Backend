const { model, Schema } = require("mongoose");

const ProfileSchema = Schema({
  image: { type: Schema.Types.ObjectId, ref: "User" },

  bio: { type: String },
  //   owner: { type: Schema.Types.ObjectId, ref: "User" },
  numberOfTrips: {
    type: Number,
    required: true,
    min: 0,
  },
});

module.exports = model("Profile", ProfileSchema);
