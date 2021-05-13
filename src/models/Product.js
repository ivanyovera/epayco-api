import { Schema, model } from "mongoose";

const productSchema = new Schema(
  {
    document: String,
    name: String,
    email: String,
    cellphone: Number,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Product", productSchema);
