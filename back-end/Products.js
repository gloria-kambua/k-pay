const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  title: String,
  photo: String,
  price: Number,
  rating: Number,
});
module.exports = mongoose.model("products", ProductSchema);