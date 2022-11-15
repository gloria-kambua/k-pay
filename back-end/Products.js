const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  title: String,
  imageURL: String,
  price: Number,
  rating: Number,
});
console.log(`Inside product.js`)
module.exports = mongoose.model("products", ProductSchema);