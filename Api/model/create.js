const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const CreateSchema = new Schema(
  {
    title: String,
    summary: String,
    content: String,
    cover: String,
  },
  {
    timestamps: true,
  }
);

const CreateModel = model("create", CreateSchema);

module.export = CreateModel;
