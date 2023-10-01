const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: String,
    img: String,
    price: Number,
    quantity: Number,
    category: String,
    color: String,
    size: String,
  },
  { timestamps: true, collection: "product" }
);

module.exports = mongoose.model("product", productSchema);
