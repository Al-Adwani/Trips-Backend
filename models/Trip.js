const { model, Schema } = require("mongoose");
const mongooseSlugPlugin = require("mongoose-slug-plugin");

const TripSchema = Schema({
  title: { type: String, required: true },
  description: { type: String },
  image: { type: String },
  owner: { type: Schema.Types.ObjectId, ref: "User" },
});

// REVIEW: This line is for the slug, you dont have a slug, remove it
TripSchema.plugin(mongooseSlugPlugin, { tmpl: "<%=title%>" });

module.exports = model("Trip", TripSchema);
