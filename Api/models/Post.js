const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const PostSchema = new Schema(
  {
    title: String,
    summary: String,
    content: String,
    cover: String,
    author:{type:Schema.Types.ObjectID, ref:'User'}
  },
  {
    timestamps: true,
  }
);

const postModel = model("Post", PostSchema);

module.exports = postModel;
